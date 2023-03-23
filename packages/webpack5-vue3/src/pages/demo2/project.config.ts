import { defineProjectConfig } from '@hadeshe93/builder-webpack';

export default defineProjectConfig(({ mode }) => ({
  page: {
    title: 'demo2',
    description: 'demo2 的描述',
    useInjection: {
      flexible: true,
      debugger: mode !== 'production',
      pageSpeedTester: true,
    },
  },
  build: {},
  middlewares: [['@hadeshe93/wpconfig-mw-vue3']],
}));
