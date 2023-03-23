import { defineProjectConfig } from '@hadeshe93/builder-webpack';

export default defineProjectConfig({
  page: {
    title: 'redux-traditional-usage',
    description: 'redux-traditional-usage 的描述',
    useInjection: {
      flexible: true,
    }
  },
  build: {
  },
  middlewares: [
    ['@hadeshe93/wpconfig-mw-react17'],
  ],
});
