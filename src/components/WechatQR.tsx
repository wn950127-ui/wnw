import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2 } from "lucide-react";
import { FadeImage } from "./FadeImage";

export function WechatQR() {
  const [isOpen, setIsOpen] = useState(false);
  const qrUrl = "https://i.imgs.ovh/2026/04/17/Zxyare.png";

  return (
    <>
      {/* Clickable Image Thumbnail */}
      <div 
        className="w-20 h-20 sm:w-[110px] sm:h-[110px] shrink-0 rounded-[14px] sm:rounded-[18px] border border-[rgba(0,0,0,0.04)] shadow-[0_2px_12px_rgba(0,0,0,0.03)] bg-white p-1.5 cursor-pointer relative group overflow-hidden"
        onClick={() => setIsOpen(true)}
        title="点击放大查看"
      >
        <FadeImage src={qrUrl} alt="Wechat QR" className="w-full h-full object-cover rounded-[10px] sm:rounded-xl transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-[14px] sm:rounded-[18px] flex items-center justify-center">
          <Maximize2 className="w-5 h-5 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300" />
        </div>
      </div>

      {/* Fullscreen Liquid Glass Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
              style={{ WebkitBackdropFilter: "blur(12px)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-white/90 backdrop-blur-3xl saturate-150 p-6 sm:p-8 w-full max-w-[280px] sm:max-w-[320px] rounded-[32px] sm:rounded-[40px] shadow-[0_24px_48px_rgba(0,0,0,0.12)] border border-white/60 flex flex-col items-center"
              style={{ WebkitBackdropFilter: "blur(40px) saturate(150%)" }}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2.5 text-black/40 hover:text-black transition-colors rounded-full hover:bg-black/5 z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-[12px] font-bold tracking-widest text-ink/40 mb-6 uppercase">微信扫一扫</h3>
              
              <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-[24px] overflow-hidden shadow-sm border border-black/[0.04] bg-white p-3">
                <FadeImage src={qrUrl} alt="WeChat QR Full" className="w-full h-full object-cover rounded-[12px]" />
              </div>
              
              <p className="mt-8 text-[15px] font-medium text-ink tracking-wide">oovoo0826</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
