import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { articles } from "../data/articles";
import { ArticleCard } from "../components/ArticleCard";

export function Photography() {
  const projectArticles = articles.slice(1);

  return (
    <div className="flex min-h-screen flex-col pb-16 sm:pb-0">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 glass-panel p-6 sm:p-8 md:p-10 text-center"
          >
            <h1 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              精选作品
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-light max-w-2xl mx-auto">
              涵盖科技馆、规划馆、专题馆及企业品牌馆等多个领域的展陈设计案例。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {projectArticles.map((article, idx) => (
              <div key={article.id} className="col-span-1">
                <ArticleCard article={article} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

