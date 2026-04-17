import { motion } from "motion/react";
import { articles } from "../data/articles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeImage } from "../components/FadeImage";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

function Card({ title, children, delay = 0 }: { title: string, children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/90 backdrop-blur-3xl rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/60 mb-5 last:mb-0"
      style={{ WebkitBackdropFilter: "blur(20px) saturate(150%)" }}
    >
      <h2 className="text-[11px] font-semibold tracking-wider uppercase text-ink-light/50 mb-5">{title}</h2>
      {children}
    </motion.div>
  );
}

function InfoRow({ label, value }: { label: string, value: ReactNode }) {
  return (
    <div className="flex flex-row justify-between items-start py-3 gap-4 border-b border-black/[0.03] last:border-0 last:pb-0">
      <span className="text-[11px] sm:text-xs text-ink-light shrink-0">{label}</span>
      <span className="text-[11px] sm:text-xs font-medium text-right text-ink leading-relaxed break-words">{value}</span>
    </div>
  );
}

function ProjectRow({ title, location, tags, status, link }: { title: string, location: string, tags: string[], status: string, link: string }) {
  return (
    <div className="py-4 border-b border-black/[0.03] last:border-0 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-2.5 gap-2.5 sm:gap-4">
        <h3 className="font-bold text-[13px] text-ink">{title} <span className="text-[11px] text-ink-light font-normal ml-1">{location}</span></h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="self-start sm:self-auto text-accent text-[10px] flex items-center gap-1 hover:underline shrink-0 bg-accent/5 px-2 py-1 rounded">
          项目链接 <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
      <div className="flex items-center flex-wrap gap-2 text-[10px]">
        {tags.map((tag, i) => (
          <span key={i} className="text-ink-light bg-black/[0.02] px-1.5 py-1 sm:py-0.5 rounded leading-none">{tag}</span>
        ))}
        <span className="text-emerald-600 font-medium bg-emerald-50 px-1.5 py-1 sm:py-0.5 rounded leading-none">{status}</span>
      </div>
    </div>
  );
}

export function Home() {
  const coverImage = articles[0]?.coverImage;

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7]">
      <Header />
      
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-8">
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-2"
        >
          <h1 className="font-sans text-2xl font-bold text-ink">王宁</h1>
          <p className="text-xs text-ink-light mt-1 font-medium">资深主案设计师</p>
          <p className="mt-4 text-xs leading-relaxed text-ink-light/80">
            您好！感谢您抽出宝贵时间查阅我的简历，您可以在底部切换查看我的资料、经验以及个人作品。静待您的回复，希望能有机会进一步沟通。
          </p>
        </motion.div>
        
        {/* Cover Image */}
        {coverImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 rounded-2xl overflow-hidden shadow-sm"
          >
            <FadeImage src={coverImage} alt="王宁" className="w-full aspect-[21/9] object-cover" loading="eager" />
          </motion.div>
        )}

        {/* Basic Info */}
        <Card title="基本信息" delay={0.2}>
          <InfoRow label="出生年月" value="1994.08" />
          <InfoRow label="户口所在地" value="山西太原" />
          <InfoRow label="现住址" value="上海宝山" />
          <InfoRow label="联系方式" value={
            <div className="flex flex-col gap-1 text-accent">
              <span>13540809076</span>
              <span>1096048146@qq.com</span>
            </div>
          } />
        </Card>

        {/* Education */}
        <Card title="教育背景" delay={0.3}>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-[13px] text-ink">吉林动画学院</h3>
            <span className="text-[10px] text-accent bg-accent/5 px-2 py-0.5 rounded font-medium">2013-2017年</span>
          </div>
          <p className="text-[11px] text-ink-light font-medium mb-3">本科 · 环境设计</p>
          <ul className="list-disc pl-4 text-[11px] text-ink-light space-y-1.5 marker:text-black/20">
            <li>在校期间获得设计大赛金奖</li>
            <li>在校期间辅助导员完成一些商业设计投标</li>
          </ul>
        </Card>

        {/* Self Evaluation */}
        <Card title="自我评价" delay={0.4}>
          <ul className="list-disc pl-4 text-[11px] text-ink-light space-y-3 leading-relaxed marker:text-black/20 text-justify">
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
        </Card>

        {/* Skills */}
        <Card title="专业技能" delay={0.6}>
          <div className="flex flex-wrap gap-2">
            {['3Dmax', 'autoCAD', 'Photoshop', 'Vray', 'Chaos Vantage', 'Stable Diffusion', 'Gemini', 'Google AI studio'].map(skill => (
              <span key={skill} className="text-[10px] px-3 py-1.5 border border-black/[0.08] rounded-full text-ink-light font-medium tracking-wide uppercase">
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
