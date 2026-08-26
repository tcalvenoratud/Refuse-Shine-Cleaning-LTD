import { Home, Sparkles, Utensils, Bath, Key, Truck, Calendar, Hammer, Layers, Flame, LayoutGrid, Trash2, LucideIcon } from "lucide-react";

export interface ServiceStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  altText: string;
  introTitle: string;
  introContent: string;
  includedTitle: string;
  includedIntro: string;
  includedList: string[];
  forTitle: string;
  forIntro: string;
  forList: string[];
  processTitle: string;
  processSteps: ServiceStep[];
  whyChoose: { title: string; description: string }[];
  areasContent: string;
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "regular-clean",
    slug: "regular-house-cleaning",
    icon: Home,

    title: "Regular House Cleaning",

    tagline:
      "Reliable regular house cleaning and domestic cleaning services in Willenhall, Walsall and surrounding West Midlands areas, with flexible weekly or fortnightly visits tailored to your home.",

    metaTitle:
      "Regular House Cleaning in Willenhall & West Midlands | Refuse Shine",

    metaDescription:
      "Professional regular house cleaning and domestic cleaning services in Willenhall, Walsall and the West Midlands. Weekly or fortnightly visits from vetted local cleaners. Get a free quote.",

    image: "/assets/services/regular-house-cleaning.png",

    altText:
      "Professional cleaner providing regular house cleaning in a tidy West Midlands home",

    introTitle:
      "Reliable Regular House Cleaning & Domestic Cleaning Services",

    introContent:
      "Refuse Shine Cleaning LTD provides professional regular house cleaning and domestic cleaning services for homeowners across Willenhall, Walsall and surrounding West Midlands areas. Our service is designed for busy households that want a consistently clean, fresh and comfortable home without spending their evenings and weekends on routine chores. We offer flexible weekly or fortnightly visits, with cleaning tailored to your property, priorities and preferred schedule. Our trained and vetted cleaners focus on the everyday tasks that keep your home looking its best, including dusting accessible surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning kitchen surfaces and maintaining bathrooms. If you are looking for reliable house cleaning services from a local team, we provide a practical recurring cleaning solution with consistent standards and friendly service.",

    includedTitle:
      "What Is Included in Our Regular House Cleaning Service",

    includedIntro:
      "Our recurring domestic cleaning checklist covers the essential household tasks needed to maintain a clean, tidy and hygienic home between visits:",

    includedList: [
      "Dusting and wiping furniture, shelves, ornaments and accessible household surfaces",
      "Vacuuming carpets, rugs, stairs and accessible hard-floor areas",
      "Mopping hard floors using suitable cleaning products for a fresh finish",
      "Cleaning kitchen worktops, hobs, sink areas and accessible appliance surfaces",
      "Cleaning and sanitising bathrooms, including toilets, basins, baths and shower fixtures",
      "Emptying household waste bins, replacing bags and completing general light tidying"
    ],

    forTitle:
      "Who Is Our Regular House Cleaning Service For?",

    forIntro:
      "Our local house cleaning service is ideal for households that want dependable recurring cleaning without managing every chore themselves:",

    forList: [
      "Busy professionals who want to reclaim evenings and weekends",
      "Families looking for consistent domestic cleaning around children and everyday routines",
      "Elderly residents who need help with regular household cleaning tasks",
      "Pet owners who want regular help managing everyday dust, pet hair and household dirt"
    ],

    processTitle:
      "Our Regular House Cleaning Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Discuss Your Cleaning Needs",
        description:
          "We discuss your home, preferred weekly or fortnightly schedule, cleaning priorities and any specific areas you want us to focus on."
      },
      {
        stepNumber: "02",
        title: "Complete Your Scheduled Clean",
        description:
          "Your assigned cleaner arrives at the agreed time and follows your personalised cleaning checklist to maintain your home to a consistent standard."
      },
      {
        stepNumber: "03",
        title: "Maintain Your Cleaning Routine",
        description:
          "We continue with dependable recurring visits, helping you maintain a consistently clean home while adjusting priorities when your household needs change."
      }
    ],

    whyChoose: [
      {
        title: "Reliable Vetted Local Cleaners",
        description:
          "Our cleaners are trained, background checked and DBS vetted, giving local households greater confidence when welcoming a professional into their home."
      },
      {
        title: "Flexible Weekly or Fortnightly Cleaning",
        description:
          "Choose a recurring cleaning schedule that works around your household. We offer weekly and fortnightly visits with flexible cleaning priorities."
      },
      {
        title: "Consistent Cleaning Standards",
        description:
          "We work from a clear cleaning checklist so your regular house cleaning service remains consistent from visit to visit."
      }
    ],

    areasContent:
      "We provide regular house cleaning and domestic cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands communities. If you are searching for a local house cleaning service in your area, our team can arrange a recurring cleaning schedule based on your home and requirements.",

    faqs: [
      {
        question: "How often can I book regular house cleaning?",
        answer:
          "You can book our regular house cleaning service weekly or fortnightly. We can discuss your household routine, property size and cleaning priorities to help you choose a suitable schedule."
      },
      {
        question: "Do you offer weekly and fortnightly domestic cleaning?",
        answer:
          "Yes. We provide both weekly and fortnightly domestic cleaning services. Weekly cleaning is useful for busy households, families and homes with pets, while fortnightly cleaning can provide reliable ongoing maintenance."
      },
      {
        question: "What is included in regular house cleaning?",
        answer:
          "Our regular service includes dusting accessible surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning kitchen surfaces, maintaining bathrooms, emptying household bins and light general tidying."
      },
      {
        question: "Do you provide house cleaning services near me?",
        answer:
          "We provide local house cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands areas. Contact us to confirm availability in your specific area."
      },
      {
        question: "Can I request the same cleaner for every visit?",
        answer:
          "We always aim to provide the same regular cleaner where availability allows. This helps your cleaner become familiar with your home, cleaning checklist and preferences."
      },
      {
        question: "Can I change my regular cleaning schedule?",
        answer:
          "Yes. If you need to change your cleaning day, skip a visit or temporarily pause your recurring service, contact us as early as possible and we will do our best to accommodate your requirements."
      },
      {
        question: "Do you bring your own cleaning products?",
        answer:
          "We bring suitable professional cleaning products and microfibre cloths for regular domestic cleaning. If you prefer specific products to be used on certain surfaces, please let our team know before the visit."
      }
    ]
  },
  {
    id: "deep-clean",
    slug: "deep-cleaning",
    icon: Sparkles,

    title: "Deep Cleaning Services",

    tagline:
      "Professional deep cleaning services for homes and businesses in Willenhall, Walsall and surrounding West Midlands areas, providing a detailed top-to-bottom clean for a fresher, healthier space.",

    metaTitle:
      "Deep Cleaning Services in Willenhall & West Midlands | Refuse Shine",

    metaDescription:
      "Professional deep cleaning services in Willenhall, Walsall and the West Midlands. Detailed house deep cleaning from vetted local cleaners. Get a free quote.",

    image: "/assets/services/deep-cleaning.png",

    altText:
      "Professional cleaner providing deep cleaning in a West Midlands home",

    introTitle:
      "Professional Deep Cleaning for a Fresher, Healthier Home",

    introContent:
      "Refuse Shine Cleaning LTD provides professional deep cleaning services for homes and businesses across Willenhall, Walsall and surrounding West Midlands areas. Unlike regular cleaning, a deep clean focuses on built-up dust, dirt, grease, limescale and hard-to-reach areas that may be missed during routine cleaning. Our detailed house deep cleaning service works systematically through each room, including kitchens, bathrooms, living areas, woodwork and accessible areas around furniture. Whether you need a one-off deep clean before hosting guests, a seasonal home refresh, cleaning after renovations, or a thorough reset before moving into a property, our trained and vetted cleaners use professional equipment and suitable cleaning products to deliver a detailed and consistent clean.",

    includedTitle:
      "What Is Included in Our Deep Cleaning Service",

    includedIntro:
      "Our professional deep cleaning service follows a detailed checklist designed to tackle areas that are often missed during standard household cleaning:",

    includedList: [
      "Thorough cleaning and descaling of bathrooms, shower screens, wall tiles and fixtures",
      "Deep cleaning and degreasing of kitchen worktops, splashbacks, sink areas and accessible cabinet surfaces",
      "Removal of built-up dust and dirt from skirting boards, doors, door frames and light switches",
      "Vacuuming under and behind accessible furniture, rugs and detailed floor cleaning",
      "Dusting high-level areas, light fittings, air vents, picture frames and accessible surfaces",
      "Cleaning internal windows, sills and window frames to remove accumulated dirt and dust"
    ],

    forTitle:
      "Who Is Our Deep Cleaning Service For?",

    forIntro:
      "Our deep house cleaning service is ideal for homeowners, families and property occupants who need a more detailed clean than regular household maintenance:",

    forList: [
      "Homeowners planning a thorough seasonal or spring cleaning reset",
      "Families preparing their home for guests, parties or special occasions",
      "New homeowners wanting a detailed clean before moving into a property",
      "Residents needing a professional deep clean after renovations or minor building work"
    ],

    processTitle:
      "Our Professional Deep Cleaning Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Assess Your Cleaning Needs",
        description:
          "We discuss your property, identify areas requiring extra attention and agree on the cleaning priorities for your deep clean."
      },
      {
        stepNumber: "02",
        title: "Complete the Deep Clean",
        description:
          "Our team works systematically from high-level areas down to floors, tackling built-up dust, dirt, grease and grime throughout the property."
      },
      {
        stepNumber: "03",
        title: "Final Quality Check",
        description:
          "We review the completed work against our detailed cleaning checklist to make sure the agreed areas have received thorough attention."
      }
    ],

    whyChoose: [
      {
        title: "Professional Deep Cleaning Team",
        description:
          "Our trained and vetted cleaners use professional equipment and detailed cleaning methods to tackle built-up dirt, dust, grease and grime."
      },
      {
        title: "Detailed Room-by-Room Cleaning",
        description:
          "We focus on the areas that are commonly missed during regular cleaning, including skirting boards, doors, frames, vents and accessible areas behind furniture."
      },
      {
        title: "A Fresher, More Hygienic Space",
        description:
          "Our thorough deep cleaning helps refresh your property and create a noticeably cleaner and more comfortable environment for your household, guests or staff."
      }
    ],

    areasContent:
      "We provide professional deep cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands areas. If you are looking for a local deep cleaning service for your home or business, our team can arrange a detailed clean based on your property and requirements.",

    faqs: [
      {
        question: "What is included in a deep cleaning service?",
        answer:
          "Our deep cleaning service is a thorough top-to-bottom clean covering bathrooms, kitchen surfaces, skirting boards, doors, door frames, light switches, internal windows, accessible areas behind furniture and detailed floor cleaning."
      },
      {
        question: "How long does a deep cleaning service take?",
        answer:
          "The time required depends on the size and condition of the property and the amount of built-up dirt. During your booking, we can discuss the property and cleaning requirements so the appropriate time and team size can be arranged."
      },
      {
        question: "Do you offer one-off deep cleaning?",
        answer:
          "Yes. Our deep cleaning service is commonly booked as a one-off clean for seasonal cleaning, preparing for guests, moving into a property or refreshing a home after renovation work."
      },
      {
        question: "Do you provide deep cleaning services near me?",
        answer:
          "We provide deep cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands areas. Contact us to confirm availability in your specific location."
      },
      {
        question: "Do you clean behind and under furniture?",
        answer:
          "Yes, where furniture can be moved safely without risking damage to the property or flooring, we can clean accessible areas behind and underneath furniture as part of the deep cleaning service."
      },
      {
        question: "Do you bring your own cleaning products and equipment?",
        answer:
          "Yes. We bring professional cleaning products, suitable equipment and fresh microfibre cloths required for the agreed deep cleaning service. If you have specific product preferences, please let us know before the appointment."
      },
      {
        question: "What is the difference between regular and deep cleaning?",
        answer:
          "Regular house cleaning is designed to maintain everyday cleanliness through recurring visits. Deep cleaning is a more intensive service that focuses on built-up dirt, grime, limescale and detailed areas that may not be covered during routine cleaning."
      }
    ]
  },
  {
    id: "kitchen-deep-clean",
    slug: "kitchen-deep-cleaning",
    icon: Utensils,

    title: "Kitchen Deep Cleaning",

    tagline:
      "Professional kitchen deep cleaning services in Willenhall, Walsall and surrounding West Midlands areas, removing built-up grease, food residue and grime for a cleaner, fresher kitchen.",

    metaTitle:
      "Kitchen Deep Cleaning in Willenhall & West Midlands | Refuse Shine",

    metaDescription:
      "Professional kitchen deep cleaning services in Willenhall, Walsall and the West Midlands. Remove built-up grease, grime and food residue with a detailed kitchen deep clean. Get a free quote.",

    image: "/assets/services/kitchen-deep-cleaning.png",

    altText:
      "Professional cleaner providing kitchen deep cleaning in a clean domestic kitchen",

    introTitle:
      "Professional Kitchen Deep Cleaning Services",

    introContent:
      "Refuse Shine Cleaning LTD provides professional kitchen deep cleaning services for households across Willenhall, Walsall and surrounding West Midlands areas. Kitchens can quickly develop built-up grease, food residue, limescale and grime around worktops, splashbacks, cupboards, sinks and cooking areas that are difficult to remove during routine cleaning. Our kitchen deep cleaning service provides a detailed clean of the areas that need extra attention, helping restore a fresher and more hygienic cooking environment. We clean and degrease kitchen surfaces, splashbacks, sinks, taps, accessible cupboard interiors, extractor hood exteriors and kitchen floors. Whether you need a one-off kitchen deep clean after heavy use, a seasonal refresh or professional cleaning before a property inspection, our trained team works through a detailed checklist to deliver a thorough and consistent result.",

    includedTitle:
      "What Is Included in Our Kitchen Deep Cleaning Service",

    includedIntro:
      "Our kitchen deep clean focuses on areas that commonly collect grease, food residue, dust and grime during everyday cooking:",

    includedList: [
      "Deep cleaning and degreasing of kitchen worktops, counters and tiled splashbacks",
      "Scrubbing and descaling sinks, taps, drains and accessible metal fittings",
      "Cleaning cupboard exteriors and wiping internal drawers and shelving when emptied",
      "Detailed cleaning of cooker hood exteriors, accessible filters and extractor casings",
      "Sanitising high-touch kitchen surfaces, food preparation areas and dining countertops",
      "Sweeping, sanitising and deep mopping kitchen floors and tiles"
    ],

    forTitle:
      "Who Is Our Kitchen Deep Cleaning Service For?",

    forIntro:
      "Our professional kitchen cleaning service is suitable for households and properties that need a more detailed clean than everyday kitchen maintenance:",

    forList: [
      "Households that cook frequently and need a thorough grease and grime reset",
      "Families wanting cleaner and more hygienic food preparation areas",
      "Landlords preparing a kitchen for new tenants or property inspections",
      "Tenants who need a detailed kitchen clean before moving out or handing back a property"
    ],

    processTitle:
      "Our Kitchen Deep Cleaning Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Inspect Your Kitchen",
        description:
          "We assess the condition of your kitchen and identify areas with built-up grease, food residue, limescale and dirt that require detailed attention."
      },
      {
        stepNumber: "02",
        title: "Deep Clean & Degrease",
        description:
          "Our team works through the kitchen cleaning checklist, degreasing surfaces, cleaning splashbacks, cupboards, sinks and accessible extractor areas."
      },
      {
        stepNumber: "03",
        title: "Sanitise & Final Check",
        description:
          "We sanitise suitable food preparation surfaces, clean the kitchen floor and complete a final check to make sure the agreed areas have received thorough attention."
      }
    ],

    whyChoose: [
      {
        title: "Professional Kitchen Cleaning",
        description:
          "Our trained cleaners use suitable professional cleaning products and detailed cleaning methods to tackle everyday grease, grime and food residue."
      },
      {
        title: "Detailed Surface & Appliance Cleaning",
        description:
          "We focus on worktops, splashbacks, sinks, cupboards, cooker hood exteriors and other accessible kitchen surfaces that are often missed during routine cleaning."
      },
      {
        title: "Cleaner Food Preparation Areas",
        description:
          "We pay close attention to high-touch and food preparation areas to help create a fresher, cleaner and more hygienic kitchen environment."
      }
    ],

    areasContent:
      "We provide kitchen deep cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands areas. If you are looking for a professional kitchen cleaning service in your local area, contact our team to discuss your kitchen and cleaning requirements.",

    faqs: [
      {
        question: "What does kitchen deep cleaning include?",
        answer:
          "Our kitchen deep cleaning service includes degreasing worktops and splashbacks, cleaning and descaling sinks and taps, cleaning cupboard exteriors and accessible interiors, detailing cooker hood exteriors, sanitising food preparation surfaces and deep cleaning kitchen floors."
      },
      {
        question: "Do you remove built-up kitchen grease?",
        answer:
          "Yes. Our kitchen deep clean focuses on removing built-up grease, food residue and grime from suitable kitchen surfaces such as splashbacks, worktops, cupboard surfaces and cooker hood exteriors."
      },
      {
        question: "Do you clean inside kitchen cupboards?",
        answer:
          "Yes. We can clean inside kitchen cupboards, drawers and shelving when they are completely emptied before our team begins the cleaning."
      },
      {
        question: "Do you clean kitchen splashbacks and tiles?",
        answer:
          "Yes. We clean and degrease kitchen splashbacks and suitable tiled areas, helping remove accumulated grease, food residue and everyday grime."
      },
      {
        question: "Can oven cleaning be added to a kitchen deep clean?",
        answer:
          "Yes. A full internal oven clean can be requested as an additional service. Our standard kitchen deep cleaning service focuses on the agreed kitchen surfaces and accessible appliance exteriors."
      },
      {
        question: "How long does a kitchen deep cleaning service take?",
        answer:
          "The time required depends on the size of the kitchen and the level of grease and built-up dirt. We can provide a more accurate estimate after discussing your kitchen and cleaning requirements."
      },
      {
        question: "Do you provide professional kitchen cleaning near me?",
        answer:
          "We provide professional kitchen cleaning services across Willenhall, Walsall and surrounding West Midlands areas. Contact us with your location to confirm whether our team covers your area."
      }
    ]
  },
  {
    id: "bathroom-clean",
    slug: "bathroom-cleaning",
    icon: Bath,

    title: "Bathroom Cleaning",

    tagline:
      "Professional bathroom cleaning services in Willenhall, Walsall and surrounding West Midlands areas, removing limescale, soap scum and everyday bathroom grime for a fresh, hygienic finish.",

    metaTitle:
      "Bathroom Cleaning Services in Willenhall & West Midlands | Refuse Shine",

    metaDescription:
      "Professional bathroom cleaning services in Willenhall, Walsall & the West Midlands. Detailed bathroom deep cleaning, limescale removal and sanitisation. Get a free quote.",

    image: "/assets/services/bathroom-cleaning.png",

    altText:
      "Professional bathroom cleaning service leaving a shower cubicle and chrome fixtures clean and sanitised",

    introTitle:
      "Professional Bathroom Cleaning Services",

    introContent:
      "Refuse Shine Cleaning LTD provides professional bathroom cleaning services for homes across Willenhall, Walsall and surrounding West Midlands areas. Bathrooms can quickly develop limescale, soap scum, water marks and moisture-related grime, particularly around shower screens, taps, tiles, toilets and other high-use surfaces. Our bathroom cleaning service provides detailed scrubbing, descaling and sanitisation to refresh these areas and maintain a cleaner, more hygienic bathroom. We clean shower enclosures, glass screens, baths, washbasins, toilets, wall tiles, accessible grout and chrome fittings, paying close attention to areas that are often missed during routine cleaning. Whether you need regular bathroom maintenance or a more detailed bathroom deep cleaning service, our trained local team works through a clear cleaning checklist to deliver a fresh and consistent finish.",

    includedTitle:
      "What Is Included in Our Bathroom Cleaning Service",

    includedIntro:
      "Our detailed bathroom cleaning checklist focuses on the surfaces and fixtures that commonly collect limescale, soap scum, water marks and everyday grime:",

    includedList: [
      "Thorough scrubbing and sanitisation of toilet bowls, seats and flush handles",
      "Cleaning and scrubbing basins, bathtubs, shower trays and other bathroom surfaces",
      "Descaling shower heads, taps and suitable chrome fittings",
      "Detailed cleaning of bathroom wall tiles and accessible grout lines",
      "Polishing mirrors and glass shower screens for a clean, streak-free finish",
      "Wiping bathroom cabinets and sanitising suitable floor surfaces"
    ],

    forTitle:
      "Who Is Our Bathroom Cleaning Service For?",

    forIntro:
      "Our professional bathroom cleaning service is suitable for households that want a cleaner, fresher and more hygienic bathroom without spending time tackling stubborn buildup themselves:",

    forList: [
      "Homeowners dealing with stubborn limescale, soap scum and water marks",
      "Families wanting cleaner and more hygienic everyday washrooms",
      "Property owners looking to refresh bathroom tiles, fixtures and fittings",
      "Busy households and individuals who need help maintaining bathroom surfaces and shower areas"
    ],

    processTitle:
      "Our Professional Bathroom Cleaning Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Assess & Pre-Treat",
        description:
          "We assess the bathroom and identify areas affected by limescale, soap scum, water marks and built-up grime before applying suitable cleaning treatments."
      },
      {
        stepNumber: "02",
        title: "Detailed Bathroom Cleaning",
        description:
          "We thoroughly clean toilets, shower areas, baths, basins, tiles, fittings and other agreed surfaces, focusing on areas that require extra attention."
      },
      {
        stepNumber: "03",
        title: "Sanitise & Final Finish",
        description:
          "We sanitise suitable high-touch surfaces, polish mirrors and shower screens, and complete the bathroom floor cleaning before carrying out a final quality check."
      }
    ],

    whyChoose: [
      {
        title: "Professional Bathroom Cleaning",
        description:
          "Our trained cleaners use suitable professional cleaning products and detailed methods to tackle everyday bathroom grime, soap scum and limescale."
      },
      {
        title: "Detailed Tile & Fixture Cleaning",
        description:
          "We pay close attention to tiles, accessible grout, shower screens, taps, basins and other areas where moisture-related residue can build up."
      },
      {
        title: "Fresh & Hygienic Bathroom Finish",
        description:
          "We sanitise suitable high-touch surfaces and leave your bathroom cleaner, fresher and more comfortable for everyday use."
      }
    ],

    areasContent:
      "We provide professional bathroom cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands areas. If you are looking for a local bathroom cleaning service, our team can discuss your requirements and confirm availability in your area.",

    faqs: [
      {
        question: "Does bathroom cleaning include limescale removal?",
        answer:
          "Yes. Our bathroom cleaning service includes suitable descaling of limescale buildup on taps, shower heads, basins, shower screens and other appropriate bathroom surfaces."
      },
      {
        question: "Do you provide bathroom deep cleaning?",
        answer:
          "Yes. We can provide a more detailed bathroom deep cleaning service when your bathroom needs extra attention to limescale, soap scum, tiles, fixtures, shower areas and built-up grime."
      },
      {
        question: "Do you clean shower screens?",
        answer:
          "Yes. We clean and polish shower screens to help remove soap scum, water marks and everyday buildup, leaving the glass with a cleaner, streak-free finish."
      },
      {
        question: "Do you clean bathroom tiles and grout?",
        answer:
          "Yes. We clean bathroom wall tiles and accessible grout lines to remove suitable moisture-related residues, soap scum and light discolouration."
      },
      {
        question: "What areas of the bathroom are sanitised?",
        answer:
          "We focus on suitable high-touch areas such as toilet seats, flush handles, basins, taps, handles and bath or shower fixtures as part of the agreed bathroom cleaning service."
      },
      {
        question: "How long does bathroom cleaning take?",
        answer:
          "The time required depends on the size and condition of the bathroom and the level of limescale, soap scum and buildup present. We can discuss your requirements and provide an appropriate estimate."
      },
      {
        question: "Do you bring your own cleaning and descaling products?",
        answer:
          "Yes. We bring suitable professional cleaning and descaling products, cleaning equipment and fresh cloths required for the agreed bathroom cleaning service."
      }
    ]
  },
  {
    id: "end-of-tenancy",
    slug: "end-of-tenancy-cleaning",
    icon: Key,

    title: "End of Tenancy Cleaning",

    tagline:
      "Professional end of tenancy cleaning services in Willenhall, Walsall and surrounding West Midlands areas, helping tenants, landlords and letting agents prepare rental properties for a thorough checkout clean.",

    metaTitle:
      "End of Tenancy Cleaning in Willenhall & West Midlands | Refuse Shine",

    metaDescription:
      "Professional end of tenancy cleaning in Willenhall, Walsall & the West Midlands. Detailed move-out cleaning for kitchens, bathrooms, floors, windows and more. Get a free quote.",

    image: "/assets/services/end-of-tenancy-cleaning.png",

    altText:
      "Professional end of tenancy cleaner preparing an empty rental property for checkout inspection",

    introTitle:
      "Professional End of Tenancy & Move-Out Cleaning",

    introContent:
      "Moving out of a rental property can be stressful, especially when every room needs to be cleaned before the final inspection. Refuse Shine Cleaning LTD provides professional end of tenancy cleaning services across Willenhall, Walsall, Wolverhampton and surrounding West Midlands areas. Our detailed move-out cleaning service focuses on the areas commonly checked during property handovers, including kitchens, bathrooms, cupboards, internal windows, floors, doors, skirting boards and woodwork. We work through a structured cleaning checklist to help leave the property clean, fresh and ready for inspection. Whether you are a tenant moving out, a landlord preparing for new occupants or a letting agent arranging a property changeover, our trained cleaning team can provide a thorough end of tenancy clean tailored to the property.",

    includedTitle:
      "What Is Included in Our End of Tenancy Cleaning Service",

    includedIntro:
      "Our end of tenancy clean follows a detailed property-wide checklist covering the key areas that require attention before a rental property handover:",

    includedList: [
      "Deep cleaning kitchen cupboards, drawers, worktops and accessible surfaces inside and out",
      "Scrubbing and descaling bathroom toilets, baths, showers, basins and wall tiles",
      "Cleaning internal window glass, frames and windowsills throughout the property",
      "Wiping doors, door frames, skirting boards, sockets and light switches",
      "Thorough vacuuming of carpets and mopping hard floor surfaces",
      "Dusting light fittings, removing cobwebs and cleaning wardrobes and accessible storage areas"
    ],

    forTitle:
      "Who Is Our End of Tenancy Cleaning Service For?",

    forIntro:
      "Our professional move-out cleaning service is suitable for anyone preparing a rental or residential property for a handover, inspection or new occupant:",

    forList: [
      "Tenants who need a detailed clean before moving out and completing their checkout inspection",
      "Landlords preparing a property for new tenants",
      "Letting agents needing a reliable cleaning service for rental property changeovers",
      "Homeowners who want a thorough move-out clean before handing over or moving into a property"
    ],

    processTitle:
      "Our End of Tenancy Cleaning Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Assess the Property",
        description:
          "We review the property and discuss the main cleaning priorities so our team can work through the appropriate end of tenancy checklist."
      },
      {
        stepNumber: "02",
        title: "Complete the Move-Out Clean",
        description:
          "Our cleaners work room by room, tackling kitchens, bathrooms, floors, windows, cupboards, doors, skirting boards and other agreed areas."
      },
      {
        stepNumber: "03",
        title: "Final Cleaning Check",
        description:
          "We review the completed clean against the agreed checklist to make sure the property is left tidy, fresh and prepared for the next stage of the handover."
      }
    ],

    whyChoose: [
      {
        title: "Detailed End of Tenancy Checklist",
        description:
          "We follow a structured property-wide checklist covering kitchens, bathrooms, floors, cupboards, windows, doors, skirting boards and other important areas."
      },
      {
        title: "Professional Move-Out Cleaning",
        description:
          "Our trained cleaners provide a thorough move-out cleaning service designed around the condition and requirements of your rental property."
      },
      {
        title: "Suitable for Tenants & Property Professionals",
        description:
          "We work with tenants, landlords and letting agents who need a reliable cleaning service before property inspections, handovers or new tenancies."
      }
    ],

    areasContent:
      "We provide end of tenancy cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands areas. If you need a professional move-out cleaning service for a rental or residential property, contact our team to discuss your location and cleaning requirements.",

    faqs: [
      {
        question: "What is included in end of tenancy cleaning?",
        answer:
          "Our end of tenancy cleaning service covers kitchens, bathrooms, internal windows, cupboards, wardrobes, doors, skirting boards, light switches, floors and other agreed areas throughout the property."
      },
      {
        question: "Do you provide move-out cleaning services?",
        answer:
          "Yes. Our move-out cleaning service is designed for tenants, landlords and property professionals who need a detailed clean before a property handover, inspection or new tenancy."
      },
      {
        question: "Do you clean inside cupboards and wardrobes?",
        answer:
          "Yes. We clean inside kitchen cupboards, drawers and accessible wardrobes when they have been completely emptied before our team arrives."
      },
      {
        question: "Do you clean internal windows?",
        answer:
          "Yes. Internal window glass, frames and windowsills can be cleaned as part of our standard end of tenancy cleaning checklist."
      },
      {
        question: "Can tenants, landlords and letting agents book the service?",
        answer:
          "Yes. Our end of tenancy cleaning service can be booked by tenants moving out, landlords preparing properties for new occupants and letting agents arranging rental property changeovers."
      },
      {
        question: "How should I prepare my property before the cleaner arrives?",
        answer:
          "Where possible, the property should be cleared of personal belongings, rubbish and food. Cupboards and wardrobes should also be emptied if you want their interiors cleaned."
      },
      {
        question: "Does end of tenancy cleaning guarantee my deposit return?",
        answer:
          "No cleaning company can guarantee a deposit return because the final outcome depends on your tenancy agreement, property condition, damage and the landlord or letting agent's inspection. Our detailed cleaning is intended to help the property meet expected cleanliness standards."
      },
      {
        question: "How much does end of tenancy cleaning cost?",
        answer:
          "The cost depends on factors such as property size, number of rooms, condition and the cleaning requirements. Contact us with your property details so we can discuss your requirements and provide a quote."
      }
    ]
  },
  {
    id: "move-in-out",
    slug: "move-in-move-out-cleaning",
    icon: Truck,

    title: "Move-In / Move-Out Cleaning",

    tagline:
      "Professional move-in and move-out cleaning services in Walsall, Wolverhampton, Dudley and surrounding West Midlands areas, helping you start fresh or leave your property clean and ready for its next occupants.",

    metaTitle:
      "Move In & Move Out Cleaning in Walsall & West Midlands | Refuse Shine",

    metaDescription:
      "Professional move-in and move-out cleaning services in Walsall, Wolverhampton & the West Midlands. Detailed empty-property cleaning for a fresh start or clean handover. Get a free quote.",

    image: "/assets/services/move-in-move-out-cleaning.png",

    altText:
      "Professional move-in and move-out cleaning of an empty home ready for new occupants",

    introTitle:
      "Professional Move-In & Move-Out Cleaning Services",

    introContent:
      "Moving into a new property or leaving your current home can be a busy and demanding process. Refuse Shine Cleaning LTD provides professional move-in and move-out cleaning services across Walsall, Wolverhampton, Dudley and surrounding West Midlands areas, helping make property transitions easier. Our detailed cleaning service is designed for empty or mostly empty properties and covers kitchens, bathrooms, floors, internal windows, cupboards, doors, skirting boards and other accessible areas. Whether you are a home buyer wanting a fresh and hygienic space before unpacking, a seller preparing a property for viewings, a tenant moving between homes or a landlord preparing an empty property, our trained team works through a structured checklist to provide a thorough clean before the next stage of your move.",

    includedTitle:
      "What Is Included in Our Move-In / Move-Out Cleaning",

    includedIntro:
      "Our move-in and move-out cleaning checklist is designed to provide a detailed clean throughout an empty property:",

    includedList: [
      "Deep cleaning and sanitisation of kitchen worktops, sinks, splashbacks and accessible cupboard interiors and exteriors",
      "Scrubbing and descaling baths, showers, shower screens, basins and toilets",
      "Cleaning internal windows, window frames and windowsills throughout the property",
      "Cleaning skirting boards, doors, door frames, light switches and accessible power sockets",
      "Vacuuming carpets, rugs and edges and mopping hard floor surfaces",
      "Removing cobwebs from ceilings and corners and dusting accessible light fittings"
    ],

    forTitle:
      "Who Is Our Move-In / Move-Out Cleaning Service For?",

    forIntro:
      "Our professional moving cleaning service is suitable for households and property owners preparing to leave, enter or hand over a property:",

    forList: [
      "Home buyers wanting a clean and hygienic property before moving furniture in",
      "Home sellers preparing their property for viewings or handover",
      "Tenants requiring a detailed clean when moving between properties",
      "Landlords preparing an empty house or flat for new occupants"
    ],

    processTitle:
      "Our Move-In / Move-Out Cleaning Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Confirm Your Moving Requirements",
        description:
          "We discuss your moving date, property size, access arrangements and key cleaning priorities before scheduling the service."
      },
      {
        stepNumber: "02",
        title: "Complete the Move-In / Move-Out Clean",
        description:
          "Our team works systematically through the property, cleaning kitchens, bathrooms, floors, windows, cupboards and other agreed areas."
      },
      {
        stepNumber: "03",
        title: "Final Property Check",
        description:
          "We review the completed cleaning work to make sure the property is left clean, fresh and ready for moving in, handing over or the next occupants."
      }
    ],

    whyChoose: [
      {
        title: "Professional Move-In & Move-Out Cleaning",
        description:
          "Our trained team provides a detailed property-wide clean so you can focus on packing, moving and settling into your next home."
      },
      {
        title: "Detailed Empty-Property Cleaning",
        description:
          "With furniture and belongings removed, we can focus on accessible floors, cupboards, skirting boards, doors, bathrooms and other key areas."
      },
      {
        title: "Reliable & Insured Cleaning Team",
        description:
          "Our fully insured team provides professional cleaning services with a structured checklist and clear focus on your moving requirements."
      }
    ],

    areasContent:
      "We provide professional move-in and move-out cleaning services across Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands areas. If you need a detailed moving clean for a property you are leaving or moving into, contact our team to discuss your requirements.",

    faqs: [
      {
        question: "What is move-in and move-out cleaning?",
        answer:
          "Move-in and move-out cleaning is a detailed clean of a property before you move in or after you move out. It can include kitchens, bathrooms, floors, internal windows, cupboards, skirting boards, doors and other agreed internal areas."
      },
      {
        question: "Do you provide move-out cleaning services?",
        answer:
          "Yes. Our move-out cleaning service is designed to help tenants, homeowners and property owners leave a property clean and ready for handover, viewings or its next occupants."
      },
      {
        question: "Do you provide move-in cleaning services?",
        answer:
          "Yes. Our move-in cleaning service helps prepare a new home or property before you bring in furniture and personal belongings, giving you a cleaner and fresher space from the start."
      },
      {
        question: "Does the property need to be empty before cleaning?",
        answer:
          "For the best results, we recommend removing furniture and personal belongings where possible. An empty property allows our cleaners to access more floors, cupboards, skirting boards and other areas."
      },
      {
        question: "Do you clean appliances such as ovens?",
        answer:
          "Cleaning accessible exterior surfaces of major kitchen appliances can be included. Internal oven, fridge or washing machine cleaning can be requested as an additional service when booking."
      },
      {
        question: "How long does a move-in or move-out clean take?",
        answer:
          "The time depends on the property's size, condition and cleaning requirements. Larger or more heavily soiled properties may require additional time. We can discuss your property details and provide an appropriate estimate."
      },
      {
        question: "Do you supply cleaning products and equipment?",
        answer:
          "Yes. Our team brings the professional cleaning products, vacuum cleaners, mops, cloths and other standard equipment required for the agreed cleaning service."
      },
      {
        question: "Do you offer move-in and move-out cleaning near me?",
        answer:
          "We provide move-in and move-out cleaning services across Walsall, Wolverhampton, Dudley, West Bromwich, Birmingham and surrounding West Midlands areas. Contact us with your location to confirm availability."
      }
    ]
  },
  {
    id: "airbnb-clean",
    slug: "airbnb-short-let-cleaning",
    icon: Calendar,

    title: "Airbnb & Short Let Cleaning",

    tagline:
      "Reliable Airbnb cleaning and short-let changeover services for hosts and property managers in Willenhall, Walsall and the West Midlands.",

    metaTitle:
      "Airbnb & Short Let Cleaning in Willenhall | Refuse Shine",

    metaDescription:
      "Professional Airbnb cleaning services and short-let changeovers in Willenhall, Walsall & West Midlands. Reliable guest-ready cleaning. Get a free quote.",

    image: "/assets/services/airbnb-short-let-cleaning.png",

    altText:
      "Freshly cleaned short-let bedroom with crisp white bed linen and neatly arranged towels",

    introTitle:
      "Professional Airbnb Cleaning & Short Let Changeovers",

    introContent:
      "In the short-term rental market, consistent cleanliness can make a major difference to the guest experience. Refuse Shine Cleaning LTD provides reliable Airbnb cleaning services and short-let cleaning across Willenhall, Walsall, Wolverhampton, West Bromwich, Birmingham and surrounding West Midlands areas. We understand that hosts often work within tight checkout and check-in windows, so our team follows a clear cleaning checklist for every property. We clean and sanitise kitchens and bathrooms, prepare beds with fresh linen, arrange towels, remove guest waste and leave the property looking fresh and welcoming for the next arrival. Whether you manage one Airbnb property or multiple short-let properties, our cleaning service is designed to help maintain a consistent guest-ready standard.",

    includedTitle:
      "What is Included in Our Airbnb Cleaning Service",

    includedIntro:
      "Our Airbnb and short-let cleaning checklist focuses on the areas guests notice most, helping prepare your property for the next stay:",

    includedList: [
      "Stripping used bed sheets and towels and dressing beds with fresh linen",
      "Deep cleaning and sanitising kitchen worktops, sinks, appliances and other high-use surfaces",
      "Cleaning bathrooms, including toilets, basins, shower areas and glass screens",
      "Emptying guest waste bins, replacing bags and removing food or rubbish left behind",
      "Vacuuming carpets and rugs, wiping furniture and mopping hard floor surfaces",
      "Arranging pillows, cushions, towels and guest essentials for a clean, welcoming presentation"
    ],

    forTitle:
      "Who Our Airbnb & Short Let Cleaning Service Is For",

    forIntro:
      "Our Airbnb cleaning service is designed for hosts and property operators who need reliable guest-ready cleaning between stays:",

    forList: [
      "Airbnb hosts who need reliable cleaning between guest check-outs and check-ins",
      "Short-let landlords who want to maintain consistent cleaning standards for guests",
      "Property management companies looking for a dependable local cleaning partner",
      "Second-home owners who need a trusted team to prepare their property for guest arrivals"
    ],

    processTitle:
      "Our Airbnb Cleaning & Short Let Changeover Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Schedule & Cleaning Requirements",
        description:
          "We confirm your property requirements, preferred cleaning schedule, checkout times and any specific guest-ready checklist priorities."
      },
      {
        stepNumber: "02",
        title: "Airbnb Turnaround Cleaning",
        description:
          "Our team cleans and sanitises the property, changes bed linen and towels, removes waste and prepares each room for the next guest."
      },
      {
        stepNumber: "03",
        title: "Guest-Ready Final Check",
        description:
          "We review the property against the agreed checklist and make sure rooms, bathrooms, kitchen areas and guest essentials are presented ready for check-in."
      }
    ],

    whyChoose: [
      {
        title: "Reliable Airbnb Cleaning",
        description:
          "We follow a consistent property-specific checklist to help ensure your Airbnb or short-let property is ready for every guest arrival."
      },
      {
        title: "Fast Guest Turnaround",
        description:
          "We work efficiently around your checkout and check-in schedule to help keep your property ready for the next stay."
      },
      {
        title: "Host Peace of Mind",
        description:
          "Our team can identify visible damage, breakages or belongings left behind during the cleaning visit and notify you promptly."
      }
    ],

    areasContent:
      "We provide Airbnb cleaning and short-let changeover services across Willenhall, Walsall, Wolverhampton, West Bromwich, Birmingham and surrounding West Midlands areas, helping hosts keep their properties clean and guest-ready.",

    faqs: [
      {
        question:
          "What does an Airbnb cleaning service include?",

        answer:
          "Our Airbnb cleaning service includes changing used bed linen and towels, cleaning and sanitising kitchens and bathrooms, vacuuming carpets and rugs, mopping hard floors, emptying bins and preparing rooms for the next guest."
      },

      {
        question:
          "Do you provide Airbnb and short-let changeover cleaning?",

        answer:
          "Yes. We provide Airbnb cleaning and short-let changeover services designed to prepare properties between guest stays and help ensure they are ready for the next check-in."
      },

      {
        question:
          "Do you handle guest linen and towels?",

        answer:
          "Yes. We can strip used bed linen and towels and replace them with fresh linen supplied by the host or property owner."
      },

      {
        question:
          "Do you report property damage or items left behind?",

        answer:
          "Yes. If our team notices visible damage, breakages or belongings left behind by previous guests during the cleaning visit, we can document the issue and notify you."
      },

      {
        question:
          "Can you restock guest essentials?",

        answer:
          "Yes. We can help arrange and restock host-provided guest essentials such as hand soap, toilet rolls, tea and coffee as part of the agreed cleaning requirements."
      },

      {
        question:
          "Are your Airbnb cleaners insured?",

        answer:
          "Yes. Our cleaning team is trained for domestic and short-let cleaning requirements and fully insured for your peace of mind."
      }
    ]
  },
  {
    id: "post-construction",
    slug: "post-construction-cleaning",
    icon: Hammer,

    title: "Post Construction Cleaning",

    tagline:
      "Remove fine construction dust, paint splatters, plaster residue, and builders' debris with professional after-builders cleaning in Dudley and across the West Midlands.",

    metaTitle:
      "After Builders Cleaning in Dudley & West Midlands | Refuse Shine",

    metaDescription:
      "Professional after builders and post construction cleaning in Dudley, Wolverhampton & Walsall. Detailed dust, paint & plaster removal. Get a free quote.",

    image: "/assets/services/post-construction-cleaning.png",

    altText:
      "Professional cleaner detailing a newly renovated home after construction work",

    introTitle:
      "Professional After Builders & Post Construction Cleaning",

    introContent:
      "Building work and home renovations can leave behind fine construction dust, plaster residue, paint splatters, adhesive marks, and builders' debris that ordinary cleaning cannot fully remove. Refuse Shine Cleaning LTD provides professional after builders cleaning and post construction cleaning services for newly built and renovated properties across Dudley, Wolverhampton, Walsall and the wider West Midlands. Our team works through the property systematically, removing fine dust from surfaces, detailing windows and frames, cleaning kitchens and bathrooms, and tackling construction-related marks where safely accessible. Whether you are a homeowner completing a renovation, a contractor preparing a project for handover, or a property developer getting a new property ready for use, our detailed cleaning service helps leave the space clean, presentable, and ready for the next stage.",

    includedTitle:
      "What is Included in Our After Builders Cleaning Service",

    includedIntro:
      "Our after builders cleaning checklist focuses on the dust, residue and surface marks commonly left behind after construction or renovation work:",

    includedList: [
      "Thorough removal of fine construction dust from walls, ceilings, light fittings, vents, and accessible surfaces",
      "Cleaning internal windows, frames, tracks, and safely removing accessible paint, plaster, or adhesive residue",
      "Deep cleaning and sanitising bathrooms, including removing grout residue and polishing fixtures",
      "Cleaning kitchen worktops, appliances, and cupboard interiors and exteriors to remove construction dust",
      "Wiping skirting boards, doors, door frames, sockets, and light switches",
      "Detailed vacuuming of carpets, edges, and hard floors followed by thorough mopping"
    ],

    forTitle:
      "Who Our Post Construction Cleaning Service Is For",

    forIntro:
      "Our specialist after builders cleaning service is suitable for properties moving from construction or renovation into final use:",

    forList: [
      "Property developers preparing newly built homes or commercial units for handover",
      "Homeowners completing extensions, loft conversions, or renovation projects",
      "Building contractors looking for reliable final cleaning before project handover",
      "Interior designers preparing newly fitted properties for client viewings or occupancy"
    ],

    processTitle:
      "Our After Builders Cleaning Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Site Assessment & Cleaning Plan",
        description:
          "We assess the property to identify construction dust, plaster residue, paint marks, adhesive residue, and the areas requiring detailed cleaning."
      },
      {
        stepNumber: "02",
        title: "Post Construction Deep Clean",
        description:
          "We work systematically from high to low, removing fine dust, cleaning surfaces, detailing windows, and tackling accessible construction-related residue."
      },
      {
        stepNumber: "03",
        title: "Final Detailing & Handover Check",
        description:
          "We complete final surface checks, polish suitable fixtures, review the cleaned areas, and leave the property ready for handover, viewing, or occupancy."
      }
    ],

    whyChoose: [
      {
        title: "Specialist Fine Dust Removal",
        description:
          "We focus on the fine dust and residue commonly left after building and renovation work, including hard-to-reach accessible surfaces."
      },
      {
        title: "Detailed Construction Cleanup",
        description:
          "Our checklist covers windows, frames, skirting boards, kitchens, bathrooms, floors, and other areas affected by construction work."
      },
      {
        title: "Reliable Handover Cleaning",
        description:
          "We work around project schedules to help contractors, developers, homeowners, and designers prepare properties for their next stage."
      }
    ],

    areasContent:
      "We provide professional post construction and after builders cleaning services in Dudley, Wolverhampton, Walsall, West Bromwich, Cannock, and surrounding West Midlands areas.",

    faqs: [
      {
        question:
          "What is included in post construction cleaning?",

        answer:
          "Post construction cleaning is a detailed clean designed to remove fine construction dust, plaster residue, paint splatters, adhesive residue, and builders' debris from newly built or renovated properties."
      },

      {
        question:
          "What is after builders cleaning?",

        answer:
          "After builders cleaning focuses on cleaning and detailing a property after building or renovation work. It targets construction dust, plaster residue, paint marks, adhesive residue, windows, floors, kitchens, bathrooms, and other affected surfaces."
      },

      {
        question:
          "How is after builders cleaning different from a standard deep clean?",

        answer:
          "After builders cleaning focuses specifically on construction-related dust and residue, such as fine plaster dust, grout residue, paint splatters, and adhesive marks, rather than only routine household dirt."
      },

      {
        question:
          "Does post construction cleaning include construction waste disposal?",

        answer:
          "Our service focuses on detailed cleaning and surface preparation. We can collect and bag light construction dust and debris, but major construction waste disposal should be arranged separately."
      },

      {
        question:
          "When should after builders cleaning be booked?",

        answer:
          "After builders cleaning is best scheduled once the main building, plumbing, painting, and snagging work has been completed and tools and major construction materials have been removed from the property."
      },

      {
        question:
          "Are your cleaners trained to work in post construction environments?",

        answer:
          "Our cleaners are trained to work safely in post construction cleaning environments and follow appropriate safety procedures when carrying out detailed cleaning work."
      }
    ]
  },
  {
    id: "carpet-clean",
    slug: "carpet-cleaning",
    icon: Layers,

    title: "Carpet Cleaning",

    tagline:
      "Revitalise your home or office carpets, remove stubborn stains, and tackle deep-seated odours with professional carpet cleaning in Willenhall and across the West Midlands.",

    metaTitle:
      "Carpet Cleaning Services in Willenhall & West Midlands | Refuse Shine",

    metaDescription:
      "Professional carpet cleaning in Willenhall, Walsall & Wolverhampton. Deep stain, dirt & odour removal using hot water extraction. Get a free quote.",

    image: "/assets/services/carpet-cleaning.png",

    altText:
      "Professional carpet cleaner using hot water extraction equipment on a domestic carpet",

    introTitle:
      "Professional Carpet Cleaning & Deep Stain Removal",

    introContent:
      "Carpets can trap dirt, dust, pet hair, everyday allergens, and odours deep within their fibres over time. Regular vacuuming helps remove surface debris but cannot provide the same level of deep cleaning. Refuse Shine Cleaning LTD provides professional carpet cleaning services in Willenhall, Walsall, Wolverhampton, Cannock, and surrounding West Midlands areas. We use hot water extraction cleaning to loosen embedded dirt, oils, and stains before extracting the moisture and loosened debris from the carpet fibres. Whether you need a routine carpet clean, help with stubborn stains and pet odours, or a professional clean for a rental property or office, our team works carefully to refresh your carpets and leave them clean and fresh.",

    includedTitle:
      "What is Included in Our Carpet Cleaning Service",

    includedIntro:
      "Our professional carpet cleaning process combines preparation, targeted stain treatment, deep extraction, and finishing to clean the carpet thoroughly:",

    includedList: [
      "Thorough dry vacuuming to remove loose surface dirt, dust, and hair",
      "Targeted pre-treatment of stubborn spots, stains, grease, and high-traffic areas",
      "Application of suitable cleaning agents to loosen embedded soil within carpet fibres",
      "Hot water extraction cleaning to remove loosened dirt and residue from the carpet pile",
      "Extraction of excess moisture to support faster drying and reduce the risk of damp smells",
      "Final deodorising treatment to leave carpets feeling fresh and clean"
    ],

    forTitle: "Who Our Carpet Cleaning Service Is For",

    forIntro:
      "Our carpet cleaning service is suitable for homes, rental properties, and commercial spaces that need a deeper clean than routine vacuuming can provide:",

    forList: [
      "Pet owners needing help with muddy paw marks, pet hair, accidents, and unwanted odours",
      "Households wanting to refresh carpets affected by everyday dirt, dust, and high foot traffic",
      "Tenants requiring professional carpet cleaning before a property inspection or tenancy handover",
      "Commercial businesses wanting to maintain clean carpets in offices, reception areas, and waiting rooms"
    ],

    processTitle: "Our Carpet Cleaning Process",

    processSteps: [
      {
        stepNumber: "01",
        title: "Carpet Inspection & Spot Testing",
        description:
          "We inspect the carpet fibres, identify visible stains and high-traffic areas, and select suitable cleaning treatments."
      },
      {
        stepNumber: "02",
        title: "Pre-Treatment & Deep Extraction",
        description:
          "We apply suitable pre-treatments to stains and heavily soiled areas before carrying out professional hot water extraction cleaning."
      },
      {
        stepNumber: "03",
        title: "Moisture Extraction & Final Finish",
        description:
          "We extract excess moisture, complete the final treatment where required, and leave the carpet fresh and ready to dry."
      }
    ],

    whyChoose: [
      {
        title: "Professional Hot Water Extraction",
        description:
          "Our hot water extraction method helps loosen and remove embedded dirt, oils, and everyday soil from carpet fibres."
      },
      {
        title: "Stain & Odour Treatment",
        description:
          "We target suitable stains, high-traffic marks, pet-related mess, and unwanted odours using appropriate cleaning treatments."
      },
      {
        title: "Local Carpet Cleaning Service",
        description:
          "We provide professional carpet cleaning for homes, rental properties, and businesses across Willenhall, Walsall, Wolverhampton, and surrounding West Midlands areas."
      }
    ],

    areasContent:
      "We provide professional carpet cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, Cannock, and surrounding West Midlands communities, helping local homes and businesses maintain clean, fresh carpets.",

    faqs: [
      {
        question: "What carpet cleaning method do you use?",
        answer:
          "We primarily use hot water extraction, a deep carpet cleaning method that uses a suitable cleaning solution and extraction process to loosen and remove dirt from carpet fibres."
      },

      {
        question: "How long do carpets take to dry after cleaning?",
        answer:
          "Drying time varies depending on ventilation, room temperature, carpet thickness, and the amount of moisture extracted. We remove as much excess moisture as practical to support faster drying."
      },

      {
        question: "Can you remove all stains from my carpet?",
        answer:
          "We can treat many common stains including grease, mud, coffee, and some pet-related marks. However, certain substances such as bleach, dyes, or old permanent stains may have caused lasting fibre discolouration. We assess stains before treatment and do our best to improve their appearance."
      },

      {
        question: "Do I need to move my furniture before carpet cleaning?",
        answer:
          "We ask customers to remove small items such as toys, plants, and lightweight side tables before we arrive. We can generally clean around heavier furniture such as wardrobes and sofas."
      },

      {
        question: "Is professional carpet cleaning safe for pets and children?",
        answer:
          "We use professional cleaning products selected with households, children, and pets in mind. Customers should follow the product guidance regarding drying and when the carpet is suitable for normal use again."
      },

      {
        question: "Do you provide carpet cleaning in Walsall and Wolverhampton?",
        answer:
          "Yes. We provide professional carpet cleaning across Willenhall, Walsall, Wolverhampton, Dudley, Cannock, and surrounding West Midlands areas."
      }
    ]
  },
  {
    id: "appliance-clean",
    slug: "appliance-cleaning",
    icon: Flame,
    title: "Appliance Cleaning",
    tagline: "Restore a hygienic finish to your ovens, fridges, and microwaves with detailed appliance cleaning services in West Bromwich and surrounding areas.",
    metaTitle: "Appliance & Oven Cleaning in West Bromwich & Willenhall",
    metaDescription: "Professional oven & kitchen appliance deep cleaning in West Bromwich, Willenhall & Dudley. We scrub grease, carbon & burnt food. Request a free quote.",
    image: "/assets/services/appliance-cleaning.png",
    altText: "Spotless, clean interior of a modern double oven with wire racks",
    introTitle: "Detailed Kitchen Appliance Deep Cleaning",
    introContent: "Kitchen appliances, especially ovens, gather layers of baked-on grease, carbon deposits, and food spills over months of use. Cleaning these yourself requires harsh chemicals and hours of scrubbing. Refuse Shine Cleaning LTD provides specialised appliance cleaning services in West Bromwich, Willenhall, Dudley, and across the West Midlands. Our team deep cleans domestic ovens, extractors, hobs, refrigerators, and microwaves. We use safe, bio-degradable cleaning agents to dissolve tough carbon build-up and grease, cleaning every corner of your cookers. We clean wire racks, glass doors, and burner elements, restoring a hygienic finish that improves appliance efficiency and eliminates unpleasant burnt smells during cooking.",
    includedTitle: "What is Cleaned During Our Appliance Cleaning",
    includedIntro: "Our appliance cleaning checklist focuses on removing grease, carbon, and built-up food residues:",
    includedList: [
      "Deep cleaning and degreasing of internal oven cavities, walls, and fan covers",
      "Soaking and scrubbing wire oven racks, grill trays, and side support brackets",
      "Polishing internal and external oven glass doors to a streak-free, clear finish",
      "Degreasing gas hobs, electric hotplates, knobs, and extractor fan filters",
      "Thorough sanitisation of refrigerator interiors, door seals, shelves, and drawers",
      "Cleaning and deodorising microwave interiors, turntables, and outer housings"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "This deep cleaning service is designed for households wanting to restore their cooking equipment:",
    forList: [
      "Home cooks wishing to eliminate burnt smoke smells and improve oven performance",
      "Tenants preparing for checkout inspections to avoid tenancy deposit deductions",
      "Landlords wanting to present clean appliances to incoming tenants",
      "Busy families who want to avoid scrubbing greasy ovens and hobs"
    ],
    processTitle: "Our Appliance Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Inspection & Dismantling",
        description: "We test the appliance, remove oven racks, trays, glass door panels, and filter meshes for detailing."
      },
      {
        stepNumber: "02",
        title: "Grease & Carbon Scrubbing",
        description: "We treat the appliance interior with biodegradable cleaning products, scrubbing carbon build-up and grease deposits."
      },
      {
        stepNumber: "03",
        title: "Reassembly & Polish",
        description: "We polish chrome racks and glass doors, reassemble the parts, and wipe down external casings to leave a shiny finish."
      }
    ],
    whyChoose: [
      {
        title: "Tough Carbon & Grease Removal",
        description: "We use effective, non-caustic cleaning agents to break down stubborn, baked-on carbon deposits safely."
      },
      {
        title: "Improved Oven Performance",
        description: "Removing grease and carbon build-up from heating elements helps your oven heat evenly and run efficiently."
      },
      {
        title: "Biodegradable Cleaning Products",
        description: "We use suitable biodegradable cleaning products to help break down grease and baked-on residue while caring for appliance surfaces."
      }
    ],
    areasContent: "We provide professional cooker, hob, fridge, and oven cleaning services in West Bromwich, Willenhall, Dudley, Walsall, Wolverhampton, and across the West Midlands.",
    faqs: [
      {
        question: "What appliances do you clean?",
        answer: "We deep clean domestic ovens (single, double, and ranges), gas and electric hobs, cooker hoods, extractor filters, microwave ovens, and household refrigerators."
      },
      {
        question: "Do you use caustic chemicals?",
        answer: "No. We use bio-degradable, non-caustic, and non-toxic cleaning products. This protects your appliance surfaces and ensures there are no harsh chemical fumes in your home."
      },
      {
        question: "Can I use my oven immediately after cleaning?",
        answer: "Yes, absolutely. Because we use safe, non-toxic products, you can turn on and use your oven for cooking immediately after we complete the service."
      },
      {
        question: "Do you clean the glass door panels?",
        answer: "Yes, Where the appliance design allows safe access, we clean accessible areas around and between oven door glass panels."
      },
      {
        question: "How long does an oven clean take?",
        answer: "A standard single oven deep clean takes approximately 1.5 to 2 hours. A double oven or range cooker takes 2 to 3.5 hours depending on size and condition."
      }
    ]
  },
  {
    id: "window-clean",
    slug: "window-cleaning",
    icon: LayoutGrid,
    title: "Window Cleaning",
    tagline: "Bring natural light back into your property with streak-free interior and exterior window cleaning services in Willenhall and Walsall.",
    metaTitle: "Window Cleaning Services in Willenhall & Walsall | Refuse Shine",
    metaDescription: "Streak-free window cleaning in Willenhall, Walsall & Wolverhampton. Internal glass, frames, sills & window tracks detailed. Request a free quote.",
    image: "/assets/services/window-cleaning.png",
    altText: "A window squeegee cleaning a glass window pane to a streak-free finish",
    introTitle: "Streak-Free Window Cleaning & Detailing",
    introContent: "Clean windows let in natural light, making your rooms feel brighter and more spacious. Over time, window glass accumulates rain spots, dust, pollen, and inside finger marks. Refuse Shine Cleaning LTD provides professional window cleaning services for residential homes and commercial offices across Willenhall, Walsall, Wolverhampton, and the West Midlands. We clean internal glass panes, frames, tracks, and sills, and can clean external ground-floor windows. Our cleaners use specialist squeegees, glass cleaning products, and microfibre cloths to remove dirt without leaving soapy residue, streaks, or water spots, ensuring a crystal-clear finish.",
    includedTitle: "What is Included in Our Window Cleaning Service",
    includedIntro: "Our detailed window cleaning checklist ensures a complete clean of your glass and frames:",
    includedList: [
      "Thorough cleaning of interior window glass panes to remove smudges and film",
      "Wiping down window frames, sills, and cleaning dust from window tracks",
      "Cleaning of ground-floor exterior window glass (where safely accessible)",
      "Wiping down window handles, locks, and hinges to remove dust",
      "Detailing sash and bay windows with special care for wood or uPVC frames",
      "Polishing glass surfaces to a clear, streak-free finish"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "Window cleaning is a popular addition to regular or seasonal property resets:",
    forList: [
      "Homeowners wanting to maximise natural daylight and improve curb appeal",
      "Tenants needing window cleaning to meet move-out rental agreement clauses",
      "Local business offices needing clean windows to present a professional look",
      "Home buyers wanting clean windows before moving into a pre-owned house"
    ],
    processTitle: "Our Window Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Frame & Sill Wiped",
        description: "We wipe down frames, sills, and tracks first to remove loose dust and debris."
      },
      {
        stepNumber: "02",
        title: "Glass Washing",
        description: "We apply specialised glass cleaner to break down rain marks, pollen, and finger smudges."
      },
      {
        stepNumber: "03",
        title: "Squeegee & Detailing",
        description: "We use a squeegee for a streak-free dry, then use microfibre cloths to detail corners and edges."
      }
    ],
    whyChoose: [
      {
        title: "Streak-Free Guarantee",
        description: "We detail all edges and corners using professional squeegees to ensure clear window glass."
      },
      {
        title: "Frames & Sills Cleaned",
        description: "We clean the surrounding uPVC or wood frames, sills, and tracks, not just the glass panes."
      },
      {
        title: "Reliable Scheduling",
        description: "Book window cleaning as a one-off service or add it to your recurring house cleaning routine."
      }
    ],
    areasContent: "We offer professional interior and exterior window cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, and surrounding West Midlands areas.",
    faqs: [
      {
        question: "Do you clean window frames and sills?",
        answer: "Yes. Our standard window cleaning includes wiping down window frames, sills, handles, and clearing dust from tracks, ensuring a complete clean."
      },
      {
        question: "Do you clean exterior windows?",
        answer: "We clean ground-floor exterior windows where they can be safely accessed. High-reach exterior window cleaning is currently not offered."
      },
      {
        question: "Do you clean window tracks and grooves?",
        answer: "Yes, we wipe inside window tracks to remove accumulated dust, insects, and condensation dirt during our visit."
      },
      {
        question: "How often should windows be cleaned?",
        answer: "For general domestic properties, window cleaning every 4 to 8 weeks keeps glass clean and prevents hard-water spots from etching."
      },
      {
        question: "Can window cleaning be added to a deep clean?",
        answer: "Yes. Internal window cleaning is included in our deep cleaning and end-of-tenancy checklists. You can also add it as an extra to regular house cleans."
      }
    ]
  },
  {
    id: "waste-removal",
    slug: "waste-removal-services",
    icon: Trash2,
    title: "Waste Removal",
    tagline: "Clear household rubbish, garden waste, and unwanted furniture quickly and responsibly with our licensed waste removal services in Walsall & West Midlands.",
    metaTitle: "Waste Removal & House Clearance in Walsall & Willenhall | Refuse Shine",
    metaDescription: "Licensed house clearance & domestic waste removal services in Walsall, Willenhall & West Midlands. Responsible recycling. Fast, reliable rubbish clearance.",
    image: "/assets/services/waste-removal-services.png",
    altText: "A clean waste collection van parked near a house with sorted recycling boxes",
    introTitle: "Licensed Rubbish Clearance & House Clearance Services",
    introContent: "De-cluttering a home, clearing a garage, or cleaning out a garden generates piles of rubbish that are difficult to transport to local recycling centres. Refuse Shine Cleaning LTD provides licensed house clearance and waste removal services across Walsall, Willenhall, Wolverhampton, and the West Midlands. We help homeowners, tenants, and business managers clear out unwanted furniture, garden waste, cardboard, and general household items. Our team handles the heavy lifting, loading, and cleanup of cleared areas. As a responsible service provider, we sort through all collected waste to ensure items are recycled or disposed of at licensed transfer stations in compliance with local environmental guidelines.",
    includedTitle: "What is Included in Our Waste Removal Service",
    includedIntro: "Our domestic waste removal and property clearance service covers loading, sorting, and disposal:",
    includedList: [
      "Clearing unwanted furniture, mattresses, beds, and household appliances",
      "Bagging and loading general rubbish, cardboard, and domestic clutter",
      "Clearing garden trimmings, leaves, branches, and light green waste",
      "Sweeping and tidying the yard, garage, or rooms after items are cleared",
      "Sorting waste items to separate recyclable cardboard, metals, and plastics",
      "Transporting materials to licensed West Midlands waste transfer facilities"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "Our clearance service is designed for households needing help with heavy lifting and bulk waste disposal:",
    forList: [
      "Homeowners clearing out garages, lofts, gardens, or preparing for renovations",
      "Tenants needing to clear out unwanted furniture and general waste before moving",
      "Landlords requiring quick rubbish removal after tenant checkouts to re-market properties",
      "Bereaved families needing a respectful, professional house clearance service"
    ],
    processTitle: "Our Waste Removal Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Quote & Volume Assessment",
        description: "We assess the volume and type of waste to provide a clear, weight-based clearance estimate."
      },
      {
        stepNumber: "02",
        title: "Loading & Sweeping",
        description: "Our team does the heavy lifting, loads the waste van, and sweeps the cleared areas."
      },
      {
        stepNumber: "03",
        title: "Responsible Recycling",
        description: "We sort the materials, sending recyclable items to local facilities and disposing of rubbish at licensed stations."
      }
    ],
    whyChoose: [
      {
        title: "Responsible Waste Removal Service",
        description: "We handle household waste responsibly and arrange disposal through appropriate waste facilities."
      },
      {
        title: "No Heavy Lifting Required",
        description: "Our team handles all the physical loading and clearing, saving you trips to the local tip."
      },
      {
        title: "Responsible Recycling Focus",
        description: "We sort through cleared items, aiming to recycle metals, cardboard, and plastics to minimize landfill waste."
      }
    ],
    areasContent: "We provide licensed domestic waste removal, garage clearance, and garden rubbish clearance across Walsall, Willenhall, Wolverhampton, Dudley, and the wider West Midlands.",
    faqs: [
      {
        question: "Are you a licensed waste carrier?",
        answer: "Yes, Refuse Shine Cleaning LTD is fully registered and licensed to carry and dispose of household waste. We provide official receipts for all clearances."
      },
      {
        question: "What items can you remove?",
        answer: "We remove general household waste, cardboard, paper, unwanted furniture (sofas, mattresses, wardrobes), appliances, and garden green waste (leaves, branches)."
      },
      {
        question: "Are there items you cannot accept?",
        answer: "Yes. Due to licensing guidelines, we cannot accept hazardous materials including asbestos, plasterboard, paints, oils, solvents, car batteries, or clinical waste."
      },
      {
        question: "How do you charge for waste removal?",
        answer: "Clearance rates are calculated based on the volume of waste (how much of the van is filled) and the weight of the materials. We offer clear estimates before loading."
      },
      {
        question: "Do you clear out entire houses?",
        answer: "Yes, we offer full house clearance services for landlords, estate executors, and homeowners preparing properties for sale or tenancy."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
