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
        "group flex glass-panel p-3 sm:p-4 h-full",
        featured ? "flex-col md:flex-row gap-4 md:gap-6 md:items-center" : "flex-col gap-3"
      )}
    >
      <Link 
        to={`/post/${article.slug}`} 
        className={cn(
          "block overflow-hidden rounded-lg sm:rounded-xl bg-black/[0.02] shrink-0",
          featured ? "w-full md:w-5/12 aspect-[16/9]" : "w-full aspect-[16/9]"
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
        <div className="mb-2 sm:mb-2.5 flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-ink-light">
          <span className="bg-black/5 px-1.5 py-0.5 rounded-md">{article.tags[0]}</span>
          <span>{article.date}</span>
        </div>
        
        <Link to={`/post/${article.slug}`} className="group-hover:text-accent transition-colors">
          <h2 className={cn(
            "font-sans font-bold leading-tight text-ink",
            featured ? "text-lg sm:text-xl lg:text-2xl mb-1.5 sm:mb-2" : "text-sm sm:text-base mb-1"
          )}>
            {article.title}
          </h2>
        </Link>
        
        {article.slug === 'basic-info' ? (
          <div className={cn(
            "grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-1.5 text-ink-light",
            featured ? "text-xs mb-3 sm:mb-4" : "text-[11px] mb-2"
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
            featured ? "text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-4" : "text-[11px] sm:text-xs mb-2 line-clamp-3"
          )}>
            {article.excerpt}
          </p>
        )}
        
        <div className="mt-auto flex items-center gap-2 pt-3 border-t border-black/[0.05]">
          <FadeImage 
            src={article.author.avatar} 
            alt={article.author.name}
            referrerPolicy="no-referrer"
            className="h-6 w-6 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-ink">{article.author.name}</span>
            <span className="text-[9px] text-ink-light">{article.readTime}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
