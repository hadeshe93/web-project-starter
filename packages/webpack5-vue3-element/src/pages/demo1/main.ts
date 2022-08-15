/*
 * @Description   : 
 * @usage         : 
 * @Date          : 2022-04-19 09:32:39
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe
 * @LastEditTime  : 2022-07-07 12:56:48
 * @FilePath      : /webpack5-starter/packages/webpack5-starter-vue3-ts/src/pages/demo1/main.ts
 */
import { createApp } from 'vue';
import App from './app.vue';
import { get as getCookie } from '@/common/utils/cookie';
import './styles/style.scss';

createApp(App).mount('#app');

console.log(getCookie('person_id_wsbeacon'));