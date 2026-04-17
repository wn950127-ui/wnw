import { Link } from "react-router-dom";
import { ContactItem } from "./ContactItem";

export function Footer() {
  return (
    <footer className="mx-4 sm:mx-6 lg:mx-8 mb-24 sm:mb-8 py-8 sm:py-12 mt-16 sm:mt-24 border-t border-black/[0.05]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xl font-bold tracking-wide">个人简历</span>
            <p className="text-sm text-ink-light max-w-xs">
              记录设计师的工作与思考。
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-light">探索</h4>
            <nav className="flex flex-row flex-wrap gap-x-6 gap-y-2 sm:flex-col sm:gap-2">
              <Link to="/" className="text-sm hover:text-accent transition-colors">首页</Link>
              <Link to="/photography" className="text-sm hover:text-accent transition-colors">作品</Link>
              <Link to="/about" className="text-sm hover:text-accent transition-colors">关于我</Link>
            </nav>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-light">联系我</h4>
            <nav className="flex flex-row flex-wrap gap-x-6 gap-y-2 sm:flex-col sm:gap-2">
              <ContactItem label="微信" value="oovoo0826" />
              <ContactItem label="QQ" value="1096048146" />
              <ContactItem label="手机" value="13540809076" />
              <ContactItem label="邮箱" value="1096048146@qq.com" />
            </nav>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/5 pt-8 sm:flex-row text-center sm:text-left">
          <p className="text-xs text-ink-light">
            &copy; {new Date().getFullYear()} 个人简历. 保留所有权利。
          </p>
          <p className="text-xs text-ink-light max-w-md sm:text-right">
            图片来自个人作品，这是一个展示个人作品的博客，切勿滥发。
          </p>
        </div>
      </div>
    </footer>
  );
}
