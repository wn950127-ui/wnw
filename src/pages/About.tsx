import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function TimelineItem({ company, date, role, tasks, achievements, isLast }: { company: string, date: string, role: string, tasks?: string[], achievements: string[], isLast?: boolean }) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-12 sm:pb-14">
      {/* Sleeker Gradient Timeline Line */}
      {!isLast && <div className="absolute top-[48px] left-[13px] sm:left-[21px] bottom-[-24px] w-[3px] bg-gradient-to-b from-[#1a73e8] via-[#1a73e8]/30 to-[#1a73e8]/5 rounded-full"></div>}
      {/* Animated Timeline Dot */}
      <div className="absolute top-[48px] left-[8px] sm:left-[16px] w-[13px] h-[13px] rounded-full border-[3.5px] border-[#1a73e8] bg-white z-10 shadow-[0_0_0_6px_rgba(26,115,232,0.1)] hover:scale-125 transition-transform duration-300"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
      >
        <div className="flex flex-col xl:flex-row xl:justify-between items-start xl:items-center mb-6 gap-3">
          <h3 className="font-extrabold text-[18px] sm:text-[20px] text-gray-900 tracking-tight leading-snug relative inline-block">
            {company}
            <div className="absolute -bottom-3 left-0 w-8 h-[3.5px] bg-[#1a73e8] rounded-full shadow-[0_2px_4px_rgba(26,115,232,0.3)]"></div>
          </h3>
          <span className="text-[13px] text-gray-600 bg-gray-50 border border-gray-200/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] px-4 py-1.5 rounded-full font-bold shrink-0 tracking-widest mt-2 xl:mt-0 xl:ml-auto select-none">
            {date}
          </span>
        </div>
        
        <div className="flex items-center gap-3 mt-8 mb-8">
          <span className="bg-blue-50 text-[#1a73e8] px-3.5 py-1.5 rounded-lg text-[14px] font-bold tracking-wide border border-blue-100/50 shadow-[0_1px_2px_rgba(26,115,232,0.05)] select-none">
            {role}
          </span>
        </div>

        <div className="space-y-8">
          {tasks && tasks.length > 0 && (
            <div>
              <h4 className="flex items-center text-[15px] font-bold text-gray-800 mb-4 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-sm bg-gray-300 mr-2.5"></span> 主要职责
              </h4>
              <ul className="space-y-3.5 text-[15px] text-gray-600 leading-[1.8] text-justify pl-4">
                {tasks.map((task, i) => (
                  <li key={i} className="relative before:content-[''] before:absolute before:left-[-16px] before:top-[12px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-gray-300">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {achievements && achievements.length > 0 && (
            <div>
              <h4 className="flex items-center text-[15px] font-bold text-gray-800 mb-4 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#1a73e8]/60 mr-2.5"></span> 核心成就
              </h4>
              <ul className="space-y-3.5 text-[15px] text-gray-600 leading-[1.8] text-justify pl-4">
                {achievements.map((achievement, i) => (
                  <li key={i} className="relative before:content-[''] before:absolute before:left-[-16px] before:top-[12px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#1a73e8]/60">
                    {achievement}
                  </li>
                ))}
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
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-left"
        >
          <h1 className="font-sans text-[32px] sm:text-[38px] font-extrabold tracking-tight text-gray-900 leading-none">工作经验</h1>
          <p className="mt-2.5 text-[15px] sm:text-[16px] font-medium text-gray-500">资深主案设计师</p>
          <p className="mt-6 text-[15px] sm:text-[16px] text-gray-600 max-w-2xl leading-[1.8] text-justify">
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
