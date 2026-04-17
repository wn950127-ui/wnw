import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { defaultAuthor } from "../data/articles";
import { FadeImage } from "../components/FadeImage";

export function About() {
  return (
    <div className="flex min-h-screen flex-col pb-16 sm:pb-0">
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start glass-panel p-6 sm:p-8 md:p-12"
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-black/[0.02] md:sticky md:top-32">
                <FadeImage 
                  src={defaultAuthor.avatar.replace('200/200', '800/1000')} 
                  alt={defaultAuthor.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center pt-4 md:pt-0">
              <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink mb-4 sm:mb-8 tracking-tight">
                关于我
              </h1>
              <div className="prose prose-stone prose-sm sm:prose-lg prose-p:leading-relaxed prose-p:text-ink-light">
                <p className="text-lg sm:text-2xl font-sans font-medium text-ink mb-4 sm:mb-8 leading-snug">
                  {defaultAuthor.bio}
                </p>
                <p>
                  我建立这个空间是为了记录那些经常被忽视的宁静时刻。在一个不断要求我们集中注意力、催促我们加快脚步的世界里，我发现自己渴望宁静。
                </p>
                <p>
                  通过我的摄影和文章，我探索了旅行、正念和专注艺术的交集。无论我是在东京熙熙攘攘的街道上漫步，还是坐在巴黎一家安静的咖啡馆里，我的目标始终是捕捉一个地方的本质，以及完全置身其中的感觉。
                </p>
                <p>
                  感谢您的到来。我希望这些故事能启发您放慢脚步，仔细观察，在喧嚣中找到属于自己的宁静时刻。
                </p>
              </div>
              
              <div className="mt-16 pt-12 border-t border-ink/10">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ink mb-6">联系与合作</h3>
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-ink-light hover:text-accent transition-colors font-medium">hello@janedoe.com</a>
                  <a href="#" className="text-ink-light hover:text-accent transition-colors font-medium">Twitter: {defaultAuthor.twitter}</a>
                  <a href="#" className="text-ink-light hover:text-accent transition-colors font-medium">Instagram: {defaultAuthor.instagram}</a>
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
