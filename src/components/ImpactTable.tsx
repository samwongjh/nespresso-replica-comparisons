import { STRUCTURAL_DIFF_ROWS } from '../data/closersData';

export function ImpactTable() {
  return (
    <section
      id="impact-summary"
      className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16 lg:py-20 border-t border-[#E7E4DF]"
    >
      <div className="max-w-2xl space-y-2 pb-8">
        <div className="text-xs tracking-[0.14em] uppercase text-[#7A746E]">
          04. Architectural &amp; Structural Diff
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1B1918] [text-wrap:balance]">
          Side-by-Side System Comparison
        </h2>
        <p className="text-sm text-[#57524E] leading-relaxed">
          Complete component-level inventory comparing the legacy Nespresso Singapore template
          against the rebuilt CLOSERS storefront.
        </p>
      </div>

      <div className="bg-white border border-[#E7E4DF] rounded-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[720px]">
          <thead>
            <tr className="border-b border-[#E7E4DF] bg-[#FAF9F6] text-xs font-semibold uppercase tracking-wider text-[#57524E]">
              <th className="py-4 px-5 w-52">UX Dimension</th>
              <th className="py-4 px-5 w-40">CLOSERS Pillar</th>
              <th className="py-4 px-5">Original Page (nespresso.com/sg)</th>
              <th className="py-4 px-5">CLOSERS Rebuild (vercel.app)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EDE7] text-xs sm:text-sm">
            {STRUCTURAL_DIFF_ROWS.map((row) => (
              <tr key={row.dimension} className="hover:bg-[#FAF9F6]/60 transition-colors">
                <td className="py-4 px-5 font-semibold text-[#1B1918] align-top">
                  {row.dimension}
                </td>
                <td className="py-4 px-5 font-mono text-xs text-[#9E7B4F] align-top whitespace-nowrap">
                  {row.closersTag}
                </td>
                <td className="py-4 px-5 text-[#57524E] align-top leading-relaxed">
                  {row.originalPage}
                </td>
                <td className="py-4 px-5 text-[#1B1918] align-top leading-relaxed">
                  {row.rebuildPage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
