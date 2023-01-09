const { defineProjectConfig } = require('@hadeshe93/builder-webpack');

module.exports = defineProjectConfig({
  page: {
    title: 'Demo2 | webpack5-react-antd',
    description: 'demo2 的描述',
    useFlexible: false,
  },
  build: {
  },
  middlewares: [
    ['@hadeshe93/wpconfig-mw-react17'],
  ],
});
