import { ArrowUpRight } from 'lucide-react';
import { REFERENCE_URLS } from '../data/closersData';

export function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E7E4DF]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1B1918] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E7B4F]"
        >
          CLOSERS Case Study
        </a>

        <nav
          aria-label="Primary sections"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57524E]"
        >
          <a
            href="#side-by-side"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('side-by-side');
            }}
            className="hover:text-[#1B1918] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Side-by-Side
          </a>
          <a
            href="#closers-matrix"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('closers-matrix');
            }}
            className="hover:text-[#1B1918] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            CLOSERS Matrix
          </a>
          <a
            href="#interactive-audit"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('interactive-audit');
            }}
            className="hover:text-[#1B1918] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Interactive Audit
          </a>
          <a
            href="#impact-summary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('impact-summary');
            }}
            className="hover:text-[#1B1918] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Impact Summary
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href={REFERENCE_URLS.rebuild}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1B1918] hover:bg-[#9E7B4F] text-[#FAF9F6] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E7B4F]"
          >
            <span>Open Live Rebuild</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
