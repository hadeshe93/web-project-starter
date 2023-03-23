import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from '@/app.vue';
import { ROUTES } from './routes/index';
import '~/common/styles/base.scss'

createApp(App)
  .use(
    createRouter({
      history: createWebHashHistory(),
      routes: ROUTES,
    }),
  )
  .mount('#app');