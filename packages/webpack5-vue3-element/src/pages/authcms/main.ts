/*
 * @Description   : 
 * @usage         : 
 * @Date          : 2022-04-19 09:32:39
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe
 * @LastEditTime  : 2022-08-21 10:56:50
 * @FilePath      : /webpack5-starter/packages/webpack5-vue3-element/src/pages/authcms/main.ts
 */
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './app.vue';
import { ROUTES } from './routes/index';
import './styles/style.scss';

createApp(App).use(createRouter({
  history: createWebHashHistory(),
  routes: ROUTES,
})).mount('#app');

console.log('authcms');