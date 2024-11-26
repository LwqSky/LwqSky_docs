// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
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




  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component('MNavLinks' , MNavLinks);
  



  }





}
