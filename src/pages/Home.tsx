import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeImage } from "../components/FadeImage";
import { WechatQR } from "../components/WechatQR";
import { ExternalLink, Check, Copy } from "lucide-react";
import { ReactNode, useState } from "react";

function CopyableText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span
      onClick={handleCopy}
      className="relative inline-flex items-center justify-end gap-2 cursor-pointer text-[15px] sm:text-[16px] font-medium text-gray-900 transition-all duration-200 select-none group focus:outline-none"
      title="点击复制"
    >
      <span className={`flex items-center justify-end gap-2 transition-transform duration-200 active:scale-95 group-hover:text-[#1a73e8] ${copied ? 'opacity-0' : 'opacity-100'}`}>
        <span className="border-b-[2px] border-transparent group-hover:border-[#1a73e8]/30 pb-[1px] transition-colors">{text}</span> 
        <Copy className="w-4 h-4 text-gray-400 group-hover:text-[#1a73e8]/60 transition-colors" />
      </span>
      {copied && (
        <span className="absolute inset-0 flex items-center justify-end text-emerald-600 gap-1 font-semibold animate-in fade-in duration-200">
          <Check className="w-4 h-4" /> 已复制
        </span>
      )}
    </span>
  );
}

function Card({ title, children, delay = 0 }: { title: string, subtitle?: string, children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 mb-8 last:mb-0 transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="flex flex-col mb-8 sm:mb-10">
        <h2 className="text-[16px] sm:text-[17px] font-extrabold text-gray-900 tracking-wider">{title}</h2>
        <div className="h-[3.5px] w-8 bg-[#1a73e8] rounded-full mt-2.5 shadow-[0_2px_4px_rgba(26,115,232,0.3)]"></div>
      </div>
      {children}
    </motion.div>
  );
}

function InfoRow({ label, value, stacked = false }: { label: string, value: ReactNode, stacked?: boolean }) {
  return (
    <div className="flex flex-row justify-between items-center py-4 sm:py-4.5 gap-4 border-b border-dashed border-gray-200 last:border-0 last:pb-0 hover:bg-gray-50/50 -mx-3 px-3 sm:-mx-5 sm:px-5 rounded-[14px] transition-colors duration-300 group">
      <span className="text-[14px] sm:text-[15px] font-semibold text-gray-500 shrink-0 group-hover:text-gray-700 transition-colors">{label}</span>
      <span className="text-[15px] sm:text-[16px] font-medium text-right text-gray-800 break-words">{value}</span>
    </div>
  );
}

