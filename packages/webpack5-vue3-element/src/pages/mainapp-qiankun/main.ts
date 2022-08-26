/*
 * @Description   : 
 * @usage         : 
 * @Date          : 2022-04-19 09:32:39
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe
 * @LastEditTime  : 2022-08-26 16:37:41
 * @FilePath      : /webpack5-starter/packages/webpack5-vue3-element/src/pages/mainapp-qiankun/main.ts
 */
import { createApp, nextTick } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import WujieVue from "wujie-vue3";
import { createRouter, createWebHistory } from 'vue-router';
import importHTML from 'import-html-entry';

import App from './app.vue';
import { ROUTES } from './routes/index';
import { MICRO_APPS } from './configs/micro-apps';
import './styles/style.scss';

class MicroWebApplication {
  app: ReturnType<typeof createApp>;

  constructor() {
    // 初始化 vue app
    this.app = createApp(App).use(WujieVue).use(createRouter({
      history: createWebHistory(),
      routes: ROUTES,
    }));

  }

  /**
   * 注册为应用列表
   *
   * @returns {*} 
   * @memberof MicroWebApplication
   */
  registerMicroApps() {
    console.log('==> MICRO_APPS: ', MICRO_APPS);
    registerMicroApps(MICRO_APPS, {
      // beforeLoad(app) {
      //   return Promise.resolve();
      // },
      // beforeMount(app) {
      //   return Promise.resolve();
      // },
      // afterMount(app) {
      //   return Promise.resolve();
      // },
      // beforeUnmount(app) {
      //   return Promise.resolve();
      // },
      // afterUnmount(app) {
      //   return Promise.resolve();
      // },
    });
  }

  startMicroApps() {
    start({
      prefetch: 'all'
    });
  }

  async run() {
    importHTML('//static.hadesz.com/docs/').then(res => {
      console.log('==> importHTML: ', window['hadeshe'] = res);
    });

    this.app.mount('#app');
    await nextTick();
    this.registerMicroApps();
    this.startMicroApps();
  }
}

new MicroWebApplication().run();