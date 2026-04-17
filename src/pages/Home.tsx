import { motion } from "motion/react";
import { articles } from "../data/articles";
import { ArticleCard } from "../components/ArticleCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Home() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="flex min-h-screen flex-col pb-16 sm:pb-0">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-5xl mx-auto text-center"
          >
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-ink">
              记录<span className="text-accent">设计师</span>的工作与思考。
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed text-ink-light md:text-xl">
              项目、作品，以及在AI学习中对展陈行业的思考。
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="md:col-span-2">
              <ArticleCard article={featuredArticle} featured index={0} />
            </div>
            {remainingArticles.map((article, idx) => (
              <div key={article.id} className="col-span-1">
                <ArticleCard article={article} index={idx + 1} />
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
