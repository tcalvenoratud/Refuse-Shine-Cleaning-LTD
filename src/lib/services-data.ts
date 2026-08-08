import { Home, Sparkles, Utensils, Bath, Key, LucideIcon } from "lucide-react";

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
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
