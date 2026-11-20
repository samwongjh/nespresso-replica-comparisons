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
  rebuild: 'https://nespresso-closers-after.vercel.app/',
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
    subtitle: 'Frictionless discovery, comparison, and one-tap acquisition',
    originalSummary:
      'Buried in a deep category tree with static specs, no inline machine comparison, and multi-page navigation to evaluate capsule compatibility or delivery thresholds.',
    rebuildSummary:
      'Single-page editorial storefront with live search, category tabs, a modal Machine Comparison Matrix, 4-cup extraction selector, and a slide-over cart with a live SGD 80 free delivery tracker.',
    originalEvidence: [
      'Deep breadcrumb path (Home > Machines > Original > Bundle) isolates the product from related capsules and machines.',
      'No side-by-side comparison table between CitiZ Platinum Swarovski, standard CitiZ Platinum, and Vertuo Next.',
      'Mobile shoppers must scroll back to the top buy-box to add to cart.',
    ],
    rebuildEvidence: [
      'Instant category tabs (All Essentials, Machines, Coffee Capsules, Accessories, Bundle Sets) plus live keyword search.',
      'Interactive "Compare All Machines" matrix showing line, pressure, cup sizes, heat-up time, and bundle savings in one table.',
      'Sticky mobile quick-add bar and slide-over bag drawer with instant quantity controls and 1-click capsule add-ons.',
    ],
    behavioralMechanism:
      'Removing search, comparison, and checkout friction lowers decision fatigue and keeps high-intent buyers in an uninterrupted purchase loop.',
    uiLocation: 'Top Navigation · Catalog Filters · Machine Comparison Modal · Slide-Over Cart',
  },
  {
    id: 'L',
    letter: 'L',
    index: '02',
    title: 'Loss Avoidance',
    subtitle: 'Concrete savings anchors, live urgency, and scarcity framing',
    originalSummary:
      'Displays a flat SGD 499 price with minimal bundle value breakdown, no promotional deadline timer, and no clear visibility into limited Singapore stock allocation.',
    rebuildSummary:
      'Pairs a ticking Holiday Offer countdown timer with an explicit SGD 609 strikethrough anchor (Save SGD 110 · 18% Off) and a live low-stock notice (6 units left in Singapore).',
    originalEvidence: [
      'Single static SGD 499 figure hides the SGD 110 savings relative to buying the machine, Travel Mug, PIXIE cups, and ornament separately.',
      'No time-bound campaign countdown to clarify when the holiday edition closes.',
      'No stock scarcity cue, encouraging shoppers to defer purchasing indefinitely.',
    ],
    rebuildEvidence: [
      'Live countdown timer (Days : Hours : Minutes : Seconds) anchored right beneath the primary hero and PDP buy-box.',
      'Explicit price anchor: SGD 499 vs SGD 609 strikethrough with "Save SGD 110 (18% Off)" callout.',
      'Singapore stock alert: "Limited Quantities Available · Only 6 units remaining in our Singapore festive allocation."',
    ],
    behavioralMechanism:
      'Prospect theory shows losses loom larger than equivalent gains; explicit savings anchors and time-boxed scarcity convert passive browsing into immediate action.',
    uiLocation: 'Hero Countdown · Buy-Box Price Anchor · Stock Alert Banner',
  },
  {
    id: 'O',
    letter: 'O',
    index: '03',
    title: 'Own Identity',
    subtitle: 'Self-segmentation by coffee ritual and gifting persona',
    originalSummary:
      'Treats every visitor identically with generic hardware copy, offering zero pathways for beginners, milk-drinkers, or espresso purists to see themselves in the offer.',
    rebuildSummary:
      'Introduces coffee-ritual bundle personas (First Timers, Casual Drinkers, Coffee Connoisseurs) alongside an Edition Selector (Full Shine Bundle vs Machine Only).',
    originalEvidence: [
      'One-size-fits-all product description assumes buyers already know Original vs Vertuo capsule systems.',
      'No curated starter or connoisseur bundle variants tailored to daily drinking habits.',
    ],
    rebuildEvidence: [
      'Interactive persona filter: "First Timers · New to Coffee", "Casual Drinkers", and "Coffee Connoisseurs".',
      'Edition toggle inside the buy-box: "Nespresso × Swarovski Shine Bundle (SGD 499)" vs "CitiZ Platinum × Swarovski Machine Only (SGD 429)".',
      'Tasting profile alignment showing which intensity blends match each identity.',
    ],
    behavioralMechanism:
      'When an interface lets buyers self-select a label that mirrors their taste ("Coffee Connoisseurs"), product affinity and bundle attach rates rise sharply.',
    uiLocation: 'Bundle Sets Persona Filter · PDP Edition Selector',
  },
  {
    id: 'S1',
    letter: 'S',
    index: '04',
    title: 'Status',
    subtitle: 'Limited-edition prestige, craft provenance, and member tiering',
    originalSummary:
      'Uses standard mass-retail template styling that frames a Swarovski crystal collaboration much like an everyday appliance.',
    rebuildSummary:
      'Elevates the collaboration into a collector artefact with "Connoisseur Tier" member badging, 62-facet Swarovski crystal provenance, and "1,000+ Singapore buyers" social proof.',
    originalEvidence: [
      'Standard e-commerce grid layout weakens the luxury positioning of a Swarovski crystal edition.',
      'No collector social proof or member tier distinction visible on the product frame.',
    ],
    rebuildEvidence: [
      'Editorial serif display typography ("Sculpted Brilliance. Crafted for Espresso.") on obsidian #1B1918 and champagne #9E7B4F.',
      'Account recognition badge: "Jocelyn C. · Connoisseur Tier · Limited Holiday Edition".',
      'Verified Singapore social proof: "Join the 1,000+ coffee lovers in Singapore who have already purchased this edition" + 4.0 / 5 (42 reviews).',
    ],
    behavioralMechanism:
      'Luxury hardware converts on symbolic capital; editorial restraint, numbered rarity, and peer adoption signal taste and exclusivity.',
    uiLocation: 'Hero Editorial Frame · Member Status Bar · Social Proof Header',
  },
  {
    id: 'E',
    letter: 'E',
    index: '05',
    title: 'Emotion',
    subtitle: 'Sensory storytelling, tactile zoom, and ritual atmosphere',
    originalSummary:
      'Relies on dry technical bullet points ("4 coffee size options plus hot water") and small carousel thumbnails that fail to evoke aroma, light refraction, or gifting delight.',
    rebuildSummary:
      'Pairs high-contrast espresso-and-ivory photography, a 4-frame "Inspect Finish" 1.25× zoom gallery, sensory tasting notes, and warm festive hosting prose.',
    originalEvidence: [
      'Spec-sheet tone focuses on wattage and tank litres without evoking morning rituals or holiday gifting.',
      'Static product thumbnails lack tactile inspection cues for the hand-applied crystal finish.',
    ],
    rebuildEvidence: [
      'Interactive 4-frame gallery with "Inspect Finish" 1.25× zoom toggle and numbered frame captions (01 / 04).',
      'Sensory narrative: "Brushed stainless steel CitiZ Platinum espresso craftsmanship elevated with hand-applied Swarovski crystal brilliance."',
      'Aromatic blend notes ("deep cocoa and roasted malt notes", "warm cereal biscuit and fresh fruit") throughout capsule pairings.',
    ],
    behavioralMechanism:
      'Sensory language and tactile visual inspection bridge the physical gap of online shopping, letting buyers imagine the machine on their countertop.',
    uiLocation: 'Sticky 4-Frame Zoom Gallery · Editorial Hero Copy · Capsule Tasting Notes',
  },
  {
    id: 'R',
    letter: 'R',
    index: '06',
    title: 'Recognition',
    subtitle: 'Personalization, local Singapore proof, and institutional trust',
    originalSummary:
      'Anonymous guest-first header, generic regional footer, and no visible localized Singapore customer reviews or same-day courier assurances near the buy button.',
    rebuildSummary:
      'Greets signed-in member "Jocelyn C.", highlights verified Singapore neighborhood reviews, and anchors local trust (Same-Day SG Delivery, 3 SG Boutiques, 2-Year Warranty, 9% GST inclusive).',
    originalEvidence: [
      'No personalized member greeting or tier acknowledgment on arrival.',
      'Customer reviews and Singapore boutique pickup/warranty details are absent or buried far from the purchase decision.',
    ],
    rebuildEvidence: [
      'Persistent member greeting ("Jocelyn C. · Connoisseur Tier") with Sign-In / Sign-Out simulation.',
      'Verified Singapore Buyer Reviews block (Orchard, Bukit Timah, Marina Bay) linked directly from the 4.0 / 5 rating summary.',
      'Localized assurances: "In Stock in Singapore", "Same-Day SG Complimentary Delivery", 1800 888 8000 Club helpline, and 2-Year Machine Warranty + Loan Service.',
    ],
    behavioralMechanism:
      'Recognizing both the individual customer and their specific geographic context (Singapore GST, same-day dispatch, local boutiques) removes cross-border purchase anxiety.',
    uiLocation: 'Account Header · Verified SG Reviews · Trust & Boutique Footer',
  },
  {
    id: 'S2',
    letter: 'S',
    index: '07',
    title: 'Stickiness',
    subtitle: 'Persistent cart state, compatible capsule loops, and ecosystem lock-in',
    originalSummary:
      'Single-item transaction flow: adding the bundle redirects or opens a static bag without encouraging compatible Original sleeve attachments or capsule replenishment.',
    rebuildSummary:
      'Uses persistent localStorage cart state, machine-line compatibility highlights inside the bag, a SGD 80 delivery meter, and 1-click "Complete Your Tasting" Original sleeve upsells.',
    originalEvidence: [
      'No automated reminder inside the cart linking the Original machine to Original-line capsules.',
      'Zero one-click sleeve cross-sells on the bundle PDP to establish recurring capsule ordering.',
    ],
    rebuildEvidence: [
      'Persistent bag state (nespresso_sg_bag_v1) retained across views and reloads.',
      'Smart Bag compatibility highlighting: matches Original capsules directly when an Original machine is in the bag.',
      '"Complete Your Tasting" 1-click sleeve section (Arpeggio, Ristretto Italiano, Volluto) plus 100% recyclable aluminium capsule loop messaging.',
    ],
    behavioralMechanism:
      'Turning a one-off hardware sale into a guided capsule replenishment habit increases customer lifetime value and anchors recurring Nespresso Club visits.',
    uiLocation: 'Complete Your Tasting Grid · Smart Cart Drawer · Recycling Loop',
  },
];

