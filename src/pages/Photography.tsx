import { useState } from "react";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { articles } from "../data/articles";
import { ArticleCard } from "../components/ArticleCard";

export function Photography() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const projectArticles = articles.slice(1);

  // Simple filtering logic based on title/tags if needed in future
  const filteredArticles = activeFilter === '全部' 
    ? projectArticles 
    : projectArticles.filter(article => article.title.includes(activeFilter) || article.tags.includes(activeFilter));

  return (
    <div className="flex min-h-screen flex-col pb-16 sm:pb-0 bg-[#f5f5f7]">
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-left"
          >
            <h1 className="font-sans text-[32px] sm:text-[38px] font-extrabold tracking-tight text-gray-900 leading-none">
              精选作品
            </h1>
            <p className="mt-2.5 text-[15px] sm:text-[16px] font-medium text-gray-500">
              资深主案设计师
            </p>
            <p className="mt-6 text-[15px] sm:text-[16px] text-gray-600 max-w-2xl leading-[1.8] text-justify">
              您好！感谢您抽出宝贵时间查阅我的简历，您可以在底部切换查看我的资料、经验以及个人作品。静待您的回复，希望能有机会进一步沟通。
            </p>
            
            {/* Nav Filters */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              {['全部', '科技馆', '博物馆', '企业馆', 'AI作品展示'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 sm:px-[24px] py-2 sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-bold transition-all duration-200 ${
                    activeFilter === filter 
                    ? 'bg-[#1a73e8] text-white shadow-[0_2px_8px_rgba(26,115,232,0.35)]' 
                    : 'bg-[#f1f5f9] text-gray-500 hover:bg-[#e2e8f0] hover:text-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Optional: if empty, show a small gray text */}
          {filteredArticles.length === 0 && activeFilter !== '全部' && (
            <div className="text-center py-10 text-gray-400 font-medium">
              该分类下暂无展示作品
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {filteredArticles.map((article, idx) => (
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

