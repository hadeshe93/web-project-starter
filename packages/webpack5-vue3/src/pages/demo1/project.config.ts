import path from 'path';
import { defineProjectConfig } from '@hadeshe93/builder-webpack';

export default defineProjectConfig(({ mode }) => ({
  page: {
    title: 'demo1',
    description: 'demo1 的描述',
    useInjection: {
      flexible: true,
      debugger: mode !== 'production',
      pageSpeedTester: true,
    },
  },
  build: {
  },
  middlewares: [
    ['@hadeshe93/wpconfig-mw-vue3'],
    [
      (options) => (chainConfig) => {
        chainConfig.resolve.alias.merge(options.alias);
        return chainConfig;
      },
      {
        alias: {
          '@': path.resolve(__dirname, './'),
          '~': path.resolve(__dirname, '../../'),
        }
      }
    ],
  ],
}));
