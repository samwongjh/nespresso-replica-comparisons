import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Columns2,
  ExternalLink,
  MoveHorizontal,
  Package,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Truck,
  UserCheck,
  ZoomIn,
} from 'lucide-react';
import {
  CLOSERS_PRINCIPLES,
  ClosersKey,
  GENERATED_IMAGES,
  PDP_EDITIONS,
  REFERENCE_URLS,
} from '../data/closersData';
import { ResilientImage } from './ResilientImage';

interface SideBySideStudioProps {
  activePrinciple: ClosersKey | 'ALL';
  onSelectPrinciple: (key: ClosersKey | 'ALL') => void;
}

type StudioViewMode = 'split' | 'slider' | 'live';

function useCountdownSnapshot() {
  const [secondsLeft, setSecondsLeft] = useState(2 * 86400 + 14 * 3600 + 38 * 60 + 45);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const days = String(Math.floor(secondsLeft / 86400)).padStart(2, '0');
  const hours = String(Math.floor((secondsLeft % 86400) / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  return { days, hours, minutes, seconds };
}

export function SideBySideStudio({
  activePrinciple,
  onSelectPrinciple,
}: SideBySideStudioProps) {
  const [viewMode, setViewMode] = useState<StudioViewMode>('split');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedEditionId, setSelectedEditionId] = useState<
    'shine-bundle' | 'machine-only' | 'milk-bundle'
  >('shine-bundle');
  const [quantity, setQuantity] = useState(1);
  const [zoomActive, setZoomActive] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState<0 | 1 | 2 | 3>(0);
  const countdown = useCountdownSnapshot();

  const activeEdition =
    PDP_EDITIONS.find((e) => e.id === selectedEditionId) ?? PDP_EDITIONS[0];

  const currentPrinciple =
    activePrinciple === 'ALL'
      ? null
      : CLOSERS_PRINCIPLES.find((p) => p.id === activePrinciple) ?? null;

  const isHighlighted = (keys: ClosersKey[]) =>
    activePrinciple === 'ALL' || keys.includes(activePrinciple);

  const highlightRing = (keys: ClosersKey[], tone: 'before' | 'after') => {
    if (activePrinciple === 'ALL') return '';
    if (!keys.includes(activePrinciple)) return 'opacity-45 transition-opacity duration-200';
    return tone === 'before'
      ? 'ring-2 ring-[#8C3A2B] ring-offset-2 ring-offset-white transition-all duration-200'
      : 'ring-2 ring-[#9E7B4F] ring-offset-2 ring-offset-[#FAF9F6] transition-all duration-200';
  };

  const galleryFrames = [
    { src: GENERATED_IMAGES.heroBundle, label: '01 / Complete Shine Bundle' },
    { src: GENERATED_IMAGES.machineDetail, label: '02 / CitiZ Platinum Crystal Band' },
    { src: GENERATED_IMAGES.heroBundle, label: '03 / Travel Mug, PIXIE Cups & Ornament' },
    { src: GENERATED_IMAGES.capsuleRitual, label: '04 / 14-Capsule Tasting Assortment' },
  ];

  const renderOriginalMockup = () => (
    <div className="bg-white border border-[#DDD8D0] rounded-sm overflow-hidden flex flex-col h-full">
      {/* Browser Chrome */}
      <div className="bg-[#F4F3F1] border-b border-[#E5E3DF] px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C3A2B] shrink-0">
            Before · Original PDP
          </span>
          <span className="text-[#B8B2AA]" aria-hidden="true">
            /
          </span>
          <span className="text-[11px] font-mono text-[#57524E] truncate">
            nespresso.com/sg/en/order/machines/original/swarovski-shine-bundle
          </span>
        </div>
        <a
          href={REFERENCE_URLS.original}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-medium text-[#1B1918] hover:text-[#8C3A2B] shrink-0 whitespace-nowrap"
        >
          <span>Visit</span>
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>

      {/* Original Corporate Nespresso PDP Template */}
      <div className="p-5 sm:p-6 space-y-5 text-[#1B1918] flex-1 bg-white">
        {/* Generic Corporate Nav */}
        <div
          className={`flex items-center justify-between pb-3 border-b border-[#ECECEC] ${highlightRing(
            ['C', 'R'],
            'before'
          )}`}
        >
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold tracking-[0.2em] text-[#111]">NESPRESSO</span>
            <span className="hidden sm:inline text-[11px] text-[#767676]">
              Coffees · Machines · Accessories · Sustainability
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-[#666]">
            <span>Log in</span>
            <span>Basket (0)</span>
          </div>
        </div>

        {/* Deep Breadcrumb Isolation */}
        <div
          className={`text-[11px] text-[#767676] flex items-center gap-1.5 flex-wrap ${highlightRing(
            ['C'],
            'before'
          )}`}
        >
          <span>Home</span>
          <span>&gt;</span>
          <span>Machines</span>
          <span>&gt;</span>
          <span>Original</span>
          <span>&gt;</span>
          <span className="text-[#111] font-medium">Swarovski Shine Bundle</span>
        </div>

        {/* Standard Static Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
          {/* Static Image Box */}
          <div className="sm:col-span-6 space-y-2.5">
            <div
              className={`aspect-[4/3] bg-[#F7F7F7] border border-[#E5E5E5] overflow-hidden relative ${highlightRing(
                ['E'],
                'before'
              )}`}
            >
              <ResilientImage
                src={GENERATED_IMAGES.machineDetail}
                alt="Original Nespresso CitiZ Platinum Swarovski product image"
                fallbackTitle="CitiZ Platinum × Swarovski"
                className="w-full h-full object-cover grayscale-[18%]"
              />
              <span className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-[10px] text-[#555] border border-[#E2E2E2]">
                Static Carousel · No Finish Zoom
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-[#F7F7F7] border border-[#E5E5E5] flex items-center justify-center text-[10px] text-[#888]"
                >
                  Img {idx + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Dry Corporate Buy Box */}
          <div className="sm:col-span-6 space-y-4">
            <div className={`space-y-1.5 ${highlightRing(['S1', 'E'], 'before')}`}>
              <div className="text-[11px] uppercase tracking-wider text-[#767676]">
                Original Machine Bundle
              </div>
              <h3 className="text-lg font-semibold text-[#111] leading-snug">
                Nespresso x Swarovski Shine Bundle
              </h3>
              <p className="text-xs text-[#555] leading-relaxed">
                CitiZ Platinum coffee machine in chrome finish embellished with Swarovski crystals.
                Includes 4 coffee sizes plus hot water, Travel Mug, PIXIE cups, and crystal ornament.
              </p>
            </div>

            {/* Flat Price with no Anchor or Urgency */}
            <div
              className={`pt-3 border-t border-[#ECECEC] space-y-1.5 ${highlightRing(
                ['L'],
                'before'
              )}`}
            >
              <div className="text-xl font-bold text-[#111] tabular-nums">SGD 499.00</div>
              <div className="text-[11px] text-[#666]">
                No savings breakdown · No countdown · No low-stock visibility
              </div>
            </div>

            {/* No Identity / Edition Segmentation */}
            <div
              className={`p-3 bg-[#F8F8F8] border border-[#E5E5E5] text-[11px] text-[#555] space-y-1 ${highlightRing(
                ['O'],
                'before'
              )}`}
            >
              <div className="font-semibold text-[#222]">Single Fixed SKU</div>
              <div>
                No inline toggle for Machine Only (SGD 429) or Milk Bundle (SGD 509) and no
                interactive box checklist.
              </div>
            </div>

            {/* Basic Corporate Add Button */}
            <div className={`space-y-2 ${highlightRing(['C', 'S2'], 'before')}`}>
              <button
                type="button"
                onClick={() => onSelectPrinciple('C')}
                className="w-full py-2.5 px-4 bg-[#2F2F2F] text-white text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-[#111] transition-colors"
              >
                Add to Basket
              </button>
              <div className="text-[11px] text-[#767676]">
                No Original sleeve recommendations or SGD 80 free delivery tracker.
              </div>
            </div>
          </div>
        </div>

        {/* Missing Social Proof & Extraction Telemetry */}
        <div
          className={`pt-4 border-t border-[#ECECEC] grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-[#666] ${highlightRing(
            ['R', 'S1', 'C'],
            'before'
          )}`}
        >
          <div className="p-2.5 bg-[#FAFAFA] border border-[#ECECEC]">
            <span className="font-semibold text-[#222]">Reviews &amp; Local Assurances:</span> No
            Singapore buyer review count, Type G 230V plug assurance, or same-day cutoff above fold.
          </div>
          <div className="p-2.5 bg-[#FAFAFA] border border-[#ECECEC]">
            <span className="font-semibold text-[#222]">Specs &amp; Brewing:</span> Static feature
            text omits ml output, brew duration in seconds, and thermal specs.
          </div>
        </div>
      </div>
    </div>
  );

  const renderRebuildMockup = () => (
    <div className="bg-[#FAF9F6] border border-[#C9A97E] rounded-sm overflow-hidden flex flex-col h-full">
      {/* Browser Chrome */}
      <div className="bg-[#1B1918] border-b border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 text-[#FAF9F6]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A97E] shrink-0">
            After · CLOSERS PDP
          </span>
          <span className="text-white/30" aria-hidden="true">
            /
          </span>
          <span className="text-[11px] font-mono text-[#D8D3CC] truncate">
            nespresso-closers-after.vercel.app/#/order/machines/original/swarovski-shine-bundle
          </span>
        </div>
        <a
          href={REFERENCE_URLS.rebuild}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-medium text-[#C9A97E] hover:text-white shrink-0 whitespace-nowrap"
        >
          <span>Open Live</span>
          <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>

      {/* Rebuilt CLOSERS PDP Experience */}
      <div className="flex-1 flex flex-col">
        {/* Recognition Utility Strip */}
        <div
          className={`bg-[#1B1918] text-[#FAF9F6] px-4 py-2 text-[11px] flex items-center justify-between gap-2 border-b border-white/10 ${highlightRing(
            ['R'],
            'after'
          )}`}
        >
          <span className="truncate">Complimentary delivery above SGD 80</span>
          <span className="inline-flex items-center gap-1 text-[#C9A97E] font-medium shrink-0">
            <UserCheck className="w-3 h-3" aria-hidden="true" />
            <span>Jocelyn C. · Connoisseur Tier</span>
          </span>
        </div>

        {/* PDP Breadcrumb + Back Link */}
        <div
          className={`bg-white px-5 py-2.5 border-b border-[#E7E4DF] flex items-center justify-between gap-3 text-[11px] text-[#6B655F] ${highlightRing(
            ['C'],
            'after'
          )}`}
        >
          <span className="truncate">Home &gt; Machines &gt; Original &gt; Swarovski Shine Bundle</span>
          <span className="inline-flex items-center gap-1 font-medium text-[#1B1918] shrink-0">
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            <span>Back to Nespresso Singapore</span>
          </span>
        </div>

        {/* Main PDP Content */}
        <div className="p-5 sm:p-6 space-y-5 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
            {/* Interactive 4-Frame Gallery with Inspect Finish */}
            <div className={`sm:col-span-6 space-y-2.5 ${highlightRing(['E'], 'after')}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#E7E4DF] bg-[#141312]">
                <ResilientImage
                  src={galleryFrames[selectedFrame].src}
                  alt={galleryFrames[selectedFrame].label}
                  fallbackTitle={galleryFrames[selectedFrame].label}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    zoomActive ? 'scale-125' : 'scale-100'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setZoomActive((prev) => !prev)}
                  className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#1B1918]/90 text-[#FAF9F6] text-[11px] font-medium rounded-sm cursor-pointer hover:bg-[#9E7B4F] transition-colors"
                >
                  <ZoomIn className="w-3 h-3" aria-hidden="true" />
                  <span>{zoomActive ? 'Reset Zoom' : 'Inspect Finish'}</span>
                </button>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#57524E]">
                <span className="truncate">{galleryFrames[selectedFrame].label}</span>
                <span className="font-mono tabular-nums shrink-0">0{selectedFrame + 1} / 04</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {galleryFrames.map((frame, idx) => (
                  <button
                    key={frame.label}
                    type="button"
                    onClick={() => {
                      setSelectedFrame(idx as 0 | 1 | 2 | 3);
                      setZoomActive(false);
                    }}
                    className={`aspect-[4/3] overflow-hidden rounded-sm border cursor-pointer transition-all ${
                      selectedFrame === idx
                        ? 'border-[#9E7B4F] ring-1 ring-[#9E7B4F]'
                        : 'border-[#E7E4DF] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <ResilientImage
                      src={frame.src}
                      alt={frame.label}
                      fallbackTitle={frame.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Luxury PDP Buy Box */}
            <div className="sm:col-span-6 bg-white border border-[#E7E4DF] rounded-sm p-4 space-y-3.5">
              {/* Status & Verified SG Social Proof */}
              <div className={`space-y-1.5 ${highlightRing(['S1', 'R'], 'after')}`}>
                <div className="text-[11px] text-[#7A746E] flex items-center gap-1.5 flex-wrap">
                  <span className="uppercase tracking-wider font-semibold text-[#9E7B4F]">
                    Original Line
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Limited Holiday Edition</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#2C4C3E] font-medium">In Stock in Singapore</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1B1918] leading-tight">
                  {activeEdition.label}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-[#4A4642]">
                  <div className="inline-flex items-center gap-0.5 text-[#9E7B4F]">
                    {[0, 1, 2, 3].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-[#9E7B4F]" aria-hidden="true" />
                    ))}
                    <Star className="w-3 h-3 text-[#C7C0B6]" aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-[#1B1918] tabular-nums">4.0 / 5</span>
                  <span className="text-[#6B6560]">(42 reviews)</span>
                </div>
                <p className="text-[11px] text-[#1B1918] tabular-nums">
                  Join the <strong className="text-[#9E7B4F]">1,000+</strong> coffee lovers in
                  Singapore who have already purchased this edition.
                </p>
              </div>

              {/* Loss Avoidance: Anchor + Live Countdown + Low Stock */}
              <div
                className={`pt-2.5 border-t border-[#F0EDE7] space-y-2 ${highlightRing(
                  ['L'],
                  'after'
                )}`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-[#1B1918] tabular-nums">
                      SGD {activeEdition.priceSgd}.00
                    </span>
                    <span className="text-xs text-[#8E8882] line-through tabular-nums">
                      SGD {activeEdition.compareAtSgd}.00
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#9E7B4F] tabular-nums">
                    Save SGD {activeEdition.compareAtSgd - activeEdition.priceSgd} (
                    {Math.round(
                      ((activeEdition.compareAtSgd - activeEdition.priceSgd) /
                        activeEdition.compareAtSgd) *
                        100
                    )}
                    % Off)
                  </span>
                </div>

                {/* Live Countdown */}
                <div className="bg-[#1B1918] text-[#FAF9F6] rounded-sm px-3 py-2 flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#C9A97E] font-semibold">
                    Holiday promotion ends in
                  </span>
                  <div className="font-mono text-[11px] font-semibold tabular-nums flex items-center gap-1">
                    <span>{countdown.days}d</span>
                    <span className="text-[#9E7B4F]">:</span>
                    <span>{countdown.hours}h</span>
                    <span className="text-[#9E7B4F]">:</span>
                    <span>{countdown.minutes}m</span>
                    <span className="text-[#9E7B4F]">:</span>
                    <span className="text-[#C9A97E]">{countdown.seconds}s</span>
                  </div>
                </div>

                {/* Low Stock Alert */}
                <div className="bg-[#FDF7F0] border border-[#DFC197] rounded-sm px-2.5 py-1.5 flex items-center gap-2 text-[11px] text-[#7A4419]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#9E5B24] shrink-0" aria-hidden="true" />
                  <span className="font-medium tabular-nums">
                    Limited Quantities · Only 6 units left in SG allocation
                  </span>
                </div>
              </div>

              {/* Own Identity 3-Edition Selector */}
              <div className={`space-y-1.5 ${highlightRing(['O'], 'after')}`}>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-semibold uppercase tracking-wider text-[#1B1918]">
                    Select Edition
                  </span>
                  <span className="font-mono text-[#7A746E]">{activeEdition.sku}</span>
                </div>
                <div className="space-y-1.5">
                  {PDP_EDITIONS.map((edition) => {
                    const selected = edition.id === selectedEditionId;
                    return (
                      <button
                        key={edition.id}
                        type="button"
                        onClick={() => setSelectedEditionId(edition.id)}
                        className={`w-full px-2.5 py-2 text-left rounded-sm border text-[11px] cursor-pointer transition-colors flex items-center justify-between gap-2 ${
                          selected
                            ? 'border-[#1B1918] bg-[#FAF9F6] font-semibold text-[#1B1918]'
                            : 'border-[#E7E4DF] text-[#57524E] hover:border-[#C7C0B6]'
                        }`}
                      >
                        <span className="truncate">{edition.label}</span>
                        <span className="tabular-nums shrink-0">SGD {edition.priceSgd}.00</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Convenience Qty + CTA + Recognition Assurances */}
              <div className={`space-y-2.5 ${highlightRing(['C', 'R', 'S2'], 'after')}`}>
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center border border-[#DDD8D0] rounded-sm text-xs bg-[#FAF9F6]">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-2.5 py-2 text-[#4A4642] hover:text-[#1B1918] cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-2 font-mono tabular-nums">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                      className="px-2.5 py-2 text-[#4A4642] hover:text-[#1B1918] cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectPrinciple('S2')}
                    className="flex-1 py-2 px-3 bg-[#1B1918] hover:bg-[#9E7B4F] text-[#FAF9F6] text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer tabular-nums"
                  >
                    Add to Cart — SGD {activeEdition.priceSgd * quantity}.00
                  </button>
                </div>

                <div className="pt-2 border-t border-[#F0EDE7] space-y-1 text-[10px] text-[#57524E]">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3 h-3 text-[#9E7B4F] shrink-0" aria-hidden="true" />
                    <span>Complimentary same-day SG delivery (before 2:30 PM)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#9E7B4F] shrink-0" aria-hidden="true" />
                    <span>2-year official SG warranty &amp; Type G 230V plug</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Package className="w-3 h-3 text-[#9E7B4F] shrink-0" aria-hidden="true" />
                    <span>Includes 14-capsule Original tasting assortment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower PDP Sections Strip */}
          <div
            className={`bg-white border border-[#E7E4DF] rounded-sm p-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] ${highlightRing(
              ['E', 'C', 'R', 'S2'],
              'after'
            )}`}
          >
            <div>
              <div className="font-semibold text-[#1B1918]">4-Piece Ensemble</div>
              <div className="text-[#6B6560]">Machine · Mug · Cups · Ornament</div>
            </div>
            <div>
              <div className="font-semibold text-[#1B1918]">5 Extraction Profiles</div>
              <div className="text-[#6B6560]">40 ml to 200 ml + Hot Water</div>
            </div>
            <div>
              <div className="font-semibold text-[#1B1918]">42 SG Reviews</div>
              <div className="text-[#6B6560]">Orchard · Bukit Timah · Marina</div>
            </div>
            <div>
              <div className="font-semibold text-[#1B1918] flex items-center gap-1">
                <Check className="w-3 h-3 text-[#2C4C3E]" aria-hidden="true" />
                <span>Tasting Sleeves</span>
              </div>
              <div className="text-[#6B6560]">1-click Original pairings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="side-by-side"
      className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16 lg:py-20 border-t border-[#E7E4DF]"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E7E4DF]">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs tracking-[0.14em] uppercase text-[#7A746E]">
            01. Interactive 1:1 PDP Comparison
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1B1918] [text-wrap:balance]">
            Inspect Every CLOSERS Shift Across Both Bundle Pages
          </h2>
          <p className="text-sm text-[#57524E] leading-relaxed">
            Compare the original Nespresso Singapore PDP directly against the rebuilt Swarovski
            Shine Bundle PDP (<code className="font-mono text-xs">#/order/machines/original/swarovski-shine-bundle</code>).
            Select any CLOSERS letter below to isolate corresponding UI regions.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div
          role="tablist"
          aria-label="Comparison view mode"
          className="inline-flex items-center gap-1 p-1 bg-[#EFECE6] rounded-sm shrink-0 self-start lg:self-auto"
        >
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'split'}
            onClick={() => setViewMode('split')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
              viewMode === 'split'
                ? 'bg-white text-[#1B1918] shadow-xs'
                : 'text-[#57524E] hover:text-[#1B1918]'
            }`}
          >
            <Columns2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Side-by-Side</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'slider'}
            onClick={() => setViewMode('slider')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
              viewMode === 'slider'
                ? 'bg-white text-[#1B1918] shadow-xs'
                : 'text-[#57524E] hover:text-[#1B1918]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Drag Reveal</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'live'}
            onClick={() => setViewMode('live')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
              viewMode === 'live'
                ? 'bg-white text-[#1B1918] shadow-xs'
                : 'text-[#57524E] hover:text-[#1B1918]'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Live Embeds</span>
          </button>
        </div>
      </div>

      {/* CLOSERS Principle Spotlight Filter */}
      <div className="pt-6 pb-8 space-y-4">
        <div
          role="group"
          aria-label="Filter comparison by CLOSERS principle"
          className="flex flex-wrap items-center gap-2"
        >
          <button
            type="button"
            onClick={() => onSelectPrinciple('ALL')}
            className={`px-3.5 py-2 text-xs font-medium rounded-sm border transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
              activePrinciple === 'ALL'
                ? 'bg-[#1B1918] text-[#FAF9F6] border-[#1B1918]'
                : 'bg-white text-[#57524E] border-[#DDD8D0] hover:border-[#1B1918]'
            }`}
          >
            All 7 Principles
          </button>
          {CLOSERS_PRINCIPLES.map((principle) => {
            const active = activePrinciple === principle.id;
            return (
              <button
                key={principle.id}
                type="button"
                onClick={() => onSelectPrinciple(active ? 'ALL' : principle.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs rounded-sm border transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                  active
                    ? 'bg-[#9E7B4F] text-white border-[#9E7B4F] font-semibold'
                    : 'bg-white text-[#1B1918] border-[#DDD8D0] hover:border-[#9E7B4F] font-medium'
                }`}
              >
                <span
                  className={`font-mono text-[11px] ${
                    active ? 'text-white/90' : 'text-[#9E7B4F]'
                  }`}
                >
                  {principle.letter}
                </span>
                <span>{principle.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Principle Curatorial Diagnostic Bar */}
        {currentPrinciple ? (
          <div className="bg-white border border-[#E7E4DF] rounded-sm p-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-1">
              <div className="text-xs font-mono text-[#9E7B4F]">
                {currentPrinciple.index} · {currentPrinciple.letter} for {currentPrinciple.title}
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1B1918]">
                {currentPrinciple.subtitle}
              </h3>
              <p className="text-xs text-[#6B6560] pt-1">{currentPrinciple.uiLocation}</p>
            </div>
            <div className="lg:col-span-4 space-y-1.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C3A2B]">
                Original PDP Gap
              </div>
              <p className="text-xs sm:text-sm text-[#4A4642] leading-relaxed">
                {currentPrinciple.originalSummary}
              </p>
            </div>
            <div className="lg:col-span-4 space-y-1.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#2C4C3E]">
                CLOSERS Rebuild PDP Solution
              </div>
              <p className="text-xs sm:text-sm text-[#1B1918] leading-relaxed">
                {currentPrinciple.rebuildSummary}
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-[#E7E4DF] rounded-sm px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#57524E]">
            <span>
              Viewing full 1:1 PDP comparison. Click any CLOSERS principle button above to
              highlight exact DOM regions on both product pages.
            </span>
            <span className="font-mono text-[#9E7B4F] shrink-0">
              {isHighlighted(['C']) ? '7 / 7 Pillars Active' : ''}
            </span>
          </div>
        )}
      </div>

      {/* Mode 1: Side-by-Side Split */}
      {viewMode === 'split' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
          {renderOriginalMockup()}
          {renderRebuildMockup()}
        </div>
      )}

      {/* Mode 2: Interactive Drag Reveal Slider */}
      {viewMode === 'slider' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E7E4DF] rounded-sm px-5 py-3.5">
            <div className="flex items-center gap-3 text-xs text-[#57524E]">
              <MoveHorizontal className="w-4 h-4 text-[#9E7B4F] shrink-0" aria-hidden="true" />
              <span>
                Drag the divider or select a preset to peel back the Original Nespresso PDP and
                reveal the rebuilt CLOSERS Swarovski PDP.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setSliderPosition(100)}
                className="px-3 py-1.5 text-xs border border-[#DDD8D0] hover:border-[#1B1918] rounded-sm cursor-pointer whitespace-nowrap"
              >
                100% Original
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className="px-3 py-1.5 text-xs border border-[#DDD8D0] hover:border-[#1B1918] rounded-sm cursor-pointer whitespace-nowrap"
              >
                50 / 50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(0)}
                className="px-3 py-1.5 text-xs border border-[#DDD8D0] hover:border-[#1B1918] rounded-sm cursor-pointer whitespace-nowrap"
              >
                100% Rebuild
              </button>
            </div>
          </div>

          <div className="relative border border-[#E7E4DF] rounded-sm overflow-hidden bg-[#FAF9F6]">
            {/* Underlying Rebuild Layer */}
            <div className="w-full">{renderRebuildMockup()}</div>

            {/* Clipped Original Layer */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="w-full h-full">{renderOriginalMockup()}</div>
            </div>

            {/* Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#9E7B4F] pointer-events-none z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#1B1918] border-2 border-[#C9A97E] text-[#FAF9F6] flex items-center justify-center shadow-lg">
                <MoveHorizontal className="w-4 h-4" aria-hidden="true" />
              </div>
            </div>

            {/* Accessible Range Control */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Reveal slider between Original PDP and CLOSERS Rebuild PDP"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-[#57524E] font-mono tabular-nums">
            <span>Left: Original PDP ({sliderPosition}% visible)</span>
            <span>Right: CLOSERS Rebuild PDP ({100 - sliderPosition}% visible)</span>
          </div>
        </div>
      )}

      {/* Mode 3: Live Embeds & Direct Inspection */}
      {viewMode === 'live' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white border border-[#E7E4DF] rounded-sm flex flex-col justify-between p-6 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C3A2B]">
                Original Page · External Frame Policy
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1B1918]">
                Nespresso Singapore Official PDP
              </h3>
              <p className="text-sm text-[#57524E] leading-relaxed">
                Nespresso&apos;s production domain enforces Akamai edge security and{' '}
                <code className="font-mono text-xs bg-[#F4F3F1] px-1.5 py-0.5">
                  X-Frame-Options
                </code>{' '}
                headers, which prevent third-party websites from embedding the page inside an
                iframe. Open the canonical URL directly in a browser tab to inspect the original
                experience alongside the rebuild.
              </p>
              <div className="p-4 bg-[#FAF9F6] border border-[#E7E4DF] rounded-sm font-mono text-xs text-[#57524E] break-all">
                {REFERENCE_URLS.original}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#F0EDE7]">
              <a
                href={REFERENCE_URLS.original}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B1918] hover:bg-[#8C3A2B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                <span>Open Original Nespresso Page</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className="px-4 py-2.5 border border-[#DDD8D0] hover:border-[#1B1918] text-xs font-medium text-[#1B1918] rounded-sm transition-colors cursor-pointer"
              >
                Return to Annotated Split
              </button>
            </div>
          </div>

          <div className="bg-white border border-[#C9A97E] rounded-sm overflow-hidden flex flex-col">
            <div className="px-4 py-3 bg-[#1B1918] text-[#FAF9F6] flex items-center justify-between gap-3">
              <span className="text-xs font-medium truncate">
                Live Preview · {REFERENCE_URLS.rebuild}
              </span>
              <a
                href={REFERENCE_URLS.rebuild}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#C9A97E] hover:text-white shrink-0"
              >
                <span>New Tab</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
            <iframe
              src={REFERENCE_URLS.rebuild}
              title="Rebuilt Nespresso Swarovski Shine Bundle PDP Live Preview"
              className="w-full h-[540px] border-0 bg-[#FAF9F6]"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}
