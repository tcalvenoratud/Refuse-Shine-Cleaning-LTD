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
    tagline: "Keep your home clean and tidy with our professional weekly or fortnightly recurring domestic cleaning services in Willenhall and Walsall.",
    metaTitle: "Regular House Cleaning in Willenhall & West Midlands | Refuse Shine",
    metaDescription: "Keep your home fresh with our weekly & fortnightly house cleaning in Willenhall, Walsall & surrounding areas. Reliable, vetted local cleaners. Get a free quote.",
    image: "/assets/services/regular-house-cleaning.png",
    altText: "Professional house cleaner dusting and polishing surfaces in a tidy domestic living room",
    introTitle: "Consistent, Reliable Domestic Cleaning Services",
    introContent: "Refuse Shine Cleaning LTD provides dependable, recurring domestic house cleaning services tailored around your busy lifestyle. We understand that keeping a home fresh and organised is challenging when balancing work and family life. Operating across Willenhall, Walsall, and nearby West Midlands areas, our vetted and insured local cleaners handle all routine household chores. We focus on essential maintenance tasks, including dusting furniture, vacuuming carpets, mopping hard floors, and sanitising high-use kitchen and bathroom surfaces. By choosing our weekly or fortnightly recurring home cleaning, you ensure a consistently clean living space without losing your valuable weekends. Our friendly team works to a custom checklist to match your exact home preferences, offering the peace of mind that comes with a reliable, professional domestic cleaning service.",
    includedTitle: "What is Included in Our Regular House Cleaning",
    includedIntro: "Our recurring domestic cleaning checklist is designed to maintain high standards of hygiene and tidiness in your home with every visit:",
    includedList: [
      "Dusting and wiping furniture, shelves, ornaments, and accessible household surfaces",
      "Vacuuming carpets, rugs, stairs, and accessible hard floor areas",
      "Mopping hard floors with sanitising solutions to maintain freshness",
      "Cleaning kitchen worktops, hobs, sink areas, and outer surfaces of appliances",
      "Sanitising bathrooms, including scrubbing toilets, basins, and bath or shower fixtures",
      "Emptying household waste bins and replacing bags for general tidying"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "Our recurring domestic cleaning is perfect for local households seeking a consistent cleaning schedule:",
    forList: [
      "Busy professionals looking to reclaim their evenings and weekends",
      "Families wanting to maintain a clean, tidy home environment for children",
      "Elderly residents who need assistance with routine domestic chores",
      "Pet owners seeking help with managing pet hair and dander build-up"
    ],
    processTitle: "Our Regular Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Understand Your Cleaning Needs",
        description: "We discuss your preferred schedule (weekly or fortnightly), home layout, and any specific chore priorities."
      },
      {
        stepNumber: "02",
        title: "Complete Your Scheduled Clean",
        description: "Your regular cleaner arrives at the scheduled time to clean your home in accordance with your checklist."
      },
      {
        stepNumber: "03",
        title: "Maintain Your Recurring Routine",
        description: "We keep your home clean with regular, dependable visits, adjusting our tasks whenever your needs change."
      }
    ],
    whyChoose: [
      {
        title: "Reliable Vetted Cleaners",
        description: "All staff members are background checked and vetted for your complete security and peace of mind."
      },
      {
        title: "Flexible Recurring Plans",
        description: "Easily adjust your cleaning visits, change priorities, or pause the service to match your schedule."
      },
      {
        title: "Consistent Service Quality",
        description: "We work to a detailed cleaning standard to ensure your property remains immaculate with every single visit."
      }
    ],
    areasContent: "We provide professional regular house cleaning services across Willenhall, Walsall, Wolverhampton, and surrounding West Midlands communities, helping local families maintain consistently clean homes.",
    faqs: [
      {
        question: "How often can I book regular house cleaning?",
        answer: "Our domestic cleaning services can be booked weekly or fortnightly. We work with you to establish a regular day and time that fits seamlessly into your household routine."
      },
      {
        question: "Do you offer weekly and fortnightly cleaning?",
        answer: "Yes, we offer both weekly and fortnightly options. A weekly clean is ideal for active households with children or pets, while fortnightly services work well for general maintenance."
      },
      {
        question: "What is included in regular house cleaning?",
        answer: "Our regular service covers dusting accessible surfaces, vacuuming carpets, mopping hard floors, wiping kitchen countertops and hobs, scrubbing bathrooms, and light tidying."
      },
      {
        question: "Can I request the same cleaner?",
        answer: "Yes, we always aim to assign the same regular cleaner to your property. This allows them to become familiar with your home layout, checklists, and personal preferences."
      },
      {
        question: "Can I change my cleaning schedule?",
        answer: "Absolutely. If you need to skip a visit, change your regular day, or temporarily pause service, simply notify us at least 24 hours in advance and we will accommodate your request."
      },
      {
        question: "Do you bring your own cleaning products?",
        answer: "We supply our own high-quality cleaning sprays and microfibre cloths for regular cleaning. If you prefer us to use specific products on your floors or furniture, just let us know."
      }
    ]
  },
  {
    id: "deep-clean",
    slug: "deep-cleaning",
    icon: Sparkles,
    title: "Deep Cleaning Services",
    tagline: "Restore comfort and hygiene to your home or office with a thorough, detailed deep clean in Willenhall and surrounding areas.",
    metaTitle: "Deep Cleaning Services in Willenhall & West Midlands | Refuse Shine",
    metaDescription: "Restore hygiene with our intensive deep cleaning services in Willenhall, Wolverhampton & Dudley. Vetted team, detailed checklist. Call for a free quote.",
    image: "/assets/services/deep-cleaning.png",
    altText: "Professional cleaner cleaning doors and polishing surfaces during an intensive house deep clean",
    introTitle: "Intensive Room-by-Room Deep Cleaning Services",
    introContent: "While regular cleaning keeps your home tidy, dirt, dust, and limescale can build up over time in hard-to-reach areas. Our deep cleaning service is a comprehensive, room-by-room clean designed to thoroughly refresh every corner of your property. We pay close attention to kitchens, bathrooms, woodwork, and areas under movable furniture, leaving your living space clean and comfortable. Serving homeowners and business managers in Willenhall, Dudley, and across the West Midlands, our professional cleaners target these accumulations using safe, pet-friendly products. Whether you are arranging a seasonal spring clean, preparing your house for a family event, or resetting a newly renovated property, we supply all required materials and equipment.",
    includedTitle: "What is Cleaned During Our Deep Cleaning Service",
    includedIntro: "Our deep cleaning service is extensive, taking care of areas that are often missed during standard cleans:",
    includedList: [
      "Thorough cleaning and descaling of bathrooms, shower screens, wall tiles, and fixtures",
      "Deep cleaning of kitchen worktops, splashbacks, sink areas, and exterior cabinets",
      "Removal of built-up dust and dirt from skirting boards, doors, door frames, and light switches",
      "Vacuuming under and behind furniture (where accessible), rugs, and detailed floor cleaning",
      "Dusting all high-level areas, light fittings, air vents, and picture frames",
      "Cleaning internal windows, sills, and window frames to remove dirt"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "A deep clean is recommended periodically to keep your living or working environment in top shape:",
    forList: [
      "Homeowners planning a thorough seasonal or spring cleaning reset",
      "Hosts preparing their homes for hosting guests, parties, or family events",
      "New buyers wanting a clean start before moving into a pre-owned home",
      "Residents requiring a detailed clean after home renovations or minor repairs"
    ],
    processTitle: "Our Deep Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Property Inspection & Focus",
        description: "We walk through your property with you to identify key areas of built-up dirt, dust, and special cleaning priorities."
      },
      {
        stepNumber: "02",
        title: "High-to-Low Deep Clean",
        description: "Our team cleans systematically from ceiling cobwebs and light fittings down to skirting boards, detailing every room."
      },
      {
        stepNumber: "03",
        title: "Detailed Quality Assessment",
        description: "We review the completed work against our rigorous deep clean checklist to verify that all surfaces meet our high standards."
      }
    ],
    whyChoose: [
      {
        title: "Deep Dirt & Grime Specialists",
        description: "We are equipped to tackle heavy dust, grease, and built-up scale that regular cleaning cannot remove."
      },
      {
        title: "Hard-to-Reach Area Focus",
        description: "We clean inside and behind accessible furniture, frames, vents, and detailed trim boards."
      },
      {
        title: "Revitalising Home Treatment",
        description: "We leave your home noticeably fresher, healthier, and fully sanitised for your household or staff."
      }
    ],
    areasContent: "Our team offers detailed deep cleaning services throughout Willenhall, Walsall, Dudley, and surrounding West Midlands areas, restoring comfort and hygiene to homes and commercial spaces.",
    faqs: [
      {
        question: "What is included in a deep clean?",
        answer: "A deep clean is a thorough top-to-bottom service. It includes descaling bathroom tiles and fixtures, degreasing kitchen surfaces, cleaning skirting boards, doors, switches, frames, internal window frames, and vacuuming edges."
      },
      {
        question: "How long does a deep cleaning service take?",
        answer: "Depending on the size of your property and the amount of built-up dust, a deep clean typically takes between 4 to 8 hours. We assign a team size to complete it efficiently."
      },
      {
        question: "Is deep cleaning available as a one-off service?",
        answer: "Yes. Our deep cleaning is most commonly booked as a one-off service. It is popular for spring cleans, before moving into a new house, or after building work."
      },
      {
        question: "Do you clean behind furniture?",
        answer: "We vacuum and clean behind and under furniture, provided the items are light enough to be safely moved by our team without risking damage to the flooring."
      },
      {
        question: "Do you bring cleaning products?",
        answer: "Yes, we bring all professional-grade cleaning products, vacuum cleaners, and fresh microfibre cloths needed to complete the deep clean."
      },
      {
        question: "What is the difference between regular and deep cleaning?",
        answer: "Regular cleaning maintains general tidiness and surface cleanliness on a recurring basis. Deep cleaning focuses on built-up grime, lime, and detailed cleaning of woodwork."
      }
    ]
  },
  {
    id: "kitchen-deep-clean",
    slug: "kitchen-deep-cleaning",
    icon: Utensils,
    title: "Kitchen Deep Cleaning",
    tagline: "Remove built-up grease, grease splatters, and food residues with our detailed kitchen deep cleaning services in Willenhall.",
    metaTitle: "Kitchen Deep Cleaning in Willenhall & West Midlands | Refuse Shine",
    metaDescription: "Restore a hygienic, fresh and sparkling finish to your kitchen with kitchen deep cleaning in Willenhall & West Bromwich. We remove stubborn grease, scale & carbon build-up. Request a free quote.",
    image: "/assets/services/kitchen-deep-cleaning.png",
    altText: "A professionally cleaned domestic kitchen showing degreased splashbacks and shiny chrome sink fittings",
    introTitle: "Professional Degreasing & Kitchen Sanitisation",
    introContent: "Kitchens are subject to daily wear, grease buildup, and food splashes that are hard to clean during routine tidying. Our kitchen deep cleaning service is designed to tackle these stubborn deposits and restore a hygienic environment. Refuse Shine Cleaning LTD helps residential households and rental property owners in Willenhall, West Bromwich, and surrounding West Midlands communities maintain clean cooking environments. We scrub tiled splashbacks, degrease extraction hoods, clean countertops, and clean the exterior casings of major appliances. Our team also washes sink basins, polishes chrome fittings, and cleans inside empty cupboards. This service is ideal for keeping food preparation zones hygienic, eliminating sticky grease deposits, and maintaining kitchen surfaces in top condition.",
    includedTitle: "What is Cleaned During Kitchen Deep Cleaning",
    includedIntro: "Our targeted kitchen deep clean focuses on areas prone to heavy grease and bacterial buildup:",
    includedList: [
      "Degreasing and sanitising kitchen worktops, counters, and splashbacks",
      "Scrubbing and descaling sinks, taps, drains, and polishing metal fittings",
      "Cleaning cupboard exteriors and wiping out internal drawers and shelving",
      "Detailed cleaning of cooker hood exteriors, filters, and extractor casing",
      "Sanitising high-touch kitchen surfaces and dining countertops",
      "Sweeping, sanitising, and deep mopping kitchen floor tiles"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "This targeted cleaning service is designed for households and properties requiring high-hygiene kitchen maintenance:",
    forList: [
      "Households who cook frequently and need a deep degreasing reset",
      "Families wishing to ensure sanitary food preparation zones to prevent bacteria",
      "Landlords prepping a property to look attractive to new prospective tenants",
      "Tenants wanting to clean a greasy kitchen before checkout inspections"
    ],
    processTitle: "Our Kitchen Deep Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Kitchen Inspection",
        description: "We assess grease buildup on walls, cupboards, and cookers to plan our targeted degreasing approach."
      },
      {
        stepNumber: "02",
        title: "Degreasing & Detailed Cleaning",
        description: "We apply safe, professional degreasing agents to loosen carbon and oils, scrubbing splashbacks, counters, and extraction hoods."
      },
      {
        stepNumber: "03",
        title: "Sanitisation & Final Polish",
        description: "We wipe down prep surfaces with suitable cleaning products, polish chrome fixtures, and wash down the flooring."
      }
    ],
    whyChoose: [
      {
        title: "Professional Grease Removal",
        description: "We use effective, non-abrasive degreasing agents to break down heavy carbon and oil build-up safely."
      },
      {
        title: "Detailed Appliance & Surface Cleaning",
        description: "We clean hobs, hoods, splashbacks, and outer casings, extending the appeal of your kitchen space."
      },
      {
        title: "Hygienic Food Preparation Areas",
        description: "We sanitise high-touch surfaces, cupboards, and sinks to eliminate bacteria and cross-contamination."
      }
    ],
    areasContent: "We deliver specialised kitchen deep cleaning and degreasing services in Willenhall, West Bromwich, and other West Midlands towns, helping households maintain sanitary cooking spaces.",
    faqs: [
      {
        question: "What does kitchen deep cleaning include?",
        answer: "It includes deep cleaning of worktops, splashbacks, descaling the sink and taps, degreasing extraction hoods, wiping cooker surfaces, cleaning cabinet exteriors, and sanitising internal shelves."
      },
      {
        question: "Do you remove built-up kitchen grease?",
        answer: "Yes, we specialise in removing built-up grease and sticky oils from kitchen splashbacks, cooker hoods, countertops, and cupboards using professional degreasing agents."
      },
      {
        question: "Do you clean inside cupboards?",
        answer: "Yes, we wipe down and clean inside all kitchen cupboards, drawers, and shelving, provided they are completely emptied before our team begins."
      },
      {
        question: "Do you clean splashbacks and tiles?",
        answer: "Yes. Tiled splashbacks and grout lines near hobs collect significant grease. We scrub and degrease these areas to restore hygiene and appearance."
      },
      {
        question: "Can oven cleaning be added?",
        answer: "Yes. While we clean appliance exteriors in the standard kitchen deep clean, a full internal oven clean can be added as an optional extra."
      },
      {
        question: "How long does a kitchen deep clean take?",
        answer: "A standard domestic kitchen deep clean typically takes between 2 to 4 hours, depending on the size and amount of grease build-up."
      }
    ]
  },
  {
    id: "bathroom-clean",
    slug: "bathroom-cleaning",
    icon: Bath,
    title: "Bathroom Cleaning",
    tagline: "Tackle tough limescale, soap scum, and water spots with our detailed bathroom cleaning services in Willenhall and surrounding areas.",
    metaTitle: "Bathroom Cleaning in Willenhall & West Midlands | Refuse Shine",
    metaDescription: "Professional bathroom cleaning & detailed limescale removal in Willenhall, Walsall & Birmingham. Stubborn tile & screen cleaning. Get your free quote.",
    image: "/assets/services/bathroom-cleaning.png",
    altText: "A sanitised and clean bathroom shower cubicle with polished chrome shower heads and faucets",
    introTitle: "Detailed Descaling & Bathroom Sanitisation",
    introContent: "Bathrooms require regular detailed cleaning due to moisture buildup, which leads to limescale, soap scum, and tile discolouration. Our bathroom cleaning service focuses on deep cleaning and descaling toilets, washbasins, bathtubs, shower enclosures, glass screens, and wall tiles. We scrub fittings and clean grout lines to leave your bathroom fresh and hygienic. Serving Willenhall, Walsall, and Birmingham, our local cleaning team delivers detailed scrubbing and polishing, keeping your high-moisture rooms fresh, free of limescale, and fully sanitised.",
    includedTitle: "What is Included in Our Bathroom Cleaning Service",
    includedIntro: "Our detailed bathroom cleaning checklist ensures every corner of your bathroom is scrubbed and sanitised:",
    includedList: [
      "Thorough scrubbing and sanitisation of toilet bowls, seats, and flush handles",
      "Scrubbing basins, bathtubs, and shower trays to remove soap scum",
      "Descaling shower heads, taps, and polishing chrome fittings",
      "Detailed scrubbing of bathroom wall tiles and accessible grout lines",
      "Polishing mirrors and glass shower screens to a streak-free finish",
      "Wiping bathroom cabinets and sanitising the floor surfaces"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "This focused service is designed for households needing a professional sanitisation of their high-moisture rooms:",
    forList: [
      "Homeowners dealing with stubborn limescale deposits and water marks",
      "Families wanting to eliminate bacteria and sanitise their daily washrooms",
      "Property owners looking to refresh discoloured bathroom tiles and fittings",
      "Busy individuals who dislike scrubbing tiles, grout, and shower screens"
    ],
    processTitle: "Our Bathroom Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Pre-Treatment & Descaling",
        description: "We apply descaling agents to chrome fixtures, glass screens, and tiled borders to break down hard water deposits."
      },
      {
        stepNumber: "02",
        title: "Detailed Scrubbing",
        description: "We scrub the toilet, shower tray, bathtub, washbasin, and wall tiles to remove soap scum, grime, and mildew."
      },
      {
        stepNumber: "03",
        title: "Sanitisation & Final Finish",
        description: "We sanitise high-touch surfaces, polish glass mirrors and screens, and mop floor surfaces with sanitising wash."
      }
    ],
    whyChoose: [
      {
        title: "Limescale & Soap Scum Removal",
        description: "We use professional products to safely lift stubborn water scale from chrome taps, shower heads, and glass."
      },
      {
        title: "Detailed Tile & Fixture Cleaning",
        description: "We scrub tiled walls, grout lines, and corners where moisture-related mould and residues build up."
      },
      {
        title: "Hygienic Bathroom Finish",
        description: "We disinfect toilets, sinks, and tubs, leaving your bathroom fresh, clean, and sanitised."
      }
    ],
    areasContent: "We offer professional bathroom scrubbing and descaling services across Willenhall, Walsall, Birmingham, and the wider West Midlands, keeping washrooms hygienic and free of limescale.",
    faqs: [
      {
        question: "Does bathroom cleaning include limescale removal?",
        answer: "Yes, we apply specialised descaling products to help dissolve and remove built-up limescale on taps, shower screens, and basins."
      },
      {
        question: "Do you clean shower screens?",
        answer: "Yes. Shower screens gather significant soap scum and water spots. We scrub and polish screens to restore a clean, streak-free glass finish."
      },
      {
        question: "Do you clean bathroom tiles and grout?",
        answer: "Yes. We scrub bathroom wall tiles and accessible grout lines to remove moisture-related residues, soap scum, and light discolouration."
      },
      {
        question: "What areas of the bathroom are sanitised?",
        answer: "We thoroughly sanitise high-touch areas, including toilet seats, flush buttons, basins, taps, handles, and bath/shower fixtures."
      },
      {
        question: "How long does bathroom cleaning take?",
        answer: "A detailed bathroom cleaning usually takes between 1.5 to 3 hours, depending on the size of the room and level of limescale present."
      },
      {
        question: "Do you bring your own descaling products?",
        answer: "Yes, we supply all descaling and sanitising products, scrubbing brushes, and fresh cloths needed to clean your bathroom."
      }
    ]
  },
  {
    id: "end-of-tenancy",
    slug: "end-of-tenancy-cleaning",
    icon: Key,
    title: "End of Tenancy Cleaning",
    tagline: "Prepare your rental property for inventory checks with detailed, checklist-based end of tenancy cleaning services in Willenhall and surrounding areas.",
    metaTitle: "End of Tenancy Cleaning in Willenhall & West Midlands | Refuse Shine",
    metaDescription: "Detailed move-out cleaning in Willenhall & West Midlands. Help meet letting agent checklist standards & ease your property handover. Request a free quote.",
    image: "/assets/services/end-of-tenancy-cleaning.png",
    altText: "An empty clean apartment room prepared for checkout inspection in the West Midlands",
    introTitle: "Comprehensive Move-Out Cleaning",
    introContent: "Moving home is a busy process, and leaving a rental property clean is essential for a smooth handover. Refuse Shine Cleaning LTD provides comprehensive end of tenancy cleaning across Willenhall, Walsall, Wolverhampton, and the wider West Midlands. We work to a detailed checkout checklist that covers all key areas letting agents and landlords inspect, including deep cleaning bathrooms, kitchens, cupboards inside and out, internal windows, sills, and woodwork. This clean helps tenants meet their contractual obligations and allows landlords or letting agents to market their empty properties immediately.",
    includedTitle: "What is Cleaned During Our End of Tenancy Clean",
    includedIntro: "Our end of tenancy clean is a deep clean that follows standard estate agency checklists:",
    includedList: [
      "Deep cleaning all kitchen cupboards, drawers, and worktops inside and out",
      "Scrubbing and descaling bathroom toilets, baths, showers, and wall tiles",
      "Cleaning internal window glass, frames, and windowsills throughout the property",
      "Wiping down doors, frames, skirting boards, sockets, and light switches in every room",
      "Thorough vacuuming of carpets and mopping hard floor surfaces",
      "Dusting light fittings, removing cobwebs, and wiping wardrobes inside and out"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "Our move-out property cleaning is designed for anyone transitioning in or out of a rental property:",
    forList: [
      "Tenants wanting to leave the rental property clean for inspection checkouts",
      "Landlords wanting to present a spotless property to attract high-quality renters",
      "Letting agents seeking a reliable cleaning partner for end-of-tenancy changeovers",
      "Home buyers or sellers wanting a complete property clean before moving day"
    ],
    processTitle: "Our End of Tenancy Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Property Assessment",
        description: "We review your rental agreement clauses and key priorities to ensure we align with your letting agent's requirements."
      },
      {
        stepNumber: "02",
        title: "Room-by-Room Deep Clean",
        description: "Our cleaners deep clean every room of the property from top to bottom, including cupboards, trim work, and windows."
      },
      {
        stepNumber: "03",
        title: "Final Handover Check",
        description: "We conduct a final inspection review to ensure the property is fully prepared for landlord checkout viewings."
      }
    ],
    whyChoose: [
      {
        title: "Detailed Property-Wide Checklist",
        description: "We follow a detailed, checkout-focused checklist to ensure all key areas, including cupboards and window frames, are cleaned thoroughly."
      },
      {
        title: "Tenant, Landlord & Letting Agent Friendly",
        description: "We help make property handovers smoother for everyone involved by delivering reliable cleanliness."
      },
      {
        title: "Inspection-Ready Finish",
        description: "We detail trim work, fixtures, and appliances, ensuring the property looks well-maintained for checkouts."
      }
    ],
    areasContent: "We provide checklist-based end of tenancy cleaning services in Willenhall, Walsall, Wolverhampton, and surrounding West Midlands locations, helping prepare properties for immediate inspection.",
    faqs: [
      {
        question: "What is included in end of tenancy cleaning?",
        answer: "Our tenancy clean covers all kitchen cupboards (inside/out), descaling bathrooms, internal windows and sills, wiping skirting boards, doors, switches, frames, and vacuuming and mopping floors."
      },
      {
        question: "Do you clean inside cupboards and wardrobes?",
        answer: "Yes. We clean inside all kitchen cabinets, drawers, bathroom cupboards, and bedroom wardrobes, provided they are empty before we arrive."
      },
      {
        question: "Can tenants and landlords book the service?",
        answer: "Yes. We are regularly booked by tenants moving out, landlords preparing for new tenancies, letting agents, and homeowners moving into new properties."
      },
      {
        question: "Do you clean internal windows?",
        answer: "Yes, we clean internal window glass, frames, and windowsills throughout the property as part of our standard end of tenancy checklist."
      },
      {
        question: "How should I prepare my property before the cleaner arrives?",
        answer: "The property must be completely empty of personal belongings, rubbish, and food. Cupboards and wardrobes must be cleared so our team can access and clean the interiors."
      },
      {
        question: "Does this service guarantee my deposit return?",
        answer: "Our detailed cleaning is designed to help the property meet standard checkout cleanliness guidelines. However, deposit returns depend entirely on your tenancy agreement, property damage, and your landlord or letting agent's final inspection decision."
      }
    ]
  },
  {
    id: "move-in-out",
    slug: "move-in-move-out-cleaning",
    icon: Truck,
    title: "Move-In / Move-Out Cleaning",
    tagline: "Ensure a fresh start in your new home or leave your old property spotless for incoming residents with our move-in/move-out cleaning services in Walsall & West Midlands.",
    metaTitle: "Move In & Move Out Cleaning in Walsall & Wolverhampton | Refuse Shine",
    metaDescription: "Stress-free move-in & move-out cleaning services in Walsall, Wolverhampton & Dudley. Detailed top-to-bottom clean. Fully insured team. Get a free quote.",
    image: "/assets/services/move-in-move-out-cleaning.png",
    altText: "Bright empty modern living room cleaned and ready for moving in",
    introTitle: "Bespoke Move-In & Move-Out Cleaning Services",
    introContent: "Moving into a new house or preparing to leave your current property is one of life's most demanding transitions. At Refuse Shine Cleaning LTD, we make the process smoother by providing intensive move-in and move-out cleaning services across Walsall, Wolverhampton, Dudley, and the wider West Midlands. Our dedicated team performs a comprehensive top-to-bottom sanitisation of empty properties, ensuring a clean slate for new occupants. Whether you are a buyer wanting to ensure your new home is sanitised before unpacking, or a seller wishing to present your property in the best possible light to attract buyers, we customize our checklists to meet your requirements. We deep clean kitchens, scrub bathrooms, detail woodwork, wash interior windows, and refresh floors, saving you valuable hours during your relocation.",
    includedTitle: "What is Included in Our Move-In / Move-Out Clean",
    includedIntro: "Our move-in and move-out cleaning checklist is designed to cover every detail of an empty property:",
    includedList: [
      "Deep cleaning and sanitisation of kitchen worktops, sinks, splashbacks, and cupboard interiors/exteriors",
      "Scrubbing and descaling baths, showers, shower screens, basins, and toilets",
      "Wiping down internal windows, window frames, and windowsills in all rooms",
      "Cleaning baseboards, doors, door frames, light switches, and power sockets to remove dust and fingerprints",
      "Vacuuming all carpets, rugs, edges, and mopping hard floor surfaces",
      "Removing cobwebs from high ceilings, corners, and dusting light fittings"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "This service is tailored for households and property owners experiencing property handovers:",
    forList: [
      "Home buyers wanting a fully sanitised and clean environment before moving their furniture in",
      "Home sellers aiming to maximise their property's market value and appeal during viewings",
      "Tenants requiring a detailed transition clean between properties",
      "Landlords preparing an empty flat or house for immediate rental listing"
    ],
    processTitle: "Our Move-In / Move-Out Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Schedule & Requirements",
        description: "We confirm your moving dates, property size, key focus areas, and any appliance cleaning additions."
      },
      {
        stepNumber: "02",
        title: "Intensive Empty-Property Clean",
        description: "Our team cleans systematically through the vacant rooms, executing our detailed moving checklist."
      },
      {
        stepNumber: "03",
        title: "Ready for Handover",
        description: "We review the final result, leaving the property spotless and prepared for the arrival of furniture or inspector walkthroughs."
      }
    ],
    whyChoose: [
      {
        title: "Hassle-Free Relocation",
        description: "We take care of the heavy cleaning so you can focus entirely on packing, moving logistics, and settling in."
      },
      {
        title: "Property-Wide Sanitisation",
        description: "We sanitise high-touch surfaces, cupboards, and bathroom areas to provide a safe, healthy environment."
      },
      {
        title: "Insured Cleaning Specialists",
        description: "Our team is fully insured and experienced in managing moving-day cleanups efficiently and safely."
      }
    ],
    areasContent: "We deliver professional move-in and move-out cleaning services throughout Walsall, Wolverhampton, Dudley, West Bromwich, and adjacent West Midlands districts, ensuring clean property handovers.",
    faqs: [
      {
        question: "What is move-in / move-out cleaning?",
        answer: "It is an intensive, top-to-bottom deep clean of a vacant property. It covers all internal rooms, inside/outside of empty cupboards, baseboards, doors, internal windows, and sanitisation of kitchens and bathrooms."
      },
      {
        question: "Must the property be empty before cleaning?",
        answer: "Yes, for the best results, the property should be empty of all personal belongings and furniture. This allows our cleaners to access every corner, baseboard, and cupboard shelf easily."
      },
      {
        question: "Do you clean appliances like ovens?",
        answer: "Wiping the exterior of major kitchen appliances is included. Internal deep cleaning of ovens, fridges, or washing machines can be added as optional extras when booking."
      },
      {
        question: "How long does a moving clean take?",
        answer: "A typical move-in or move-out clean takes between 4 to 8 hours depending on the size of the house and its overall condition."
      },
      {
        question: "Do you supply cleaning products and tools?",
        answer: "Yes, our team brings all professional-grade cleaning products, vacuum cleaners, mops, and cloths needed to perform the clean."
      }
    ]
  },
  {
    id: "airbnb-clean",
    slug: "airbnb-short-let-cleaning",
    icon: Calendar,
    title: "Airbnb & Short Let Cleaning",
    tagline: "Maintain five-star guest reviews with our professional Airbnb turnarounds, laundry, and short-let cleaning services in Walsall, Birmingham & West Midlands.",
    metaTitle: "Airbnb & Short Let Cleaning in Walsall & Birmingham | Refuse Shine",
    metaDescription: "Reliable Airbnb turnarounds & guest changeover cleaning in Walsall, Birmingham & Wolverhampton. Linen prep & sanitisation. Keep your guest reviews spotless.",
    image: "/assets/services/airbnb-short-let-cleaning.png",
    altText: "Prism hotel-styled bedroom with fresh linens and folded towels on the bed",
    introTitle: "Five-Star Short-Term Rental Cleaning & Guest Turnarounds",
    introContent: "In the short-term rental market, cleanliness directly influences your ratings, booking numbers, and revenue. Refuse Shine Cleaning LTD provides dependable Airbnb and short-let cleaning services across Walsall, Birmingham, Wolverhampton, and surrounding West Midlands areas. We understand that checkout schedules are tight, which is why our team operates with speed and precision during the critical turnaround window. We clean and sanitise kitchens and bathrooms, restock guest essentials, arrange fresh bed linen, and set up towels to present your property beautifully. Our cleaners work to a checklist customised to your property, ensuring every new guest walks into a spotless, welcoming space that smells fresh and looks immaculate.",
    includedTitle: "What is Included in Our Airbnb Cleaning Checklist",
    includedIntro: "Our changeover cleaning checklist is designed to match high hospitality standards with every single visit:",
    includedList: [
      "Stripping dirty bed sheets and towels, and dressing beds with fresh, crisp linen",
      "Deep cleaning and sanitising high-use zones, including kitchen worktops, basins, and appliances",
      "Scrubbing bathrooms, polishing shower glass, and sanitising toilets to a pristine standard",
      "Emptying trash bins, replacing bags, and disposing of any food items left behind by previous guests",
      "Vacuuming carpets, wiping down tables, and sanitising hard floors to remove foot traffic dirt",
      "Arranging pillows, cushions, toiletries, and checking for property damage or left-behind guest belongings"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "Our guest turnaround service is tailored for busy property hosts and operators:",
    forList: [
      "Airbnb hosts wanting to automate their turnaround cleaning and guest changeovers",
      "Short-let landlords aiming to maintain high cleanliness ratings on booking platforms",
      "Property management companies seeking a reliable local cleaning partner in the West Midlands",
      "Second-home owners who need a trusted team to prepare their property for guest check-ins"
    ],
    processTitle: "Our Airbnb Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Booking Synchronization",
        description: "We align our cleaning visits with your booking calendars, checkout times, and check-in schedules."
      },
      {
        stepNumber: "02",
        title: "Rapid Changeover Clean",
        description: "Our team cleans the property, makes beds, prepares towels, and checks for left-behind items or damage."
      },
      {
        stepNumber: "03",
        title: "Guest-Ready Checklist",
        description: "We verify the visual appeal of the rooms and restock guest essentials, leaving the property clean, presentable and ready for the next guest"
      }
    ],
    whyChoose: [
      {
        title: "Fast Turnaround Speeds",
        description: "We work efficiently around guest check-out and check-in times to help keep your property ready for the next stay."
      },
      {
        title: "Five-Star Cleaning Quality",
        description: "We focus on details like shiny chrome, hair-free bathrooms, and fresh smells to ensure positive reviews."
      },
      {
        title: "Host Peace of Mind",
        description: "We act as your eyes on the ground, reporting any guest damage or maintenance issues immediately after checkout."
      }
    ],
    areasContent: "We offer hospitality-grade short-let turnarounds and Airbnb cleaning services across Walsall, Birmingham, Wolverhampton, West Bromwich, and nearby West Midlands areas.",
    faqs: [
      {
        question: "How quickly can you complete an Airbnb turnaround?",
        answer: "Our team typically completes standard guest changeovers in 2 to 4 hours, depending on the property size. We schedule visits between guest check-out and next check-in."
      },
      {
        question: "Do you handle guest linen and towels?",
        answer: "Yes, we strip bed linens and towels and replace them with fresh ones supplied by the host or property owner."
      },
      {
        question: "Do you report property damage?",
        answer: "Absolutely. If our cleaning team spots any damage, breakages, or items left behind by previous guests, we document it and notify you immediately."
      },
      {
        question: "Do you restock guest amenities?",
        answer: "Yes. We can restock hand soaps, toilet rolls, tea, coffee, and other host-provided guest essentials during our visit."
      },
      {
        question: "Are your cleaners insured?",
        answer: "Yes, all our cleaners are background-checked, trained in short-let cleaning standards, and fully insured for your safety."
      }
    ]
  },
  {
    id: "post-construction",
    slug: "post-construction-cleaning",
    icon: Hammer,
    title: "Post Construction Cleaning",
    tagline: "Remove fine dust, paint splatters, plaster residue, and builders' debris from your newly built or renovated space in Dudley & West Midlands.",
    metaTitle: "Post Construction Cleaning in Dudley & Wolverhampton | Refuse Shine",
    metaDescription: "Professional after-builders & post-construction cleaning in Dudley, Wolverhampton & Walsall. Thorough dust removal. Fully insured team. Get a free quote.",
    image: "/assets/services/post-construction-cleaning.png",
    altText: "Newly renovated home interior being detailed by a professional cleaner",
    introTitle: "Thorough After-Builders & Renovation Cleanup Services",
    introContent: "Building work and home renovations generate significant amounts of fine white dust, plaster splatters, and paint drops that settle on every surface. Our post-construction cleaning service is designed to tackle this heavy mess and make your newly built or renovated property clean and livable. Serving building contractors, property developers, and homeowners in Dudley, Wolverhampton, Walsall, and adjacent West Midlands locations, Refuse Shine Cleaning LTD provides deep cleaning solutions for post-renovation spaces. Our experienced cleaners use advanced tools and filtration vacuums to capture fine airborne dust, scrape paint drops off window glass, scrub plaster from tiles, and detail skirting boards, leaving your space clean, healthy, and ready for use.",
    includedTitle: "What is Cleaned During Post-Construction Cleaning",
    includedIntro: "Our after-builders cleaning checklist focuses on eliminating stubborn dust, paint, and construction debris:",
    includedList: [
      "Thorough extraction of fine construction dust from walls, ceilings, light fixtures, and vents",
      "Cleaning internal windows, frames, tracks, and scraping off paint, plaster, or tape adhesive residues",
      "Deep cleaning and sanitising bathrooms, removing grout haze, and polishing fixtures",
      "Wiping kitchen worktops, appliances, and cleaning dust out of cupboards inside and out",
      "Cleaning baseboards, doors, door frames, power sockets, and light switches",
      "Industrial vacuuming of all carpets, edges, and detailed scrubbing of hard floor surfaces"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "This heavy-duty cleaning is ideal for projects transitioning from building work to occupancy:",
    forList: [
      "Property developers preparing newly built houses or commercial units for handovers",
      "Homeowners who have completed extensions, loft conversions, or room renovations",
      "Building contractors looking for a reliable team to handle final handover cleaning",
      "Interior designers preparing a newly fitted property for client viewings"
    ],
    processTitle: "Our Post-Construction Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Site Assessment & Safety",
        description: "We inspect the renovated areas to determine dust levels, adhesive residues, and check safety guidelines."
      },
      {
        stepNumber: "02",
        title: "Multi-Stage Dust Extraction",
        description: "We clean from top to bottom, using high-filtration vacuums, damp wiping walls, and detailed scraping of paint or plaster."
      },
      {
        stepNumber: "03",
        title: "Detailing & Final Shine",
        description: "We polish fixtures, clean windows, and execute final surface wipes to deliver a clean, move-in-ready finish."
      }
    ],
    whyChoose: [
      {
        title: "Fine Dust Extraction Experts",
        description: "We use industrial cleaning methods to capture fine plaster and drywall dust that standard home vacuums cannot handle."
      },
      {
        title: "Paint & Adhesive Removal",
        description: "Our team is trained to safely scrape paint splatters, plaster, and tape residues from glass and frames without scratching."
      },
      {
        title: "Reliable Handover Partners",
        description: "We work around your construction schedules to help you meet developer handover deadlines and inspections."
      }
    ],
    areasContent: "We provide specialised post-construction and after-builders cleaning services in Dudley, Wolverhampton, Walsall, West Bromwich, Cannock, and across the West Midlands.",
    faqs: [
      {
        question: "What is post-construction cleaning?",
        answer: "It is an intensive, multi-stage deep clean designed to remove fine construction dust, plaster residue, paint splatters, adhesive tape, and builders' debris from a renovated or newly built property."
      },
      {
        question: "How does after-builders cleaning differ from a standard deep clean?",
        answer: "After-builders cleaning targets construction-specific issues like fine gypsum dust, grout haze on tiles, paint splatters on glass, and adhesive labels on new sanitaryware, requiring specialised tools and scraping techniques."
      },
      {
        question: "Does post-construction cleaning include waste disposal?",
        answer: "Our service focuses on deep cleaning and surface detailing. While we collect and bag construction dust and light debris, the disposal of major construction waste should be arranged separately."
      },
      {
        question: "When should after-builders cleaning be scheduled?",
        answer: "It should be booked after all building work, plumbing, painting, and snagging are completed, and all tools have been removed from the site, preventing dust from resettling."
      },
      {
        question: "Are your cleaners trained for safety?",
        answer: "Yes, our cleaners are trained to work safely in post-construction environments and wear appropriate personal protective equipment (PPE)."
      }
    ]
  },
  {
    id: "carpet-clean",
    slug: "carpet-cleaning",
    icon: Layers,
    title: "Carpet Cleaning",
    tagline: "Revitalise your home or office carpets, remove stubborn stains, and eliminate deep-seated odours with our professional hot water extraction carpet cleaning in Willenhall.",
    metaTitle: "Carpet Cleaning Services in Willenhall & Walsall | Refuse Shine",
    metaDescription: "Professional hot water extraction carpet cleaning in Willenhall, Walsall & Cannock. Deep stain & odour removal. Pet-safe treatments. Get a free quote.",
    image: "/assets/services/carpet-cleaning.png",
    altText: "Professional steam carpet cleaning wand showing a clean path on plush carpet",
    introTitle: "Deep Steam Carpet Cleaning & Stain Removal",
    introContent: "Carpets act as filters in our homes, trapping dirt, dust mites, pet dander, and allergens deep within their fibres over time. Vacuuming alone cannot remove these deep-seated deposits. Refuse Shine Cleaning LTD offers professional hot water extraction carpet cleaning services in Willenhall, Walsall, Cannock, and across the West Midlands. We use advanced steam cleaning equipment that injects hot water and eco-friendly cleaning agents deep into the carpet pile, breaking down dirt, oils, and bacteria. The system then extracts the liquid along with the grime, leaving your carpets clean, smelling fresh, and feeling soft. Whether you are dealing with beverage spills, pet stains, high-traffic walkway discolouration, or simply want to refresh your rooms, our experienced technicians deliver high-quality results safe for children and pets.",
    includedTitle: "What is Included in Our Carpet Cleaning Service",
    includedIntro: "Our multi-stage carpet cleaning process is designed to achieve maximum dirt and stain extraction:",
    includedList: [
      "Thorough dry vacuuming of the carpet to remove loose surface dirt and hair",
      "Targeted pre-treatment of stubborn spots, stains, grease, and high-traffic lanes",
      "Applying pre-spray cleaning agents to loosen deep-seated soil within carpet fibres",
      "High-pressure hot water extraction cleaning to deep clean and sanitise the carpet pile",
      "Extracting excess water to ensure fast drying times and prevent damp smells",
      "Deodorising the carpet to leave rooms smelling clean and fresh"
    ],
    forTitle: "Who This Service Is For",
    forIntro: "Professional carpet cleaning is recommended once or twice a year for households and offices:",
    forList: [
      "Pet owners needing to remove muddy paw stains, pet accidents, hair, and pet odours",
      "Allergy sufferers wanting to help remove embedded dust, pet hair and everyday allergens from carpet fibres",
      "Tenants needing a professional carpet clean receipt for tenancy deposit returns",
      "Commercial business owners wanting to maintain clean carpets in offices or waiting rooms"
    ],
    processTitle: "Our Carpet Cleaning Process",
    processSteps: [
      {
        stepNumber: "01",
        title: "Inspection & Spot Testing",
        description: "We identify carpet fiber types, locate stubborn stains, and select suitable cleaning agents."
      },
      {
        stepNumber: "02",
        title: "Pre-Spray & Extraction",
        description: "We apply pre-treatments to stains and high-traffic areas, followed by high-pressure steam extraction cleaning."
      },
      {
        stepNumber: "03",
        title: "Drying & Grooming",
        description: "We extract maximum moisture to ensure carpets dry within hours, leaving them fresh and smelling clean."
      }
    ],
    whyChoose: [
      {
        title: "Hot Water Extraction Power",
        description: "We use professional steam extraction methods to draw out deep-seated dirt from the base of carpet fibres."
      },
      {
        title: "Stain & Odour Treatments",
        description: "We treat tough beverage stains, pet marks, and mud, neutralizing odours at the source."
      },
      {
        title: "Child & Pet Safe Products",
        description: "We use non-toxic, eco-friendly cleaning formulas that are safe for your children and household pets."
      }
    ],
    areasContent: "We provide professional hot water extraction carpet cleaning across Willenhall, Walsall, Wolverhampton, Dudley, Cannock, and surrounding West Midlands communities.",
    faqs: [
      {
        question: "What carpet cleaning method do you use?",
        answer: "We primarily use hot water extraction (often referred to as steam cleaning). This method is widely recommended by carpet manufacturers as it deep cleans and sanitises the pile."
      },
      {
        question: "How long do carpets take to dry?",
        answer: "Typically, carpets dry within 4 to 8 hours depending on ventilation, room temperature, and carpet thickness. We extract maximum moisture to speed up drying."
      },
      {
        question: "Can you remove all stains from my carpet?",
        answer: "While we have high success rates removing grease, mud, coffee, and pet stains, some substances (like dye, bleach, or older stains) can permanently discolour carpet fibres. We always test and do our best to lift them."
      },
      {
        question: "Do I need to move my furniture?",
        answer: "We ask that you move small items like toys, plants, and side tables before we arrive. We can clean around heavier furniture like wardrobes and sofas."
      },
      {
        question: "Is your carpet cleaning safe for pets and children?",
        answer: "Yes, We use professional cleaning products selected with households, children and pets in mind. Customers should follow the product guidance regarding drying and re-entry."
      }
    ]
  },
  {
    id: "appliance-clean",
    slug: "appliance-cleaning",
    icon: Flame,
    title: "Appliance Cleaning",
    tagline: "Restore a hygienic finish to your ovens, fridges, and microwaves with detailed appliance cleaning services in West Bromwich and surrounding areas.",
    metaTitle: "Appliance & Oven Cleaning in West Bromwich & Willenhall | Refuse Shine",
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
