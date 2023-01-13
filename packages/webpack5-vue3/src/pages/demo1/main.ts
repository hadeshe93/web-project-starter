/*
 * @Description   :
 * @usage         :
 * @Date          : 2022-04-19 09:32:39
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe
 * @LastEditTime  : 2023-01-13 14:34:26
 * @FilePath      : /webpack5-starter/packages/webpack5-vue3/src/pages/demo1/main.ts
 */
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './app.vue';
import { ROUTES } from './routes/index';
import { get as getCookie } from '@/common/utils/cookie';
import './styles/style.scss';

createApp(App)
  .use(
    createRouter({
      history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/vice/webpack5-vue3/demo1/' : '/'),
      routes: ROUTES,
    }),
  )
  .mount('#app');

console.log(getCookie('person_id_wsbeacon'));
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
