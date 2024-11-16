import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/lwqsky-docs/',
  title: "LwqSky",
  description: "困难是全力以赴做到最好的机会！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 站点标题
    siteTitle: 'LwqSky',
    logo: '/public/头像.png',


    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Python', link: '/python' },
      { text: 'Linux', link: '/linux' },
      { text: 'Markdown', link: '/markdown' },
      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/html' },
          { text: 'CSS', link: '/css' },
          { text: 'JavaScript', link: '/javascript' },
        ]
      },
    ],




    // 侧边栏
    sidebar: {
      "/python": set_sidebar("/python"),
      "/markdown": set_sidebar("/markdown"),
    },



    outlineTitle: '页面导航',
    outline: "deep",



    // 上下页
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },



    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LwqSky' }
    ],




    // 页脚
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024-2029 LwqSky",
    },


    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

  }
})
