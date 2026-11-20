export type ClosersKey = 'C' | 'L' | 'O' | 'S1' | 'E' | 'R' | 'S2';

export interface ClosersPrinciple {
  id: ClosersKey;
  letter: string;
  index: string;
  title: string;
  subtitle: string;
  originalSummary: string;
  rebuildSummary: string;
  originalEvidence: string[];
  rebuildEvidence: string[];
  behavioralMechanism: string;
  uiLocation: string;
}

export const REFERENCE_URLS = {
  original: 'https://www.nespresso.com/sg/en/order/machines/original/swarovski-shine-bundle',
  rebuild:
    'https://nespresso-closers-after.vercel.app/#/order/machines/original/swarovski-shine-bundle',
} as const;

export const GENERATED_IMAGES = {
  heroBundle: '/src/assets/images/swarovski_shine_hero_1795140108613.jpg',
  machineDetail: '/src/assets/images/citiz_crystal_detail_1795140108529.jpg',
  capsuleRitual: '/src/assets/images/espresso_capsules_ritual_1795140110199.jpg',
} as const;

export const CLOSERS_PRINCIPLES: ClosersPrinciple[] = [
  {
    id: 'C',
    letter: 'C',
    index: '01',
    title: 'Convenience',
    subtitle: 'Frictionless spec inspection, edition switching, and mobile checkout',
    originalSummary:
      'Isolates the Swarovski Shine Bundle inside a rigid corporate product layout with static spec text, no interactive extraction profile preview, and no sticky mobile purchase bar.',
    rebuildSummary:
      'Equips the Swarovski PDP with sticky dual-column gallery + buy-box, 5 Programmable Extraction Profiles, instant quantity controls, and a persistent mobile quick-add bar.',
    originalEvidence: [
      'Static feature bullets omit cup volumes in ml, brew seconds, and thermal targets.',
      'Shoppers cannot switch between Shine Bundle, Machine Only, and Milk Bundle on the same PDP card.',
      'Mobile shoppers must scroll back to the top buy-box to add the bundle to their basket.',
    ],
    rebuildEvidence: [
      'Interactive 5-button Extraction Explorer (Espresso 40 ml, Lungo 110 ml, Americano 150 ml, Americano XL 200 ml, Hot Water 200 ml).',
      'Clean Technical Specifications ledger (19 bar, 25s heat-up, 1.0 L tank, 1,260 W Type G SG plug) paired beside extraction telemetry.',
      'Sticky desktop buy-box + pinned mobile bottom bar (`ADD TO CART`) plus slide-over bag drawer.',
    ],
    behavioralMechanism:
      'Answering technical, voltage, and portion questions directly inside the purchase flow removes research detours and cuts checkout abandonment.',
    uiLocation: 'Sticky Buy-Box · 5 Extraction Profiles · Tech Specs · Mobile Sticky Bar',
  },
  {
    id: 'L',
    letter: 'L',
    index: '02',
    title: 'Loss Avoidance',
    subtitle: 'Explicit retail anchors, ticking holiday deadline, and Singapore stock alerts',
    originalSummary:
      'Displays a flat SGD 499 price with no comparison anchor, no holiday countdown deadline, and no visibility into limited Singapore festive allocation.',
    rebuildSummary:
      'Pairs a live ticking Holiday Promotion countdown with an explicit SGD 609 strikethrough anchor (Save SGD 110 · 18% Off) and a Singapore low-stock notice (6 units remaining).',
    originalEvidence: [
      'Single static SGD 499.00 price hides the SGD 110 savings relative to purchasing each piece separately.',
      'No time-bound campaign countdown to clarify when the holiday edition ends.',
      'No inventory allocation cue, making postponement feel risk-free.',
    ],
    rebuildEvidence: [
      'Live countdown timer (`Holiday promotion ends in` Days : Hours : Min : Sec) placed directly above edition selection.',
      'Explicit price anchor: `SGD 499.00` vs `SGD 609.00` strikethrough with `Save SGD 110.00 (18% Off)`.',
      'Scarcity alert: `Limited Quantities Available · Stock is Low — Only 6 units remaining in our Singapore festive allocation.`',
    ],
    behavioralMechanism:
      'Losses loom larger than equivalent gains; transparent bundle savings combined with time-boxed Singapore stock allocation converts browsing into immediate checkout.',
    uiLocation: 'PDP Price Anchor · Live Countdown · Singapore Stock Alert',
  },
  {
    id: 'O',
    letter: 'O',
    index: '03',
    title: 'Own Identity',
    subtitle: 'Tailored Swarovski editions matching collector, purist, and milk-ritual buyers',
    originalSummary:
      'Presents a single fixed bundle SKU with no tailored variations for espresso purists wanting the crystal machine alone or latte drinkers needing integrated milk frothing.',
    rebuildSummary:
      'Lets visitors self-select inside the PDP between 3 distinct crystal editions (`Swarovski Shine Bundle`, `CitiZ Platinum × Swarovski` Machine Only, and `CitiZ Platinum & Milk × Swarovski`), updating SKU and `Included in Your Box` dynamically.',
    originalEvidence: [
      'One-size-fits-all SKU forces milk drinkers or minimalist machine buyers to leave the page.',
      'Box contents appear as static prose rather than an edition-specific checklist.',
    ],
    rebuildEvidence: [
      'Interactive `Select Edition` cards with live SKU switching (`SG-OL-SWA-BUNDLE-26`, `SG-OL-SWA-MACH-26`, `SG-OL-SWA-MILK-26`).',
      'Dynamic `Included in Your Box` verification list that updates immediately for collector gifting, standalone hardware, or integrated Aeroccino milk rituals.',
    ],
    behavioralMechanism:
      'Offering identity-aligned configurations on the same PDP prevents bounce-backs and matches the buyer’s daily coffee ritual without choice overload.',
    uiLocation: 'Select Edition Cards · Dynamic Included-in-Your-Box Checklist',
  },
  {
    id: 'S1',
    letter: 'S',
    index: '04',
    title: 'Status',
    subtitle: 'Collector prestige, 62-facet Swarovski provenance, and peer adoption',
    originalSummary:
      'Uses standard mass-market product page styling that treats a limited Swarovski crystal collaboration like a routine kitchen appliance.',
    rebuildSummary:
      'Frames the PDP as a limited collector release with `Original Line · Limited Holiday Edition`, a 4-piece ensemble showcase, `Connoisseur Tier` member badging, and `1,000+ Singapore buyers` proof.',
    originalEvidence: [
      'Corporate product grid styling dilutes the luxury aura of precision-cut Swarovski crystal hardware.',
      'No visible social proof tally showing collector adoption in Singapore.',
    ],
    rebuildEvidence: [
      'Editorial serif PDP title (`Swarovski Shine Bundle`) set on warm alabaster `#FAF9F6` with antique gold `#9E7B4F` accents.',
      'Dedicated `Curated Four-Piece Ensemble` section detailing the CitiZ Crystal Edition, Travel Mug, PIXIE Cups, and 62-Facet Ornament.',
      'Peer status cue: `Join the 1,000+ coffee lovers in Singapore who have already purchased this edition.`',
    ],
    behavioralMechanism:
      'Luxury hardware converts on symbolic capital; elevated typography, craft provenance, and high-status member cues justify the premium price point.',
    uiLocation: 'PDP Buy-Box Header · Four-Piece Ensemble · Member Status Bar',
  },
  {
    id: 'E',
    letter: 'E',
    index: '05',
    title: 'Emotion',
    subtitle: 'Tactile 1.25× finish inspection, sensory prose, and ensemble storytelling',
    originalSummary:
      'Relies on dry feature statements and small static thumbnails that fail to convey crystal light refraction, crema texture, or festive gifting warmth.',
    rebuildSummary:
      'Delivers a 4-frame interactive gallery (`01 / 04`) with an `Inspect Finish` 1.25× zoom control, sensory ritual copywriting, and individual visual spotlights for every piece in the box.',
    originalEvidence: [
      'Spec-sheet description reads like an internal catalog entry rather than a luxury gift narrative.',
      'Lacks a high-resolution tactile zoom button for inspecting the crystal pavé band and chrome finish.',
    ],
    rebuildEvidence: [
      '4-frame gallery (`Complete Shine Bundle`, `CitiZ Platinum Crystal Band`, `Travel Mug, PIXIE Cups & Ornament`, `14-Capsule Tasting Assortment`) with `Inspect Finish` toggle.',
      'Evocative positioning: `Brushed stainless steel CitiZ Platinum espresso craftsmanship elevated with hand-applied Swarovski crystal brilliance—designed for festive hosting and timeless daily espresso rituals.`',
      'Four-piece visual gallery (`Inside the Nespresso × Swarovski Shine Bundle`) celebrating every tactile accessory.',
    ],
    behavioralMechanism:
      'Sensory storytelling and tactile zoom bridge the physical gap of e-commerce, helping shoppers picture the machine gleaming on their counter.',
    uiLocation: '4-Frame Sticky Zoom Gallery · PDP Editorial Copy · Ensemble Grid',
  },
  {
    id: 'R',
    letter: 'R',
    index: '06',
    title: 'Recognition',
    subtitle: 'Personal member greeting, Singapore reviews, and Type G / same-day assurances',
    originalSummary:
      'Displays an anonymous guest header, hides localized Singapore technical assurances, and omits verified Singapore buyer reviews near the purchase decision.',
    rebuildSummary:
      'Recognizes signed-in member `Jocelyn C.` (`Connoisseur Tier`), surfaces `4.0 / 5 (42 reviews)` from Orchard, Bukit Timah, and Marina Bay buyers, and guarantees SG Type G 230V plug & same-day courier dispatch.',
    originalEvidence: [
      'Generic global footer and unlocalized specification phrasing reduce regional confidence.',
      'No verified Singapore customer reviews linked directly from the PDP rating summary.',
    ],
    rebuildEvidence: [
      'Personalized account header (`Jocelyn C. · Connoisseur Tier`) + top ribbon (`Complimentary delivery above SGD 80`).',
      'Clickable `4.0 / 5 (42 reviews)` rating jumping smoothly to `Verified Singapore Buyers` neighborhood testimonials.',
      'Three explicit SG assurances under Add to Cart: Same-day delivery before 2:30 PM, 2-year official SG warranty & Type G 230V plug, and 14-capsule tasting box.',
    ],
    behavioralMechanism:
      'Recognizing both the returning member and Singapore-specific electrical/delivery realities eliminates last-mile buyer hesitation.',
    uiLocation: 'Account Header · Rating Anchor · SG Assurances · Verified Reviews',
  },
  {
    id: 'S2',
    letter: 'S',
    index: '07',
    title: 'Stickiness',
    subtitle: 'One-click Original capsule pairings, persistent bag, and SGD 80 delivery loop',
    originalSummary:
      'Treats the Swarovski bundle as a terminal single-item purchase without prompting compatible Original capsule sleeves or ongoing tasting replenishment.',
    rebuildSummary:
      'Embeds `Complete Your Tasting` 1-click Original capsule sleeve cards (`Arpeggio`, `Ristretto Italiano`, `Volluto`) directly at the base of the PDP, backed by a persistent bag (`nespresso_sg_bag_v1`) with an SGD 80 delivery progress meter.',
    originalEvidence: [
      'No Original-line sleeve cross-sell on the PDP to pair with the included 14-capsule starter box.',
      'Basket drawer does not highlight machine-line capsule compatibility.',
    ],
    rebuildEvidence: [
      '`Complete Your Tasting · Recommended Original Coffee Sleeves` section with instant `ADD TO CART` feedback (`ADDED`).',
      'Persistent localStorage bag that highlights Original Line compatibility whenever an Original machine is added.',
      'Live SGD 80 free-delivery progress bar and 100% recyclable aluminium capsule messaging.',
    ],
    behavioralMechanism:
      'Pairing hardware acquisition with one-click compatible capsule sleeves establishes a recurring Nespresso Club replenishment habit from day one.',
    uiLocation: 'Complete Your Tasting Grid · Smart Cart Drawer · Recycling Assurances',
  },
];

