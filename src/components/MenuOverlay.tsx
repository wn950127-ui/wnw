import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ContactItem } from "./ContactItem";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const links = [
    { name: "首页", path: "/" },
    { name: "作品", path: "/photography" },
    { name: "经验", path: "/about" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-md"
            style={{ WebkitBackdropFilter: "blur(12px)" }}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed inset-y-0 left-0 z-[100] w-full max-w-[320px] bg-white/90 backdrop-blur-3xl saturate-150 shadow-[0_0_40px_rgba(0,0,0,0.1)] border-r border-white/50 flex flex-col"
            style={{ WebkitBackdropFilter: "blur(40px) saturate(150%)" }}
          >
            <div className="flex justify-between items-center p-6 border-b border-ink/5">
              <span className="font-sans text-base font-semibold tracking-wide text-ink/80">菜单</span>
              <button onClick={onClose} className="p-2 text-ink-light hover:text-ink transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-8 flex flex-col gap-6 justify-center">
              {links.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={onClose}
                    className="font-sans text-2xl font-medium text-ink/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="p-8 border-t border-ink/5">
              <div className="flex flex-wrap gap-4 text-sm font-medium tracking-wider text-ink-light">
                <ContactItem label="微信" value="oovoo0826" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
