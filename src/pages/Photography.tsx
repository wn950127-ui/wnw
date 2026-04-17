import { motion } from "motion/react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Lightbox } from "../components/Lightbox";
import { FadeImage } from "../components/FadeImage";

const photos = [
  { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&h=1200&fit=crop", width: 800, height: 1200, alt: "城市景观", caption: "东京，2023" },
  { src: "https://images.unsplash.com/photo-1531366936337-77850807abf8?q=80&w=1200&h=800&fit=crop", width: 1200, height: 800, alt: "山脉", caption: "瑞士阿尔卑斯山" },
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&h=800&fit=crop", width: 800, height: 800, alt: "咖啡店", caption: "晨间习惯" },
  { src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&h=1600&fit=crop", width: 1200, height: 1600, alt: "街头摄影", caption: "光与影" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=1000&fit=crop", width: 800, height: 1000, alt: "肖像", caption: "陌生人" },
  { src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1600&h=900&fit=crop", width: 1600, height: 900, alt: "海浪", caption: "太平洋海岸" },
  { src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800&h=800&fit=crop", width: 800, height: 800, alt: "建筑", caption: "混凝土几何" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&h=1200&fit=crop", width: 1000, height: 1200, alt: "森林小径", caption: "走进森林" },
  { src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&h=800&fit=crop", width: 1200, height: 800, alt: "沙漠沙丘", caption: "黄金时刻" },
  { src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&h=1200&fit=crop", width: 800, height: 1200, alt: "城市之光", caption: "午夜" },
  { src: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=800&h=800&fit=crop", width: 800, height: 800, alt: "静物", caption: "细节" },
  { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&h=1200&fit=crop", width: 1600, height: 1200, alt: "峡谷", caption: "广阔" },
];

export function Photography() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col pb-16 sm:pb-0">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 glass-panel p-6 sm:p-8 md:p-12 text-center"
          >
            <h1 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-ink md:text-6xl">
              精选作品
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-ink-light max-w-2xl mx-auto">
              在不同城市和风景中捕捉到的瞬间集合。
              专注于光影，以及两者之间的宁静空间。
            </p>
          </motion.div>
        </div>

        {/* Full Bleed Masonry Grid */}
        <div className="w-full px-4 pb-12 max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map((photo, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                onClick={() => setSelectedIndex(idx)}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl cursor-zoom-in shadow-sm"
              >
                <FadeImage
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-left">
                  <p className="text-white font-sans font-medium text-lg tracking-wide">{photo.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <Lightbox 
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        src={selectedIndex !== null ? photos[selectedIndex].src : ""}
        alt={selectedIndex !== null ? photos[selectedIndex].alt : ""}
        caption={selectedIndex !== null ? photos[selectedIndex].caption : ""}
      />
    </div>
  );
}