export interface PdpEditionOption {
  id: 'shine-bundle' | 'machine-only' | 'milk-bundle';
  label: string;
  subtitle: string;
  priceSgd: number;
  compareAtSgd: number;
  sku: string;
  includes: string[];
  identityFit: string;
}

export const PDP_EDITIONS: PdpEditionOption[] = [
  {
    id: 'shine-bundle',
    label: 'Swarovski Shine Bundle',
    subtitle: 'Machine + Crystal Travel Mug + PIXIE Cups + Ornament',
    priceSgd: 499,
    compareAtSgd: 609,
    sku: 'SG-OL-SWA-BUNDLE-26',
    includes: [
      'Nespresso × Swarovski CitiZ Platinum Machine',
      'Nespresso × Swarovski Travel Mug with Crystal Holder',
      'PIXIE Espresso & Lungo Stainless Cups Set',
      'Festive 62-Facet Crystal Capsule Ornament',
      'Complimentary 14-Capsule Original Tasting Box',
    ],
    identityFit: 'Collector & Holiday Gifting Ensemble · Save SGD 110 (18% Off)',
  },
  {
    id: 'machine-only',
    label: 'CitiZ Platinum × Swarovski',
    subtitle: 'Crystal-Embellished Machine Only',
    priceSgd: 429,
    compareAtSgd: 469,
    sku: 'SG-OL-SWA-MACH-26',
    includes: [
      'Nespresso × Swarovski CitiZ Platinum Machine',
      'Complimentary 14-Capsule Original Tasting Box',
      '2-Year Official Nespresso Singapore Warranty',
    ],
    identityFit: 'Espresso Purists Upgrading Hardware · Save SGD 40',
  },
  {
    id: 'milk-bundle',
    label: 'CitiZ Platinum & Milk × Swarovski',
    subtitle: 'Machine + Integrated Milk Frother Bundle',
    priceSgd: 509,
    compareAtSgd: 619,
    sku: 'SG-OL-SWA-MILK-26',
    includes: [
      'Nespresso × Swarovski CitiZ Platinum & Milk Machine',
      'Integrated Aeroccino Hot & Cold Milk Frother',
      'Festive 62-Facet Crystal Capsule Ornament',
      'Complimentary 14-Capsule Original Tasting Box',
    ],
    identityFit: 'Daily Flat White & Iced Latte Rituals · Save SGD 110 (18% Off)',
  },
];

