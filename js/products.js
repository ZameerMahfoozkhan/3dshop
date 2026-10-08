/**
 * 3D Shop - Product Catalog Database
 * Structured product information for ready-made 3D printed goods.
 */

const PRODUCTS = [
  {
    id: "3DP-001",
    name: "Minimal Geometric Phone Stand",
    tagline: "Solid angled dock for smartphone or tablet with cable pass-through.",
    category: "Desk",
    price: 299,
    originalPrice: 399,
    badge: "Bestseller",
    rating: 4.9,
    ratingCount: 38,
    material: "Eco-friendly PLA+",
    infill: "25% Gyroid infill for rigid stability",
    dimensions: "85 × 75 × 92 mm",
    weight: "72g",
    leadTime: "1-2 days (Same-day dispatch in Greater Noida)",
    colors: [
      { name: "Matte Charcoal", hex: "#27272A" },
      { name: "Arctic White", hex: "#F4F4F5" },
      { name: "Terracotta", hex: "#B45309" }
    ],
    image: "assets/products/minimal-phone-stand.jpg",
    description: "Engineered with a precise 65-degree viewing angle ideal for video calls, desktop monitoring, and media playback. Features an integrated bottom cut-out for unobstructed USB-C or Lightning charging cables and low-profile non-marring desk feet.",
    highlights: [
      "Fits all standard iPhones, Android smartphones, and compact tablets up to 11 inches",
      "Ergonomic cable management pass-through channel",
      "Weighted structural geometry prevents tip-overs",
      "Tactile matte finish with subtle anti-glare layer texture"
    ],
    faqs: [
      { q: "Will this support a heavy phone with a thick case?", a: "Yes, the support lip depth is 14mm, comfortably accommodating OtterBox, Spigen, and pop-socket equipped devices." },
      { q: "Can it be printed in a custom color?", a: "Absolutely! Contact us on WhatsApp if you want specific corporate or custom colors." }
    ]
  },
  {
    id: "3DP-002",
    name: "Parametric Spiral Planter",
    tagline: "Architectural twisted-rib planter designed for succulents and indoor greens.",
    category: "Home",
    price: 449,
    originalPrice: 549,
    badge: "Staff Pick",
    rating: 4.8,
    ratingCount: 27,
    material: "Textured Matte PLA",
    infill: "Watertight double-wall perimeter with drainage",
    dimensions: "105 × 105 × 95 mm (Internal dia: 88mm)",
    weight: "115g",
    leadTime: "1-2 days",
    colors: [
      { name: "Bone White", hex: "#F5F5F0" },
      { name: "Terracotta", hex: "#C2593F" },
      { name: "Sage Green", hex: "#7E9F85" }
    ],
    image: "assets/products/geometric-planter.jpg",
    description: "Designed using computational generative algorithms, this spiral ribbed planter combines organic fluid motion with modern geometric architecture. Includes an internal drainage hole with an optional catch-tray base to keep root systems aerated and healthy.",
    highlights: [
      "Matte ceramic-look stone finish without fragile ceramic brittleness",
      "Engineered drainage mesh ensures healthy root aeration",
      "UV-stable indoor formulation that resists fading",
      "Pair with succulents, cacti, or desk money plants"
    ],
    faqs: [
      { q: "Is it completely waterproof?", a: "Yes, our sliced profiles utilize overlapping perimeter walls to ensure zero water weeping." },
      { q: "Does it come with a saucer?", a: "A snap-fitting low profile drainage saucer is included with every planter." }
    ]
  },
  {
    id: "3DP-003",
    name: "Sculptural Arch Headphone Stand",
    tagline: "Ergonomic curved cradle to preserve headband cushioning and clear desk space.",
    category: "Desk",
    price: 699,
    originalPrice: 899,
    badge: "Popular",
    rating: 4.9,
    ratingCount: 54,
    material: "High-Strength PETG",
    infill: "30% Structural Honeycomb infill",
    dimensions: "135 × 120 × 245 mm",
    weight: "190g",
    leadTime: "1-2 days",
    colors: [
      { name: "Matte Charcoal", hex: "#27272A" },
      { name: "Arctic White", hex: "#F4F4F5" },
      { name: "Gunmetal Grey", hex: "#4B5563" }
    ],
    image: "assets/products/headphone-stand.jpg",
    description: "A cantilevered architectural headphone arch designed to support audiophile and gaming headphones without creating permanent foam pressure dents. Wide curved crown distributes headband weight evenly, while the broad, chamfered weighted footplate keeps it firmly anchored.",
    highlights: [
      "Wide 55mm top curved cradle supports all headband widths",
      "Low center of gravity with anti-slip rubber pads included",
      "Integrated rear cable wrap loop to stow trailing 3.5mm cords",
      "Printed in durable PETG for lifelong creep and flex resistance"
    ],
    faqs: [
      { q: "Does it fit large studio headsets like Audio-Technica M50x or Sony WH-1000XM5?", a: "Yes, it accommodates even extra-large over-ear headphones with suspension headbands." }
    ]
  },
  {
    id: "3DP-004",
    name: "Hexagonal Modular Desk Organizer",
    tagline: "Interlocking honeycomb compartments for pens, stationery, and EDC essentials.",
    category: "Organization",
    price: 549,
    originalPrice: 699,
    badge: "New",
    rating: 4.7,
    ratingCount: 19,
    material: "Eco-friendly PLA+",
    infill: "20% Infill with solid base",
    dimensions: "160 × 140 × 90 mm (Overall cluster)",
    weight: "165g",
    leadTime: "1-2 days",
    colors: [
      { name: "Stone Grey & Terracotta", hex: "#6B7280" },
      { name: "Stealth Black", hex: "#18181B" },
      { name: "Ivory & Slate", hex: "#E5E7EB" }
    ],
    image: "assets/products/desk-organizer.jpg",
    description: "Transform cluttered desks into a serene, productive workstation. Featuring three stepped hexagonal tiers with internal dividers for tall fountain pens, markers, sticky notes, USB drives, and wireless earbuds. Features subtle magnetic snap detents for future modular expansions.",
    highlights: [
      "Stepped elevation makes all stationery immediately visible and accessible",
      "Dedicated shallow catch-tray compartment for paperclips and memory cards",
      "Modular interlocking geometry allows grouping multiple units",
      "Tactile micro-textured matte wall surfaces"
    ],
    faqs: [
      { q: "Can I order additional modular cells later?", a: "Yes, you can order single expansion hex-cells whenever you want to enlarge your desk set." }
    ]
  },
  {
    id: "3DP-005",
    name: "Ergonomic Gaming Controller Dock",
    tagline: "Solid precision cradle for Xbox Wireless, PlayStation DualSense, and Pro Controllers.",
    category: "Gaming",
    price: 399,
    originalPrice: 499,
    badge: "Gamer Choice",
    rating: 4.8,
    ratingCount: 43,
    material: "Impact-Resistant PETG",
    infill: "25% Infill",
    dimensions: "95 × 85 × 75 mm",
    weight: "85g",
    leadTime: "1-2 days",
    colors: [
      { name: "Graphite Grey", hex: "#374151" },
      { name: "Matte Black", hex: "#18181B" },
      { name: "Safety Orange", hex: "#EA580C" }
    ],
    image: "assets/products/controller-dock.jpg",
    description: "Designed specifically to securely cradle modern gamepads with zero rocking or accidental slips. Perfectly accommodates PS5 DualSense, PS4 DualShock, Xbox Series X/S, and Nintendo Switch Pro controllers. Features recessed silicone desk dampeners and a rear charging cord channel.",
    highlights: [
      "Contours matched to gamepad underside to avoid analog stick compression",
      "Allows charging via USB-C cable while docked",
      "Stealth angular profile fits modern battlestations",
      "Weighted base prevents tipping when placing or removing controller"
    ],
    faqs: [
      { q: "Does it work with customized scuf or paddle backplates?", a: "Standard rear button configurations clear comfortably. Contact us for custom oversized clearance if needed." }
    ]
  },
  {
    id: "3DP-006",
    name: "Weighted Desk Cable Organizer & Clips",
    tagline: "Weighted 5-slot cord dock with removable magnetic travel clips.",
    category: "Utility",
    price: 349,
    originalPrice: 449,
    badge: "Essential",
    rating: 4.7,
    ratingCount: 31,
    material: "High-density PLA+ & Silicone",
    infill: "50% High-Density Infill for natural heft",
    dimensions: "120 × 55 × 22 mm",
    weight: "110g",
    leadTime: "1-2 days",
    colors: [
      { name: "Matte Black & Orange", hex: "#18181B" },
      { name: "All Charcoal", hex: "#27272A" },
      { name: "Clean White", hex: "#F4F4F5" }
    ],
    image: "assets/products/cable-organizer.jpg",
    description: "Stop searching the floor for dropped charging cables. This weighted desktop manager holds up to five cables (from slim braided USB-C cables to thicker laptop power conduits). Features an internal cavity for optional ballast and micro-suction reusable adhesive feet.",
    highlights: [
      "Accommodates cable diameters from 3.0mm to 6.5mm",
      "Friction-fit top channels let you easily slide cords in and out with one hand",
      "Reusable wash-and-stick gel base grips glass, wood, and laminate without residue",
      "Two-tone technical accent styling"
    ],
    faqs: [
      { q: "Can I stick it vertically to the side of my desk?", a: "Yes, the included nano-suction pads grip firmly to vertical desk legs or side panels." }
    ]
  },
  {
    id: "3DP-007",
    name: "Faceted Architectural Wall Hook Trio",
    tagline: "Set of 3 minimalist polygonal hooks for keys, jackets, hats, and everyday bags.",
    category: "Decor",
    price: 499,
    originalPrice: 649,
    badge: "Trio Set",
    rating: 4.8,
    ratingCount: 22,
    material: "Reinforced Structural PETG",
    infill: "40% Cross-Hatch infill with 4 perimeter walls",
    dimensions: "60 × 42 × 50 mm (Per hook)",
    weight: "45g each (Supports up to 5kg)",
    leadTime: "1-2 days",
    colors: [
      { name: "Nordic Palette (Sage, Cream, Charcoal)", hex: "#7E9F85" },
      { name: "All Matte Charcoal", hex: "#18181B" },
      { name: "All Bone White", hex: "#F5F5F0" }
    ],
    image: "assets/products/wall-hooks.jpg",
    description: "A set of three contemporary faceted hooks that function as wall art when empty and rugged utility hooks in use. Engineered with internal screw channels for invisible flush wall mounting. Supports heavy winter coats, backpacks, and accessories with zero deformation.",
    highlights: [
      "Includes premium Fischer drywall wall plugs and countersunk stainless screws",
      "Tested load rating of 5kg per hook on standard masonry or solid wood",
      "Geometric facet angles naturally keep hanging items from slipping off",
      "Seamless hidden screw mount hardware"
    ],
    faqs: [
      { q: "Is mounting hardware included?", a: "Yes, heavy-duty wall anchors and mounting screws are included in the package." }
    ]
  },
  {
    id: "3DP-008",
    name: "Custom Precision Desk Nameplate",
    tagline: "Two-tone desktop plate with your custom name, designation, or company brand.",
    category: "Gifts",
    price: 599,
    originalPrice: 799,
    badge: "Personalized",
    rating: 5.0,
    ratingCount: 68,
    isPersonalizable: true,
    personalizationConfig: {
      type: "two-line",
      title: "Personalize Your Nameplate",
      line1Label: "Custom Name / Main Text (Line 1)",
      line1Placeholder: "e.g. Dr. Aryan Sharma",
      line1Max: 24,
      line2Label: "Title / Designation (Line 2 - Optional)",
      line2Placeholder: "e.g. Head of Design & Product",
      line2Max: 32,
      defaultLine1: "ARYAN SHARMA",
      defaultLine2: "HEAD OF PRODUCT",
      hint: "Supports 1 or 2 lines of sharp raised lettering. Free 3D text preview shared on WhatsApp before printing."
    },
    material: "Dual-Extrusion PLA+",
    infill: "100% Solid Face Plate",
    dimensions: "190 × 45 × 52 mm",
    weight: "140g",
    leadTime: "2-3 days",
    colors: [
      { name: "Charcoal Base + Ivory Text", hex: "#18181B" },
      { name: "Walnut Slate + Gold Text", hex: "#4B5563" },
      { name: "Navy Base + White Text", hex: "#1E3A8A" }
    ],
    image: "assets/products/name-plate.jpg",
    description: "Elevate your home office or executive desk with a crisp 3D printed name sign. Crafted using precision multi-layer printing to create sharp, raised tactile lettering. Simply tell us your name and designation on WhatsApp and we will render a preview before manufacturing.",
    highlights: [
      "Free 3D text preview generated and shared on WhatsApp prior to printing",
      "Supports 1 or 2 lines of custom text (e.g., Name + Title / Department)",
      "Beveled chamfered weighted pedestal base",
      "Ideal gift for colleagues, founders, doctors, and new graduates"
    ],
    faqs: [
      { q: "How do I specify the name?", a: "Just enter the name in the order note or send it to us on WhatsApp right after clicking order. We confirm the digital preview with you." }
    ]
  },
  {
    id: "3DP-009",
    name: "Low-Poly Geometric Panther Sculpture",
    tagline: "Faceted origami-inspired feline sculpture in lustrous silk metallic finish.",
    category: "Decor",
    price: 899,
    originalPrice: 1199,
    badge: "Statement Piece",
    rating: 4.9,
    ratingCount: 41,
    material: "Silk Composite PLA",
    infill: "15% Gyroid infill",
    dimensions: "210 × 85 × 165 mm",
    weight: "185g",
    leadTime: "1-2 days",
    colors: [
      { name: "Silk Bronze Copper", hex: "#B45309" },
      { name: "Silk Obsidian Black", hex: "#18181B" },
      { name: "Silk Titanium Silver", hex: "#9CA3AF" }
    ],
    image: "assets/products/geometric-sculpture.jpg",
    description: "A commanding decorative centerpiece crafted with crisp polygonal surfaces that capture and refract room light at dynamic angles. Perfectly proportioned for bookshelves, credenzas, and executive meeting tables.",
    highlights: [
      "Printed using premium silk filament for a warm liquid metallic sheen",
      "Seamless hollow-body architecture with weighted interior base",
      "Subtle fine 0.16mm layer height for ultra-clean polygon transitions",
      "Carefully boxed with protective custom foam packaging"
    ],
    faqs: [
      { q: "Is this painted or printed in color?", a: "It is printed directly using silk polymer pigment so the color never peels, flakes, or chips over time." }
    ]
  },
  {
    id: "3DP-010",
    name: "Modular Gridfinity 4-Bin Storage Tray",
    tagline: "Standardized snap-fit modular organizer bins for desk drawers, tools, and EDC.",
    category: "Organization",
    price: 649,
    originalPrice: 799,
    badge: "Workshop Grade",
    rating: 4.8,
    ratingCount: 35,
    material: "Industrial PLA+ / Matte PETG",
    infill: "25% Grid infill with reinforced walls",
    dimensions: "168 × 126 × 45 mm (4-tray set on baseplate)",
    weight: "175g",
    leadTime: "1-2 days",
    colors: [
      { name: "Slate Grey & Safety Orange", hex: "#374151" },
      { name: "All Stealth Black", hex: "#18181B" },
      { name: "Industrial Yellow & Charcoal", hex: "#CA8A04" }
    ],
    image: "assets/products/gridfinity-tray.jpg",
    description: "Built on Zack Freedman’s open-source Gridfinity modular standard. This 4-bin desktop kit includes a rigid grid baseplate and four modular storage cups for SD cards, memory sticks, screws, keys, and desk stationery. Swap and reconfigure positions in seconds.",
    highlights: [
      "100% compatible with the worldwide open-source Gridfinity ecosystem",
      "Stackable bins with molded finger scoops for easy small-part retrieval",
      "Under-bin cavities ready for 6×2mm neodymium magnets",
      "Eliminates messy junk drawer syndrome forever"
    ],
    faqs: [
      { q: "Can I add more bins later?", a: "Yes, we print custom Gridfinity baseplates and individual bins in any size configuration upon request." }
    ]
  },
  {
    id: "3DP-011",
    name: "Precision Mechanical Planetary Gear Prototype",
    tagline: "Functional planetary gear reducer assembly demonstration model for engineers & hobbyists.",
    category: "Utility",
    price: 1299,
    originalPrice: 1599,
    badge: "Engineering",
    rating: 5.0,
    ratingCount: 16,
    material: "Engineering Tough PETG & Metal Fasteners",
    infill: "40% Structural Tri-Hexagonal",
    dimensions: "140 × 140 × 65 mm",
    weight: "320g",
    leadTime: "2-3 days",
    colors: [
      { name: "Engineering Black", hex: "#18181B" },
      { name: "High-Vis Mechanical Orange", hex: "#EA580C" }
    ],
    image: "assets/products/mechanical-gear.jpg",
    description: "A fully functional mechanical reduction gear set showcasing the high tolerances achievable in modern 3D manufacturing. Features lubricated rolling gears, sun gear, planet carrier, and precision M5 stainless hardware. Ideal for mechanical engineering students, technical demonstrations, and desk fidgeting.",
    highlights: [
      "Real working kinematic mechanism with zero binding",
      "Printed with strict 0.12mm tolerance calibration for smooth gear meshing",
      "Includes stainless steel bolts, nylon locknuts, and ball bearings",
      "Great demonstration of 3D Shop's rapid mechanical prototyping capabilities"
    ],
    faqs: [
      { q: "Can 3D Shop manufacture custom gearboxes or replacement parts?", a: "Yes! If you have a broken gear or bespoke transmission design, contact us via the Business or Print My File page." }
    ]
  },
  {
    id: "3DP-012",
    name: "Minimalist Tactile EDC Key Fob Trio",
    tagline: "Set of three geometric everyday-carry key fobs with stainless steel flat rings.",
    category: "Gifts",
    price: 249,
    originalPrice: 349,
    badge: "Pocket Pack",
    rating: 4.7,
    ratingCount: 29,
    isPersonalizable: true,
    personalizationConfig: {
      type: "single-line",
      title: "Personalize Your Key Fob Trio",
      line1Label: "Custom Embossing (Initials, Numbers, or Words)",
      line1Placeholder: "e.g. Fob 1: AK · Fob 2: 402 · Fob 3: HOME",
      line1Max: 40,
      defaultLine1: "AK · 402 · HOME",
      defaultLine2: "",
      hint: "We emboss custom characters, house numbers, or initials on your key fobs. 3D render preview verified on WhatsApp."
    },
    material: "High-Density PETG",
    infill: "100% Solid Infill (Indestructible)",
    dimensions: "52 × 26 × 6 mm (Each)",
    weight: "28g (Total set)",
    leadTime: "1-2 days",
    colors: [
      { name: "Black, Terracotta & Olive Trio", hex: "#18181B" },
      { name: "Monochrome Stealth Trio", hex: "#374151" }
    ],
    image: "assets/products/custom-keychain.jpg",
    description: "Engineered for everyday pockets. Unlike metal keychains that scratch your phone screen or heavy novelty fobs, these 3D printed geometric fobs are featherlight, ultra-tough, and pleasant to the touch. Set includes three distinct geometric silhouettes with flat stainless keyrings.",
    highlights: [
      "100% solid infill resists being crushed, dropped, or stepped on",
      "Smooth chamfered edges will not snag on pocket fabric",
      "Supplied with three 25mm heavy-gauge flat stainless steel key rings",
      "Custom number or letter embossing available on request"
    ],
    faqs: [
      { q: "Can I put my house number or initials on them?", a: "Yes, you can request custom embossed characters when placing your order on WhatsApp!" }
    ]
  },
  {
    id: "3DP-013",
    name: "Mercedes-AMG GT 63 Coupe 1:10 Scale Display Model",
    tagline: "Precision 1:10 scale aerodynamic automotive replica with detailed multi-spoke rims.",
    category: "Decor",
    price: 1499,
    originalPrice: 1899,
    badge: "Collector Choice",
    rating: 4.9,
    ratingCount: 87,
    material: "High-Grade PLA+ & Silk Metallic",
    infill: "20% Gyroid infill for structural firmness",
    dimensions: "470 \u00d7 205 \u00d7 135 mm (1:10 Scale)",
    weight: "420g",
    leadTime: "2-3 days",
    colors: [
      { name: "Obsidian Black & Silver", hex: "#18181B" },
      { name: "Selenite Grey", hex: "#4B5563" },
      { name: "Alpine White", hex: "#F4F4F5" }
    ],
    image: "assets/products/amg-gt63-coupe.jpg",
    description: "An authentic 1:10 scale recreation of the high-performance Mercedes-AMG GT 63 Coupe. Features razor-sharp aerodynamic body contours, aggressive front Panamericana grille, multi-spoke competition wheels, and rear quad-exhaust diffuser. A showpiece for petrolheads and design offices.",
    highlights: [
      "Accurate 1:10 scale proportions matched to factory aerodynamic CAD",
      "Separate multi-piece wheel hubs and deep brake disc detailing",
      "Smooth 0.16mm fine layer resolution for showroom curves",
      "Rigid unibody assembly with weighted stance"
    ],
    faqs: [
      { q: "Are the wheels movable?", a: "Yes, the wheel hubs mount on precision axles allowing free rotation." },
      { q: "Can I request custom racing liveries or colors?", a: "Yes, reach out on WhatsApp for custom dual-tone liveries or brake caliper colors." }
    ]
  },
  {
    id: "3DP-014",
    name: "Giant Brick Man Toilet Paper Holder",
    tagline: "Humorous oversized brick minifigure bathroom wall mount holding standard rolls.",
    category: "Home",
    price: 649,
    originalPrice: 799,
    badge: "Trending",
    rating: 4.8,
    ratingCount: 46,
    material: "Tough Moisture-Resistant PETG",
    infill: "30% Honeycomb infill for heavy arm support",
    dimensions: "180 \u00d7 165 \u00d7 120 mm",
    weight: "210g",
    leadTime: "1-2 days",
    colors: [
      { name: "Classic Yellow & Red", hex: "#EAB308" },
      { name: "Stealth Charcoal", hex: "#27272A" },
      { name: "Pure White", hex: "#F4F4F5" }
    ],
    image: "assets/products/brick-man-toilet-paper-holder.jpg",
    description: "Add playful character to your washroom with this giant nostalgic brick minifigure. Its oversized iconic C-hands comfortably hold standard Indian and international toilet paper rolls. Built with hidden wall-mount screw anchors and heavy-duty PETG for humid bathroom longevity.",
    highlights: [
      "Fits all standard toilet paper roll diameters smoothly",
      "Printed in humidity-proof, non-degrading PETG polymer",
      "Hidden rear countersunk wall mounting bracket included",
      "Guaranteed conversation starter for guests"
    ],
    faqs: [
      { q: "How does it mount to the bathroom tile?", a: "It includes heavy-duty double-sided nano-adhesive tape as well as standard drill/screw anchor slots." },
      { q: "Does moisture affect the material?", a: "No, PETG is completely waterproof and will not warp or mold in humid bathrooms." }
    ]
  },
  {
    id: "3DP-015",
    name: "Gengar Shadow Pok\u00e9mon Desk Organizer & Pen Holder",
    tagline: "Mischievous ghost Pok\u00e9mon with a wide open mouth to organize pens and desk stationery.",
    category: "Desk",
    price: 549,
    originalPrice: 699,
    badge: "Popular",
    rating: 4.9,
    ratingCount: 62,
    material: "Eco-friendly Matte PLA+",
    infill: "20% Gyroid infill",
    dimensions: "115 \u00d7 120 \u00d7 110 mm",
    weight: "165g",
    leadTime: "1-2 days",
    colors: [
      { name: "Ghost Purple", hex: "#6B21A8" },
      { name: "Shadow Black", hex: "#18181B" },
      { name: "Matte White", hex: "#F4F4F5" }
    ],
    image: "assets/products/gengar-pencil-holder.jpg",
    description: "Bring Pok\u00e9mon energy to your desk with this sculptured Gengar organizer. Featuring his signature sinister grin and spiky silhouette, his deep top cavity comfortably stores dozens of pens, styluses, markers, scissors, and flash drives while keeping your workspace tidy.",
    highlights: [
      "Deep 90mm interior chamber holds pens, pencils, and craft tools securely",
      "Signature spiked back ridges and expressive toothy grin",
      "Weighted base prevents tipping even when full of heavy instruments",
      "Smooth matte tactile finish with rich deep purple saturation"
    ],
    faqs: [
      { q: "How many pens does it hold?", a: "It comfortably holds 15 to 20 standard pens, markers, and Apple pencils." },
      { q: "Is it painted?", a: "It is directly printed in vibrant UV-stable colored filament so it will never chip." }
    ]
  },
  {
    id: "3DP-016",
    name: "Ditto Morphing Desk Valet & Catch-All Tray",
    tagline: "Smooth undulating Ditto Pok\u00e9mon storage tray for keys, coins, rings, and AirPods.",
    category: "Organization",
    price: 399,
    originalPrice: 499,
    badge: "Staff Pick",
    rating: 4.8,
    ratingCount: 39,
    material: "Silk Smooth PLA+",
    infill: "25% High-density infill",
    dimensions: "145 \u00d7 130 \u00d7 35 mm",
    weight: "95g",
    leadTime: "1-2 days",
    colors: [
      { name: "Ditto Lilac Pink", hex: "#D8B4E2" },
      { name: "Shiny Ditto Cyan", hex: "#38BDF8" },
      { name: "Minimalist Charcoal", hex: "#27272A" }
    ],
    image: "assets/products/ditto-storage-tray.jpg",
    description: "The shape-shifting Ditto transforms into the ultimate bedside or desk valet tray! Its smooth organic contours create a gentle dish perfect for holding daily pocket essentials like keys, watches, rings, earphones, and coins, complete with Ditto's iconic smiling bead eyes.",
    highlights: [
      "Smooth curved dish allows easy one-handed grabbing of small items",
      "Embossed Ditto face with sharp multi-color accent eyes",
      "Gentle curved edges protect eyeglasses and delicate jewelry from scratches",
      "Compact footprint fits seamlessly on nightstands, consoles, or desks"
    ],
    faqs: [
      { q: "Is the dish deep enough to hold keys without sliding out?", a: "Yes, the 28mm scooped dish easily holds heavy key rings, coins, and AirPods." }
    ]
  },
  {
    id: "3DP-017",
    name: "Psyduck Mouth-Drainage Sponge & Soap Tray",
    tagline: "Clever sink accessory where water naturally drains through Psyduck's open beak.",
    category: "Home",
    price: 499,
    originalPrice: 649,
    badge: "Bestseller",
    rating: 5.0,
    ratingCount: 74,
    material: "Waterproof PETG",
    infill: "100% Watertight Solid Walls",
    dimensions: "130 \u00d7 110 \u00d7 85 mm",
    weight: "115g",
    leadTime: "1-2 days",
    colors: [
      { name: "Classic Psyduck Yellow", hex: "#FACC15" },
      { name: "Matte White", hex: "#F4F4F5" }
    ],
    image: "assets/products/psyduck-drainage-tray.jpg",
    description: "Turn routine dishwashing into laughs with this genius Psyduck sink tray. Place your wet sponge or soap bar on Psyduck's back\u2014the sloped interior channels all residual soapy water directly through his open bill and cleanly into your kitchen or bathroom sink!",
    highlights: [
      "Self-draining gravity slope keeps sponges completely dry and mold-free",
      "Printed in 100% solid watertight PETG that will not degrade in soapy water",
      "Non-slip silicone desk/counter bumper pads included",
      "Fits all standard Scotch-Brite sponges and solid soap bars"
    ],
    faqs: [
      { q: "Will soapy residue stick to the plastic?", a: "The smooth PETG finish rinses clean effortlessly under warm tap water." }
    ]
  },
  {
    id: "3DP-018",
    name: "Deadpool Sculpted Bust Headphone Stand",
    tagline: "Rugged superhero bust designed to firmly cradle gaming headsets and audiophile cans.",
    category: "Gaming",
    price: 899,
    originalPrice: 1199,
    badge: "Gamer Choice",
    rating: 4.9,
    ratingCount: 58,
    material: "High-Impact Tough PETG",
    infill: "25% Structural infill with weighted pedestal",
    dimensions: "150 \u00d7 140 \u00d7 230 mm",
    weight: "290g",
    leadTime: "1-2 days",
    colors: [
      { name: "Crimson Red & Black", hex: "#DC2626" },
      { name: "Stealth Black", hex: "#18181B" },
      { name: "Gunmetal Grey", hex: "#4B5563" }
    ],
    image: "assets/products/deadpool-headphone-holder.jpg",
    description: "Give your battlestation serious Marvel attitude with this high-detail Deadpool sculpted headphone holder. Modeled with his iconic mask seams and expressive squint, the wide cranial top cradles your gaming headset without compressing headband padding.",
    highlights: [
      "Ergonomic top dome prevents foam denting on premium headsets",
      "Compatible with HyperX, SteelSeries, Razer, Corsair, Logitech, and Sony headphones",
      "Heavy low center-of-gravity pedestal ensures zero tip-overs",
      "Distinctive sharp eye-mask contrasts and realistic fabric-grain 3D textures"
    ],
    faqs: [
      { q: "Does it tip over when hanging heavy wireless headsets?", a: "No, it features a broadened footprint and solid infill base to remain rock-steady." }
    ]
  },
  {
    id: "3DP-019",
    name: "Squidward Unamused Headphone Stand",
    tagline: "The internet's favorite grumpy neighbor keeping your gaming headset safe.",
    category: "Gaming",
    price: 849,
    originalPrice: 1099,
    badge: "Popular",
    rating: 4.8,
    ratingCount: 49,
    material: "Eco-friendly PLA+",
    infill: "20% Infill with solid base plate",
    dimensions: "145 \u00d7 135 \u00d7 225 mm",
    weight: "270g",
    leadTime: "1-2 days",
    colors: [
      { name: "Bikini Bottom Teal", hex: "#2DD4BF" },
      { name: "Matte Charcoal", hex: "#27272A" },
      { name: "Stone Marble", hex: "#E5E7EB" }
    ],
    image: "assets/products/squidward-headphone-holder.jpg",
    description: "Squidward may hate noise, but he is more than happy to hold your headphones! Featuring his classic deadpan expression and bulbous nose, this desk centerpiece keeps expensive over-ear headphones elevated off dusty desks while bringing smiles to your workspace.",
    highlights: [
      "Oversized smooth cranial arch holds even wide suspension headbands comfortably",
      "Hilarious desk centerpiece for streamers, gamers, and office workers",
      "Anti-slip desk feet pads pre-installed on the bottom",
      "Crisp geometric facial detailing with zero post-processing artifacts"
    ],
    faqs: [
      { q: "Does it fit large studio headphones like Sennheiser or Audio-Technica?", a: "Yes, it easily accommodates large open-back and closed-back headphones." }
    ]
  },
  {
    id: "3DP-020",
    name: "Retro Mario Warp Pipe Desk Bin & Pen Holder",
    tagline: "Nostalgic Super Mario green warp pipe with removable inner insert for pens and tools.",
    category: "Desk",
    price: 499,
    originalPrice: 649,
    badge: "Retro Classic",
    rating: 4.7,
    ratingCount: 33,
    material: "Vibrant PLA+",
    infill: "25% Gyroid infill",
    dimensions: "110 \u00d7 110 \u00d7 125 mm",
    weight: "150g",
    leadTime: "1-2 days",
    colors: [
      { name: "Warp Pipe Green", hex: "#16A34A" },
      { name: "Underground Blue", hex: "#2563EB" },
      { name: "Castle Black", hex: "#18181B" }
    ],
    image: "assets/products/mario-warp-pipe-organizer.jpg",
    description: "Jump straight into World 1-1 with this iconic green warp pipe desktop organizer. Engineered with a removable interior cup that makes emptying pencil shavings, paperclips, or desktop trash a breeze, and a flanged lip that matches classic 8-bit gaming nostalgia.",
    highlights: [
      "Multi-part design with removable inner sleeve for quick cleaning",
      "Dual-purpose: use as a deep pen holder or compact desk-side scrap bin",
      "Signature thick pipe collar rim prevents stationery from rolling away",
      "Bright high-gloss or satin green finish"
    ],
    faqs: [
      { q: "Can it be used as a succulent planter?", a: "Yes! We can add drainage holes at the base upon request on WhatsApp." }
    ]
  },
  {
    id: "3DP-021",
    name: "Dry Bones Articulated Coaster Set (4-Pack)",
    tagline: "Clever folding skeletal turtle coasters that assemble flat to protect table surfaces.",
    category: "Home",
    price: 449,
    originalPrice: 599,
    badge: "New",
    rating: 4.6,
    ratingCount: 18,
    material: "Durable Tough PLA+",
    infill: "100% Solid Infill for heat & impact resistance",
    dimensions: "100 \u00d7 100 \u00d7 5 mm (Each Coaster)",
    weight: "130g (Pack of 4)",
    leadTime: "1-2 days",
    colors: [
      { name: "Bone White & Slate", hex: "#F5F5F0" },
      { name: "Stealth Monochrome", hex: "#18181B" },
      { name: "Lava Red Accent", hex: "#DC2626" }
    ],
    image: "assets/products/dry-bones-articulated-coaster.jpg",
    description: "Inspired by the indestructible Dry Bones from Mario castles, these coasters feature interconnected flexible joints. Lay them flat to hold piping hot coffee mugs, iced glasses, and bottles, or play with their satisfying kinetic movement during breaks.",
    highlights: [
      "Set of 4 interlocking articulated coasters with protective coaster holder",
      "Heat-resistant up to 60\u00b0C for morning tea, chai, and coffee mugs",
      "Textured bone relief creates natural channels to catch cold condensation",
      "Washable and dishwasher-safe under gentle cold cycle"
    ],
    faqs: [
      { q: "Do hot mugs damage the coasters?", a: "They handle hot mugs comfortably. For boiling hot pots straight off the stove, consider a dedicated trivet." }
    ]
  },
  {
    id: "3DP-022",
    name: "Squirtle Turtle Shell Coaster Pack & Holder",
    tagline: "Pack of 4 textured Pok\u00e9mon turtle shell drink coasters with dedicated shell cradle.",
    category: "Home",
    price: 499,
    originalPrice: 649,
    badge: "Bestseller",
    rating: 4.8,
    ratingCount: 25,
    material: "Eco-friendly PLA+",
    infill: "100% Solid Face Plate",
    dimensions: "102 \u00d7 102 \u00d7 6 mm (Coaster), 115mm (Holder)",
    weight: "160g (Set)",
    leadTime: "1-2 days",
    colors: [
      { name: "Squirtle Brown & Cream", hex: "#B45309" },
      { name: "Water Blue & White", hex: "#38BDF8" },
      { name: "Slate Minimalist", hex: "#4B5563" }
    ],
    image: "assets/products/squirtle-shell-coasters.jpg",
    description: "Protect your wooden dining tables and desks from unsightly drink rings with these adorable Squirtle shell coasters. Features hexagonal carapace shell engravings with a raised protective border to trap condensation droplets, plus a matching shell dock.",
    highlights: [
      "Complete set of 4 coasters plus a custom sculpted storage base",
      "Raised rim catches condensation from iced glasses and chilled cans",
      "Includes non-slip silicone feet for smooth glass and wooden surfaces",
      "High contrast 3D grooved shell pattern"
    ],
    faqs: [
      { q: "Are they easy to wash?", a: "Yes, just wipe with a damp cloth or rinse with soapy water." }
    ]
  },
  {
    id: "3DP-023",
    name: "Movable Spring-Action Articulated Lizard Fidget",
    tagline: "Interactive print-in-place spring reptile with organic wagging motion.",
    category: "Gifts",
    price: 299,
    originalPrice: 399,
    badge: "Fidget Hit",
    rating: 4.9,
    ratingCount: 92,
    material: "Flexible High-Toughness PLA+",
    infill: "30% Flexible leaf-spring geometry",
    dimensions: "165 \u00d7 48 \u00d7 22 mm",
    weight: "42g",
    leadTime: "1-2 days",
    colors: [
      { name: "Emerald Green", hex: "#10B981" },
      { name: "Fire Chameleon Orange", hex: "#EA580C" },
      { name: "Silk Rainbow Duo", hex: "#8B5CF6" }
    ],
    image: "assets/products/spring-articulated-lizard.jpg",
    description: "Meet Tom the Spring Lizard! Engineered with revolutionary print-in-place leaf springs integrated into every vertebrae, this reptile bounces, flexes, and wiggles with astonishing fluidity. The ultimate tactile desktop anti-stress desk companion for engineers and students.",
    highlights: [
      "100% print-in-place kinematic spring joints\u2014no screws or glue",
      "Fluid organic side-to-side wagging response when tapped",
      "Ultra-tough flex-tested polymer formulation resists joint fatigue",
      "Fun pocketable sensory gift for all ages"
    ],
    faqs: [
      { q: "Can the joints break easily?", a: "Our reinforced wall slicing profile ensures high flexural endurance even with vigorous fidgeting." }
    ]
  },
  {
    id: "3DP-024",
    name: "Wobbly Snorlax Tumbler Desk Figurine",
    tagline: "Weighted self-righting Snorlax desk toy that bobs back up no matter how hard you push.",
    category: "Gifts",
    price: 349,
    originalPrice: 449,
    badge: "Desk Toy",
    rating: 5.0,
    ratingCount: 65,
    material: "Dense PLA+ with Weighted Core",
    infill: "100% Solid Lower Hemisphere Ballast",
    dimensions: "68 \u00d7 68 \u00d7 78 mm",
    weight: "90g",
    leadTime: "1-2 days",
    colors: [
      { name: "Snorlax Teal & Cream", hex: "#0D9488" },
      { name: "Sleepy Lavender", hex: "#A855F7" },
      { name: "Monochrome Slate", hex: "#374151" }
    ],
    image: "assets/products/wobbly-snorlax-fidget.jpg",
    description: "You can push him, tap him, or flick him\u2014Snorlax always bobs right back up! Designed on the physics of a roly-poly tumbler with a heavily weighted base, this adorable Snorlax provides endless soothing desk fidgeting while bringing playful charm to your monitor stand.",
    highlights: [
      "Self-righting gyroscopic balance ensures he never stays down",
      "Silky smooth rounded bottom glides friction-free on desk mats",
      "Multi-part color snapped construction\u2014no messy paint",
      "Great sensory stress reliever during long study or work sessions"
    ],
    faqs: [
      { q: "Does he contain batteries or magnets?", a: "No, his balance is achieved through pure weighted internal geometry." }
    ]
  },
  {
    id: "3DP-025",
    name: "Cute Wobbling Penguin Desktop Fidget",
    tagline: "Self-balancing bobbing penguin with curved belly that rocks gently on your desk.",
    category: "Gifts",
    price: 299,
    originalPrice: 399,
    badge: "Popular",
    rating: 4.8,
    ratingCount: 37,
    material: "Eco-friendly PLA+",
    infill: "Solid bottom gravity center",
    dimensions: "60 \u00d7 60 \u00d7 75 mm",
    weight: "78g",
    leadTime: "1-2 days",
    colors: [
      { name: "Tuxedo Black & White", hex: "#18181B" },
      { name: "Glacier Sky Blue", hex: "#38BDF8" },
      { name: "Pastel Pink", hex: "#F472B6" }
    ],
    image: "assets/products/cute-wobbly-penguin.jpg",
    description: "A charming little arctic friend that waddles and bobs gently with the slightest desk vibration. The curved weighted ballast allows it to rock smoothly for minutes without toppling over, adding calm and delight to any study setup.",
    highlights: [
      "Calming kinetic rocking motion relieves workday tension",
      "Smooth egg-shaped silhouette that feels great in the palm",
      "Zero assembly or moving parts to wear out",
      "Sweet gift for coworkers, students, and family"
    ],
    faqs: [
      { q: "Does it roll off desks?", a: "No, the internal ballast keeps it centered in one spot while rocking." }
    ]
  },
  {
    id: "3DP-026",
    name: "BMW M4 GT3 EVO DTM Championship Race Car Model",
    tagline: "Aggressive track-focused GT3 endurance racer with swan-neck wing and aero splitters.",
    category: "Decor",
    price: 1399,
    originalPrice: 1799,
    badge: "Motorsport",
    rating: 4.9,
    ratingCount: 81,
    material: "Engineering-Grade PLA+ & Silk",
    infill: "25% High-Rigidity Infill",
    dimensions: "360 \u00d7 165 \u00d7 105 mm",
    weight: "340g",
    leadTime: "2-3 days",
    colors: [
      { name: "M Motorsport White & Tricolor", hex: "#F4F4F5" },
      { name: "Matte Stealth Carbon", hex: "#18181B" },
      { name: "Daytona Grey", hex: "#4B5563" }
    ],
    image: "assets/products/bmw-m4-gt3-evo.jpg",
    description: "Capture the raw adrenaline of DTM and 24 Hours of N\u00fcrburgring racing. This detailed BMW M4 GT3 EVO features the menacing enlarged kidney grille, hood extraction vents, side dive planes, competition center-lock rims, and the colossal swan-neck GT rear wing.",
    highlights: [
      "Authentic GT3 race aerodynamics accurately replicated from FIA homologation specs",
      "Distinct roof air ducts, front canards, and multi-tier rear diffuser",
      "Stunning desk centerpiece for sim racers and BMW M enthusiasts",
      "Ultra-fine 0.12mm layer slicing on all aerodynamic surfaces"
    ],
    faqs: [
      { q: "Is this a kit or fully assembled?", a: "It arrives fully assembled and quality-checked straight to your door." }
    ]
  },
  {
    id: "3DP-027",
    name: "Porsche 911 (992.2) GT3 1:10 Scale Display Model",
    tagline: "Stuttgart's masterpiece with functional suspension mounts, rear diffuser, and swan-neck wing.",
    category: "Decor",
    price: 1499,
    originalPrice: 1899,
    badge: "Collector Choice",
    rating: 5.0,
    ratingCount: 96,
    material: "Tough PETG / Silk PLA+",
    infill: "25% Gyroid infill",
    dimensions: "450 \u00d7 195 \u00d7 125 mm (1:10 Scale)",
    weight: "410g",
    leadTime: "2-3 days",
    colors: [
      { name: "Shark Blue", hex: "#0284C7" },
      { name: "Guards Red", hex: "#DC2626" },
      { name: "GT Silver Metallic", hex: "#9CA3AF" }
    ],
    image: "assets/products/porsche-911-gt3-scale-model.jpg",
    description: "Every curve of the legendary Porsche 992.2 GT3 rendered in breathtaking fidelity. From the distinctive front nostril hood air intakes to the top-mounted swan-neck rear spoiler and center-exit twin titanium-look exhausts, this model is pure automotive art.",
    highlights: [
      "Substantial 45cm display presence at true 1:10 automotive scale",
      "Detailed staggered wheels with visible brake discs and calipers",
      "Iconic swan-neck aero spoiler and sculpted rear light bar",
      "Engineered for both static desktop display or custom RC chassis mounting"
    ],
    faqs: [
      { q: "Can this body fit an RC chassis?", a: "Yes! The design includes mounting posts compatible with standard 1/10 touring car chassis." }
    ]
  },
  {
    id: "3DP-028",
    name: "Flame Breath Flying Dragon LED Ambient Lamp V2",
    tagline: "Mythical dragon hovering over a pillar of glowing translucent illuminated flame.",
    category: "Home",
    price: 999,
    originalPrice: 1299,
    badge: "Showstopper",
    rating: 4.9,
    ratingCount: 112,
    material: "Silk Composite PLA & Translucent Diffusion Resin",
    infill: "Hollow Light-Channel Structure",
    dimensions: "180 \u00d7 140 \u00d7 240 mm",
    weight: "240g",
    leadTime: "2-3 days",
    colors: [
      { name: "Fire Gold & Charcoal Dragon", hex: "#EA580C" },
      { name: "Ice Blue Frost Flame", hex: "#06B6D4" },
      { name: "Obsidian Black & Red Flame", hex: "#18181B" }
    ],
    image: "assets/products/flame-breath-dragon-lamp.jpg",
    description: "Transform your room with pure fantasy magic. A majestic sculpted winged dragon hovers atop a swirling torrent of flame that acts as a light diffusion column. Powered by an included USB warm LED module, creating an unforgettable warm atmospheric fire glow.",
    highlights: [
      "Includes pre-wired USB LED warm lighting kit with inline switch",
      "Translucent flame column diffuses glare into a cozy, soothing ambient glow",
      "High-detail dragon anatomy with textured scales, claws, and span wings",
      "Perfect nightstand lamp for fantasy lovers, gamers, and book readers"
    ],
    faqs: [
      { q: "How is it powered?", a: "It plugs into any standard 5V USB phone charger, power bank, or PC USB port." }
    ]
  },
  {
    id: "3DP-029",
    name: "Luxury Horology Bezel Wall Clock (GMT Edition)",
    tagline: "Iconic two-tone ceramic bezel wall clock with silent sweep quartz movement.",
    category: "Decor",
    price: 1299,
    originalPrice: 1699,
    badge: "Luxury Decor",
    rating: 4.8,
    ratingCount: 53,
    material: "Dual-Extrusion PLA+ & Acrylic",
    infill: "30% Structural Ribbing",
    dimensions: "280 \u00d7 280 \u00d7 45 mm",
    weight: "380g",
    leadTime: "2-3 days",
    colors: [
      { name: "Pepsi Blue & Red", hex: "#1E3A8A" },
      { name: "Batman Blue & Black", hex: "#0284C7" },
      { name: "Stealth Monochrome", hex: "#18181B" }
    ],
    image: "assets/products/rolex-gmt-master-wall-clock.jpg",
    description: "Celebrate classic Swiss watchmaking design on your wall. Inspired by the legendary GMT-Master II, this 28cm wall clock features crisp fluted bezel grooves, high-contrast raised geometric hour markers, cyclops date window styling, and a silent non-ticking sweep motor.",
    highlights: [
      "Premium silent-sweep quartz clock movement (zero annoying ticking sounds)",
      "Two-tone split bezel ring with recessed engraved 24-hour numerals",
      "Integrated rear keyhole bracket for flush wall hanging",
      "Powered by a single standard AA battery (battery included)"
    ],
    faqs: [
      { q: "Does the clock tick loudly?", a: "Not at all, it uses an ultra-quiet continuous sweep mechanism suitable for quiet bedrooms." }
    ]
  },
  {
    id: "3DP-030",
    name: "Custom QR Code Business Card & Desk Stand",
    tagline: "Two-tone angled counter stand with your custom scannable 3D QR code and branding.",
    category: "Gifts",
    price: 449,
    originalPrice: 599,
    badge: "Personalized",
    rating: 5.0,
    ratingCount: 44,
    isPersonalizable: true,
    personalizationConfig: {
      type: "single-line",
      title: "Customize Your QR Code Stand",
      line1Label: "Link URL / UPI ID / Phone / Handle",
      line1Placeholder: "e.g. https://instagram.com/yourbrand or UPI ID",
      line1Max: 80,
      defaultLine1: "https://3dshop.in",
      defaultLine2: "",
      hint: "We generate a high-contrast 3D scannable QR code matching your exact link, UPI payment, or social handle."
    },
    material: "High-Contrast Dual-Layer PLA+",
    infill: "100% Solid Scannable Face",
    dimensions: "110 \u00d7 75 \u00d7 65 mm",
    weight: "95g",
    leadTime: "1-2 days",
    colors: [
      { name: "Matte White on Obsidian Black", hex: "#18181B" },
      { name: "Charcoal on Pure Ivory", hex: "#F4F4F5" },
      { name: "Navy Blue & Gold Accent", hex: "#1E3A8A" }
    ],
    image: "assets/products/qr-business-card-stand.jpg",
    description: "Make connecting effortless for store visitors and clients. This angled desktop display features a crisp 3D-extruded scannable QR code that instantly opens your UPI payment link, Google Reviews, Instagram profile, or company website when scanned by any smartphone camera.",
    highlights: [
      "100% camera-tested scannable multi-layer contrast printing",
      "Displays business name, subtitle, and scannable link",
      "60-degree angled display face for easy standing scans",
      "Ideal for cafes, retail counters, clinics, and exhibition booths"
    ],
    faqs: [
      { q: "Can any phone scan the 3D printed QR code?", a: "Yes! The sharp contrast and clean layer heights ensure immediate camera barcode recognition." }
    ]
  },
  {
    id: "3DP-031",
    name: "Sleeping Baby Dragon Fantasy Sculpted Figurine",
    tagline: "Intricately detailed mythical hatchling curled in peaceful slumber.",
    category: "Decor",
    price: 549,
    originalPrice: 699,
    badge: "Artistic",
    rating: 4.7,
    ratingCount: 26,
    material: "Silk Dual-Color PLA+",
    infill: "15% Gyroid infill",
    dimensions: "135 \u00d7 120 \u00d7 55 mm",
    weight: "110g",
    leadTime: "1-2 days",
    colors: [
      { name: "Silk Magic Copper-Purple", hex: "#9333EA" },
      { name: "Ancient Stone Grey", hex: "#6B7280" },
      { name: "Mystic Jade Green", hex: "#059669" }
    ],
    image: "assets/products/sleeping-baby-dragon.jpg",
    description: "An enchanting fantasy creature sculpted with extraordinary warmth and charm. Curled peacefully with folded leathery wings and tail wrapped around its snout, this sleeping baby dragon shines with lustrous silk color shifts as ambient room light reflects off its scales.",
    highlights: [
      "Printed in premium co-extruded dual-color silk filament for magical light shifts",
      "Individual relief detailing on scales, claws, horns, and spine",
      "Smooth rounded base rests gently on wooden desks and shelves",
      "Enchanting present for D&D players, fantasy fans, and collectors"
    ],
    faqs: [
      { q: "Does the color change when viewed from different angles?", a: "Yes, our dual-color silk filament produces a dynamic dichroic sheen depending on viewing angle." }
    ]
  },
  {
    id: "3DP-032",
    name: "L-One Cybernetic Desktop Robotic Arm Model",
    tagline: "Articulated mechanical engineering prototype with functional pivot joints and claw.",
    category: "Utility",
    price: 899,
    originalPrice: 1199,
    badge: "Engineering",
    rating: 4.8,
    ratingCount: 34,
    material: "Industrial Tough PETG & Metal Pins",
    infill: "35% High-Stress Honeycomb",
    dimensions: "210 \u00d7 120 \u00d7 260 mm (Extended)",
    weight: "240g",
    leadTime: "2-3 days",
    colors: [
      { name: "Industrial Cyber Yellow & Black", hex: "#CA8A04" },
      { name: "Stealth Matte Black & Orange", hex: "#18181B" },
      { name: "Mecha Grey & White", hex: "#9CA3AF" }
    ],
    image: "assets/products/l-one-robotic-arm.jpg",
    description: "Showcase advanced robotics engineering on your desk. The L-One desktop robotic arm features multi-axis pivoting joints, a manual kinematic gripper clamp, and modular snap-together cybernetics. Great for STEM students, automation engineers, and sci-fi workspace aesthetics.",
    highlights: [
      "Functional multi-axis articulation with adjustable joint friction",
      "Kinematic end-effector gripper can hold pens, cables, or small parts",
      "Heavy weighted baseplate keeps the arm upright throughout full reach",
      "Modular engineering design showcasing additive mechanical tolerance"
    ],
    faqs: [
      { q: "Can it be motorized with servos later?", a: "The joints are designed with standard servo horn mounting points for hobbyist robotics projects." }
    ]
  },
  {
    id: "3DP-033",
    name: "Dodge Challenger Muscle Car Wall Key Holder",
    tagline: "Aggressive front-end muscle car wall silhouette with 4 heavy-duty key hooks.",
    category: "Home",
    price: 449,
    originalPrice: 599,
    badge: "Car Enthusiast",
    rating: 4.6,
    ratingCount: 15,
    material: "High-Strength Structural PETG",
    infill: "40% Cross-Hatch infill with 4 perimeters",
    dimensions: "210 \u00d7 95 \u00d7 32 mm",
    weight: "115g",
    leadTime: "1-2 days",
    colors: [
      { name: "Hellcat Matte Black", hex: "#18181B" },
      { name: "TorRed & Black", hex: "#DC2626" },
      { name: "Plum Crazy Purple", hex: "#7E22CE" }
    ],
    image: "assets/products/dodge-challenger-key-holder.jpg",
    description: "Never misplace your car keys again. Designed with the menacing quad-headlamp brow and wide hood profile of the iconic American muscle car, this wall organizer features four reinforced hooks to hang your everyday car keys, house fobs, and work badges in style.",
    highlights: [
      "Four deep curved hooks support up to 6kg of total key weight",
      "Distinctive Dodge Challenger front fascia silhouette and scoop profile",
      "Includes heavy-duty 3M wall tape and countersunk screw holes",
      "Tough PETG construction will not bend under heavy bunches of keys"
    ],
    faqs: [
      { q: "Is wall mounting hardware included?", a: "Yes, mounting screws and high-tack wall tape are included in every box." }
    ]
  },
  {
    id: "3DP-034",
    name: "Porsche 911 GT3 RS Wall Key Hanger",
    tagline: "Sleek aerodynamic wall key rack featuring Stuttgart's most radical rear wing profile.",
    category: "Home",
    price: 449,
    originalPrice: 599,
    badge: "Popular",
    rating: 4.9,
    ratingCount: 47,
    material: "Reinforced Structural PETG",
    infill: "40% Structural infill",
    dimensions: "220 \u00d7 90 \u00d7 35 mm",
    weight: "120g",
    leadTime: "1-2 days",
    colors: [
      { name: "Stealth Black & Weissach Red", hex: "#18181B" },
      { name: "Python Green Accent", hex: "#16A34A" },
      { name: "Pure Arctic White", hex: "#F4F4F5" }
    ],
    image: "assets/products/porsche-gt3-rs-key-hanger.jpg",
    description: "Engineered for track day purists. This wall-mounted key hanger captures the unmistakable silhouette and massive active aero rear wing of the 992 GT3 RS. Four sturdy hooks keep your daily carry organized as soon as you step inside the door.",
    highlights: [
      "Accurate GT3 RS side silhouette with vented wheel arches and rear wing",
      "Four wide hooks spaced to prevent key bunches from tangling",
      "Hidden mounting bracket creates a seamless flush appearance against the wall",
      "Must-have home accessory for Porsche lovers and driving enthusiasts"
    ],
    faqs: [
      { q: "Can it hold heavy backpacks or jackets too?", a: "Each hook supports up to 2.5kg when wall-mounted using screws." }
    ]
  },
  {
    id: "3DP-035",
    name: "Tree Friend Sprout Desktop Pen Holder & Planter",
    tagline: "Adorable organic woodland creature with expressive eyes holding pens and succulents.",
    category: "Desk",
    price: 449,
    originalPrice: 599,
    badge: "Cute Pick",
    rating: 4.8,
    ratingCount: 28,
    material: "Eco-friendly Textured PLA+",
    infill: "20% Gyroid infill",
    dimensions: "95 \u00d7 95 \u00d7 115 mm",
    weight: "130g",
    leadTime: "1-2 days",
    colors: [
      { name: "Wood Bark Brown & Moss", hex: "#78350F" },
      { name: "Forest Green", hex: "#15803D" },
      { name: "Bone White Minimal", hex: "#F5F5F0" }
    ],
    image: "assets/products/tree-friend-pen-holder.jpg",
    description: "Infuse your work desk with joyful nature vibes. Tree Friend is a delightful tree stump creature with wide curious eyes and a hollow crown that holds 12+ pens, Apple pencils, and scissors, or doubles as a mini planter for small artificial succulents.",
    highlights: [
      "Detailed wood grain texture and bark furrowing",
      "Two glossy inlaid eyes give it a friendly, warm presence",
      "Wide weighted base plate resists tipping",
      "Dual-use design: stationery organizer or succulent plant pot"
    ],
    faqs: [
      { q: "Does it have a drainage hole if used for real plants?", a: "We can include an internal drainage tray if requested on WhatsApp!" }
    ]
  },
  {
    id: "3DP-036",
    name: "Ditto Multi-Pen Desktop Holder & Brush Stand",
    tagline: "Playful smiley Ditto desk buddy with top slots for pens, Apple Pencil, and brushes.",
    category: "Desk",
    price: 399,
    originalPrice: 499,
    badge: "Desk Favorite",
    rating: 5.0,
    ratingCount: 1,
    material: "Silky Smooth PLA+",
    infill: "25% High-density infill",
    dimensions: "100 \u00d7 90 \u00d7 85 mm",
    weight: "120g",
    leadTime: "1-2 days",
    colors: [
      { name: "Ditto Lilac", hex: "#D8B4E2" },
      { name: "Shiny Cyan Blue", hex: "#38BDF8" },
      { name: "Matte Charcoal", hex: "#27272A" }
    ],
    image: "assets/products/cute-ditto-pen-holder.jpg",
    description: "Ditto's squishy form makes the happiest desk organizer you'll ever own! Sculpted with his charming smile and bead eyes, the top features multiple individual vertical slots to keep your favorite pens, styluses, and hobby brushes upright and within instant reach.",
    highlights: [
      "Individual pen channels hold instruments securely without rattling",
      "Dedicated slot fits Apple Pencil and thick Wacom styluses",
      "Smooth satin-sheen surface with zero sharp edges",
      "Weighted interior prevents sliding across the desk"
    ],
    faqs: [
      { q: "What size pens fit inside?", a: "The cylindrical slots accommodate pens and markers up to 14mm in diameter." }
    ]
  },
  {
    id: "3DP-037",
    name: "Bulbasaur 15cm High-Detail Multi-Part Figurine & Planter",
    tagline: "Collector-grade 15cm Bulbasaur with detachable plant bulb and multi-color assembly.",
    category: "Decor",
    price: 799,
    originalPrice: 999,
    badge: "Collector Grade",
    rating: 4.9,
    ratingCount: 63,
    material: "Multi-Color Composite PLA+",
    infill: "20% Gyroid infill",
    dimensions: "150 \u00d7 125 \u00d7 120 mm",
    weight: "210g",
    leadTime: "1-2 days",
    colors: [
      { name: "Classic Teal & Forest Bulb", hex: "#0D9488" },
      { name: "Shiny Chartreuse & Amber", hex: "#84CC16" },
      { name: "Monochrome Marble", hex: "#E5E7EB" }
    ],
    image: "assets/products/bulbasaur-hq-multipart.jpg",
    description: "A centerpiece for any true Pok\u00e9mon fan. Number #0001 in the Pok\u00e9dex, this high-definition Bulbasaur is assembled from precision snap-fit colored parts for immaculate eye accents and skin spots. The bulb atop his back features a hollow pocket ideal for miniature succulents.",
    highlights: [
      "Substantial 15cm size with crisp organic detailing",
      "Multi-part snapped construction ensures vibrant sharp colors without paint",
      "Removable bulb compartment accommodates small succulents or stationery",
      "Weighted stable 4-legged stance"
    ],
    faqs: [
      { q: "Can a live succulent be planted in it?", a: "Yes! The bulb compartment functions great for small air plants or miniature succulents." }
    ]
  },
  {
    id: "3DP-038",
    name: "Ghost Swirl Spiral Ambient Candle Holder",
    tagline: "Hypnotic geometric spiral ghost silhouette casting ambient shadows with tea lights.",
    category: "Home",
    price: 349,
    originalPrice: 449,
    badge: "Cozy Home",
    rating: 4.5,
    ratingCount: 12,
    material: "Matte Heat-Tolerant PLA+",
    infill: "Continuous Spiral Vase Walls",
    dimensions: "90 \u00d7 90 \u00d7 110 mm",
    weight: "65g",
    leadTime: "1-2 days",
    colors: [
      { name: "Ghost White", hex: "#F4F4F5" },
      { name: "Eerie Glow In Dark", hex: "#86EFAC" },
      { name: "Midnight Charcoal", hex: "#18181B" }
    ],
    image: "assets/products/ghost-swirl-candle-holder.jpg",
    description: "Create warm, magical room ambiance. This modern twisted ghost candle cup features fluid spiral vents that catch the gentle flicker of an LED tea light, projecting playful dancing spectral shadows across your walls and tabletop.",
    highlights: [
      "Designed specifically for safe standard LED tea lights or battery votives",
      "Spiral ribbed vents create stunning shadow dispersion on walls",
      "Available in translucent Glow-in-the-Dark option that charges under daylight",
      "Minimalist modern sculpture even when unlit"
    ],
    faqs: [
      { q: "Can I use real wax flame candles?", a: "We recommend flameless LED tea lights for maximum safety and material longevity." }
    ]
  },
  {
    id: "3DP-039",
    name: "Psyduck Clutched-Head Desk Companion Figurine",
    tagline: "The universally relatable confused Psyduck holding his head in existential thought.",
    category: "Decor",
    price: 399,
    originalPrice: 499,
    badge: "Meme King",
    rating: 4.9,
    ratingCount: 55,
    material: "Eco-friendly Vibrant PLA+",
    infill: "20% Infill with solid base",
    dimensions: "95 \u00d7 85 \u00d7 105 mm",
    weight: "110g",
    leadTime: "1-2 days",
    colors: [
      { name: "Canary Yellow & Ivory", hex: "#EAB308" },
      { name: "Matte White", hex: "#F4F4F5" },
      { name: "Slate Grey", hex: "#4B5563" }
    ],
    image: "assets/products/psyduck-desk-companion.jpg",
    description: "When work or code gets overwhelming, Psyduck is right there with you! Sculpted with both webbed hands firmly clamped to his head in classic psychic migraine fashion, this colorful figurine is the most relatable and humorous addition to any office setup.",
    highlights: [
      "Expressive 3D sculpt capturing Psyduck's iconic dazed expression",
      "Smooth matte finish with zero support scars or visible layer seams",
      "Heavy base keeps it firmly in place next to your monitor or keyboard",
      "Instant mood booster and top-rated gift for developers and designers"
    ],
    faqs: [
      { q: "What size is it?", a: "It stands approximately 10.5cm tall, ideal for desktop display beside screens." }
    ]
  },
  {
    id: "3DP-040",
    name: "Custom Name Dual-Slot Desk Organizer & Pen Stand",
    tagline: "Modern personalized desktop organizer with your custom raised name in bold contrasting colors.",
    category: "Gifts",
    price: 599,
    originalPrice: 799,
    badge: "Personalized",
    rating: 5.0,
    ratingCount: 36,
    isPersonalizable: true,
    personalizationConfig: {
      type: "single-line",
      title: "Personalize Your Name Organizer",
      line1Label: "Your Name / Brand (Up to 16 characters)",
      line1Placeholder: "e.g. ZAMEER or TECH LAB",
      line1Max: 18,
      defaultLine1: "NAME",
      defaultLine2: "",
      hint: "We model and 3D print your exact name in bold, raised dual-color letters on the front face. Digital preview shared on WhatsApp."
    },
    material: "Dual-Color Co-Extruded PLA+",
    infill: "25% High-Rigidity Infill",
    dimensions: "170 \u00d7 90 \u00d7 85 mm",
    weight: "180g",
    leadTime: "2-3 days",
    colors: [
      { name: "Matte Black Base + Gold Letters", hex: "#18181B" },
      { name: "Navy Blue Base + White Letters", hex: "#1E3A8A" },
      { name: "Terracotta Base + Ivory Letters", hex: "#C2593F" }
    ],
    image: "assets/products/custom-name-pen-holder.jpg",
    description: "Make your desk truly your own. This high-end desktop caddy features two deep stepped organizing compartments for stationery, glasses, and phones, highlighted by your custom name or initials rendered in bold, raised 3D typography on the front.",
    highlights: [
      "Custom 3D preview model sent for your approval on WhatsApp before printing",
      "Two spacious compartments hold up to 25 pens, markers, and small tools",
      "Dual-extrusion clean typography that will never peel or fade",
      "Premier executive gift for promotions, graduations, and home offices"
    ],
    faqs: [
      { q: "How long does custom name printing take?", a: "We confirm your 3D digital preview on WhatsApp within 4 hours, and ship within 24-48 hours." }
    ]
  },
  {
    id: "3DP-041",
    name: "Automotive Turbocharger LED Ambient Accent Lamp",
    tagline: "Detailed twin-scroll turbo compressor housing with warm internal illuminated glow.",
    category: "Decor",
    price: 1099,
    originalPrice: 1499,
    badge: "Car Enthusiast",
    rating: 4.8,
    ratingCount: 71,
    material: "High-Temp Tough PETG / Translucent Core",
    infill: "25% High-Tolerance Infill",
    dimensions: "150 \u00d7 140 \u00d7 165 mm",
    weight: "260g",
    leadTime: "2-3 days",
    colors: [
      { name: "Machined Titanium & Amber", hex: "#6B7280" },
      { name: "Carbon Black & Cyan Glow", hex: "#18181B" },
      { name: "Anodized Red Accent", hex: "#DC2626" }
    ],
    image: "assets/products/turbocharger-accent-lamp.jpg",
    description: "Boost your room's aesthetic. Modeled with authentic compressor snails, turbine inlet flanges, and detailed internal impeller blades, this automotive turbo lamp houses a warm internal USB LED module that radiates light through the compressor intake.",
    highlights: [
      "Complete with USB LED lighting harness and tactile inline toggle switch",
      "Detailed multi-blade compressor wheel visible inside the illuminated inlet",
      "Heavy weighted baseplate keeps it stable on bedside tables and workbenches",
      "The ultimate gift for automotive mechanics, tuners, and track enthusiasts"
    ],
    faqs: [
      { q: "Does the impeller spin?", a: "The compressor wheel is mounted on a low-friction center bearing allowing tactile manual spinning." }
    ]
  },
  {
    id: "3DP-042",
    name: "F1 2026 Racing Wheel & Tire Desk Pen Holder",
    tagline: "Authentic motorsport wheel rim and slick racing tire converted into a heavy desk cup.",
    category: "Desk",
    price: 549,
    originalPrice: 699,
    badge: "F1 Racing",
    rating: 4.9,
    ratingCount: 83,
    material: "Matte Tough PLA+ with Rubberized Feel",
    infill: "30% Solid Weight Infill",
    dimensions: "115 \u00d7 115 \u00d7 95 mm",
    weight: "175g",
    leadTime: "1-2 days",
    colors: [
      { name: "Soft Compound Red & Black Rim", hex: "#DC2626" },
      { name: "Medium Compound Yellow & Black", hex: "#EAB308" },
      { name: "Hard Compound White & Black", hex: "#F4F4F5" }
    ],
    image: "assets/products/f1-wheel-pen-holder.jpg",
    description: "Bring the high-octane thrill of Grand Prix pit lane to your workspace. Featuring an aggressive 18-inch Formula 1 aerodynamic wheel cover and wide slick racing tire with high-contrast color compound stripe sidewall, this heavy pen cup organizes your desk in pole position.",
    highlights: [
      "Includes colored compound sidewall stripe (Soft Red, Medium Yellow, Hard White)",
      "Deep 85mm interior cavity holds 15+ pens, Apple pencils, and rulers",
      "Realistic tire tread surface and multi-spoke aero wheel rim detailing",
      "Anti-slip padded base protects fine wood and glass desks"
    ],
    faqs: [
      { q: "Can I choose the tire compound color?", a: "Yes! Choose between Soft (Red), Medium (Yellow), or Hard (White) when placing your order." }
    ]
  },
  {
    id: "3DP-043",
    name: "Illuminated Lunar Moon Phase Wall Lamp (Version 2)",
    tagline: "Large circular topographical 3D moon lamp with soft indirect halo rim illumination.",
    category: "Home",
    price: 1299,
    originalPrice: 1699,
    badge: "Staff Pick",
    rating: 4.8,
    ratingCount: 64,
    material: "Multi-Layer Light Diffusing PLA",
    infill: "Variable Density Lithophane Topology",
    dimensions: "260 \u00d7 260 \u00d7 38 mm",
    weight: "320g",
    leadTime: "2-3 days",
    colors: [
      { name: "Lunar Surface White", hex: "#F4F4F5" },
      { name: "Warm Moonlight Cream", hex: "#FEF3C7" }
    ],
    image: "assets/products/illuminated-lunar-wall-lamp.jpg",
    description: "Bring the tranquil beauty of the full moon indoors. Crafted using NASA topographic lunar elevation data, this 26cm circular wall lamp reveals craters, maria, and mountain ridges when illuminated. Backlit by integrated warm LED halo lighting for cozy bedroom ambiance.",
    highlights: [
      "Accurate topographical lunar craters based on high-resolution NASA topographic maps",
      "Pre-installed USB LED strip with remote controller and brightness dimming",
      "Easy flush wall mount keyhole slot on the rear panel",
      "Gentle eye-care indirect lighting suitable as a peaceful nursery or night light"
    ],
    faqs: [
      { q: "How does it mount on the wall?", a: "It has an integrated rear keyhole hanger and works with a standard nail or 3M Command picture hanger." }
    ]
  },
  {
    id: "3DP-044",
    name: "Cross-Drilled Brake Rotor & Caliper Wall Clock",
    tagline: "Authentic motorsport ventilated brake disc and multi-piston caliper horology clock.",
    category: "Decor",
    price: 1399,
    originalPrice: 1799,
    badge: "Motorsport",
    rating: 4.9,
    ratingCount: 79,
    material: "Dual-Color Silk Silver & Caliper Red PLA+",
    infill: "30% Structural Honeycomb",
    dimensions: "275 \u00d7 275 \u00d7 45 mm",
    weight: "390g",
    leadTime: "2-3 days",
    colors: [
      { name: "Brembo Racing Red & Silver", hex: "#DC2626" },
      { name: "Acid Green & Gunmetal", hex: "#84CC16" },
      { name: "Stealth Carbon Black", hex: "#18181B" }
    ],
    image: "assets/products/brake-rotor-wall-clock.jpg",
    description: "The ultimate statement clock for garages, bachelor pads, and automotive offices. Modeled directly on high-performance supercar ceramic brakes, this 27.5cm wall clock features drilled cooling holes, directional vane slots, a bright multi-piston caliper at the 10 o'clock position, and silent sweep movement.",
    highlights: [
      "Ultra-quiet sweep quartz movement with zero ticking noise",
      "Detailed cooling vents, cross-drilled rotor holes, and recessed center hat",
      "High-contrast oversized multi-piston racing caliper",
      "Runs on a single AA battery (included in package)"
    ],
    faqs: [
      { q: "Is the rotor metallic or plastic?", a: "It is printed using premium high-sheen silk titanium composite filament that looks like brushed steel while remaining lightweight." }
    ]
  }
];

