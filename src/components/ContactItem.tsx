import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ContactItemProps {
  label: string;
  value: string;
  className?: string;
}

export function ContactItem({ label, value, className = "text-sm hover:text-accent transition-colors cursor-pointer" }: ContactItemProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <span 
        onClick={() => setShow(true)} 
        className={className}
      >
        {label}
      </span>

      <AnimatePresence>
        {show && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setShow(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-md"
              style={{ WebkitBackdropFilter: "blur(12px)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-white/80 backdrop-blur-3xl saturate-150 w-full max-w-[280px] rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/50 p-8 flex flex-col items-center text-center"
              style={{ WebkitBackdropFilter: "blur(40px) saturate(150%)" }}
            >
              <button 
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 p-2.5 text-black/40 hover:text-black transition-colors rounded-full hover:bg-black/5"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-[13px] font-semibold tracking-wider text-black/50 mb-3 uppercase">{label}</h3>
              <p className="text-[22px] font-sans font-medium tracking-tight text-ink select-all">{value}</p>
              <p className="text-[11px] text-black/40 mt-8 font-medium">长按或双击可复制</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
