module.exports = {
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  title: "YYDS 开发博客",
  description: "xukaiyydsの前端开发博客",
  permalink: "/:year/:month/:day/:slug",
  theme: "reco",
  base: "",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  markdown: {
    lineNumbers: true, // 显示行号
    externalLinks: { target: "_blank", rel: "nofollow noopener noreferrer" }, // 添加上 nofollow
  },
  plugins: [
    [
      "vuepress-plugin-code-copy", // 复制代码
      {
        color: "#3eaf7c",
        successText: "复制成功！",
      },
    ],
  ],
  themeConfig: {
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
      },
      socialLinks: [
        { icon: "reco-github", link: "https://github.com/xukaiyyds" },
        { icon: "reco-mayun", link: "https://gitee.com/xukaiyyds" },
        {
          icon: "reco-juejin",
          link: "https://juejin.cn/user/431436983715102/posts",
        },
        {
          icon: "reco-csdn",
          link: "https://blog.csdn.net/xukaiyyds?type=blog",
        },
        {
          icon: "reco-zhihu",
          link: "https://www.zhihu.com/people/xukaiyyds/posts",
        },
        { icon: "reco-v2ex", link: "https://www.v2ex.com/member/xukaiyyds" },
      ],
    },
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
    ],
    author: "xukaiyyds", // 文章作者
    startYear: "2023", // 项目开始时间
    logo: "/logo.png", // Logo
    type: "blog", // 首页类型
    authorAvatar: "/logo.png", // 首页头像
    subSidebar: "auto", // 右侧目录
    friendLink: [
      {
        title: "Vue.js",
        desc: "渐进式 JavaScript 框架",
        logo: "https://cn.vuejs.org/logo.svg",
        link: "https://cn.vuejs.org/",
      },
      {
        title: "VuePress",
        desc: "Vue 驱动的静态网站生成器",
        logo: "https://vuepress.vuejs.org/images/hero.png",
        link: "https://vuepress.vuejs.org/zh/",
      },
    ],
    repo: "xukaiyyds/xukaiyyds.github.io",
    repoLabel: "查看源码",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "编辑此页面",
    noFoundPageByTencent: false, // 关闭404
  },
};
