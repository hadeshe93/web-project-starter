import { defineProjectConfig } from '@hadeshe93/builder-vite';

export default defineProjectConfig(({ mode }) => ({
  page: {
    title: 'demo2',
    description: 'demo2 的描述',
    useInjection: {
      flexible: true,
      debugger: mode === 'development',
      pageSpeedTester: true,
    },
  },
  build: {},
  middlewares: [
    ['@hadeshe93/vtconfig-mw-vue3']
  ],
}));
