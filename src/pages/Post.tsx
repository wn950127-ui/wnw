import { useParams, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { articles } from "../data/articles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AuthorInfo } from "../components/AuthorInfo";
import { QuoteEmbed } from "../components/QuoteEmbed";
import { ImageEmbed } from "../components/ImageEmbed";
import { Gallery } from "../components/Gallery";
import { FadeImage } from "../components/FadeImage";

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col pb-16 sm:pb-0">
      <Header />
      
      <main className="flex-1">
        {/* Immersive Hero */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] w-full overflow-hidden bg-ink">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0"
          >
            <FadeImage 
              src={article.coverImage} 
              alt={article.title} 
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover opacity-60"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 md:p-16 lg:p-24 pb-16 sm:pb-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl"
            >
              <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-paper/80">
                <span>{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-paper/40 hidden sm:block"></span>
                <span>{article.tags[0]}</span>
                <span className="h-1 w-1 rounded-full bg-paper/40 hidden sm:block"></span>
                <span>{article.readTime}</span>
              </div>
              
              <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
        
        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16 -mt-16 sm:-mt-24 md:-mt-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-6 sm:p-8 md:p-12 lg:p-16 prose prose-sm sm:prose-lg prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-ink-light prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
          >
            <p className="lead text-lg sm:text-2xl font-sans font-medium text-ink mb-6 sm:mb-12">
              {article.excerpt}
            </p>
            
            {article.slug === 'basic-info' ? (
              <>
                <p className="text-base sm:text-lg leading-relaxed mb-12">
                  资深展示设计师，10年实战积淀。熟练驾驭 3Dmax、CAD 等核心工具，并能利用 AI 提效工具辅助方案决策与视觉呈现。坚持“细节支撑全局”的设计理念，对空间逻辑和色彩美学有深厚把控力，能精准捕捉并落地客户需求，确保方案从创意到落地的完整性。
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-8 text-ink border-b border-black/[0.05] pb-4">工作经历</h2>
                
                <div className="space-y-12">
                  {/* Experience 1 */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">
                      2025.03 - 至今 | 江苏科学梦上海分公司 | 设计师
                    </h3>
                    <div className="text-ink-light space-y-2 mt-4">
                      <p className="font-medium text-ink">工作业绩：</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>涟水县科技馆投标项目。</li>
                        <li>宁波北仑全民学习中心前期规划。</li>
                        <li>雄安科技馆前期规划。</li>
                        <li>西安史记城实施阶段深化设计。</li>
                        <li>湖州科技馆设计投标。</li>
                        <li>东阳博物馆设计标深化。</li>
                        <li>无为农业科技馆前期设计规划。</li>
                      </ul>
                    </div>
                  </div>

                  {/* Experience 2 */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">
                      2024.03 - 2025.01 | 山东新之航传媒科技上海分公司 | 主案设计师
                    </h3>
                    <div className="text-ink-light space-y-2 mt-4">
                      <p className="font-medium text-ink">工作业绩：</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>中泰证券展厅投标中标。</li>
                        <li>齐都药业企业展厅投标中标。</li>
                        <li>得利斯企业展厅中标深化落地。</li>
                        <li>齐鲁药业企业展厅深化完成。</li>
                      </ul>
                    </div>
                  </div>

                  {/* Experience 3 */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">
                      2018.05 - 2024.03 | 上海诚唐文旅科技集团股份有限公司 | 主案设计师
                    </h3>
                    <div className="text-ink-light space-y-2 mt-4">
                      <p className="font-medium text-ink">工作业绩：</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>上海科技馆深化设计。</li>
                        <li>河南科技馆深化设计。</li>
                        <li>水工科技馆方案设计。</li>
                        <li>漯河科技馆施工。</li>
                        <li>重庆大轰炸纪念馆施工。</li>
                        <li>重庆人民防空宣教馆施工。</li>
                        <li>潍坊人民防空宣教馆施工。</li>
                        <li>嵊州人防设计投标。</li>
                        <li>莱芜安全馆前期规划。</li>
                        <li>盐城湿地科普馆。</li>
                        <li>盐城黄海湿地博物馆。</li>
                        <li>连云港赣榆海洋馆。</li>
                        <li>绍兴淡水鱼水族馆投标深化。</li>
                        <li>中广核温州科普馆深化。</li>
                        <li>鄱阳湖生态馆深化施工。</li>
                      </ul>
                    </div>
                  </div>

                  {/* Experience 4 */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">
                      2017.03 - 2018.05 | 上海风语筑展示股份有限公司 | 空间设计师
                    </h3>
                  </div>
                </div>
              </>
            ) : article.slug === 'science-museum' ? (
              <div className="space-y-20">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">上海科技馆 —— 深化设计</h2>
                  <ImageEmbed 
                    src="https://picsum.photos/seed/shanghai-science/1200/800"
                    alt="上海科技馆"
                    size="wide"
                  />
                  <p className="mt-6 text-ink-light leading-relaxed">
                    [此处添加上海科技馆项目的详细介绍文字...]
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">河南科技馆 —— 深化设计</h2>
                  <ImageEmbed 
                    src="https://picsum.photos/seed/henan-science/1200/800"
                    alt="河南科技馆"
                    size="wide"
                  />
                  <p className="mt-6 text-ink-light leading-relaxed">
                    [此处添加河南科技馆项目的详细介绍文字...]
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">水工科技馆 —— 方案设计</h2>
                  <ImageEmbed 
                    src="https://picsum.photos/seed/water-science/1200/800"
                    alt="水工科技馆"
                    size="wide"
                  />
                  <p className="mt-6 text-ink-light leading-relaxed">
                    [此处添加水工科技馆项目的详细介绍文字...]
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">漯河科技馆 —— 施工阶段把控</h2>
                  <ImageEmbed 
                    src="https://picsum.photos/seed/luohe-science/1200/800"
                    alt="漯河科技馆"
                    size="wide"
                  />
                  <p className="mt-6 text-ink-light leading-relaxed">
                    [此处添加漯河科技馆项目的详细介绍文字...]
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">中广核温州科普馆 —— 深化设计</h2>
                  <ImageEmbed 
                    src="https://picsum.photos/seed/wenzhou-science/1200/800"
                    alt="中广核温州科普馆"
                    size="wide"
                  />
                  <p className="mt-6 text-ink-light leading-relaxed">
                    [此处添加中广核温州科普馆项目的详细介绍文字...]
                  </p>
                </div>
              </div>
            ) : (
              <>
                <p>
                  现代世界要求我们时刻保持关注。我们被通知、电子邮件和社交媒体的无尽滚动所轰炸。在这种喧嚣中，沉默变成了一种奢侈，一种我们必须积极寻找和培养的稀有商品。
                </p>
                
                <p>
                  但是，真正拥抱沉默意味着什么？它不仅仅是没有噪音，而是一种存在状态——一种深刻的宁静，让我们能够以更有意义的方式与内心世界和周围世界建立联系。
                </p>

                <QuoteEmbed 
                  quote="在沉默的态度中，灵魂在更清晰的光芒中找到道路，而那些难以捉摸和欺骗性的东西则化解为水晶般的清晰。"
                  author="圣雄甘地"
                />

                <h2 className="text-3xl mt-16 mb-8 text-ink">安静空间的建筑学</h2>
                
                <p>
                  纵观历史，人类设计了专门用于培养沉思和和平的空间。从哥特式大教堂高耸的拱门到日本禅宗花园的极简主义宁静，这些环境都有一个共同的目的：让心灵平静，提升精神。
                </p>

                <ImageEmbed 
                  src="https://picsum.photos/seed/architecture/1200/800"
                  alt="极简主义建筑"
                  caption="光影的交织创造了一种自然的节奏，鼓励人们反思。"
                  size="wide"
                />

                <p>
                  当我们进入这些空间时，我们会本能地压低声音。我们的呼吸变慢。我们敏锐地意识到微妙的细节——石头的纹理、水面上的光影、树叶的沙沙声。这种高度的意识是沉默的礼物。
                </p>

                <h2 className="text-3xl mt-16 mb-8 text-ink">培养你自己的避难所</h2>

                <p>
                  你不需要去偏远的修道院来体验沉默的好处。你可以在你所在的地方创造你自己的避难所。它始于一个简单的意图：每天抽出几分钟的安静时间。
                </p>

                <Gallery 
                  images={[
                    { src: "https://picsum.photos/seed/gallery1/800/1000", alt: "晨光" },
                    { src: "https://picsum.photos/seed/gallery2/800/800", alt: "咖啡杯" },
                    { src: "https://picsum.photos/seed/gallery3/800/800", alt: "打开的书" }
                  ]}
                />

                <p>
                  从小事做起。关掉手机一个小时。坐在窗边看云卷云舒。不戴耳机散步。注意当人为噪音消失时出现的声音——冰箱的嗡嗡声、远处鸟儿的叽叽喳喳声、你自己的呼吸节奏。
                </p>

                <p>
                  当你练习这种有意的沉默时，你可能会发现它变得不那么令人生畏，而是更具吸引力。它变成了一个避难所，一个你可以一次又一次地回到自己的地方。
                </p>
              </>
            )}
          </motion.div>
          
          <AuthorInfo author={article.author} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
