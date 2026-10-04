export interface LocationCustomerType {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
}

export interface LocationWhyChooseItem {
  title: string;
  description: string;
}

export interface LocationFAQItem {
  question: string;
  answer: string;
}

export interface LocationNearbyArea {
  name: string;
  slug: string;
  postcode: string;
  distanceOrNote: string;
}

export interface LocationDetail {
  slug: string;
  name: string;
  postcodes: string;
  shortDescription: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  
  // Section 2: Local Introduction (150–250 words)
  introTitle: string;
  introParagraphs: string[];

  // Section 3: Featured Services (Strictly 4 tailored service slugs from SERVICES_DATA)
  featuredServiceSlugs: string[];

  // Section 4: Why Choose Refuse Shine
  whyChooseTitle: string;
  whyChoose: LocationWhyChooseItem[];

  // Section 5: Nearby Locations (4–6 logically relevant areas)
  nearbyTitle: string;
  nearbyIntro: string;
  nearbyLocations: LocationNearbyArea[];

  // Section 6: Local Context
  contextTitle: string;
  contextContent: string[];

  // Section 7: Location-specific FAQs (4–6)
  faqs: LocationFAQItem[];

  // Section 8: CTA copy
  ctaTitle: string;
  ctaDescription: string;
}

export const LOCATIONS_DATA: LocationDetail[] = [
  {
    slug: "willenhall",
    name: "Willenhall",
    postcodes: "WV12, WV13",
    shortDescription: "Our primary West Midlands headquarters. Providing trusted regular house cleaning, deep cleaning, and end of tenancy cleaning across Willenhall.",
    tagline: "Professional residential and commercial cleaning services in Willenhall from our dedicated local team based on Lichfield Road.",
    metaTitle: "Cleaning Services in Willenhall | Refuse Shine Cleaning LTD",
    metaDescription: "Professional cleaning services in Willenhall for homes, tenants and businesses. Regular domestic cleaning, deep cleans, end of tenancy and carpets. Get a free quote.",
    heroBadge: "Primary Operations Hub — Willenhall",
    introTitle: "Reliable Cleaning Services in Willenhall",
    introParagraphs: [
      "Refuse Shine Cleaning LTD is proud to be based directly in Willenhall (Flat 23 Lichfield House, 232 Lichfield Road). As our primary operational base, Willenhall receives our fastest response times and dedicated daily cleaning teams. We serve local homeowners, private tenants, estate agents, landlords, and commercial premises across the entire WV12 and WV13 postcode districts, including Short Heath, New Invention, Stroud Avenue, and central Willenhall.",
      "Whether you need regular weekly house cleaning to keep your family home in pristine condition, an intensive one-off deep clean, or a guaranteed end-of-tenancy checkout clean, our vetted and fully insured cleaning staff deliver consistent, high-standard results. Because our cleaners live and work locally in Willenhall, scheduling is flexible, quotes are completely free, and booking online takes under two minutes."
    ],
    featuredServiceSlugs: [
      "regular-house-cleaning",
      "deep-cleaning",
      "end-of-tenancy-cleaning",
      "carpet-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Willenhall?",
    whyChoose: [
      {
        title: "Local Willenhall Base",
        description: "Our main address is on Lichfield Road (WV12 5AB), ensuring prompt arrival, local accountability, and rapid dispatch across all Willenhall neighbourhoods."
      },
      {
        title: "Vetted & Insured Cleaning Team",
        description: "Every cleaner is thoroughly vetted, trained in modern hygienic methods, and backed by comprehensive public liability insurance."
      },
      {
        title: "Comprehensive Range of Services",
        description: "From routine domestic dusting to heavy-duty oven scrubbing, steam carpet cleaning, and waste removal, we handle all cleaning under one roof."
      },
      {
        title: "Transparent, Free Quotes",
        description: "No hidden charges or surprise extras. We provide upfront, transparent pricing and free custom quotes for any domestic or commercial job."
      },
      {
        title: "Flexible Online Booking",
        description: "Book your preferred date and time easily through our online booking wizard, or contact our team directly by phone and email."
      }
    ],
    nearbyTitle: "Serving Willenhall and Surrounding Areas",
    nearbyIntro: "In addition to Willenhall, our mobile teams regularly operate throughout neighboring Black Country and West Midlands districts:",
    nearbyLocations: [
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "Adjacent to Willenhall" },
      { name: "Wolverhampton", slug: "wolverhampton", postcode: "WV1 - WV11", distanceOrNote: "4 miles West" },
      { name: "Bilston", slug: "bilston", postcode: "WV14", distanceOrNote: "2 miles South-West" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "6 miles South" },
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "5 miles South" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "7 miles South-East" }
    ],
    contextTitle: "Cleaning Services for Properties in Willenhall",
    contextContent: [
      "Willenhall features a diverse mix of housing stock, ranging from traditional Victorian and Edwardian terraced homes near the town centre to modern suburban housing estates around New Invention, Short Heath, and Coppice Farm. Each property type presents specific cleaning needs, from treating older high-ceiling rooms to maintaining contemporary open-plan layouts with delicate flooring.",
      "With high local demand for both privately owned family properties and rental accommodations, Refuse Shine Cleaning LTD provides flexible cleaning packages. Whether your property requires deep limescale removal from hard-water areas, post-renovation builder dust clearance, or hot-water carpet extraction, our staff arrive equipped with professional equipment and effective cleaning formulations."
    ],
    faqs: [
      {
        question: "Do you provide cleaning services in all parts of Willenhall?",
        answer: "Yes, we cover all areas of Willenhall (WV12 and WV13), including Short Heath, New Invention, Portobello, Coppice Farm, and central areas around Lichfield Road."
      },
      {
        question: "What cleaning services do you offer in Willenhall?",
        answer: "We provide regular house cleaning, deep cleaning, end of tenancy cleaning, move-in/move-out cleans, steam carpet cleaning, kitchen & bathroom deep cleans, appliance cleaning, window cleaning, and office/commercial cleaning."
      },
      {
        question: "Can I book a one-off deep clean in Willenhall?",
        answer: "Yes. Our one-off deep cleaning service is popular for spring cleans, pre-event preparation, post-renovation cleanup, or resetting a home that needs intensive attention."
      },
      {
        question: "Do you supply all the cleaning products and equipment?",
        answer: "Yes, our team brings all professional cleaning materials, commercial-grade vacuums, microfibre cloths, and sanitising products required to complete the job to the highest standard."
      },
      {
        question: "How do I request a quote or book cleaning in Willenhall?",
        answer: "You can book directly using our online booking tool, fill out our quick contact form for a free quote, or call us directly on +447721714435."
      }
    ],
    ctaTitle: "Need a Cleaner in Willenhall?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from our local Willenhall team."
  },
  {
    slug: "walsall",
    name: "Walsall",
    postcodes: "WS1 - WS9",
    shortDescription: "Professional cleaning services across Walsall, including town centre, Rushall, Pleck, Caldmore, Bloxwich, and surrounding WS postcodes.",
    tagline: "Trusted domestic cleaning, deep cleans, end of tenancy, and commercial cleaning services across Walsall and nearby communities.",
    metaTitle: "Cleaning Services in Walsall | Cleaners Walsall | Refuse Shine",
    metaDescription: "Looking for trusted cleaners in Walsall? Refuse Shine Cleaning LTD offers domestic house cleaning, deep cleans, end of tenancy, and carpet cleaning across Walsall WS1-WS9.",
    heroBadge: "Serving All Walsall Districts (WS1 - WS9)",
    introTitle: "Reliable Cleaning Services in Walsall",
    introParagraphs: [
      "Refuse Shine Cleaning LTD delivers dependable residential and commercial cleaning services across the entire borough of Walsall. Located right next door to our Willenhall headquarters, Walsall is one of our most active service areas, spanning WS1, WS2, WS3, WS4, WS5, and surrounding postcode zones including Rushall, Pelsall, Bloxwich, Palfrey, Caldmore, and Chuckery.",
      "From busy professionals living in modern Walsall apartments to growing families in suburban houses and landlords managing rental properties, we provide tailored cleaning services that save time and ensure hygienic living spaces. Our services include recurring weekly domestic visits, thorough deep cleans, end of tenancy handover cleans, hot-water carpet extraction, and commercial office maintenance."
    ],
    featuredServiceSlugs: [
      "end-of-tenancy-cleaning",
      "regular-house-cleaning",
      "window-cleaning",
      "office-clean"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Walsall?",
    whyChoose: [
      {
        title: "Rapid Dispatch from Nearby Base",
        description: "Being headquartered right on the Walsall border in Willenhall, our cleaners can reach any Walsall address quickly with zero travel delays."
      },
      {
        title: "Fully Insured & Trained Cleaners",
        description: "We employ experienced, reference-checked cleaning staff who take pride in delivering spotless, consistent results on every visit."
      },
      {
        title: "Clear, Upfront Pricing",
        description: "We provide honest, transparent rates with no hidden costs. What we quote is exactly what you pay."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose recurring visits, one-off deep cleans, or weekend slots that fit conveniently around your work and family routines."
      },
      {
        title: "All-in-One Cleaning Capabilities",
        description: "Combine carpet cleaning, oven scrubbing, window washing, and general domestic cleaning into a single hassle-free booking."
      }
    ],
    nearbyTitle: "Serving Walsall and Surrounding Areas",
    nearbyIntro: "We cover all major locations neighbouring Walsall across the Black Country and West Midlands:",
    nearbyLocations: [
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "Adjacent West" },
      { name: "Aldridge", slug: "aldridge", postcode: "WS9", distanceOrNote: "3 miles East" },
      { name: "Brownhills", slug: "brownhills", postcode: "WS8", distanceOrNote: "5 miles North-East" },
      { name: "Wolverhampton", slug: "wolverhampton", postcode: "WV1 - WV11", distanceOrNote: "6 miles West" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "6 miles South" },
      { name: "Cannock", slug: "cannock", postcode: "WS11 / WS12", distanceOrNote: "7 miles North" }
    ],
    contextTitle: "Cleaning Services for Properties in Walsall",
    contextContent: [
      "Walsall is a lively West Midlands town with diverse residential areas ranging from characterful semi-detached homes in Highgate and Rushall to newer residential developments and town-centre apartments. This variety means cleaning requirements differ significantly from one property to another.",
      "At Refuse Shine Cleaning LTD, we assess each property's specific needs before commencing work. Whether you are dealing with stubborn limescale in bathrooms, high-traffic carpet wear from pets and children, or post-tenancy grease in rental kitchens, our trained cleaners use the right techniques to deliver exceptional results."
    ],
    faqs: [
      {
        question: "Do you clean houses across all Walsall postcodes?",
        answer: "Yes, we provide cleaning services across WS1, WS2, WS3, WS4, WS5, WS8, and WS9, covering central Walsall, Bloxwich, Rushall, Pelsall, Caldmore, and surrounding districts."
      },
      {
        question: "How much does house cleaning cost in Walsall?",
        answer: "Our pricing depends on property size and the type of service (regular maintenance, deep cleaning, or end of tenancy). We provide free, transparent quotes online or over the phone with no obligation."
      },
      {
        question: "Can you provide end of tenancy cleaning for Walsall rental properties?",
        answer: "Yes, our end of tenancy clean is designed specifically to meet letting agent inventory checklists, helping tenants secure their deposits and landlords prepare properties for new occupants."
      },
      {
        question: "Are your cleaners insured and vetted?",
        answer: "All Refuse Shine cleaners are reference-checked, trained to our high cleanliness standards, and covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book a cleaning visit in Walsall?",
        answer: "You can book directly via our online booking system or call us on +447721714435 to discuss your cleaning requirements."
      }
    ],
    ctaTitle: "Need a Cleaner in Walsall?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in minutes or request a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "wolverhampton",
    name: "Wolverhampton",
    postcodes: "WV1 - WV11",
    shortDescription: "Comprehensive domestic, student let, end of tenancy, and commercial cleaning across Wolverhampton, Tettenhall, Penn, and Wednesfield.",
    tagline: "Professional home and business cleaning services across Wolverhampton from your trusted local West Midlands cleaning company.",
    metaTitle: "Cleaning Services in Wolverhampton | Refuse Shine Cleaning LTD",
    metaDescription: "Professional cleaning services in Wolverhampton (WV1-WV11). House cleaning, deep cleans, student lets, end of tenancy, and office cleaning. Free quotes.",
    heroBadge: "Covering All Wolverhampton Postcodes (WV1 - WV11)",
    introTitle: "Reliable Cleaning Services in Wolverhampton",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides high-quality residential and commercial cleaning services across the city of Wolverhampton. Located just minutes away from our Willenhall base, our cleaning teams frequently operate in Wolverhampton city centre, Tettenhall, Penn, Wednesfield, Fallings Park, Whitmore Reans, Compton, and Bushbury.",
      "We understand that modern life leaves little time for deep housework. Whether you require a weekly cleaner to maintain your family home, a thorough end-of-tenancy clean for a student property or rental flat, or specialized carpet and oven cleaning, our experienced team provides dependable, top-tier service tailored to your schedule."
    ],
    featuredServiceSlugs: [
      "airbnb-short-let-cleaning",
      "carpet-cleaning",
      "deep-cleaning",
      "regular-house-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Wolverhampton?",
    whyChoose: [
      {
        title: "Close Proximity & Reliable Timing",
        description: "Our Willenhall hub is adjacent to Wolverhampton, allowing our teams to arrive promptly and accommodate short-notice requests."
      },
      {
        title: "Vetted, Insured & Experienced",
        description: "All our cleaners are fully insured, vetted, and trained in proven cleaning procedures that guarantee thorough results."
      },
      {
        title: "Customised Cleaning Plans",
        description: "We tailor every cleaning checklist to your specific instructions, focusing on the areas and priorities that matter most to you."
      },
      {
        title: "No Hidden Costs",
        description: "We provide upfront, fixed pricing with free transparent quotes so you always know what to expect."
      },
      {
        title: "Eco-Conscious Cleaning Products",
        description: "We use effective, responsible cleaning solutions that are safe for pets, children, and household surfaces."
      }
    ],
    nearbyTitle: "Serving Wolverhampton and Nearby Areas",
    nearbyIntro: "Our cleaning teams provide fast service throughout Wolverhampton and adjacent West Midlands districts:",
    nearbyLocations: [
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "Adjacent East" },
      { name: "Bilston", slug: "bilston", postcode: "WV14", distanceOrNote: "3 miles South-East" },
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "6 miles East" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "6 miles South" },
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "5 miles South-East" },
      { name: "Cannock", slug: "cannock", postcode: "WS11 / WS12", distanceOrNote: "9 miles North-East" }
    ],
    contextTitle: "Cleaning Services for Properties in Wolverhampton",
    contextContent: [
      "Wolverhampton includes a wide range of property styles, from grand period properties in Tettenhall and leafy family homes in Penn to modern city centre apartment blocks and high-density student houses near the university campus. Each requires an experienced cleaning approach.",
      "Whether your priority is restoring heavily used rental carpets with steam hot-water extraction, removing baked-on carbon from kitchen ovens, or maintaining regular domestic hygiene in a busy family home, Refuse Shine Cleaning LTD provides the dedicated staff and professional tools to keep your property looking spotless."
    ],
    faqs: [
      {
        question: "Do you clean student houses in Wolverhampton?",
        answer: "Yes, we regularly provide end of tenancy and turnaround cleaning for student accommodation, HMOs, and private rental properties across Wolverhampton."
      },
      {
        question: "Can I book regular weekly or fortnightly cleaning in Wolverhampton?",
        answer: "Yes, we offer recurring domestic house cleaning on a weekly, fortnightly, or monthly basis with consistent cleaners assigned to your home."
      },
      {
        question: "What is included in a Wolverhampton deep clean?",
        answer: "Our deep cleaning covers detailed dusting of all surfaces, skirting boards, doors, thorough bathroom descaling, deep kitchen degreasing, internal windows, and floor sanitisation."
      },
      {
        question: "Do you offer carpet cleaning in Wolverhampton?",
        answer: "Yes, we provide professional hot water extraction steam carpet cleaning to remove deep dirt, allergens, pet odours, and stubborn stains."
      },
      {
        question: "How can I request a quote for Wolverhampton cleaning?",
        answer: "You can request a free quote online through our website or call our friendly team on +447721714435."
      }
    ],
    ctaTitle: "Need a Cleaner in Wolverhampton?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "bilston",
    name: "Bilston",
    postcodes: "WV14",
    shortDescription: "Trusted local domestic house cleaning, deep cleaning, and move-out cleaning services across Bilston, Bradley, and Coseley border.",
    tagline: "Friendly, fully insured residential and commercial cleaning services across Bilston and surrounding WV14 postcodes.",
    metaTitle: "Cleaning Services in Bilston | Refuse Shine Cleaning LTD",
    metaDescription: "Professional cleaning services in Bilston (WV14). House cleaning, deep cleans, end of tenancy, and carpet cleaning. Local vetted cleaners, free quotes.",
    heroBadge: "Serving Bilston & Bradley (WV14)",
    introTitle: "Reliable Cleaning Services in Bilston",
    introParagraphs: [
      "Refuse Shine Cleaning LTD offers dependable residential and commercial cleaning services across Bilston and the wider WV14 area, including Bradley, Moxley, Lanesfield, and Ettingshall. Located just two miles south of our Willenhall headquarters, Bilston is one of our most accessible and frequently serviced communities.",
      "We provide hardworking local families, working professionals, and elderly residents with trustworthy cleaning support. From routine domestic cleaning to intensive one-off spring cleaning and end of tenancy checkout sanitisation, our vetted cleaners work diligently to maintain immaculate living spaces."
    ],
    featuredServiceSlugs: [
      "appliance-cleaning",
      "deep-cleaning",
      "regular-house-cleaning",
      "carpet-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Bilston?",
    whyChoose: [
      {
        title: "Minutes Away from Your Door",
        description: "Our Willenhall base is just 2 miles from central Bilston, ensuring punctual visits and easy scheduling."
      },
      {
        title: "Trusted & Background-Checked Cleaners",
        description: "We carefully vet and train all cleaning operatives to maintain rigorous hygiene and safety standards."
      },
      {
        title: "Transparent & Competitive Rates",
        description: "Get honest pricing with zero hidden fees. We provide free, upfront quotes for all cleaning services."
      },
      {
        title: "Full Range of Cleaning Options",
        description: "Combine domestic cleaning, carpet shampooing, oven cleaning, and window washing into one convenient appointment."
      },
      {
        title: "Easy Online Booking",
        description: "Book online in minutes with our responsive booking system or contact our team directly for tailored requests."
      }
    ],
    nearbyTitle: "Serving Bilston and Nearby Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Bilston and surrounding Black Country communities:",
    nearbyLocations: [
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "2 miles North" },
      { name: "Wolverhampton", slug: "wolverhampton", postcode: "WV1 - WV11", distanceOrNote: "3 miles North-West" },
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "4 miles North-East" },
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "3 miles South" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "4 miles South-West" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "5 miles South-East" }
    ],
    contextTitle: "Cleaning Services for Properties in Bilston",
    contextContent: [
      "Bilston combines traditional Black Country terraced homes and post-war family estates with newer modern developments around Ettingshall and Bilston Urban Village. These properties experience heavy daily use from busy working families, pets, and rental handovers.",
      "Refuse Shine Cleaning LTD provides the necessary professional equipment and experienced personnel to handle everything from limescale buildup in bathrooms to deep carpet stain extraction and intensive kitchen degreasing. Our aim is to give Bilston residents reliable cleaning services that save time and deliver long-lasting cleanliness."
    ],
    faqs: [
      {
        question: "Do you clean houses in Bradley and Moxley?",
        answer: "Yes, we cover all areas under the WV14 postcode, including Bradley, Moxley, Lanesfield, Ettingshall, and central Bilston."
      },
      {
        question: "Can I book a regular weekly cleaner in Bilston?",
        answer: "Yes, we provide recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you offer carpet cleaning in Bilston?",
        answer: "Yes, our team uses professional hot water extraction steam equipment to clean and revive carpets and upholstery."
      },
      {
        question: "How long does a deep clean take in Bilston?",
        answer: "Deep cleaning duration depends on property size and condition, typically ranging from 3 to 6 hours for a thorough room-by-room clean."
      },
      {
        question: "How do I get a free quote for Bilston cleaning?",
        answer: "You can use our online booking wizard to calculate your quote or call our office directly on +447721714435."
      }
    ],
    ctaTitle: "Need a Cleaner in Bilston?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "dudley",
    name: "Dudley",
    postcodes: "DY1 - DY3",
    shortDescription: "Professional cleaning services across Dudley, Gornal, Sedgley, Netherton, and surrounding Black Country communities.",
    tagline: "Dedicated domestic cleaning, deep cleans, end of tenancy, and office cleaning throughout Dudley and surrounding areas.",
    metaTitle: "Cleaning Services in Dudley | Cleaners Dudley | Refuse Shine",
    metaDescription: "Professional cleaning services in Dudley (DY1-DY3). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Vetted staff, free quotes.",
    heroBadge: "Serving All Dudley Districts (DY1 - DY3)",
    introTitle: "Reliable Cleaning Services in Dudley",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides expert domestic and commercial cleaning services across Dudley and the surrounding Black Country towns. Covering postcodes DY1, DY2, and DY3, we regularly service properties in central Dudley, Sedgley, Upper Gornal, Lower Gornal, Netherton, Woodside, and Kates Hill.",
      "Whether you manage a busy household needing dependable weekly domestic support, require an end-of-tenancy clean to protect your rental deposit, or need commercial office cleaning for your business, our fully trained, vetted, and insured staff deliver consistent, high-standard results tailored to your exact specifications."
    ],
    featuredServiceSlugs: [
      "bathroom-cleaning",
      "office-clean",
      "end-of-tenancy-cleaning",
      "regular-house-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Dudley?",
    whyChoose: [
      {
        title: "Dedicated Local Cleaners",
        description: "Our staff regularly operate across Dudley, ensuring punctuality, friendly communication, and consistent quality."
      },
      {
        title: "Fully Insured & Trained",
        description: "All team members are background-checked, insured, and trained in modern hygiene and cleaning protocols."
      },
      {
        title: "Transparent, Honest Pricing",
        description: "We offer fixed, clear pricing with zero surprise charges. Request a free quote with no obligation."
      },
      {
        title: "Flexible Scheduling",
        description: "Book regular visits, one-off cleans, or weekend appointments that integrate smoothly into your lifestyle."
      },
      {
        title: "Full Service Range",
        description: "From routine domestic tidying to heavy-duty steam carpet extraction and oven degreasing, we handle it all."
      }
    ],
    nearbyTitle: "Serving Dudley and Surrounding Areas",
    nearbyIntro: "Our mobile cleaning units regularly cover Dudley and neighbouring West Midlands communities:",
    nearbyLocations: [
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "3 miles North-East" },
      { name: "Bilston", slug: "bilston", postcode: "WV14", distanceOrNote: "4 miles North" },
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "4 miles East" },
      { name: "Wolverhampton", slug: "wolverhampton", postcode: "WV1 - WV11", distanceOrNote: "6 miles North" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "6 miles North" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "6 miles East" }
    ],
    contextTitle: "Cleaning Services for Properties in Dudley",
    contextContent: [
      "Dudley is characterised by a diverse housing landscape, from historic terraced houses in central areas to sprawling suburban homes in Sedgley and Gornal. This variety requires adaptable cleaning techniques, from dealing with older window frames and high ceilings to modern tiled surfaces and integrated appliances.",
      "Refuse Shine Cleaning LTD provides fully equipped cleaning teams capable of tackling tough limescale, pet hair, kitchen grease, and high-traffic carpet wear. Our professional approach ensures every corner of your property is left sparkling and fresh."
    ],
    faqs: [
      {
        question: "Do you clean houses in Sedgley and Gornal?",
        answer: "Yes, we cover all areas of Dudley, including Sedgley, Upper Gornal, Lower Gornal, Netherton, and Woodside."
      },
      {
        question: "Can I book a one-off deep clean for my Dudley home?",
        answer: "Yes, our one-off deep cleaning service is ideal for spring cleaning, moving home, or giving your property a complete hygienic reset."
      },
      {
        question: "Do you provide end of tenancy cleaning in Dudley?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists to ensure full deposit protection for tenants and clean handovers for landlords."
      },
      {
        question: "Are your cleaners fully insured in Dudley?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance for complete peace of mind."
      },
      {
        question: "How do I book cleaning services in Dudley?",
        answer: "You can book directly via our online booking system or call us on +447721714435 to receive a free, no-obligation quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Dudley?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in minutes or request a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "tipton",
    name: "Tipton",
    postcodes: "DY4",
    shortDescription: "Dependable domestic cleaning, deep cleans, moving cleans, and carpet cleaning across Tipton, Great Bridge, and Princes End.",
    tagline: "Quality house cleaning, end of tenancy, and commercial cleaning services across Tipton and the DY4 area.",
    metaTitle: "Cleaning Services in Tipton | Cleaners Tipton | Refuse Shine",
    metaDescription: "Professional cleaning services in Tipton (DY4). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Vetted local cleaners, free quotes.",
    heroBadge: "Serving Tipton & Great Bridge (DY4)",
    introTitle: "Reliable Cleaning Services in Tipton",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides trusted residential and commercial cleaning services across Tipton and the entire DY4 postcode district. We regularly serve clients in Great Bridge, Princes End, Tividale, Dudley Port, and surrounding Black Country neighbourhoods.",
      "Our team is committed to helping Tipton residents maintain clean, comfortable, and healthy homes. Whether you need weekly domestic support to stay on top of daily chores, a deep clean before a special occasion, or a thorough end-of-tenancy clean to secure your deposit, we deliver high standards with friendly local service."
    ],
    featuredServiceSlugs: [
      "kitchen-deep-cleaning",
      "carpet-cleaning",
      "deep-cleaning",
      "regular-house-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Tipton?",
    whyChoose: [
      {
        title: "Fast Response from Local Base",
        description: "Located close to our Willenhall base, Tipton benefits from prompt scheduling and rapid response times."
      },
      {
        title: "Experienced & Insured Cleaners",
        description: "All our team members are reference-checked, insured, and trained to clean methodically and respectfully."
      },
      {
        title: "Transparent Pricing",
        description: "Enjoy clear, fixed prices with no hidden fees or surprise add-ons. Free quotes provided upfront."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose recurring visits, one-off cleans, or weekend slots that fit your work and family schedule."
      },
      {
        title: "All Cleaning Needs Covered",
        description: "From routine domestic vacuuming to steam carpet extraction and oven degreasing, we do it all."
      }
    ],
    nearbyTitle: "Serving Tipton and Nearby Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Tipton and neighbouring Black Country communities:",
    nearbyLocations: [
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "3 miles South-West" },
      { name: "Bilston", slug: "bilston", postcode: "WV14", distanceOrNote: "3 miles North" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "3 miles East" },
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "3 miles South-East" },
      { name: "Wednesbury", slug: "wednesbury", postcode: "WS10", distanceOrNote: "3 miles North-East" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "5 miles North" }
    ],
    contextTitle: "Cleaning Services for Properties in Tipton",
    contextContent: [
      "Tipton has a rich industrial history and features a variety of family homes, traditional terraced properties, and new residential estates near the canal networks and Great Bridge. These busy households often require regular maintenance to combat everyday dust, pet hair, and household dirt.",
      "Refuse Shine Cleaning LTD provides professional equipment and reliable staff to keep Tipton homes clean and fresh. Whether you need regular weekly housekeeping, post-tenancy checkout sanitisation, or professional carpet steam cleaning, we are here to help."
    ],
    faqs: [
      {
        question: "Do you cover Great Bridge and Princes End in Tipton?",
        answer: "Yes, we provide full cleaning services across DY4, including Great Bridge, Princes End, Tividale, and central Tipton."
      },
      {
        question: "Can I book a regular weekly cleaner in Tipton?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Tipton?",
        answer: "Yes, our end of tenancy clean is designed specifically to meet letting agent inventory checklists for a smooth deposit return."
      },
      {
        question: "Do I need to supply cleaning products?",
        answer: "No, our cleaners bring all professional products, cloths, and vacuums needed to complete the job to a high standard."
      },
      {
        question: "How can I request a quote for Tipton cleaning?",
        answer: "You can book directly using our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Tipton?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in minutes or request a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "west-bromwich",
    name: "West Bromwich",
    postcodes: "B70, B71",
    shortDescription: "Professional cleaning services across West Bromwich, Hill Top, Charlemont, Stone Cross, and Sandwell Valley.",
    tagline: "Trusted domestic cleaning, deep cleans, end of tenancy, and office cleaning throughout West Bromwich and B70/B71 postcodes.",
    metaTitle: "Cleaning Services in West Bromwich | Cleaners West Bromwich",
    metaDescription: "Professional cleaning services in West Bromwich (B70, B71). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Free quotes.",
    heroBadge: "Serving West Bromwich (B70 / B71)",
    introTitle: "Reliable Cleaning Services in West Bromwich",
    introParagraphs: [
      "Refuse Shine Cleaning LTD delivers dependable residential and commercial cleaning services across West Bromwich and the B70 and B71 postcode areas. We serve households and businesses in central West Bromwich, Hill Top, Charlemont, Stone Cross, Hateley Heath, and Greets Green.",
      "As one of the largest hubs in the Sandwell borough, West Bromwich has high demand for both domestic house cleaning and commercial facility care. Our vetted and insured cleaners provide flexible weekly visits, thorough deep cleans, end of tenancy checkout sanitisation, and commercial office cleaning tailored to your exact needs."
    ],
    featuredServiceSlugs: [
      "office-clean",
      "window-cleaning",
      "end-of-tenancy-cleaning",
      "deep-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in West Bromwich?",
    whyChoose: [
      {
        title: "Fast Local Response",
        description: "Our mobile teams operate daily across Sandwell and the Black Country, ensuring prompt arrival and flexible scheduling."
      },
      {
        title: "Vetted & Fully Insured Staff",
        description: "Every cleaner is reference-checked, insured, and trained in modern hygienic procedures."
      },
      {
        title: "Transparent, Upfront Rates",
        description: "We provide honest pricing with zero hidden fees. What we quote is what you pay."
      },
      {
        title: "Customised Cleaning Plans",
        description: "We adapt our checklists to your priorities, whether you need deep kitchen degreasing or recurring general maintenance."
      },
      {
        title: "Complete Range of Services",
        description: "Combine carpet cleaning, oven scrubbing, window washing, and general domestic cleaning into one seamless booking."
      }
    ],
    nearbyTitle: "Serving West Bromwich and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across West Bromwich and adjacent Sandwell and Black Country districts:",
    nearbyLocations: [
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "3 miles South" },
      { name: "Smethwick", slug: "smethwick", postcode: "B66 / B67", distanceOrNote: "3 miles South-East" },
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "3 miles West" },
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "6 miles North" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "6 miles West" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "7 miles North-West" }
    ],
    contextTitle: "Cleaning Services for Properties in West Bromwich",
    contextContent: [
      "West Bromwich features diverse property types, from Victorian and 1930s suburban semi-detached homes to modern town centre apartment developments and commercial office buildings. Each property type requires an experienced cleaning approach.",
      "Refuse Shine Cleaning LTD provides the skilled personnel and commercial equipment to handle heavy kitchen grease, limescale in bathrooms, high-traffic carpet wear, and end of tenancy turnaround cleaning across West Bromwich."
    ],
    faqs: [
      {
        question: "Do you clean houses in Stone Cross and Charlemont?",
        answer: "Yes, we cover all areas of West Bromwich, including Stone Cross, Charlemont, Hill Top, Hateley Heath, and central B70/B71."
      },
      {
        question: "Can I book regular weekly domestic cleaning in West Bromwich?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in West Bromwich?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists to ensure full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in West Bromwich?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in West Bromwich?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in West Bromwich?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in minutes or request a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "oldbury",
    name: "Oldbury",
    postcodes: "B68, B69",
    shortDescription: "Reliable domestic house cleaning, deep cleaning, end of tenancy, and carpet cleaning across Oldbury, Langley, and Warley.",
    tagline: "Professional residential and commercial cleaning services across Oldbury and the B68/B69 area.",
    metaTitle: "Cleaning Services in Oldbury | Cleaners Oldbury | Refuse Shine",
    metaDescription: "Professional cleaning services in Oldbury (B68, B69). Regular house cleaning, deep cleaning, end of tenancy, and commercial cleaning. Free quotes.",
    heroBadge: "Serving Oldbury & Warley (B68 / B69)",
    introTitle: "Reliable Cleaning Services in Oldbury",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides comprehensive residential and commercial cleaning services across Oldbury and the B68 and B69 postcode districts. We regularly service homes and businesses in Langley Green, Warley, Bristnall, Rounds Green, and central Oldbury.",
      "Our vetted and insured cleaners take pride in maintaining clean, fresh, and hygienic living and working environments. Whether you need recurring domestic cleaning to free up your weekends, a thorough end-of-tenancy clean, or specialized carpet and oven cleaning, our team delivers consistent quality."
    ],
    featuredServiceSlugs: [
      "bathroom-cleaning",
      "carpet-cleaning",
      "regular-house-cleaning",
      "office-clean"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Oldbury?",
    whyChoose: [
      {
        title: "Local & Punctual Service",
        description: "Our mobile cleaning units operate throughout Sandwell, ensuring dependable scheduling and prompt arrival."
      },
      {
        title: "Vetted & Insured Cleaning Team",
        description: "All staff are reference-checked, insured, and trained to clean with meticulous attention to detail."
      },
      {
        title: "Transparent Pricing",
        description: "We provide upfront, clear pricing with zero hidden charges. Request a free quote anytime."
      },
      {
        title: "Flexible Scheduling",
        description: "Book regular visits, one-off cleans, or weekend appointments that integrate seamlessly into your routine."
      },
      {
        title: "All-in-One Capabilities",
        description: "Combine general domestic cleaning with carpet shampooing, oven scrubbing, and window cleaning."
      }
    ],
    nearbyTitle: "Serving Oldbury and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Oldbury and neighbouring Black Country communities:",
    nearbyLocations: [
      { name: "Smethwick", slug: "smethwick", postcode: "B66 / B67", distanceOrNote: "2 miles East" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "3 miles North" },
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "3 miles North-West" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "4 miles West" },
      { name: "Halesowen", slug: "halesowen", postcode: "B62 / B63", distanceOrNote: "4 miles South" },
      { name: "Rowley Regis", slug: "rowley-regis", postcode: "B65", distanceOrNote: "2 miles South-West" }
    ],
    contextTitle: "Cleaning Services for Properties in Oldbury",
    contextContent: [
      "Oldbury is a well-connected Sandwell town featuring a blend of traditional post-war family homes, modern residential developments, and commercial business parks. From high-traffic family carpets to grease-laden rental kitchens, properties in Oldbury benefit from professional, systematic cleaning.",
      "Refuse Shine Cleaning LTD provides the necessary expertise and professional equipment to handle everything from limescale removal in bathrooms to deep carpet extraction and end of tenancy checkout sanitisation."
    ],
    faqs: [
      {
        question: "Do you clean houses in Warley and Langley?",
        answer: "Yes, we cover all areas of Oldbury under B68 and B69, including Warley, Langley Green, Bristnall, and Rounds Green."
      },
      {
        question: "Can I book a regular cleaner in Oldbury?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Oldbury?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Oldbury?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Oldbury?",
        answer: "You can book directly via our online booking wizard or call us on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Oldbury?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in minutes or request a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "smethwick",
    name: "Smethwick",
    postcodes: "B66, B67",
    shortDescription: "High-quality domestic cleaning, end of tenancy, deep cleaning, and commercial cleaning across Smethwick, Bearwood, and Cape Hill.",
    tagline: "Trusted residential and commercial cleaning services across Smethwick, Bearwood, and the B66/B67 area.",
    metaTitle: "Cleaning Services in Smethwick | Cleaners Smethwick",
    metaDescription: "Professional cleaning services in Smethwick (B66, B67) & Bearwood. House cleaning, deep cleaning, end of tenancy, and office cleaning. Free quotes.",
    heroBadge: "Serving Smethwick & Bearwood (B66 / B67)",
    introTitle: "Reliable Cleaning Services in Smethwick",
    introParagraphs: [
      "Refuse Shine Cleaning LTD offers professional domestic and commercial cleaning services across Smethwick, Bearwood, Cape Hill, Londonderry, and the B66 and B67 postcode areas. Situated on the border between Sandwell and Birmingham, Smethwick is a vibrant, densely populated area with high demand for reliable cleaning.",
      "Whether you are a busy resident in a Bearwood terrace needing weekly domestic support, a tenant in a Cape Hill flat requiring an end-of-tenancy clean to protect your deposit, or a business owner looking for dependable office cleaning, our vetted and insured team delivers exceptional results."
    ],
    featuredServiceSlugs: [
      "kitchen-deep-cleaning",
      "end-of-tenancy-cleaning",
      "deep-cleaning",
      "office-clean"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Smethwick?",
    whyChoose: [
      {
        title: "Dedicated Local Cleaners",
        description: "Our mobile teams operate daily across Sandwell and Birmingham fringes, ensuring punctual visits and easy scheduling."
      },
      {
        title: "Vetted & Insured Staff",
        description: "Every cleaner is reference-checked, insured, and trained in modern hygienic procedures."
      },
      {
        title: "Clear, Upfront Pricing",
        description: "We provide transparent, fixed rates with no hidden costs. What we quote is what you pay."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose recurring visits, one-off cleans, or weekend slots that fit your work and family schedule."
      },
      {
        title: "Complete Cleaning Solutions",
        description: "Combine carpet cleaning, oven scrubbing, window washing, and general domestic cleaning into one booking."
      }
    ],
    nearbyTitle: "Serving Smethwick and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Smethwick and neighbouring West Midlands communities:",
    nearbyLocations: [
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "2 miles West" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "3 miles North" },
      { name: "Birmingham", slug: "birmingham", postcode: "B1 - B48", distanceOrNote: "3 miles East" },
      { name: "Rowley Regis", slug: "rowley-regis", postcode: "B65", distanceOrNote: "3 miles South-West" },
      { name: "Halesowen", slug: "halesowen", postcode: "B62 / B63", distanceOrNote: "5 miles South-West" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "8 miles North-West" }
    ],
    contextTitle: "Cleaning Services for Properties in Smethwick",
    contextContent: [
      "Smethwick features a high concentration of Victorian terraced houses, converted flats, HMOs, and modern apartment buildings. These diverse properties require adaptable cleaning techniques, from managing high-traffic hallway carpets to intensive kitchen degreasing and bathroom descaling.",
      "Refuse Shine Cleaning LTD provides the skilled personnel and commercial equipment to tackle stubborn grime, pet odours, and post-tenancy messes across Smethwick and Bearwood."
    ],
    faqs: [
      {
        question: "Do you clean houses in Bearwood and Cape Hill?",
        answer: "Yes, we cover all areas of Smethwick under B66 and B67, including Bearwood, Cape Hill, Londonderry, and French Walls."
      },
      {
        question: "Can I book a regular weekly cleaner in Smethwick?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Smethwick?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Smethwick?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Smethwick?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Smethwick?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in minutes or request a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "sutton-coldfield",
    name: "Sutton Coldfield",
    postcodes: "B72, B73, B74, B75, B76",
    shortDescription: "Premium domestic house cleaning, deep cleaning, end of tenancy, and steam carpet cleaning across Sutton Coldfield, Four Oaks, and Mere Green.",
    tagline: "Professional residential and commercial cleaning services across Sutton Coldfield and north Birmingham suburbs from fully insured local cleaners.",
    metaTitle: "Cleaning Services in Sutton Coldfield | Cleaners Sutton Coldfield",
    metaDescription: "Professional cleaning services in Sutton Coldfield (B72-B76). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Vetted staff, free quotes.",
    heroBadge: "Serving Royal Sutton Coldfield (B72 - B76)",
    introTitle: "Reliable Cleaning Services in Sutton Coldfield",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides exceptional domestic and commercial cleaning services throughout the Royal Town of Sutton Coldfield and surrounding north Birmingham districts. Covering postcodes B72, B73, B74, B75, and B76, our dedicated cleaning teams regularly service homes in Four Oaks, Mere Green, Walmley, Wylde Green, Boldmere, New Oscott, and Minworth.",
      "We recognise that Sutton Coldfield residents value high standards, reliability, and meticulous attention to detail. Whether you own a large detached family residence needing consistent weekly housekeeping, a modern apartment in the town centre requiring recurring domestic cleaning, or a rental property needing a guaranteed end-of-tenancy clean, our vetted and fully insured staff deliver spotless results every visit."
    ],
    featuredServiceSlugs: [
      "regular-house-cleaning",
      "deep-cleaning",
      "carpet-cleaning",
      "end-of-tenancy-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Sutton Coldfield?",
    whyChoose: [
      {
        title: "Dedicated Local Cleaners",
        description: "Our teams operate daily throughout Sutton Coldfield and north Birmingham, ensuring punctuality and consistent excellence."
      },
      {
        title: "Vetted & Insured Cleaning Team",
        description: "Every cleaner is thoroughly vetted, reference-checked, and backed by comprehensive public liability insurance."
      },
      {
        title: "Tailored Domestic Packages",
        description: "From routine weekly housekeeping to seasonal spring cleans and carpet steam extraction, we customize every checklist."
      },
      {
        title: "Transparent, Free Quotes",
        description: "Honest pricing with no hidden fees or surprise add-ons. Request a free quote online or by phone."
      },
      {
        title: "Fast, Flexible Booking",
        description: "Book online in minutes with our simple booking wizard or speak directly with our friendly office team."
      }
    ],
    nearbyTitle: "Serving Sutton Coldfield and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Sutton Coldfield and neighbouring West Midlands communities:",
    nearbyLocations: [
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "5 miles West" },
      { name: "Tamworth", slug: "tamworth", postcode: "B77 - B79", distanceOrNote: "7 miles North-East" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "8 miles South-West" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "9 miles West" },
      { name: "Solihull", slug: "solihull", postcode: "B90 - B94", distanceOrNote: "12 miles South" },
      { name: "Stafford", slug: "stafford", postcode: "ST16 - ST18", distanceOrNote: "18 miles North-West" }
    ],
    contextTitle: "Cleaning Services for Properties in Sutton Coldfield",
    contextContent: [
      "Sutton Coldfield features a distinct variety of properties, ranging from grand period residences and detached luxury family homes in Four Oaks Estate and Little Aston border, to modern town-centre apartments and leafy suburban cul-de-sacs in Boldmere and Walmley.",
      "Our cleaning operatives bring professional equipment, non-abrasive detergents, and proven methods to treat hardwood flooring, marble worktops, and delicate upholstery with the highest degree of care."
    ],
    faqs: [
      {
        question: "Do you clean houses in Four Oaks and Mere Green?",
        answer: "Yes, we cover all areas under Sutton Coldfield postcodes B72, B73, B74, B75, and B76, including Four Oaks, Mere Green, Boldmere, Walmley, and Wylde Green."
      },
      {
        question: "Can I book a regular weekly cleaner in Sutton Coldfield?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with consistent cleaners assigned to your home."
      },
      {
        question: "Do you offer carpet cleaning in Sutton Coldfield?",
        answer: "Yes, we provide hot water extraction carpet and upholstery cleaning to eliminate embedded dirt, stains, pet odours, and allergens."
      },
      {
        question: "Are your cleaners fully insured in Sutton Coldfield?",
        answer: "Yes, all our cleaning staff are fully insured with comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning in Sutton Coldfield?",
        answer: "You can book directly using our online booking tool or call our friendly customer support team on +447721714435."
      }
    ],
    ctaTitle: "Need a Cleaner in Sutton Coldfield?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "brierley-hill",
    name: "Brierley Hill",
    postcodes: "DY5",
    shortDescription: "Trusted domestic house cleaning, deep cleaning, moving cleans, and commercial cleaning across Brierley Hill, Pensnett, Brockmoor, and Merry Hill.",
    tagline: "Reliable residential and commercial cleaning services across Brierley Hill and surrounding Black Country DY5 neighbourhoods.",
    metaTitle: "Cleaning Services in Brierley Hill | Cleaners Brierley Hill",
    metaDescription: "Professional cleaning services in Brierley Hill (DY5). Regular domestic cleaning, deep cleans, end of tenancy, and carpet cleaning. Free quotes.",
    heroBadge: "Serving Brierley Hill & Merry Hill Area (DY5)",
    introTitle: "Reliable Cleaning Services in Brierley Hill",
    introParagraphs: [
      "Refuse Shine Cleaning LTD delivers dependable residential and commercial cleaning services across Brierley Hill and the DY5 postcode area. We service homes, rental accommodations, and retail/office premises throughout Pensnett, Brockmoor, Quarry Bank, Hawbush, and the Merry Hill commercial area.",
      "From hardworking families seeking weekly cleaning support to landlords needing rapid end of tenancy turnarounds, our experienced cleaners use professional equipment and eco-friendly products to keep properties hygienic, fresh, and welcoming."
    ],
    featuredServiceSlugs: [
      "deep-cleaning",
      "carpet-cleaning",
      "regular-house-cleaning",
      "appliance-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Brierley Hill?",
    whyChoose: [
      {
        title: "Fast Local Response",
        description: "Our mobile cleaning vans operate throughout the Black Country daily, ensuring punctual visits and emergency availability."
      },
      {
        title: "Vetted & Background-Checked Cleaners",
        description: "All team members undergo thorough background checks and rigorous training in modern cleaning protocols."
      },
      {
        title: "Upfront, Honest Rates",
        description: "We provide transparent quotes with no hidden charges. What we quote is what you pay."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose weekly, fortnightly, monthly, or one-off appointments that fit seamlessly around your family life."
      },
      {
        title: "All-in-One Capabilities",
        description: "Combine domestic cleaning, steam carpet extraction, and oven degreasing into a single hassle-free booking."
      }
    ],
    nearbyTitle: "Serving Brierley Hill and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Brierley Hill and neighbouring Black Country communities:",
    nearbyLocations: [
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "3 miles North-East" },
      { name: "Stourbridge", slug: "stourbridge", postcode: "DY8 / DY9", distanceOrNote: "2 miles South-West" },
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "4 miles North-East" },
      { name: "Bilston", slug: "bilston", postcode: "WV14", distanceOrNote: "5 miles North" },
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "5 miles East" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "7 miles North" }
    ],
    contextTitle: "Cleaning Services for Properties in Brierley Hill",
    contextContent: [
      "Brierley Hill features traditional Black Country terraced homes, post-war family properties, and modern housing developments near the waterfront canal basins and Merry Hill.",
      "Our team provides the heavy-duty machinery and expert knowledge needed to tackle kitchen grease, bathroom limescale, and high-traffic carpet wear across DY5 homes and rental apartments."
    ],
    faqs: [
      {
        question: "Do you clean houses in Pensnett and Quarry Bank?",
        answer: "Yes, we cover all areas of DY5, including Pensnett, Quarry Bank, Brockmoor, Hawbush, and central Brierley Hill."
      },
      {
        question: "Can I book a regular weekly cleaner in Brierley Hill?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Brierley Hill?",
        answer: "Yes, our end of tenancy clean is designed specifically to meet letting agent inventory checklists for a smooth deposit return."
      },
      {
        question: "Do you bring your own cleaning supplies?",
        answer: "Yes, our team brings all professional cleaning materials, commercial-grade vacuums, and sanitising products."
      },
      {
        question: "How do I get a free quote for Brierley Hill cleaning?",
        answer: "You can book directly using our online booking wizard or call our friendly team on +447721714435."
      }
    ],
    ctaTitle: "Need a Cleaner in Brierley Hill?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "stourbridge",
    name: "Stourbridge",
    postcodes: "DY8, DY9",
    shortDescription: "High-quality domestic house cleaning, deep cleaning, end of tenancy, and carpet cleaning across Stourbridge, Norton, Wollaston, and Hagley.",
    tagline: "Professional residential and commercial cleaning services across Stourbridge and the DY8/DY9 postcodes.",
    metaTitle: "Cleaning Services in Stourbridge | Cleaners Stourbridge | Refuse Shine",
    metaDescription: "Professional cleaning services in Stourbridge (DY8, DY9). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Free quotes.",
    heroBadge: "Serving Stourbridge, Norton & Wollaston (DY8 / DY9)",
    introTitle: "Reliable Cleaning Services in Stourbridge",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides exceptional domestic and commercial cleaning services across Stourbridge and the DY8 and DY9 postcodes. We regularly clean homes in Oldswinford, Norton, Wollaston, Pedmore, Lye, Wollescote, and the Hagley border.",
      "Our experienced, reference-checked cleaners understand the care required for diverse property styles, from period cottages and Victorian villas to contemporary family estates. We provide tailored regular domestic visits, intensive deep cleaning, hot-water carpet extraction, and deposit-guaranteed tenancy checkout cleans."
    ],
    featuredServiceSlugs: [
      "regular-house-cleaning",
      "bathroom-cleaning",
      "carpet-cleaning",
      "deep-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Stourbridge?",
    whyChoose: [
      {
        title: "Punctual & Local Cleaners",
        description: "Our dedicated mobile teams service Stourbridge and surrounding districts daily with reliable arrival times."
      },
      {
        title: "Vetted & Insured Staff",
        description: "Every cleaner is thoroughly vetted, DBS-checked, and backed by public liability insurance for total peace of mind."
      },
      {
        title: "Tailored Housekeeping Plans",
        description: "We follow your specific cleaning preferences and focus on the rooms and fixtures that matter most to you."
      },
      {
        title: "Transparent Upfront Pricing",
        description: "No hidden extras. We provide free, transparent quotes tailored to your property size and cleaning needs."
      },
      {
        title: "Eco-Friendly Cleaning Products",
        description: "We use effective, pet-safe, and child-safe cleaning formulations that protect your surfaces and family."
      }
    ],
    nearbyTitle: "Serving Stourbridge and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Stourbridge and neighbouring Black Country and Worcestershire areas:",
    nearbyLocations: [
      { name: "Brierley Hill", slug: "brierley-hill", postcode: "DY5", distanceOrNote: "2 miles North-East" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "5 miles North-East" },
      { name: "Kidderminster", slug: "kidderminster", postcode: "DY10 / DY11", distanceOrNote: "6 miles South-West" },
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "7 miles East" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "9 miles North" },
      { name: "Redditch", slug: "redditch", postcode: "B97 / B98", distanceOrNote: "14 miles South-East" }
    ],
    contextTitle: "Cleaning Services for Properties in Stourbridge",
    contextContent: [
      "Stourbridge boasts charming character properties, Edwardian family homes in Oldswinford and Pedmore, and spacious modern developments in Wollaston and Norton. Many homes feature high ceilings, traditional hearths, and extensive hardwood or carpeted flooring.",
      "Refuse Shine Cleaning LTD provides specialized floor care, limescale management for hard-water bathrooms, and methodical domestic maintenance to preserve the beauty and hygiene of your property."
    ],
    faqs: [
      {
        question: "Do you clean houses in Norton and Wollaston?",
        answer: "Yes, we cover all areas of Stourbridge (DY8 and DY9), including Norton, Wollaston, Oldswinford, Pedmore, Lye, and Wollescote."
      },
      {
        question: "Can I book a regular cleaner in Stourbridge?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with consistent cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Stourbridge?",
        answer: "Yes, our tenancy cleans follow comprehensive inventory checklists to ensure full deposit protection for tenants and landlords."
      },
      {
        question: "Are your cleaners insured in Stourbridge?",
        answer: "Yes, all our staff are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Stourbridge?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Stourbridge?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "solihull",
    name: "Solihull",
    postcodes: "B90, B91, B92, B93, B94",
    shortDescription: "First-class domestic cleaning, deep cleans, end of tenancy, and office cleaning across Solihull, Shirley, Knowle, Dorridge, and Olton.",
    tagline: "Exceptional home and commercial cleaning services across Solihull and the wider borough from vetted local professionals.",
    metaTitle: "Cleaning Services in Solihull | Cleaners Solihull | Refuse Shine",
    metaDescription: "Professional cleaning services in Solihull (B90-B94). Regular domestic cleaning, deep cleans, end of tenancy, and carpet cleaning. Free transparent quotes.",
    heroBadge: "Serving All Solihull Borough Districts (B90 - B94)",
    introTitle: "Reliable Cleaning Services in Solihull",
    introParagraphs: [
      "Refuse Shine Cleaning LTD offers premium residential and commercial cleaning services across the borough of Solihull and surrounding postcodes B90, B91, B92, B93, and B94. We proudly service homes and business premises in central Solihull, Shirley, Olton, Knowle, Dorridge, Bentley Heath, Monkspath, and Dickens Heath.",
      "We tailor each cleaning schedule to meet high domestic standards, ensuring busy executives, active families, and local landlords enjoy immaculate interiors with zero hassle. From recurring weekly housekeeping to one-off deep cleans and professional steam carpet extraction, our staff ensure consistent excellence."
    ],
    featuredServiceSlugs: [
      "regular-house-cleaning",
      "end-of-tenancy-cleaning",
      "deep-cleaning",
      "office-clean"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Solihull?",
    whyChoose: [
      {
        title: "High Standards & Attention to Detail",
        description: "Our vetted cleaners take pride in delivering meticulous, spotless results on every domestic and commercial visit."
      },
      {
        title: "Fully Vetted & Insured Staff",
        description: "All team members are reference-checked, insured, and trained in modern hygienic procedures."
      },
      {
        title: "Transparent, Honest Pricing",
        description: "We provide fixed, upfront quotes with zero hidden fees or unexpected extras."
      },
      {
        title: "Flexible Cleaning Schedules",
        description: "Choose weekly, fortnightly, monthly, or one-off visits that integrate seamlessly into your routine."
      },
      {
        title: "Complete Cleaning Solutions",
        description: "From routine domestic tidying to heavy-duty steam carpet extraction and oven degreasing, we do it all."
      }
    ],
    nearbyTitle: "Serving Solihull and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Solihull and neighbouring West Midlands communities:",
    nearbyLocations: [
      { name: "Redditch", slug: "redditch", postcode: "B97 / B98", distanceOrNote: "8 miles South-West" },
      { name: "Smethwick", slug: "smethwick", postcode: "B66 / B67", distanceOrNote: "10 miles North-West" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "11 miles North-West" },
      { name: "Sutton Coldfield", slug: "sutton-coldfield", postcode: "B72 - B76", distanceOrNote: "12 miles North" },
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "11 miles North-West" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "16 miles North-West" }
    ],
    contextTitle: "Cleaning Services for Properties in Solihull",
    contextContent: [
      "Solihull features an impressive mix of executive family residences, detached period homes in Knowle and Dorridge, and stylish modern developments in Shirley and Dickens Heath. Maintaining large open-plan living areas, designer kitchens, and multiple bathrooms requires professional care.",
      "Refuse Shine Cleaning LTD provides the dedicated operatives, commercial equipment, and premium cleaning products to ensure your Solihull property remains spotless and welcoming all year round."
    ],
    faqs: [
      {
        question: "Do you clean houses in Shirley, Knowle, and Dorridge?",
        answer: "Yes, we cover all areas of Solihull (B90, B91, B92, B93, B94), including Shirley, Knowle, Dorridge, Olton, Monkspath, and Dickens Heath."
      },
      {
        question: "Can I book a regular domestic cleaner in Solihull?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you offer end of tenancy cleaning in Solihull?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Solihull?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Solihull?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Solihull?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "tamworth",
    name: "Tamworth",
    postcodes: "B77, B78, B79",
    shortDescription: "Dependable domestic cleaning, deep cleans, move-out cleaning, and commercial cleaning across Tamworth, Amington, Wilnecote, and Belgrave.",
    tagline: "Trusted home and commercial cleaning services across Tamworth and surrounding Staffordshire postcodes B77, B78, and B79.",
    metaTitle: "Cleaning Services in Tamworth | Cleaners Tamworth | Refuse Shine",
    metaDescription: "Professional cleaning services in Tamworth (B77, B78, B79). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Free quotes.",
    heroBadge: "Serving Tamworth & Staffordshire Borders (B77 - B79)",
    introTitle: "Reliable Cleaning Services in Tamworth",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides dependable residential and commercial cleaning services across Tamworth and the B77, B78, and B79 postcode areas. We serve households and businesses in central Tamworth, Wilnecote, Amington, Belgrave, Coton Green, Glascote, Fazeley, and Dosthill.",
      "Whether you are moving into a new build, managing a busy household needing routine domestic visits, or preparing a rental property for handover, our fully insured and vetted cleaners provide spotless, trustworthy results with flexible scheduling."
    ],
    featuredServiceSlugs: [
      "kitchen-deep-cleaning",
      "deep-cleaning",
      "regular-house-cleaning",
      "carpet-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Tamworth?",
    whyChoose: [
      {
        title: "Dependable Local Teams",
        description: "Our mobile cleaners service Tamworth and surrounding Staffordshire communities with prompt arrival and consistent quality."
      },
      {
        title: "Vetted & Insured Staff",
        description: "All our cleaners are reference-checked, insured, and trained in modern hygienic cleaning protocols."
      },
      {
        title: "Clear, Upfront Rates",
        description: "No hidden charges or surprise extras. We provide upfront, transparent pricing and free custom quotes."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose weekly, fortnightly, monthly, or one-off appointments that fit conveniently around your work and family routines."
      },
      {
        title: "All-in-One Capabilities",
        description: "Combine domestic cleaning, carpet shampooing, oven scrubbing, and window washing into one convenient booking."
      }
    ],
    nearbyTitle: "Serving Tamworth and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Tamworth and neighbouring Staffordshire and West Midlands districts:",
    nearbyLocations: [
      { name: "Sutton Coldfield", slug: "sutton-coldfield", postcode: "B72 - B76", distanceOrNote: "7 miles South-West" },
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "12 miles West" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "14 miles West" },
      { name: "Stafford", slug: "stafford", postcode: "ST16 - ST18", distanceOrNote: "18 miles North-West" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "15 miles South-West" },
      { name: "Solihull", slug: "solihull", postcode: "B90 - B94", distanceOrNote: "17 miles South" }
    ],
    contextTitle: "Cleaning Services for Properties in Tamworth",
    contextContent: [
      "Tamworth features a dynamic mix of historic market-town properties, spacious suburban family houses in Amington and Wilnecote, and growing new-build residential estates around the borders.",
      "Refuse Shine Cleaning LTD provides the equipment and trained personnel to manage everyday household dust, pet hair, deep limescale in bathrooms, and high-temperature carpet steam extraction across Tamworth."
    ],
    faqs: [
      {
        question: "Do you clean houses in Amington, Wilnecote, and Fazeley?",
        answer: "Yes, we cover all areas under Tamworth postcodes B77, B78, and B79, including Amington, Wilnecote, Belgrave, Fazeley, and Coton Green."
      },
      {
        question: "Can I book a regular weekly cleaner in Tamworth?",
        answer: "Yes, we provide recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you offer carpet cleaning in Tamworth?",
        answer: "Yes, our team uses professional hot water extraction steam equipment to clean and revive carpets and upholstery."
      },
      {
        question: "Are your cleaners fully insured in Tamworth?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I request a quote for Tamworth cleaning?",
        answer: "You can book directly using our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Tamworth?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "kidderminster",
    name: "Kidderminster",
    postcodes: "DY10, DY11",
    shortDescription: "Professional domestic house cleaning, deep cleaning, end of tenancy, and carpet cleaning across Kidderminster, Bewdley border, and Wyre Forest.",
    tagline: "High-standard residential and commercial cleaning services across Kidderminster and the DY10/DY11 postcodes.",
    metaTitle: "Cleaning Services in Kidderminster | Cleaners Kidderminster | Refuse Shine",
    metaDescription: "Professional cleaning services in Kidderminster (DY10, DY11). House cleaning, deep cleans, end of tenancy, and carpet cleaning. Vetted cleaners, free quotes.",
    heroBadge: "Serving Kidderminster & Wyre Forest (DY10 / DY11)",
    introTitle: "Reliable Cleaning Services in Kidderminster",
    introParagraphs: [
      "Refuse Shine Cleaning LTD delivers high-standard domestic and commercial cleaning services across Kidderminster and the DY10 and DY11 postcode areas. We regularly cover properties in central Kidderminster, Broadwaters, Habberley, Franche, Aggborough, Greenhill, and Blakebrook.",
      "Renowned for its historic carpet heritage, Kidderminster properties deserve expert floor care and meticulous domestic maintenance. Our cleaning teams combine state-of-the-art steam extraction machinery with thorough room-by-room cleaning checklists to keep your home or business in pristine shape."
    ],
    featuredServiceSlugs: [
      "carpet-cleaning",
      "regular-house-cleaning",
      "deep-cleaning",
      "end-of-tenancy-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Kidderminster?",
    whyChoose: [
      {
        title: "Local & Dedicated Cleaners",
        description: "Our mobile teams regularly operate throughout Wyre Forest, ensuring punctuality, friendly communication, and consistent quality."
      },
      {
        title: "Vetted, Insured & Experienced",
        description: "All our cleaners are fully insured, vetted, and trained in proven cleaning procedures that guarantee thorough results."
      },
      {
        title: "Transparent Pricing",
        description: "We provide upfront, fixed pricing with free transparent quotes so you always know what to expect."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose recurring visits, one-off cleans, or weekend appointments that fit seamlessly into your lifestyle."
      },
      {
        title: "All Cleaning Needs Handled",
        description: "From routine domestic dusting to heavy-duty steam carpet extraction and oven degreasing, we handle it all."
      }
    ],
    nearbyTitle: "Serving Kidderminster and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Kidderminster and neighbouring Worcestershire and Black Country areas:",
    nearbyLocations: [
      { name: "Stourbridge", slug: "stourbridge", postcode: "DY8 / DY9", distanceOrNote: "6 miles North-East" },
      { name: "Brierley Hill", slug: "brierley-hill", postcode: "DY5", distanceOrNote: "8 miles North-East" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "10 miles North-East" },
      { name: "Redditch", slug: "redditch", postcode: "B97 / B98", distanceOrNote: "12 miles East" },
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "11 miles North-East" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "14 miles North-East" }
    ],
    contextTitle: "Cleaning Services for Properties in Kidderminster",
    contextContent: [
      "Kidderminster combines traditional Victorian terraced homes, post-war family properties in Habberley and Franche, and modern residential estates near the River Stour and Wyre Forest.",
      "Refuse Shine Cleaning LTD provides the necessary professional equipment and experienced personnel to handle everything from limescale buildup in bathrooms to deep carpet stain extraction and intensive kitchen degreasing."
    ],
    faqs: [
      {
        question: "Do you clean houses in Franche, Habberley, and Broadwaters?",
        answer: "Yes, we cover all areas under Kidderminster postcodes DY10 and DY11, including Franche, Habberley, Broadwaters, Aggborough, and Greenhill."
      },
      {
        question: "Can I book a regular weekly cleaner in Kidderminster?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Kidderminster?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Kidderminster?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Kidderminster?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Kidderminster?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "stafford",
    name: "Stafford",
    postcodes: "ST16, ST17, ST18",
    shortDescription: "Comprehensive domestic cleaning, deep cleans, end of tenancy, and office cleaning across Stafford, Castletown, Highfields, and Baswich.",
    tagline: "Professional residential and commercial cleaning services across Stafford and Staffordshire postcodes ST16, ST17, and ST18.",
    metaTitle: "Cleaning Services in Stafford | Cleaners Stafford | Refuse Shine",
    metaDescription: "Professional cleaning services in Stafford (ST16, ST17, ST18). Regular house cleaning, deep cleaning, end of tenancy, and commercial cleaning. Free quotes.",
    heroBadge: "Serving Stafford Town & Surrounds (ST16 - ST18)",
    introTitle: "Reliable Cleaning Services in Stafford",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides expert domestic and commercial cleaning services across the county town of Stafford, including postcodes ST16, ST17, and ST18. We regularly service properties in central Stafford, Castletown, Doxey, Highfields, Baswich, Weeping Cross, Wildwood, and Holmcroft.",
      "Our dedicated cleaners provide flexible recurring domestic visits, thorough deep cleans, student and private tenancy checkouts, and office cleaning. With vetted personnel, transparent pricing, and fast online booking, we make home and business cleaning completely stress-free."
    ],
    featuredServiceSlugs: [
      "regular-house-cleaning",
      "office-clean",
      "deep-cleaning",
      "end-of-tenancy-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Stafford?",
    whyChoose: [
      {
        title: "Dedicated Regional Coverage",
        description: "Our mobile cleaning vans operate across Staffordshire daily, ensuring punctual visits and reliable scheduling."
      },
      {
        title: "Vetted & Fully Insured Staff",
        description: "Every cleaner is reference-checked, insured, and trained in modern hygienic procedures."
      },
      {
        title: "Transparent, Upfront Pricing",
        description: "We provide honest pricing with zero hidden fees. What we quote is what you pay."
      },
      {
        title: "Customised Cleaning Plans",
        description: "We adapt our checklists to your priorities, whether you need deep kitchen degreasing or recurring general maintenance."
      },
      {
        title: "Comprehensive Service Range",
        description: "Combine carpet cleaning, oven scrubbing, window washing, and general domestic cleaning into one seamless booking."
      }
    ],
    nearbyTitle: "Serving Stafford and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Stafford and neighbouring Staffordshire and West Midlands districts:",
    nearbyLocations: [
      { name: "Cannock", slug: "cannock", postcode: "WS11 / WS12", distanceOrNote: "9 miles South" },
      { name: "Wolverhampton", slug: "wolverhampton", postcode: "WV1 - WV11", distanceOrNote: "15 miles South" },
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "15 miles South" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "14 miles South" },
      { name: "Tamworth", slug: "tamworth", postcode: "B77 - B79", distanceOrNote: "18 miles South-East" },
      { name: "Sutton Coldfield", slug: "sutton-coldfield", postcode: "B72 - B76", distanceOrNote: "18 miles South-East" }
    ],
    contextTitle: "Cleaning Services for Properties in Stafford",
    contextContent: [
      "Stafford features historic town properties, leafy residential suburban areas in Baswich and Weeping Cross, modern family developments in Castletown, and high-turnover rental homes near the university and hospital.",
      "Refuse Shine Cleaning LTD provides the skilled personnel and commercial equipment to handle heavy kitchen grease, limescale in bathrooms, high-traffic carpet wear, and end of tenancy turnaround cleaning across Stafford."
    ],
    faqs: [
      {
        question: "Do you clean houses in Baswich, Weeping Cross, and Highfields?",
        answer: "Yes, we cover all areas of Stafford (ST16, ST17, ST18), including Baswich, Weeping Cross, Highfields, Castletown, Doxey, and Wildwood."
      },
      {
        question: "Can I book regular weekly domestic cleaning in Stafford?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Stafford?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists to ensure full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Stafford?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Stafford?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Stafford?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "redditch",
    name: "Redditch",
    postcodes: "B97, B98",
    shortDescription: "Trusted domestic house cleaning, deep cleaning, end of tenancy, and carpet cleaning across Redditch, Webheath, Headless Cross, and Church Hill.",
    tagline: "Professional residential and commercial cleaning services across Redditch and surrounding B97/B98 postcodes.",
    metaTitle: "Cleaning Services in Redditch | Cleaners Redditch | Refuse Shine",
    metaDescription: "Professional cleaning services in Redditch (B97, B98). House cleaning, deep cleans, end of tenancy, and carpet cleaning. Vetted staff, free quotes.",
    heroBadge: "Serving Redditch & Surrounding Districts (B97 / B98)",
    introTitle: "Reliable Cleaning Services in Redditch",
    introParagraphs: [
      "Refuse Shine Cleaning LTD offers professional domestic and commercial cleaning services across Redditch and the B97 and B98 postcode districts. We regularly clean properties in Webheath, Headless Cross, Walkwood, Crabbs Cross, Church Hill, Matchborough, and Greenlands.",
      "From routine domestic cleaning that keeps busy family homes tidy to detailed tenancy checkouts that secure deposits, our vetted and insured cleaners deliver reliable, high-calibre cleaning tailored to your schedule."
    ],
    featuredServiceSlugs: [
      "window-cleaning",
      "regular-house-cleaning",
      "deep-cleaning",
      "carpet-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Redditch?",
    whyChoose: [
      {
        title: "Dedicated Local Cleaners",
        description: "Our mobile teams operate regularly across Worcestershire and south West Midlands, ensuring punctual visits and easy scheduling."
      },
      {
        title: "Vetted & Insured Staff",
        description: "Every cleaner is reference-checked, insured, and trained in modern hygienic procedures."
      },
      {
        title: "Clear, Upfront Pricing",
        description: "We provide transparent, fixed rates with no hidden costs. What we quote is what you pay."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose recurring visits, one-off cleans, or weekend slots that fit your work and family schedule."
      },
      {
        title: "Complete Cleaning Solutions",
        description: "Combine carpet cleaning, oven scrubbing, window washing, and general domestic cleaning into one booking."
      }
    ],
    nearbyTitle: "Serving Redditch and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Redditch and neighbouring Worcestershire and West Midlands communities:",
    nearbyLocations: [
      { name: "Solihull", slug: "solihull", postcode: "B90 - B94", distanceOrNote: "8 miles North-East" },
      { name: "Smethwick", slug: "smethwick", postcode: "B66 / B67", distanceOrNote: "12 miles North" },
      { name: "Stourbridge", slug: "stourbridge", postcode: "DY8 / DY9", distanceOrNote: "14 miles North-West" },
      { name: "Kidderminster", slug: "kidderminster", postcode: "DY10 / DY11", distanceOrNote: "12 miles West" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "14 miles North-West" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "18 miles North-West" }
    ],
    contextTitle: "Cleaning Services for Properties in Redditch",
    contextContent: [
      "Redditch features diverse residential neighborhoods, from established family homes in Webheath and Headless Cross to modern townhouses in Church Hill and Matchborough.",
      "Refuse Shine Cleaning LTD provides the skilled personnel and commercial equipment to tackle stubborn grime, pet odours, and post-tenancy messes across Redditch."
    ],
    faqs: [
      {
        question: "Do you clean houses in Webheath, Headless Cross, and Crabbs Cross?",
        answer: "Yes, we cover all areas of Redditch under B97 and B98, including Webheath, Headless Cross, Walkwood, Crabbs Cross, and Church Hill."
      },
      {
        question: "Can I book a regular weekly cleaner in Redditch?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Redditch?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Redditch?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Redditch?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Redditch?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in minutes or request a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "cannock",
    name: "Cannock",
    postcodes: "WS11, WS12",
    shortDescription: "Professional domestic house cleaning, deep cleaning, end of tenancy, and steam carpet cleaning across Cannock, Hednesford, and Heath Hayes.",
    tagline: "Trusted residential and commercial cleaning services across Cannock and the WS11/WS12 postcodes from vetted local cleaners.",
    metaTitle: "Cleaning Services in Cannock | Cleaners Cannock | Refuse Shine",
    metaDescription: "Professional cleaning services in Cannock (WS11, WS12). Regular domestic cleaning, deep cleans, end of tenancy, and carpet cleaning. Local cleaners, free quotes.",
    heroBadge: "Serving Cannock & Hednesford (WS11 / WS12)",
    introTitle: "Reliable Cleaning Services in Cannock",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides dependable residential and commercial cleaning services across Cannock, Hednesford, Heath Hayes, Chadsmoor, and Norton Canes. Covering postcodes WS11 and WS12, our cleaning teams frequently operate across south Staffordshire and the Black Country borders.",
      "Whether you need regular weekly house cleaning to stay on top of daily family chores, a comprehensive one-off deep clean, or an end of tenancy clean to secure your rental deposit, our fully trained, vetted, and insured staff deliver consistent, high-standard results tailored to your schedule."
    ],
    featuredServiceSlugs: [
      "carpet-cleaning",
      "deep-cleaning",
      "regular-house-cleaning",
      "end-of-tenancy-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Cannock?",
    whyChoose: [
      {
        title: "Fast Local Response",
        description: "Our mobile cleaning units operate throughout Cannock and south Staffordshire daily, ensuring prompt scheduling."
      },
      {
        title: "Vetted & Insured Cleaning Team",
        description: "Every cleaner is thoroughly vetted, trained in modern hygienic methods, and backed by comprehensive public liability insurance."
      },
      {
        title: "Transparent, Honest Pricing",
        description: "We provide upfront, fixed pricing with zero hidden charges. Request a free quote with no obligation."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose weekly, fortnightly, monthly, or one-off appointments that fit seamlessly around your family routine."
      },
      {
        title: "Full Range of Cleaning Options",
        description: "Combine domestic cleaning, steam carpet extraction, and oven degreasing into a single hassle-free booking."
      }
    ],
    nearbyTitle: "Serving Cannock and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Cannock and neighbouring Staffordshire and West Midlands communities:",
    nearbyLocations: [
      { name: "Stafford", slug: "stafford", postcode: "ST16 - ST18", distanceOrNote: "9 miles North" },
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "7 miles South" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "8 miles South" },
      { name: "Wolverhampton", slug: "wolverhampton", postcode: "WV1 - WV11", distanceOrNote: "9 miles South-West" },
      { name: "Tamworth", slug: "tamworth", postcode: "B77 - B79", distanceOrNote: "14 miles East" },
      { name: "Sutton Coldfield", slug: "sutton-coldfield", postcode: "B72 - B76", distanceOrNote: "12 miles South-East" }
    ],
    contextTitle: "Cleaning Services for Properties in Cannock",
    contextContent: [
      "Cannock features a diverse range of homes, from traditional miner's cottages and established family semi-detached properties in Chadsmoor and Hednesford, to modern residential developments near Cannock Chase and Hawk's Green.",
      "Refuse Shine Cleaning LTD provides the equipment and trained personnel to manage high-traffic carpet soil, pet hair, deep limescale in bathrooms, and intensive kitchen degreasing across Cannock."
    ],
    faqs: [
      {
        question: "Do you clean houses in Hednesford and Heath Hayes?",
        answer: "Yes, we cover all areas under Cannock postcodes WS11 and WS12, including Hednesford, Heath Hayes, Chadsmoor, and Norton Canes."
      },
      {
        question: "Can I book a regular weekly cleaner in Cannock?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Cannock?",
        answer: "Yes, our end of tenancy clean is designed specifically to meet letting agent inventory checklists for a smooth deposit return."
      },
      {
        question: "Do you offer carpet cleaning in Cannock?",
        answer: "Yes, our team uses professional hot water extraction steam equipment to clean and revive carpets and upholstery."
      },
      {
        question: "How do I book cleaning services in Cannock?",
        answer: "You can book directly using our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Cannock?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "aldridge",
    name: "Aldridge",
    postcodes: "WS9",
    shortDescription: "Trusted domestic house cleaning, deep cleaning, end of tenancy, and steam carpet cleaning across Aldridge, Leighswood, and Walsall Wood.",
    tagline: "Professional residential and commercial cleaning services across Aldridge and the WS9 postcode area from vetted local cleaners.",
    metaTitle: "Cleaning Services in Aldridge | Cleaners Aldridge | Refuse Shine",
    metaDescription: "Professional cleaning services in Aldridge (WS9). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Vetted staff, free quotes.",
    heroBadge: "Serving Aldridge & WS9 Districts",
    introTitle: "Reliable Cleaning Services in Aldridge",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides exceptional domestic and commercial cleaning services across Aldridge, Walsall Wood, Leighswood, and the surrounding WS9 postcode area. Located just minutes from our Willenhall base, Aldridge properties benefit from fast dispatch, flexible scheduling, and dedicated local cleaning teams.",
      "Whether you manage a busy household requiring regular weekly domestic visits, need a thorough one-off seasonal deep clean, or require professional carpet stain extraction, our vetted and fully insured cleaners deliver consistent, spotless results."
    ],
    featuredServiceSlugs: [
      "regular-house-cleaning",
      "deep-cleaning",
      "carpet-cleaning",
      "end-of-tenancy-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Aldridge?",
    whyChoose: [
      {
        title: "Fast Dispatch from Nearby Hub",
        description: "Operating daily across Walsall and Aldridge ensures prompt arrival and easy scheduling."
      },
      {
        title: "Vetted & Insured Cleaning Team",
        description: "Every cleaner is thoroughly vetted, reference-checked, and backed by public liability insurance."
      },
      {
        title: "Tailored Domestic Packages",
        description: "We adapt our checklists to your priorities, from bathroom descaling to delicate upholstery care."
      },
      {
        title: "Transparent, Honest Pricing",
        description: "Clear fixed pricing with no hidden charges. What we quote is what you pay."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose recurring visits, one-off cleans, or weekend appointments that suit your schedule."
      }
    ],
    nearbyTitle: "Serving Aldridge and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Aldridge and neighbouring West Midlands communities:",
    nearbyLocations: [
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "3 miles West" },
      { name: "Brownhills", slug: "brownhills", postcode: "WS8", distanceOrNote: "3 miles North" },
      { name: "Sutton Coldfield", slug: "sutton-coldfield", postcode: "B72 - B76", distanceOrNote: "4 miles South-East" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "6 miles West" },
      { name: "Cannock", slug: "cannock", postcode: "WS11 / WS12", distanceOrNote: "7 miles North-West" },
      { name: "Tamworth", slug: "tamworth", postcode: "B77 - B79", distanceOrNote: "9 miles East" }
    ],
    contextTitle: "Cleaning Services for Properties in Aldridge",
    contextContent: [
      "Aldridge features attractive detached and semi-detached family homes, traditional properties near the village green, and modern residential developments around Leighswood.",
      "Refuse Shine Cleaning LTD provides the trained staff and professional equipment required to maintain pristine interiors, from treating hard-water limescale to deep carpet steam extraction."
    ],
    faqs: [
      {
        question: "Do you clean houses across all parts of Aldridge?",
        answer: "Yes, we cover all areas under WS9, including Aldridge village, Walsall Wood, Leighswood, and Druids Heath."
      },
      {
        question: "Can I book a regular weekly cleaner in Aldridge?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Aldridge?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Aldridge?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Aldridge?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Aldridge?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "brownhills",
    name: "Brownhills",
    postcodes: "WS8",
    shortDescription: "Dependable domestic cleaning, deep cleans, end of tenancy, and moving cleans across Brownhills, Clayhanger, and Shire Oak.",
    tagline: "Quality residential and commercial cleaning services across Brownhills and the WS8 postcode area.",
    metaTitle: "Cleaning Services in Brownhills | Cleaners Brownhills | Refuse Shine",
    metaDescription: "Professional cleaning services in Brownhills (WS8). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Free quotes.",
    heroBadge: "Serving Brownhills & Clayhanger (WS8)",
    introTitle: "Reliable Cleaning Services in Brownhills",
    introParagraphs: [
      "Refuse Shine Cleaning LTD delivers high-quality domestic and commercial cleaning services across Brownhills, Clayhanger, Shire Oak, and Catshill. Covering the WS8 postcode area, our cleaning teams provide dependable solutions for homeowners, private tenants, and commercial premises.",
      "From weekly domestic upkeep to comprehensive deep cleaning and deposit-guaranteed tenancy checkouts, our vetted and insured cleaners use professional tools and eco-friendly products to keep your home immaculate."
    ],
    featuredServiceSlugs: [
      "deep-cleaning",
      "carpet-cleaning",
      "regular-house-cleaning",
      "kitchen-deep-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Brownhills?",
    whyChoose: [
      {
        title: "Fast Local Arrival",
        description: "Our mobile teams operate daily across Walsall and Brownhills, ensuring punctual visits."
      },
      {
        title: "Vetted & Insured Staff",
        description: "All team members are reference-checked, insured, and trained in modern hygiene protocols."
      },
      {
        title: "Clear, Upfront Pricing",
        description: "We provide transparent, fixed rates with no hidden fees. What we quote is what you pay."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose recurring visits, one-off cleans, or weekend slots that fit your work and family schedule."
      },
      {
        title: "All-in-One Capabilities",
        description: "Combine domestic cleaning, steam carpet extraction, and oven degreasing into one convenient booking."
      }
    ],
    nearbyTitle: "Serving Brownhills and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Brownhills and neighbouring communities:",
    nearbyLocations: [
      { name: "Aldridge", slug: "aldridge", postcode: "WS9", distanceOrNote: "3 miles South" },
      { name: "Cannock", slug: "cannock", postcode: "WS11 / WS12", distanceOrNote: "4 miles North-West" },
      { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9", distanceOrNote: "5 miles South-West" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "7 miles South-West" },
      { name: "Tamworth", slug: "tamworth", postcode: "B77 - B79", distanceOrNote: "8 miles East" },
      { name: "Stafford", slug: "stafford", postcode: "ST16 - ST18", distanceOrNote: "13 miles North-West" }
    ],
    contextTitle: "Cleaning Services for Properties in Brownhills",
    contextContent: [
      "Brownhills combines traditional terraced properties and post-war family estates with newer modern housing around Clayhanger and the canal basin.",
      "Refuse Shine Cleaning LTD provides the equipment and trained personnel to manage stubborn kitchen grease, pet hair, and high-traffic carpet wear across Brownhills."
    ],
    faqs: [
      {
        question: "Do you clean houses in Clayhanger and Shire Oak?",
        answer: "Yes, we cover all areas of Brownhills (WS8), including Clayhanger, Shire Oak, Catshill, and High Street areas."
      },
      {
        question: "Can I book a regular weekly cleaner in Brownhills?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Brownhills?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Brownhills?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Brownhills?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Brownhills?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "rowley-regis",
    name: "Rowley Regis",
    postcodes: "B65",
    shortDescription: "Professional domestic house cleaning, deep cleaning, end of tenancy, and carpet cleaning across Rowley Regis, Blackheath, and Springfield.",
    tagline: "Trusted home and commercial cleaning services across Rowley Regis and surrounding B65 postcodes.",
    metaTitle: "Cleaning Services in Rowley Regis | Cleaners Rowley Regis | Refuse Shine",
    metaDescription: "Professional cleaning services in Rowley Regis (B65). Regular domestic cleaning, deep cleans, end of tenancy, and carpet cleaning. Free quotes.",
    heroBadge: "Serving Rowley Regis & Blackheath (B65)",
    introTitle: "Reliable Cleaning Services in Rowley Regis",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides dependable residential and commercial cleaning services across Rowley Regis, Blackheath, Springfield, Whiteheath, and the entire B65 postcode area. Located in the heart of Sandwell, we regularly serve local households and businesses with high cleaning standards.",
      "Whether you need recurring domestic cleaning to free up your free time, an intensive deep clean before hosting family, or an end of tenancy clean to secure your deposit, our vetted and insured team delivers immaculate results."
    ],
    featuredServiceSlugs: [
      "regular-house-cleaning",
      "bathroom-cleaning",
      "deep-cleaning",
      "end-of-tenancy-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Rowley Regis?",
    whyChoose: [
      {
        title: "Dedicated Local Cleaners",
        description: "Our staff regularly operate across Sandwell and Blackheath, ensuring punctuality and consistent quality."
      },
      {
        title: "Vetted & Insured Staff",
        description: "Every cleaner is reference-checked, insured, and trained in modern hygienic procedures."
      },
      {
        title: "Transparent Fixed Rates",
        description: "We provide clear, honest pricing with no hidden charges. What we quote is what you pay."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose weekly, fortnightly, monthly, or one-off visits that fit your lifestyle."
      },
      {
        title: "Full Range of Services",
        description: "From routine domestic dusting to steam carpet extraction and oven degreasing, we handle it all."
      }
    ],
    nearbyTitle: "Serving Rowley Regis and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Rowley Regis and neighbouring Black Country communities:",
    nearbyLocations: [
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "2 miles North-East" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "3 miles North-West" },
      { name: "Halesowen", slug: "halesowen", postcode: "B62 / B63", distanceOrNote: "2 miles South" },
      { name: "Smethwick", slug: "smethwick", postcode: "B66 / B67", distanceOrNote: "3 miles East" },
      { name: "Tipton", slug: "tipton", postcode: "DY4", distanceOrNote: "4 miles North" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "4 miles North-East" }
    ],
    contextTitle: "Cleaning Services for Properties in Rowley Regis",
    contextContent: [
      "Rowley Regis features elevated hilltop properties, traditional terraced houses, and spacious suburban family homes across Blackheath and Whiteheath.",
      "Refuse Shine Cleaning LTD provides the necessary expertise and professional equipment to handle everything from limescale removal in bathrooms to deep carpet extraction and tenancy turnaround cleaning."
    ],
    faqs: [
      {
        question: "Do you clean houses in Blackheath and Springfield?",
        answer: "Yes, we cover all areas of Rowley Regis (B65), including Blackheath, Springfield, Whiteheath, and Rowley Village."
      },
      {
        question: "Can I book a regular cleaner in Rowley Regis?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Rowley Regis?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Rowley Regis?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Rowley Regis?",
        answer: "You can book directly via our online booking wizard or call us on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Rowley Regis?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    postcodes: "B1 - B48",
    shortDescription: "Comprehensive domestic house cleaning, deep cleaning, student let turns, and commercial office cleaning across Birmingham.",
    tagline: "Professional residential and commercial cleaning services across Birmingham city centre and surrounding suburbs.",
    metaTitle: "Cleaning Services in Birmingham | Cleaners Birmingham | Refuse Shine",
    metaDescription: "Professional cleaning services in Birmingham (B1-B48). Regular house cleaning, deep cleaning, end of tenancy, and office cleaning. Free quotes.",
    heroBadge: "Serving Greater Birmingham (B1 - B48)",
    introTitle: "Reliable Cleaning Services in Birmingham",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides premier residential and commercial cleaning services throughout the city of Birmingham and surrounding suburban boroughs. We regularly service modern apartments in the city centre, family residences in Edgbaston, Harborne, and Moseley, and rental properties across Selly Oak and Erdington.",
      "Whether you need regular weekly house cleaning, intensive deep cleaning, rapid student let turnarounds, or corporate office cleaning, our vetted and insured professionals deliver immaculate results tailored to your exact standards."
    ],
    featuredServiceSlugs: [
      "office-clean",
      "regular-house-cleaning",
      "deep-cleaning",
      "end-of-tenancy-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Birmingham?",
    whyChoose: [
      {
        title: "Citywide Mobile Coverage",
        description: "Our mobile teams operate daily across Birmingham and surrounding boroughs with reliable punctuality."
      },
      {
        title: "Vetted & Insured Cleaning Staff",
        description: "All staff are reference-checked, insured, and trained to clean methodically and respectfully."
      },
      {
        title: "Transparent & Upfront Pricing",
        description: "We provide honest pricing with zero hidden fees. What we quote is what you pay."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose weekly, fortnightly, monthly, or one-off appointments that fit smoothly into your calendar."
      },
      {
        title: "Complete Cleaning Solutions",
        description: "Combine domestic cleaning, carpet shampooing, oven scrubbing, and office cleaning into one booking."
      }
    ],
    nearbyTitle: "Serving Birmingham and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Birmingham and neighbouring West Midlands communities:",
    nearbyLocations: [
      { name: "Smethwick", slug: "smethwick", postcode: "B66 / B67", distanceOrNote: "3 miles West" },
      { name: "Solihull", slug: "solihull", postcode: "B90 - B94", distanceOrNote: "7 miles South-East" },
      { name: "Sutton Coldfield", slug: "sutton-coldfield", postcode: "B72 - B76", distanceOrNote: "7 miles North-East" },
      { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71", distanceOrNote: "5 miles North-West" },
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "5 miles West" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "12 miles North-West" }
    ],
    contextTitle: "Cleaning Services for Properties in Birmingham",
    contextContent: [
      "Birmingham features an extensive mix of property types, from high-rise city apartments and historic Victorian villas in Edgbaston, to bustling student HMOs in Selly Oak and suburban family homes.",
      "Refuse Shine Cleaning LTD provides the skilled personnel and commercial equipment to handle heavy kitchen grease, limescale in bathrooms, high-traffic carpet wear, and end of tenancy turnaround cleaning across Birmingham."
    ],
    faqs: [
      {
        question: "Do you clean flats in Birmingham city centre?",
        answer: "Yes, we regularly clean modern apartment developments and flats across B1, B2, B3, B4, B5, and city centre locations."
      },
      {
        question: "Can I book a regular domestic cleaner in Birmingham?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide student accommodation cleaning in Birmingham?",
        answer: "Yes, we provide end of tenancy and turnaround cleaning for student flats, HMOs, and rental houses across Birmingham."
      },
      {
        question: "Are your cleaners fully insured in Birmingham?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Birmingham?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Birmingham?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  },
  {
    slug: "halesowen",
    name: "Halesowen",
    postcodes: "B62, B63",
    shortDescription: "Reliable domestic cleaning, deep cleans, end of tenancy, and carpet cleaning across Halesowen, Hasbury, Hayley Green, and Lapal.",
    tagline: "Professional residential and commercial cleaning services across Halesowen and the B62/B63 postcodes.",
    metaTitle: "Cleaning Services in Halesowen | Cleaners Halesowen | Refuse Shine",
    metaDescription: "Professional cleaning services in Halesowen (B62, B63). Regular house cleaning, deep cleaning, end of tenancy, and carpet cleaning. Free quotes.",
    heroBadge: "Serving Halesowen & Hasbury (B62 / B63)",
    introTitle: "Reliable Cleaning Services in Halesowen",
    introParagraphs: [
      "Refuse Shine Cleaning LTD provides high-quality residential and commercial cleaning services across Halesowen, Hasbury, Hayley Green, Lapal, and Cradley. Covering postcodes B62 and B63, our cleaning staff provide dependable care for family homes, apartments, and commercial facilities.",
      "From routine domestic cleaning to intensive seasonal deep cleans and end of tenancy checkout sanitisation, our vetted cleaners work diligently to keep your property looking and feeling its best."
    ],
    featuredServiceSlugs: [
      "carpet-cleaning",
      "deep-cleaning",
      "regular-house-cleaning",
      "window-cleaning"
    ],
    whyChooseTitle: "Why Choose Refuse Shine in Halesowen?",
    whyChoose: [
      {
        title: "Punctual & Local Cleaners",
        description: "Our dedicated mobile teams service Halesowen and surrounding areas daily with reliable arrival times."
      },
      {
        title: "Vetted & Insured Staff",
        description: "Every cleaner is thoroughly vetted, insured, and trained in modern hygienic procedures."
      },
      {
        title: "Transparent Pricing",
        description: "We provide upfront, fixed pricing with free transparent quotes so you always know what to expect."
      },
      {
        title: "Flexible Scheduling",
        description: "Choose recurring visits, one-off cleans, or weekend appointments that fit smoothly into your routine."
      },
      {
        title: "All-in-One Capabilities",
        description: "Combine domestic cleaning, steam carpet extraction, and window washing into one convenient booking."
      }
    ],
    nearbyTitle: "Serving Halesowen and Surrounding Areas",
    nearbyIntro: "We provide comprehensive cleaning coverage across Halesowen and neighbouring West Midlands communities:",
    nearbyLocations: [
      { name: "Rowley Regis", slug: "rowley-regis", postcode: "B65", distanceOrNote: "2 miles North" },
      { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69", distanceOrNote: "4 miles North" },
      { name: "Stourbridge", slug: "stourbridge", postcode: "DY8 / DY9", distanceOrNote: "4 miles West" },
      { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3", distanceOrNote: "5 miles North-West" },
      { name: "Birmingham", slug: "birmingham", postcode: "B1 - B48", distanceOrNote: "7 miles East" },
      { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13", distanceOrNote: "10 miles North" }
    ],
    contextTitle: "Cleaning Services for Properties in Halesowen",
    contextContent: [
      "Halesowen features charming character homes in Hayley Green, modern suburban estates in Hasbury and Lapal, and convenient town-centre properties.",
      "Refuse Shine Cleaning LTD provides the equipment and trained personnel to manage everyday household dust, pet hair, deep limescale in bathrooms, and high-temperature carpet steam extraction across Halesowen."
    ],
    faqs: [
      {
        question: "Do you clean houses in Hasbury, Hayley Green, and Lapal?",
        answer: "Yes, we cover all areas under Halesowen postcodes B62 and B63, including Hasbury, Hayley Green, Lapal, and Cradley."
      },
      {
        question: "Can I book a regular weekly cleaner in Halesowen?",
        answer: "Yes, we offer recurring domestic cleaning on weekly, fortnightly, or monthly schedules with dedicated cleaners."
      },
      {
        question: "Do you provide end of tenancy cleaning in Halesowen?",
        answer: "Yes, our end of tenancy cleans follow comprehensive letting agent checklists for full deposit protection."
      },
      {
        question: "Are your cleaners fully insured in Halesowen?",
        answer: "Yes, all our cleaners are covered by comprehensive public liability insurance."
      },
      {
        question: "How do I book cleaning services in Halesowen?",
        answer: "You can book directly via our online booking wizard or call our team on +447721714435 for a free quote."
      }
    ],
    ctaTitle: "Need a Cleaner in Halesowen?",
    ctaDescription: "Tell us what you need cleaned and we'll help you choose the right service. Book online in 2 minutes or get a free quote from Refuse Shine Cleaning LTD."
  }
];

export function getLocationBySlug(slug: string): LocationDetail | undefined {
  return LOCATIONS_DATA.find((loc) => loc.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS_DATA.map((loc) => loc.slug);
}
