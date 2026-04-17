import { Link } from "react-router-dom";
import { ContactItem } from "./ContactItem";
import { CopyableEmailFooter } from "./CopyableEmailFooter";

export function Footer() {
  return (
    <footer className="mx-4 sm:mx-5 lg:mx-6 mb-16 sm:mb-6 py-10 md:py-16 mt-12 border-t border-black/[0.04]">
      <div className="mx-auto max-w-3xl px-0 sm:px-4">
        
        {/* Apple-style precise layout: Use flex instead of rigid grid to control column widths perfectly */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-12 md:gap-8">
          
          <div className="flex flex-col gap-5 w-full md:w-1/3">
            <h3 className="h-6 flex items-end font-sans text-base font-bold tracking-wide text-gray-900">
              个人简历
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
              记录设计师的工作与思考，用空间设计诠释生活。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-24 w-full md:w-auto">
            <div className="flex flex-col gap-5">
              <h4 className="h-6 flex items-end text-xs font-semibold uppercase tracking-wider text-gray-400">
                探索
              </h4>
              <nav className="flex flex-row flex-wrap sm:flex-col gap-x-6 gap-y-3.5">
                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">首页</Link>
                <Link to="/photography" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">作品</Link>
                <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">经验</Link>
              </nav>
            </div>
            
            <div className="flex flex-col gap-5">
              <h4 className="h-6 flex items-end text-xs font-semibold uppercase tracking-wider text-gray-400">
                联系我
              </h4>
              <nav className="flex flex-row flex-wrap sm:flex-col gap-x-6 gap-y-3.5">
                <ContactItem label="微信" value="oovoo0826" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer" />
                <a href="tel:13540809076" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">手机</a>
                <CopyableEmailFooter email="1096048146@qq.com" />
              </nav>
            </div>
          </div>
          
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/[0.04] pt-8 sm:flex-row text-center sm:text-left">
          <p className="text-xs font-medium text-gray-400 tracking-wide">
            &copy; {new Date().getFullYear()} 个人简历. 保留所有权利。
          </p>
          <p className="text-xs font-medium text-gray-400 max-w-md sm:text-right">
            图片来自个人作品，展示专用，切勿滥发。
          </p>
        </div>
      </div>
    </footer>
  );
}