export interface BundleIdentityProfile {
  id: 'first-timers' | 'casual-drinkers' | 'connoisseurs';
  label: string;
  tagline: string;
  bundleName: string;
  line: 'Original' | 'Vertuo';
  priceSgd: number;
  compareAtSgd: number;
  includes: string[];
  whyItWorks: string;
}

export const BUNDLE_IDENTITIES: BundleIdentityProfile[] = [
  {
    id: 'first-timers',
    label: 'First Timers',
    tagline: 'New to home espresso',
    bundleName: 'Vertuo Discovery Starter Set',
    line: 'Vertuo',
    priceSgd: 288,
    compareAtSgd: 345,
    includes: [
      'Vertuo Next Matte Black Machine',
      '30 Mild & Balanced Capsules (Melozio, Solelio, Voltesso)',
      'Double-Walled Tasting Mug & Quick-Start Guide',
    ],
    whyItWorks:
      'Removes intimidation for newcomers via barcode auto-calibration and approachable smooth blends.',
  },
  {
    id: 'casual-drinkers',
    label: 'Casual Drinkers',
    tagline: 'Daily milk & iced café',
    bundleName: 'Morning Lungo & Frother Set',
    line: 'Original',
    priceSgd: 348,
    compareAtSgd: 412,
    includes: [
      'CitiZ Platinum Stainless Steel Machine',
      'Aeroccino 4 Hot & Cold Milk Frother',
      '30 World Explorations & Barista Creations Capsules',
    ],
    whyItWorks:
      'Mirrors daily flat white and iced latte habits with one-touch micro-foam bundled at 16% savings.',
  },
  {
    id: 'connoisseurs',
    label: 'Coffee Connoisseurs',
    tagline: 'Collector & intense roasts',
    bundleName: 'Nespresso × Swarovski Shine Bundle',
    line: 'Original',
    priceSgd: 499,
    compareAtSgd: 609,
    includes: [
      'CitiZ Platinum × Swarovski Crystal Machine',
      'Swarovski Travel Mug & PIXIE Espresso/Lungo Cups',
      '62-Facet Festive Crystal Capsule Ornament',
    ],
    whyItWorks:
      'Satisfies status and craftsmanship desires with collector Swarovski hardware and SGD 110 holiday anchor.',
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
    brewTimeSec: 25,
    temperatureC: 88,
    profile: 'Dense hazelnut crema · 19-bar extraction',
  },
  {
    id: 'lungo',
    label: 'Lungo',
    volumeMl: 110,
    brewTimeSec: 42,
    temperatureC: 87,
    profile: 'Elongated aromatic pull · balanced roast',
  },
  {
    id: 'americano',
    label: 'Americano',
    volumeMl: 150,
    brewTimeSec: 48,
    temperatureC: 89,
    profile: 'Espresso + hot water bypass · clean body',
  },
  {
    id: 'americano-xl',
    label: 'Americano XL',
    volumeMl: 200,
    brewTimeSec: 56,
    temperatureC: 89,
    profile: 'Full mug format · gentle linger',
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
    notes: 'Deep cocoa · roasted malt',
    intensity: 9,
    priceSgd: 9.5,
  },
  {
    id: 'ristretto',
    name: 'Ispirazione Ristretto Italiano',
    notes: 'Dark chocolate · berry acidity',
    intensity: 10,
    priceSgd: 9.5,
  },
  {
    id: 'volluto',
    name: 'Volluto',
    notes: 'Sweet biscuit · fresh fruit',
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
    dimension: 'Information Architecture',
    closersTag: 'C · Convenience',
    originalPage: 'Isolated single-SKU PDP buried inside 4-level category breadcrumbs.',
    rebuildPage: 'Unified storefront + instant PDP switch with live search & category tabs.',
  },
  {
    dimension: 'Price & Savings Framing',
    closersTag: 'L · Loss Avoidance',
    originalPage: 'Flat SGD 499 display with no retail anchor or bundle savings delta.',
    rebuildPage: 'SGD 499 vs SGD 609 strikethrough anchor · Save SGD 110 (18% Off) + countdown.',
  },
  {
    dimension: 'Inventory & Urgency',
    closersTag: 'L · Loss Avoidance',
    originalPage: 'Generic "In Stock" status without seasonal deadline or unit visibility.',
    rebuildPage: 'Live Holiday timer + "Only 6 units remaining in Singapore allocation" alert.',
  },
  {
    dimension: 'Buyer Segmentation',
    closersTag: 'O · Own Identity',
    originalPage: 'Single generic description with no experience-level pathways.',
    rebuildPage: 'First Timers, Casual Drinkers & Connoisseur ritual bundles + Edition toggle.',
  },
  {
    dimension: 'Luxury & Prestige Cue',
    closersTag: 'S · Status',
    originalPage: 'Standard corporate product template; muted editorial hierarchy.',
    rebuildPage: 'Obsidian & Champagne Gold editorial hero, Connoisseur Tier, 1,000+ SG proof.',
  },
  {
    dimension: 'Sensory Inspection',
    closersTag: 'E · Emotion',
    originalPage: 'Small static thumbnails paired with technical spec bullet points.',
    rebuildPage: '4-frame sticky gallery with 1.25× "Inspect Finish" zoom & tasting notes.',
  },
  {
    dimension: 'Local & Member Trust',
    closersTag: 'R · Recognition',
    originalPage: 'Anonymous session; Singapore delivery & boutique info tucked in footer.',
    rebuildPage: 'Signed-in member greeting (Jocelyn C.), 42 SG reviews, 3 local boutiques.',
  },
  {
    dimension: 'Post-Add Retention',
    closersTag: 'S · Stickiness',
    originalPage: 'Transactional cart add with no capsule cross-sell or delivery meter.',
    rebuildPage: 'Persistent bag, SGD 80 free delivery tracker, Original capsule pairings.',
  },
];
