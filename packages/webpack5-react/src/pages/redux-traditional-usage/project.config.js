const { defineProjectConfig } = require('@hadeshe93/builder-webpack');

module.exports = defineProjectConfig({
  page: {
    title: 'redux-traditional-usage',
    description: 'redux-traditional-usage 的描述',
  },
  build: {
  },
  middlewares: [
    ['@hadeshe93/wpconfig-mw-react17'],
  ],
});
