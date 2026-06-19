import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Map service IDs to readable titles
const SERVICE_NAMES: Record<string, string> = {
  "regular-clean": "Regular Clean",
  "deep-clean": "Deep Clean",
  "end-of-tenancy": "End of Tenancy Clean",
  "office-clean": "Office Clean",
  "airbnb-clean": "Airbnb Clean"
}

// Map frequency IDs to readable titles
const FREQUENCY_NAMES: Record<string, string> = {
  "one-off": "One-off Clean",
  "daily": "Daily",
  "weekly": "Weekly",
  "fortnightly": "Fortnightly",
  "monthly": "Monthly"
}

// Map extra IDs to readable titles
const EXTRA_NAMES: Record<string, string> = {
  "oven": "Oven Cleaning",
  "fridge": "Fridge Cleaning",
  "windows": "Inside Windows",
  "carpet": "Carpet Cleaning"
}

// Map history options
const HISTORY_NAMES: Record<string, string> = {
  "within-month": "Within the last month",
  "1-3-months": "1 to 3 months ago",
  "3-6-months": "3 to 6 months ago",
  "6-plus-months": "More than 6 months ago",
  "never": "Never professionally cleaned / Unknown"
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Extract parameters
    const {
      selectedService,
      selectedFrequency,
      bedrooms,
      bathrooms,
      livingRooms,
      propertySize,
      adults,
      children,
      hasPets,
      petDetails,
      lastCleaned,
      isHeavilySoiled,
      selectedExtras,
      specialRequests,
      uploadedPhotos,
      preferredDate,
      preferredTime,
      clientName,
      clientPhone,
      clientEmail,
      clientAddress
    } = body

    // 1. Validation check for mandatory wizard details
    if (!clientName || !clientPhone || !clientEmail || !clientAddress || !preferredDate || !selectedService) {
      return NextResponse.json(
        { error: "Mandatory client details (name, email, phone, address, service, preferred date) are required." },
        { status: 400 }
      )
    }

    // 2. Prepare Direct Email Attachments from Base64 uploaded photos
    const emailAttachments: any[] = []

    if (uploadedPhotos && Array.isArray(uploadedPhotos)) {
      uploadedPhotos.forEach((photo, index) => {
        if (photo.preview && photo.preview.startsWith("data:")) {
          // Parse dataURL format: data:image/jpeg;base64,/9j/4AAQSk...
          const match = photo.preview.match(/^data:(image\/[a-zA-Z+.-]+);base64,(.+)$/)
          if (match) {
            const contentType = match[1]
            const base64Data = match[2]
            const fileExtension = contentType.split("/")[1] || "jpg"
            const cid = `photo_${index}`

            emailAttachments.push({
              filename: photo.name || `room-photo-${index + 1}.${fileExtension}`,
              content: Buffer.from(base64Data, "base64"),
              contentType: contentType,
              cid: cid // Content ID for inline HTML display
            })
          }
        }
      })
    }

    // 3. Configure SMTP Transporter
    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const secure = process.env.SMTP_SECURE === "true"

    if (!user || !pass) {
      console.warn("WARNING: SMTP credentials not set. Logging booking wizard details:")
      console.log("[Booking Wizard Submission Detail]", JSON.stringify(body, null, 2))
      console.log(`Successfully parsed ${emailAttachments.length} attachments.`)

      return NextResponse.json({
        success: true,
        info: "Mock mode: SMTP not configured. Submission logged in backend console."
      })
    }

    const transporter = nodemailer.createTransport({
      host: host || "smtp.gmail.com",
      port: parseInt(port || "587"),
      secure: secure,
      auth: {
        user: user,
        pass: pass
      }
    })

    // 4. Construct human-readable values
    const readableService = SERVICE_NAMES[selectedService] || selectedService
    const readableFrequency = FREQUENCY_NAMES[selectedFrequency] || selectedFrequency
    const readableHistory = HISTORY_NAMES[lastCleaned] || lastCleaned

    const extrasList = (selectedExtras || [])
      .map((id: string) => EXTRA_NAMES[id] || id)
      .join(", ") || "None selected"

    const timeSlot = preferredTime === "morning"
      ? "Morning (8:00 AM - 12:00 PM)"
      : preferredTime === "afternoon"
        ? "Afternoon (12:00 PM - 4:00 PM)"
        : "Late Afternoon (4:00 PM - 6:00 PM)"

    // 5. Build rich HTML content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
        <div style="background-color: #0d9488; color: #ffffff; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 800; tracking-tight: -0.025em;">
            New Online Booking Request
          </h1>
          <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">
            Refuse Shine Cleaning LTD Website Submissions
          </p>
        </div>

        <!-- Section 1: Customer Contact Details -->
        <h3 style="color: #0d9488; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-top: 0;">
          Customer Contact & Appointment
        </h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; width: 35%; font-weight: bold; color: #475569;">Name:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${clientName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;"><a href="tel:${clientPhone}" style="color: #0d9488; text-decoration: none;">${clientPhone}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;"><a href="mailto:${clientEmail}" style="color: #0d9488; text-decoration: none;">${clientEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Service Address:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 500; font-style: italic;">${clientAddress}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Preferred Date:</td>
            <td style="padding: 6px 0; color: #0d9488; font-weight: bold;">${preferredDate}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Preferred Time:</td>
            <td style="padding: 6px 0; color: #0d9488; font-weight: bold;">${timeSlot}</td>
          </tr>
        </table>

        <!-- Section 2: Cleaning Plan Details -->
        <h3 style="color: #0d9488; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px;">
          Cleaning Plan Configurator
        </h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; width: 35%; font-weight: bold; color: #475569;">Cleaning Service:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${readableService}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Frequency:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${readableFrequency}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Property Size:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${propertySize || "Not specified (Optional)"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Bedrooms:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${bedrooms}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Bathrooms:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${bathrooms}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Living Rooms:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${livingRooms}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Optional Extras:</td>
            <td style="padding: 6px 0; color: #ea580c; font-weight: bold;">${extrasList}</td>
          </tr>
        </table>

        <!-- Section 3: Occupants & History -->
        <h3 style="color: #0d9488; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px;">
          Property Occupants & History
        </h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; width: 35%; font-weight: bold; color: #475569;">Adult Occupants:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${adults}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Child Occupants:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${children}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Has Pets:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${hasPets === "yes" ? "Yes" : "No"}</td>
          </tr>
          ${hasPets === "yes" && petDetails
        ? `<tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">Pet Details:</td>
                  <td style="padding: 6px 0; color: #0f172a; font-style: italic;">${petDetails}</td>
                </tr>`
        : ""
      }
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Last Cleaned:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 500;">${readableHistory}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #475569;">Heavily Soiled:</td>
            <td style="padding: 6px 0; color: ${isHeavilySoiled === "yes" ? "#dc2626" : "#0f172a"
      }; font-weight: bold;">
              ${isHeavilySoiled === "yes" ? "Yes (Heavily Soiled)" : "No"}
            </td>
          </tr>
        </table>

        <!-- Section 4: Special Instructions -->
        ${specialRequests
        ? `
            <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #ea580c; border-radius: 8px;">
              <p style="margin: 0 0 8px 0; font-weight: bold; color: #1e293b; font-size: 14px;">Special Requests / Customer Notes:</p>
              <p style="margin: 0; color: #475569; white-space: pre-wrap; font-size: 14px; font-style: italic;">"${specialRequests}"</p>
            </div>
            `
        : ""
      }

        <!-- Section 5: Uploaded Photos (Direct Inline Previews) -->
        ${emailAttachments.length > 0
        ? `
            <h3 style="color: #0d9488; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-top: 28px;">
              Uploaded Room Photos (${emailAttachments.length})
            </h3>
            <p style="font-size: 13px; color: #64748b; margin-top: 4px; margin-bottom: 12px;">
              These photos are attached directly to this email and displayed inline below:
            </p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
              <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
                ${emailAttachments
          .map(
            (p) => `
                  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; background-color: #ffffff; text-align: center; margin-bottom: 16px;">
                    <div style="font-size: 14px; font-weight: bold; color: #334155; margin-bottom: 8px; text-align: left;">${p.filename}</div>
                    <img src="cid:${p.cid}" alt="${p.filename}" style="max-width: 100%; max-height: 300px; border-radius: 6px; border: 1px solid #e2e8f0; display: block; margin: 0 auto;" />
                  </div>
                `
          )
          .join("")}
              </div>
            </div>
            `
        : ""
      }

        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 32px 0 24px 0;" />
        <p style="font-size: 11px; color: #94a3b8; text-align: center; margin-bottom: 0;">
          This booking request was submitted automatically via the website wizard for Refuse Shine Cleaning LTD.
        </p>
      </div>
    `

    // 6. Send Mail
    const mailOptions = {
      from: `"${clientName}" <${user}>`,
      to: "info@refuseshinecleaningltd.co.uk",
      replyTo: clientEmail,
      subject: `[Booking Request] ${readableService} - ${clientName}`,
      text: `
        New Booking Request from ${clientName}

        Contact Details:
        - Phone: ${clientPhone}
        - Email: ${clientEmail}
        - Address: ${clientAddress}
        - Preferred Date: ${preferredDate}
        - Time Slot: ${timeSlot}

        Cleaning Specifications:
        - Plan: ${readableService} (${readableFrequency})
        - Rooms: ${bedrooms} Bed | ${bathrooms} Bath | ${livingRooms} Living
        - Property Size: ${propertySize || "Not specified"}
        - Extras: ${extrasList}

        Occupants & History:
        - Adults: ${adults} | Children: ${children}
        - Pets: ${hasPets === "yes" ? `Yes (${petDetails})` : "No"}
        - Last Cleaned: ${readableHistory}
        - Heavily Soiled: ${isHeavilySoiled === "yes" ? "Yes" : "No"}

        Special Requests:
        ${specialRequests || "None"}

        Images:
        ${emailAttachments.map((p) => `- ${p.filename} (attached)`).join("\n")}
      `,
      html: emailHtml,
      attachments: emailAttachments // Standard downloadable & inline attachments
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Booking Mail Submission Error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to submit booking inquiry." },
      { status: 500 }
    )
  }
}
