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
 * Helper: Get featured products (e.g. for homepage)
 */
function getFeaturedProducts(count = 8) {
  return PRODUCTS.slice(0, count);
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
