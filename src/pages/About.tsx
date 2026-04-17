import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function TimelineItem({ company, date, role, tasks, achievements, isLast }: { company: string, date: string, role: string, tasks?: string[], achievements: string[], isLast?: boolean }) {
  return (
    <div className="relative pl-7 sm:pl-10 pb-8 sm:pb-10">
      {!isLast && <div className="absolute top-[28px] left-[11px] sm:left-[17px] bottom-[-20px] w-[2px] bg-[#ccdaef]/60"></div>}
      <div className="absolute top-[30px] left-[6px] sm:left-[12px] w-3 h-3 rounded-full border-[2px] border-[#3b82f6] bg-[#f5f5f7] z-10 hover:scale-125 transition-transform duration-300"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="bg-white/90 backdrop-blur-3xl rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/60"
        style={{ WebkitBackdropFilter: "blur(20px) saturate(150%)" }}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4 gap-2 sm:gap-4">
          <h3 className="font-sans text-[15px] sm:text-[17px] font-bold text-ink tracking-tight leading-snug">{company}</h3>
          <span className="text-[10px] sm:text-[11px] text-[#2962ff] bg-[#2962ff]/[0.06] px-3 py-1.5 rounded-full font-medium w-fit shrink-0 tracking-widest uppercase sm:ml-auto">{date}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-6 text-ink/60">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2962ff]/50"></div>
          <span className="text-[13px] font-semibold tracking-wide">{role}</span>
        </div>

        <div className="space-y-4">
          {tasks && tasks.length > 0 && (
            <div>
              <p className="text-[11px] sm:text-[12px] font-bold text-ink mb-2">工作内容：</p>
              <ul className="list-disc pl-4 text-[11px] sm:text-[12px] text-ink-light space-y-1.5 marker:text-black/10 text-justify">
                {tasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
            </div>
          )}
          
          {achievements && achievements.length > 0 && (
            <div>
              <p className="text-[11px] sm:text-[12px] font-bold text-ink mb-2">工作业绩：</p>
              <ul className="list-disc pl-4 text-[11px] sm:text-[12px] text-ink-light space-y-1.5 marker:text-black/10 text-justify leading-relaxed">
                {achievements.map((ach, i) => <li key={i}>{ach}</li>)}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7]">
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-2"
        >
          <h1 className="font-sans text-xl font-bold text-ink tracking-wide">工作经验</h1>
          <p className="text-[11px] text-ink-light mt-1.5 font-medium tracking-wide">资深主案设计师</p>
          <p className="mt-4 text-[11px] leading-relaxed text-ink-light/80 text-justify">
            您好！感谢您抽出宝贵时间查阅我的简历，您可以在底部切换查看我的资料、经验以及个人作品。静待您的回复，希望能有机会进一步沟通。
          </p>
        </motion.div>

        <div className="mt-6 px-1">
          <TimelineItem 
            company="江苏科学梦上海分公司"
            date="2025.03 - 至今"
            role="设计师"
            tasks={[
              "负责项目设计工作，参与前期规划，提取设计元素。",
              "完成前期创意概念设计、布局方案及材料工艺选取。",
              "深化设计方案，优化空间效果，并与施工部门对接。"
            ]}
            achievements={[
              "涟水县科技馆投标项目。",
              "宁波北仑全民学习中心前期规划。",
              "雄安科技馆前期规划。",
              "西安史记城实施阶段深化设计。",
              "湖州科技馆设计投标。",
              "东阳博物馆设计标深化。",
              "无为农业科技馆前期设计规划。"
            ]}
          />

          <TimelineItem 
            company="山东新之航传媒科技上海分公司"
            date="2024.03 - 2025.01"
            role="主案设计师"
            tasks={[
              "负责项目整体设计工作，参与前期规划，提取设计元素。",
              "完成前期创意概念设计、布局方案及材料工艺选取。",
              "负责空间设计任务分配，主导完成布局、空间及展项三维效果。",
              "深化设计方案，优化空间效果，并与施工部门对接。"
            ]}
            achievements={[
              "中泰证券展厅投标中标。",
              "齐都药业企业展厅投标中标。",
              "得利斯企业展厅中标深化落地。",
              "齐鲁药业企业展厅深化完成。"
            ]}
          />

          <TimelineItem 
            company="上海诚唐文旅科技集团股份有限公司"
            date="2018.05 - 2024.03"
            role="主案设计师"
            tasks={[
              "负责项目整体设计工作，参与前期规划并提取设计元素。",
              "完成前期创意概念、布局方案及材料工艺选取。",
              "负责空间设计任务分配，主导空间布局及三维效果呈现。",
              "深化设计方案，优化空间效果，确保施工部门准确对接。",
              "负责施工现场驻场，协调各部门及对接甲方负责人。"
            ]}
            achievements={[
              "科技馆类： 上海科技馆深化设计、河南科技馆深化设计、水工科技馆方案设计、漯河科技馆施工。",
              "人防/纪念馆类： 重庆大轰炸纪念馆施工、重庆人民防空宣教馆施工、潍坊人民防空宣教馆施工、嵊州人防、莱芜安全馆。",
              "科普/博物馆类： 盐城湿地科普馆、盐城黄海湿地博物馆、连云港赣榆海洋馆、绍兴淡水鱼水族馆投标深化、中广核温州科普馆深化。",
              "生态类： 鄱阳湖生态馆深化施工。"
            ]}
          />

          <TimelineItem 
            company="上海风语筑展示股份有限公司"
            date="2017.03 - 2018.05"
            role="空间设计师"
            tasks={[]}
            achievements={[
              "负责开封城市规划馆、洛阳城市规划馆效果图绘制。",
              "负责深化文化展示中心、合肥滨湖卓越展示中心、重庆悦来新城展示中心深化工作。"
            ]}
            isLast={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
