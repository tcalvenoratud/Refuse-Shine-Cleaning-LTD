import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // 1. Validate inputs
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, phone, service, message) are required." },
        { status: 400 }
      )
    }

    // 2. Extract configuration
    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const secure = process.env.SMTP_SECURE === "true"

    // If SMTP details are not configured, log details and return success for development/testing
    if (!user || !pass) {
      console.warn("WARNING: SMTP credentials not set. Logging contact form submission instead:")
      console.log(`[Contact Submission]
From: ${name} (${email})
Phone: ${phone}
Service: ${service}
Message: ${message}`)

      // We simulate a successful submission but let the response head know it was mocked
      return NextResponse.json({
        success: true,
        info: "Mock mode: SMTP not configured. Check terminal logs."
      })
    }

    // 3. Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: host || "smtp.gmail.com",
      port: parseInt(port || "587"),
      secure: secure,
      auth: {
        user: user,
        pass: pass
      }
    })

    // 4. Set up mail content
    const mailOptions = {
      from: `"${name}" <${user}>`, // Use SMTP sender email to satisfy modern SPF/DMARC checks
      to: "info@refuseshinecleaningltd.co.uk",
      replyTo: email, // Set Reply-To to the user's email so the client can reply directly
      subject: `[Contact Form] ${service} - Refuse Shine Cleaning`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Needed: ${service}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 12px; margin-top: 0; font-size: 24px; font-weight: 800;">
            New Contact Inquiry
          </h2>
          <div style="margin-top: 16px;">
            <p style="margin: 8px 0;"><strong style="color: #475569;">Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #475569;">Email:</strong> <a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0;"><strong style="color: #475569;">Phone:</strong> <a href="tel:${phone}" style="color: #0d9488; text-decoration: none;">${phone}</a></p>
            <p style="margin: 8px 0;"><strong style="color: #475569;">Requested Service:</strong> ${service}</p>
          </div>
          <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #0d9488; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #334155; font-size: 15px;">Message Details:</p>
            <p style="margin: 0; color: #475569; white-space: pre-wrap; font-size: 15px; font-style: italic;">"${message}"</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-bottom: 0;">
            This query was submitted via the contact form on Refuse Shine Cleaning LTD.
          </p>
        </div>
      `
    }

    // 5. Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Nodemailer Error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to process email submission." },
      { status: 500 }
    )
  }
}
