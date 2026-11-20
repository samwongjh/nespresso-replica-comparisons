import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Header } from './components/Header';
import { SideBySideStudio } from './components/SideBySideStudio';
import { ClosersMatrix } from './components/ClosersMatrix';
import { InteractiveAudit } from './components/InteractiveAudit';
import { ImpactTable } from './components/ImpactTable';
import { ClosersKey, GENERATED_IMAGES, REFERENCE_URLS } from './data/closersData';
import { ResilientImage } from './components/ResilientImage';

export default function App() {
  const [activePrinciple, setActivePrinciple] = useState<ClosersKey | 'ALL'>('ALL');

  const handleInspectInStudio = (key: ClosersKey) => {
    setActivePrinciple(key);
    const el = document.getElementById('side-by-side');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1B1918]">
      <Header />

      <main className="flex-1">
        {/* Editorial Hero & Comparative Frame */}
        <section className="max-w-[1320px] mx-auto px-4 sm:px-8 pt-10 pb-14 lg:pt-14 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B6560]">
                  <span className="uppercase tracking-[0.14em] font-semibold text-[#9E7B4F]">
                    UX Conversion Audit
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Nespresso Singapore × Swarovski Shine Bundle</span>
                  <span aria-hidden="true">·</span>
                  <span>CLOSERS Framework</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06] font-medium text-[#1B1918] [text-wrap:balance]">
                  From Static Product Page to High-Intent Luxury Ritual
                </h1>

                <p className="text-[15px] sm:text-base text-[#57524E] leading-relaxed max-w-xl">
                  A 1:1 side-by-side teardown comparing Nespresso Singapore&apos;s original
                  Swarovski Shine Bundle PDP against its rebuilt product page—illustrating how{' '}
                  <strong className="font-semibold text-[#1B1918]">
                    Convenience, Loss Avoidance, Own Identity, Status, Emotion, Recognition, and
                    Stickiness
                  </strong>{' '}
                  reshape every element above and below the fold.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#side-by-side"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById('side-by-side')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B1918] hover:bg-[#9E7B4F] text-[#FAF9F6] text-xs font-semibold uppercase tracking-[0.12em] rounded-sm transition-colors min-h-[44px]"
                  >
                    <span>Explore Side-by-Side</span>
                  </a>
                  <a
                    href={REFERENCE_URLS.original}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 bg-white border border-[#DDD8D0] hover:border-[#1B1918] text-xs font-semibold text-[#1B1918] rounded-sm transition-colors min-h-[44px]"
                  >
                    <span>Original Nespresso PDP</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7A746E]" aria-hidden="true" />
                  </a>
                  <a
                    href={REFERENCE_URLS.rebuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 bg-white border border-[#DDD8D0] hover:border-[#9E7B4F] text-xs font-semibold text-[#1B1918] rounded-sm transition-colors min-h-[44px]"
                  >
                    <span>Rebuilt CLOSERS PDP</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9E7B4F]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between gap-2.5">
              <div className="aspect-[16/9] lg:aspect-auto lg:h-full min-h-[280px] overflow-hidden rounded-sm border border-[#E7E4DF] bg-[#1B1918]">
                <ResilientImage
                  src={GENERATED_IMAGES.heroBundle}
                  alt="Nespresso x Swarovski Shine Bundle studio hero with CitiZ Platinum crystal machine, champagne Travel Mug, and faceted ornament"
                  fallbackTitle="Nespresso × Swarovski Shine Bundle"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-serif italic text-[#6B6560]">
                Fig. 01 — Nespresso × Swarovski Shine Bundle: CitiZ Platinum crystal machine,
                champagne Travel Mug, PIXIE cups, and 62-facet Ornament.
              </p>
            </div>
          </div>

          {/* 4-Column Factual Benchmark Strip */}
          <div className="mt-10 pt-8 border-t border-[#E7E4DF] grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="font-mono text-2xl font-semibold text-[#1B1918] tabular-nums">
                7 Pillars
              </div>
              <div className="text-xs text-[#6B6560] mt-1">
                Convenience through Stickiness audited across both builds
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold text-[#1B1918] tabular-nums">
                SGD 499 / 609
              </div>
              <div className="text-xs text-[#6B6560] mt-1">
                Flat price replaced by SGD 110 (18% Off) bundle anchor
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold text-[#1B1918] tabular-nums">
                1,000+ · 42
              </div>
              <div className="text-xs text-[#6B6560] mt-1">
                Singapore buyers &amp; 4.0 / 5 verified reviews surfaced upfront
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold text-[#1B1918] tabular-nums">
                SGD 80 Loop
              </div>
              <div className="text-xs text-[#6B6560] mt-1">
                Free SG delivery tracker paired with 1-click capsule sleeves
              </div>
            </div>
          </div>
        </section>

        <SideBySideStudio
          activePrinciple={activePrinciple}
          onSelectPrinciple={setActivePrinciple}
        />

        <ClosersMatrix
          activePrinciple={activePrinciple}
          onInspectInStudio={handleInspectInStudio}
        />

        <InteractiveAudit />

        <ImpactTable />
      </main>

      <footer className="bg-[#1B1918] text-[#D8D3CC] border-t border-[#2D2A28]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="font-serif text-xl font-semibold text-[#FAF9F6]">
              CLOSERS Case Study
            </div>
            <p className="text-xs text-[#A8A29B] max-w-md leading-relaxed">
              Comparative UX analysis of the Nespresso Singapore × Swarovski Shine Bundle PDP and
              its conversion-focused CLOSERS rebuild.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a
              href={REFERENCE_URLS.original}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Original Nespresso SG Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={REFERENCE_URLS.rebuild}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A97E] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Rebuilt CLOSERS App</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
