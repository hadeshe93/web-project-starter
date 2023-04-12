import path from 'path';
import { defineProjectConfig } from '@hadeshe93/builder-vite';

export default defineProjectConfig(({ mode }) => ({
  page: {
    title: 'demo1',
    description: 'demo1 的描述',
    useInjection: {
      flexible: true,
      debugger: mode === 'development',
      pageSpeedTester: true,
    },
  },
  build: {
    devPort: 3000,
  },
  middlewares: [
    ['@hadeshe93/vtconfig-mw-solid'],
    [
      (options: any) => (chainConfig) => {
        chainConfig.resolve.alias.merge(options.alias);
        return chainConfig;
      },
      {
        alias: {
          '@': path.resolve(__dirname, './'),
          '~': path.resolve(__dirname, '../../'),
        }
      }
    ]
  ],
}));
