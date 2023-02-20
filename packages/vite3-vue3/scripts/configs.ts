import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pxtorem from 'postcss-pxtorem';
import * as ViteChain from '@hadeshe93/vite-chain';

interface Options {
  pageName: string;
  projectConfig: any;
}

export default function createViteConfig(options: Options) {
  // https://vitejs.dev/config/
  let viteConfig: ReturnType<typeof defineConfig>;
  const { pageName } = options;
  const root = resolve(__dirname, `../src/pages/${pageName}`);
  const base = `/${pageName}/`;
  const cacheDir = resolve(root, '.vite');
  if (false) {
    viteConfig = defineConfig({
      plugins: [vue()]
    });
  } else {
    const PXTOREM_PLUGIN_OPTIONS = {
      rootValue: 75,
      propList: ['*'],
      unitPrecision: 4,
    };
    const chainConfig = new ViteChain.default();
    chainConfig
      // 区分项目目录
      .root(root)
      .base(base)
      // 区分缓存目录，避免项目之间的影响
      .cacheDir(cacheDir)
      .plugin('vue').use(vue()).end();

    // 如果需要响应式像素
    if (options.projectConfig.useFlexible) {
      chainConfig
        .css.postcss({
          plugins: [pxtorem(PXTOREM_PLUGIN_OPTIONS)],
        }).end();
    }

    // 转 vite 配置
    viteConfig = chainConfig.toConfig();
  }
  // console.log(JSON.stringify(viteConfig, null, 2));
  return viteConfig;
}
