import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { Article } from "../data/articles";
import { cn } from "../lib/utils";
import { FadeImage } from "./FadeImage";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  index: number;
}

export function ArticleCard({ article, featured = false, index }: ArticleCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group flex glass-panel p-4 sm:p-6 h-full",
        featured ? "flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 md:items-center" : "flex-col gap-4 sm:gap-6"
      )}
    >
      <Link 
        to={`/post/${article.slug}`} 
        className={cn(
          "block overflow-hidden rounded-xl sm:rounded-2xl bg-black/[0.02] shrink-0",
          featured ? "w-full md:w-1/2 lg:w-3/5 aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]" : "w-full aspect-[4/3]"
        )}
      >
        <FadeImage 
          src={article.coverImage} 
          alt={article.title} 
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      
      <div className={cn(
        "flex flex-col flex-1",
        featured ? "py-2 md:py-6" : ""
      )}>
        <div className="mb-3 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-ink-light">
          <span className="bg-black/5 px-2 py-1 rounded-md">{article.tags[0]}</span>
          <span>{article.date}</span>
        </div>
        
        <Link to={`/post/${article.slug}`} className="group-hover:text-accent transition-colors">
          <h2 className={cn(
            "font-sans font-bold leading-tight text-ink",
            featured ? "text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4" : "text-lg sm:text-xl mb-2 sm:mb-3"
          )}>
            {article.title}
          </h2>
        </Link>
        
        {article.slug === 'basic-info' ? (
          <div className={cn(
            "grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 text-ink-light",
            featured ? "text-sm sm:text-base mb-4 sm:mb-6" : "text-xs sm:text-sm mb-4"
          )}>
            <span>出生年月：1994.08</span>
            <span>电话：13540809076</span>
            <span>身高：179cm</span>
            <span>学历：本科</span>
            <span className="truncate" title="吉林动画学院">院校：吉林动画学院</span>
            <span className="truncate" title="上海市宝山区">住址：上海市宝山区</span>
          </div>
        ) : (
          <p className={cn(
            "text-ink-light leading-relaxed whitespace-pre-line",
            featured ? "text-base sm:text-lg mb-4 sm:mb-6 line-clamp-6" : "text-sm mb-4 line-clamp-6"
          )}>
            {article.excerpt}
          </p>
        )}
        
        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-black/[0.05]">
          <FadeImage 
            src={article.author.avatar} 
            alt={article.author.name}
            referrerPolicy="no-referrer"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-ink">{article.author.name}</span>
            <span className="text-[10px] text-ink-light">{article.readTime}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
