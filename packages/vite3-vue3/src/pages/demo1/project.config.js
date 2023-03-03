const { defineProjectConfig } = require('@hadeshe93/builder-vite');

module.exports = defineProjectConfig({
  page: {
    title: 'demo1',
    description: 'demo1 的描述',
    useFlexible: true,
  },
  build: {},
  middlewares: [
    ['@hadeshe93/vtconfig-mw-vue3']
  ],
});
