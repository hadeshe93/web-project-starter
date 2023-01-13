const { defineProjectConfig } = require('@hadeshe93/builder-webpack');

module.exports = defineProjectConfig({
  page: {
    title: 'demo1',
    description: 'demo1 的描述',
  },
  build: {},
  middlewares: [['@hadeshe93/wpconfig-mw-vue3']],
});