function ProjectRow({ title, location, tags, status, link }: { title: string, location: string, tags: string[], status: string, link: string }) {
  return (
    <div className="py-6 sm:py-7 border-b border-dashed border-gray-200 last:border-0 last:pb-0 hover:bg-gray-50/50 -mx-3 px-3 sm:-mx-5 sm:px-5 rounded-[16px] transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-2 mb-4 sm:mb-5">
        <h3 className="font-extrabold text-[17px] sm:text-[18px] text-gray-900 tracking-tight flex items-center flex-wrap gap-3">
          {title} 
          <span className="text-[12px] sm:text-[13px] text-gray-400 font-semibold tracking-widest before:content-['|'] before:mr-3 before:text-gray-300">{location.replace(/[（）()]/g, '')}</span>
        </h3>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center flex-wrap gap-2.5">
          {tags.map((tag, i) => (
            <span key={i} className="text-[12px] text-gray-600 bg-white border border-gray-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] px-3.5 py-1.5 rounded-full font-bold tracking-wide">{tag}</span>
          ))}
          <span className="text-[12px] text-emerald-700 bg-emerald-50 border border-emerald-100/80 shadow-[0_1px_2px_rgba(16,185,129,0.1)] px-3.5 py-1.5 rounded-full font-extrabold tracking-wide relative flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)] animate-pulse"></span>
            {status}
          </span>
        </div>
        
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#1a73e8] bg-blue-50/70 hover:bg-blue-100 hover:text-blue-800 border border-blue-200/50 px-4 py-2 rounded-xl text-[13px] font-bold flex items-center justify-center sm:justify-start gap-1.5 shrink-0 transition-all duration-200 active:scale-95 active:shadow-[inset_0_2px_4px_rgba(26,115,232,0.15)] shadow-[0_2px_8px_rgba(26,115,232,0.1)] w-fit sm:w-auto self-end sm:self-auto">
          项目链接 <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7]">
      <Header />
      
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-left"
        >
          <h1 className="font-sans text-[32px] sm:text-[38px] font-extrabold tracking-tight text-gray-900 leading-none">王宁</h1>
          <p className="mt-2.5 text-[15px] sm:text-[16px] font-medium text-gray-500">资深主案设计师</p>
          <p className="mt-6 text-[15px] sm:text-[16px] text-gray-600 max-w-2xl leading-[1.8] text-justify">
            您好！感谢您抽出宝贵时间查阅我的简历，您可以在底部切换查看我的资料、经验以及个人作品。静待您的回复，希望能有机会进一步沟通。
          </p>
        </motion.div>
        
        {/* Basic Info */}
        <Card title="基本信息" delay={0.2}>
          <div className="flex flex-col w-full">
            <InfoRow label="出生年月" value="1994.08" />
            <InfoRow label="户口所在地" value="山西太原" />
            <InfoRow label="现住址" value="上海宝山" />
            
            <div className="flex flex-row justify-between items-center mt-3 -mx-3 px-3 sm:-mx-5 sm:px-5 py-5 rounded-[14px] hover:bg-gray-50/50 transition-colors duration-300">
              {/* QR Code on the left (Clickable component now) */}
              <div className="shrink-0">
                <WechatQR />
              </div>
              
              {/* Values stacked on the right */}
              <div className="flex flex-col items-end justify-center gap-4 sm:gap-5">
                <a href="tel:13540809076" className="text-[#1a73e8] text-[15px] sm:text-[16px] font-bold hover:text-blue-700 transition-all duration-200 underline decoration-[#1a73e8]/30 hover:decoration-[#1a73e8] underline-offset-[6px] decoration-2 active:scale-95 inline-flex mb-1">
                  13540809076
                </a>
                <CopyableText text="1096048146@qq.com" />
                <CopyableText text="oovoo0826" />
              </div>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card title="教育背景" delay={0.3}>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-[16px] text-gray-900">吉林动画学院</h3>
            <span className="text-[13px] text-[#1a73e8] bg-[#eef5fe] px-3 py-1 rounded-full font-medium tracking-wide">2013-2017年</span>
          </div>
          <p className="text-[15px] text-gray-800 mb-4 font-normal">本科 · 环境设计</p>
          <ul className="list-disc pl-[20px] text-[15px] text-gray-700 space-y-3 marker:text-[#1a73e8]">
            <li>在校期间获得设计大赛金奖</li>
            <li>在校期间辅助导员完成一些商业设计投标</li>
          </ul>
        </Card>

        {/* Self Evaluation */}
        <Card title="自我评价" delay={0.4}>
          <ul className="list-disc pl-[20px] text-[15px] text-gray-800 space-y-4 leading-[1.8] marker:text-[#1a73e8] text-justify">
            <li>10 年专业展示设计经验，涵盖科技、规划、企业等多种大型馆舍项目。不仅能独立操盘复杂项目，亦有带领设计团队高效协同的经验。具备极强的驻场跟进与施工协调能力，确保方案从创意到落地的零偏差转换。面对高压挑战，始终保持积极的职业心态，敢于在传统空间中融入创新逻辑。</li>
            <li>精通 3Dmax、CAD、Photoshop软件。熟练切换Vray、Chaos Vantage等渲染软件，擅长在紧迫节点下保持高水准产出。</li>
            <li>具备较强的 AI 研发应用能力，精通MJ、Gemini、Google AI studio、Stable Diffusion（Web ui），用Gemini制作了诸多智能体，能利用 Google AI Studio 等工具自研提效程序，实现设计流的智能化转型。</li>
          </ul>
        </Card>

        {/* Projects */}
        <Card title="重点完成项目概览" delay={0.5}>
          <ProjectRow 
            title="河南漯河市科技馆" location="（漯河）"
            tags={["主案设计", "全程施工落地", "2020年"]} status="已竣工"
            link="https://baike.baidu.com/item/%E6%BC%AF%E6%B2%B3%E5%B8%82%E7%A7%91%E6%8A%80%E9%A6%86/22147716"
          />
          <ProjectRow 
            title="重庆大轰炸纪念馆" location="（重庆）"
            tags={["主案设计", "后期施工落地", "2021年"]} status="已竣工"
            link="https://dahongzha.paichen.net/"
          />
          <ProjectRow 
            title="重庆人防宣教馆" location="（重庆）"
            tags={["主案设计", "全程施工落地", "2021年"]} status="已竣工"
            link="https://baike.baidu.com/item/%E9%87%8D%E5%BA%86%E5%B8%82%E4%BA%BA%E6%B0%91%E9%98%B2%E7%A9%BA%E5%AE%A3%E4%BC%A0%E6%95%99%E8%82%B2%E9%A6%86/57541763?fr=aladdin"
          />
          <ProjectRow 
            title="潍坊人防宣教馆" location="（潍坊）"
            tags={["主案设计", "全程施工落地", "2022年"]} status="已竣工"
            link="https://baike.baidu.com/item/%E6%BD%8D%E5%9D%8A%E5%B8%82%E4%BA%BA%E6%B0%91%E9%98%B2%E7%A9%BA%E5%AE%A3%E4%BC%A0%E6%95%99%E8%82%B2%E9%A6%86/61402245"
          />
          <ProjectRow 
            title="鄱阳湖湿地候鸟馆" location="（永修）"
            tags={["主案设计", "全程施工落地", "2023年"]} status="已竣工"
            link="https://m.ctrip.com/webapp/you/sight/yongxiu1848/148805070.html?ext-shelfPage=ctrip_shelf_seo"
          />
          
          <div className="mt-8 mb-2 flex justify-center">
            <span className="text-[13px] text-gray-400 font-medium tracking-wide">更多项目请您与我联系进行了解...</span>
          </div>
        </Card>

        {/* Skills */}
        <Card title="专业技能" delay={0.6}>
          <div className="flex flex-wrap gap-3 sm:gap-3.5 mt-2">
            {['3DMAX', 'CAD', 'PHOTOSHOP', 'VRAY', 'CHAOS VANTAGE', 'STABLE DIFFUSION', 'GEMINI', 'GOOGLE AI STUDIO'].map(skill => (
              <span key={skill} className="text-[13px] sm:text-[14px] px-5 py-2 sm:px-6 sm:py-2.5 bg-white border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-full text-gray-800 font-medium tracking-wide uppercase transition-all duration-200 hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 select-none">
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}