export interface ExtractionSize {
  id: string;
  label: string;
  volumeMl: number;
  brewTimeSec: number;
  temperatureC: number;
  profile: string;
}

export const EXTRACTION_SIZES: ExtractionSize[] = [
  {
    id: 'espresso',
    label: 'Espresso',
    volumeMl: 40,
    brewTimeSec: 22,
    temperatureC: 86,
    profile: 'High-pressure 19-bar extraction yielding dense, hazelnut-tinted crema.',
  },
  {
    id: 'lungo',
    label: 'Lungo',
    volumeMl: 110,
    brewTimeSec: 42,
    temperatureC: 85,
    profile: 'Extended water flow engineered for Original Lungo blends without over-extraction.',
  },
  {
    id: 'americano',
    label: 'Americano',
    volumeMl: 150,
    brewTimeSec: 48,
    temperatureC: 84,
    profile: 'Dedicated two-stage cycle: 25 ml ristretto followed by 125 ml pure hot water.',
  },
  {
    id: 'americano-xl',
    label: 'Americano XL',
    volumeMl: 200,
    brewTimeSec: 56,
    temperatureC: 84,
    profile: 'Generous café-style long black combining 40 ml espresso with 160 ml tempered water.',
  },
  {
    id: 'hot-water',
    label: 'Hot Water',
    volumeMl: 200,
    brewTimeSec: 32,
    temperatureC: 88,
    profile: 'Clean, instant hot water spout for pre-warming cups or preparing loose-leaf tea.',
  },
];