/**
 * Helper: Find product by ID
 */
function getProductById(id) {
  if (!id) return null;
  const cleanId = id.trim().toUpperCase();
  return PRODUCTS.find(p => p.id.toUpperCase() === cleanId) || null;
}

/**
 * Helper: Get featured products (curated mix of hot new arrivals & popular bestsellers)
 */
function getFeaturedProducts(count = 8) {
  const curatedIds = [
    "3DP-013", // Mercedes-AMG GT 63 Coupe 1:10 Scale (New Arrival)
    "3DP-028", // Flame Breath Flying Dragon LED Ambient Lamp V2 (New Arrival)
    "3DP-015", // Gengar Shadow Pokémon Desk Organizer (New Arrival)
    "3DP-017", // Psyduck Mouth-Drainage Sponge & Soap Tray (New Arrival)
    "3DP-027", // Porsche 911 (992.2) GT3 1:10 Scale Model (New Arrival)
    "3DP-029", // Luxury Horology Bezel Wall Clock GMT Edition (New Arrival)
    "3DP-040", // Custom Name Dual-Slot Desk Organizer (New Arrival)
    "3DP-001", // Minimal Geometric Phone Stand (Classic Bestseller)
    "3DP-014", // Giant Brick Man Toilet Paper Holder (New Arrival)
    "3DP-036", // Ditto Multi-Pen Desktop Holder (New Arrival)
    "3DP-044", // Cross-Drilled Brake Rotor Wall Clock (New Arrival)
    "3DP-023"  // Movable Spring-Action Articulated Lizard (New Arrival)
  ];
  const featured = curatedIds.map(id => getProductById(id)).filter(Boolean);
  const remaining = PRODUCTS.filter(p => !curatedIds.includes(p.id));
  return [...featured, ...remaining].slice(0, count);
}

/**
 * Helper: Get related products (excluding current)
 */
function getRelatedProducts(currentId, count = 4) {
  const current = getProductById(currentId);
  const currentCat = current ? current.category : "";
  const others = PRODUCTS.filter(p => p.id !== currentId);
  
  // Try to match same category first
  const sameCat = others.filter(p => p.category === currentCat);
  const remaining = others.filter(p => p.category !== currentCat);
  
  return [...sameCat, ...remaining].slice(0, count);
}

/**
 * Helper: Get all unique categories with counts
 */
function getCategoryCounts() {
  const counts = { All: PRODUCTS.length };
  PRODUCTS.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
}

// Export to window
window.PRODUCTS = PRODUCTS;
window.getProductById = getProductById;
window.getFeaturedProducts = getFeaturedProducts;
window.getRelatedProducts = getRelatedProducts;
window.getCategoryCounts = getCategoryCounts;
