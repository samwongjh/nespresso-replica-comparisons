import { CLOSERS_PRINCIPLES, ClosersKey } from '../data/closersData';

interface ClosersMatrixProps {
  activePrinciple: ClosersKey | 'ALL';
  onInspectInStudio: (key: ClosersKey) => void;
}

export function ClosersMatrix({ activePrinciple, onInspectInStudio }: ClosersMatrixProps) {
  return (
    <section
      id="closers-matrix"
      className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16 lg:py-20 border-t border-[#E7E4DF]"
    >
      <div className="max-w-2xl space-y-2 pb-10">
        <div className="text-xs tracking-[0.14em] uppercase text-[#7A746E]">
          02. The Seven CLOSERS Principles
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1B1918] [text-wrap:balance]">
          Point-by-Point Behavioral Breakdown
        </h2>
        <p className="text-sm text-[#57524E] leading-relaxed">
          Each pillar of the CLOSERS framework maps concrete UI changes on the rebuild to specific
          conversion bottlenecks observed on the original Nespresso Singapore product page.
        </p>
      </div>

      <div className="space-y-6">
        {CLOSERS_PRINCIPLES.map((item) => {
          const isFocused = activePrinciple === item.id;
          return (
            <article
              key={item.id}
              className={`bg-white border rounded-sm transition-colors ${
                isFocused ? 'border-[#9E7B4F]' : 'border-[#E7E4DF]'
              }`}
            >
              {/* Header Row */}
              <div className="px-6 py-5 border-b border-[#F0EDE7] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm font-semibold text-[#9E7B4F] tabular-nums shrink-0">
                    {item.index}. [{item.letter}]
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#1B1918]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B6560] mt-0.5">{item.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs text-[#7A746E] hidden sm:inline">
                    {item.uiLocation}
                  </span>
                  <button
                    type="button"
                    onClick={() => onInspectInStudio(item.id)}
                    className="px-3.5 py-2 border border-[#DDD8D0] hover:border-[#1B1918] text-xs font-semibold uppercase tracking-wider text-[#1B1918] rounded-sm transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Highlight in Split View
                  </button>
                </div>
              </div>

              {/* Before vs After Evidence Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#F0EDE7]">
                <div className="lg:col-span-5 p-6 space-y-3 bg-[#FCFBF9]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8C3A2B]">
                    Original Page (Before)
                  </div>
                  <p className="text-sm text-[#4A4642] leading-relaxed">{item.originalSummary}</p>
                  <ul className="space-y-2 pt-1">
                    {item.originalEvidence.map((point) => (
                      <li
                        key={point}
                        className="text-xs text-[#6B6560] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#8C3A2B] font-mono shrink-0" aria-hidden="true">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 p-6 space-y-3 bg-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#2C4C3E]">
                    CLOSERS Rebuild (After)
                  </div>
                  <p className="text-sm text-[#1B1918] leading-relaxed">{item.rebuildSummary}</p>
                  <ul className="space-y-2 pt-1">
                    {item.rebuildEvidence.map((point) => (
                      <li
                        key={point}
                        className="text-xs text-[#4A4642] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#2C4C3E] font-mono shrink-0" aria-hidden="true">
                          +
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2 p-6 bg-[#FAF9F6] flex flex-col justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#7A746E]">
                      Why It Converts
                    </div>
                    <p className="text-xs text-[#4A4642] leading-relaxed">
                      {item.behavioralMechanism}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
