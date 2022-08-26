/*
 * @Description   : 
 * @usage         : 
 * @Date          : 2022-04-19 09:32:39
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe
 * @LastEditTime  : 2022-08-19 12:48:57
 * @FilePath      : /webpack5-starter/packages/webpack5-vue3-element/src/pages/main/main.ts
 */
import { createApp } from 'vue';
import WujieVue from "wujie-vue3";
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './app.vue';
import { ROUTES } from './routes/index';
import { getFormattedPreloadAppConfig, MICRO_APPS_MAP } from './configs/micro-apps';
import './styles/style.scss';

class MicroWebApplication {
  app: ReturnType<typeof createApp>;

  constructor() {
    // 初始化 vue app
    this.app = createApp(App).use(WujieVue).use(createRouter({
      history: createWebHashHistory(),
      routes: ROUTES,
    }));

    // 预加载微应用列表
    this.preloadMicroApps();
  }

  preloadMicroApps() {
    const { preloadApp } = WujieVue;
    preloadApp(getFormattedPreloadAppConfig(MICRO_APPS_MAP.authcms));
    // preloadApp(getFormattedPreloadAppConfig(MICRO_APPS_MAP.seafood));
  }

  run() {
    this.app.mount('#app');
  }
}

new MicroWebApplication().run();