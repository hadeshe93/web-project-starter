/*
 * @Description   : 
 * @usage         : 
 * @Date          : 2022-04-19 09:32:39
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe
 * @LastEditTime  : 2022-08-26 15:44:09
 * @FilePath      : /webpack5-starter/packages/webpack5-vue3-element/src/pages/microapp-authcms/main.ts
 */
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// 当微前端技术栈选择 qiankun 时会用到
import './public-path';

import App from './app.vue';
import { ROUTES } from './routes/index';
import './styles/style.scss';

function start() {
  createApp(App).use(createRouter({
    history: createWebHashHistory(),
    routes: ROUTES,
  })).mount('#microapp');
}

// 兼容 qiankun 体系的代码
export async function bootstrap() {
  console.log();
}
export async function mount() {
  console.log();
  start();
}
export async function unmount() {
  console.log();
}
if (!window.__POWERED_BY_QIANKUN__) {
  start();
}