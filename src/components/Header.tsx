import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { MenuOverlay } from "./MenuOverlay";
import { SearchOverlay } from "./SearchOverlay";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-2xl saturate-150 border-b border-black/[0.04]"
        style={{ WebkitBackdropFilter: "blur(20px) saturate(150%)" }}
      >
        <div className="mx-auto max-w-3xl flex h-12 sm:h-14 items-center justify-between px-4 sm:px-5">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-ink-light hover:text-ink transition-colors hidden sm:block"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </button>
          </div>
          
          <Link 
            to="/" 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-sans text-sm sm:text-base font-bold tracking-wide whitespace-nowrap leading-none">个人简历</span>
            <span className="font-sans text-[9px] sm:text-[11px] text-ink-light uppercase tracking-widest leading-none mt-1">Resume</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-ink-light hover:text-ink transition-colors"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </motion.header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
