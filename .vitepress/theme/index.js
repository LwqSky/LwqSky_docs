// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './utils/rainbow.css'//彩虹背景动画
import './utils/blur.css'//导航栏毛玻璃
import './utils/hidden.css'//隐藏横条
import { useData } from 'vitepress'
import MNavLinks from './components/MNavLinks.vue'


/** @type {import('vitepress').Theme} */
export default {
  
  extends: DefaultTheme,

  //移除vite中的sass警告JA API过期的终端输出
  css: {  
    preprocessorOptions: {  
      scss: {  
        silenceDeprecations: ['legacy-js-api', 'color-functions'],  
      },  
    },  
  },
  
  
  Layout: (props) => {
    // 获取 frontmatter
    const { frontmatter } = useData();

    // 添加自定义 class
    if (frontmatter.value && frontmatter.value.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(DefaultTheme.Layout, props);
  },




  async enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component('MNavLinks' , MNavLinks);
    // 加载 Live2D
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            "path": "https://model.oml2d.com/cat-black/model.json",
            "scale": 0.15,
            "position": [0, 20],
            "stageStyle": {
              "height": 350
            }
          }
        ]
      });
    }


}

}
