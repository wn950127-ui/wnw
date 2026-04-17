export interface Author {
  name: string;
  avatar: string;
  bio: string;
  qq?: string;
  weixin?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: Author;
  tags: string[];
  content?: string; // We'll use components for the actual content rendering in the Post view, but this could hold markdown
}

export const defaultAuthor: Author = {
  name: "王宁",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  bio: "主修课程：建筑设计与原理、人体工程学、中国美术史、室内设计史、装饰基础、展示设计、设计表达、平面构成、色彩构成、素描基础、设计与工艺流程等。",
  qq: "1096048146",
  weixin: "oovoo0826"
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "basic-info",
    title: "基本信息",
    excerpt: "• 出生年月：1994.08\n• 电话：13540809076\n• 身高：179cm\n• 学历：本科\n• 毕业院校：吉林动画学院\n• 住址：上海市宝山区",
    coverImage: "https://i.imgs.ovh/2026/04/17/Zu6Ohe.png",
    date: "2026年最新",
    readTime: "1 分钟阅读",
    author: defaultAuthor,
    tags: ["简历", "个人信息"]
  },
  {
    id: "2",
    slug: "science-museum",
    title: "科技馆",
    excerpt: "深度参与多个省市级重点科技馆项目，具备从概念方案到施工深化全流程的展项设计与三维效果把控能力。",
    coverImage: "https://picsum.photos/seed/sciencemuseum/1600/900",
    date: "2026年最新",
    readTime: "2 分钟阅读",
    author: defaultAuthor,
    tags: ["类别", "科技馆"]
  },
  {
    id: "3",
    slug: "planning-exhibition-hall",
    title: "规划馆/城市展厅",
    excerpt: "擅长大型城市规划馆与专业展示中心的视觉呈现，通过精准的效果图绘制与深化工作，提升公共空间的信息传达力。",
    coverImage: "https://picsum.photos/seed/cityscape/1600/900",
    date: "2026年最新",
    readTime: "2 分钟阅读",
    author: defaultAuthor,
    tags: ["类别", "规划馆"]
  },
  {
    id: "4",
    slug: "specialty-museum",
    title: "科普/人防/专题馆",
    excerpt: "在生态科普、海洋生物及人防宣教等专题领域拥有丰富的施工驻场与深化经验，确保复杂的主题内容通过空间设计精准落地。",
    coverImage: "https://picsum.photos/seed/museum/1600/900",
    date: "2026年最新",
    readTime: "2 分钟阅读",
    author: defaultAuthor,
    tags: ["类别", "专题馆"]
  },
  {
    id: "5",
    slug: "corporate-brand-hall",
    title: "企业馆/品牌馆类",
    excerpt: "具备敏锐的商业洞察力，多次主导企业展厅投标并成功中标，擅长将品牌文化转化为具有视觉冲击力的展示空间。",
    coverImage: "https://picsum.photos/seed/corporate/1600/900",
    date: "2026年最新",
    readTime: "2 分钟阅读",
    author: defaultAuthor,
    tags: ["类别", "企业馆"]
  }
];