export interface CapsuleUpsell {
  id: string;
  name: string;
  notes: string;
  intensity: number;
  priceSgd: number;
}

export const CAPSULE_UPSELLS: CapsuleUpsell[] = [
  {
    id: 'arpeggio',
    name: 'Ispirazione Firenze Arpeggio',
    notes: 'Intensity 9 · Intense & Creamy · Cocoa',
    intensity: 9,
    priceSgd: 9.5,
  },
  {
    id: 'ristretto',
    name: 'Ispirazione Ristretto Italiano',
    notes: 'Intensity 10 · Dark Roast · Berry & Chocolate',
    intensity: 10,
    priceSgd: 9.5,
  },
  {
    id: 'volluto',
    name: 'Volluto',
    notes: 'Intensity 4 · Sweet & Light · Biscuit & Fruit',
    intensity: 4,
    priceSgd: 9.2,
  },
];

export interface StructuralDiffRow {
  dimension: string;
  closersTag: string;
  originalPage: string;
  rebuildPage: string;
}

export const STRUCTURAL_DIFF_ROWS: StructuralDiffRow[] = [
  {
    dimension: 'PDP Layout & Ergonomics',
    closersTag: 'C · Convenience',
    originalPage: 'Standard static column layout; scrolling away loses sight of price and CTA.',
    rebuildPage: 'Dual sticky 7:5 gallery + buy-box, 5 Extraction Profiles, and pinned mobile CTA.',
  },
  {
    dimension: 'Price & Savings Framing',
    closersTag: 'L · Loss Avoidance',
    originalPage: 'Flat SGD 499.00 display with no retail anchor or savings breakdown.',
    rebuildPage: 'SGD 499.00 vs SGD 609.00 strikethrough · Save SGD 110.00 (18% Off) + countdown.',
  },
  {
    dimension: 'Inventory & Urgency',
    closersTag: 'L · Loss Avoidance',
    originalPage: 'Generic availability status without campaign deadline or unit count.',
    rebuildPage: 'Ticking Holiday timer + "Only 6 units remaining in Singapore festive allocation".',
  },
  {
    dimension: 'Edition & Identity Fit',
    closersTag: 'O · Own Identity',
    originalPage: 'Single fixed bundle SKU with static prose description.',
    rebuildPage: '3-edition selector (Shine Bundle, Machine Only, Milk Bundle) with live SKU & box list.',
  },
  {
    dimension: 'Luxury & Prestige Cue',
    closersTag: 'S · Status',
    originalPage: 'Mass-retail corporate template; understated crystal provenance.',
    rebuildPage: '4-Piece Ensemble showcase, Connoisseur Tier status, and 1,000+ SG buyers proof.',
  },
  {
    dimension: 'Sensory Inspection',
    closersTag: 'E · Emotion',
    originalPage: 'Small thumbnails with technical copy focused on wattage and features.',
    rebuildPage: '4-frame interactive gallery (01 / 04) with 1.25× "Inspect Finish" zoom & ritual prose.',
  },
  {
    dimension: 'Local & Member Trust',
    closersTag: 'R · Recognition',
    originalPage: 'Anonymous session; SG Type G plug and local reviews absent above fold.',
    rebuildPage: 'Member greeting (Jocelyn C.), 42 verified SG reviews, same-day SG courier before 2:30 PM.',
  },
  {
    dimension: 'Post-Add Retention',
    closersTag: 'S · Stickiness',
    originalPage: 'Single-item add to basket without capsule sleeve pairing prompts.',
    rebuildPage: 'Complete Your Tasting Original sleeve grid, persistent bag, and SGD 80 delivery meter.',
  },
];
