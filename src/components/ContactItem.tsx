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
              transition={{ duration: 0.2 }}
              onClick={() => setShow(false)}
              className="absolute inset-0 bg-ink/20 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-paper w-full max-w-xs rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 p-2 text-ink-light hover:text-ink transition-colors rounded-full hover:bg-black/5"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-medium text-ink mb-2">{label}</h3>
              <p className="text-xl font-sans text-ink select-all">{value}</p>
              <p className="text-xs text-ink-light mt-6">长按或双击可复制</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
