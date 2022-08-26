import merge from 'lodash/merge';
import { RegistrableApp } from 'qiankun';
import { getConstructionEnv } from '../utils/env';


type MicroAppConfig = RegistrableApp<{[key: string]: any}>;
type MicroAppConfigMap<T = Partial<MicroAppConfig>> = Record<'development' | 'production', T>;

const getMergedConfig = (
  commonConfig: Partial<MicroAppConfig>,
  multiEnvConfigMap: MicroAppConfigMap
): MicroAppConfig => {
  const env = getConstructionEnv();
  const theEnvConfig = multiEnvConfigMap[env] || {};
  return merge({}, commonConfig, theEnvConfig) as MicroAppConfig;
};


/**
 * 获取默认的微应用综合配置
 *
 * @returns 默认的微应用综合配置
 */
export function getDefaultMicroAppConfig(): MicroAppConfig {
  const config = {
    name: '',
    entry: '',
    container: '#qiankun-mirco-apps-container',
    activeRule: '',
    loader(loading: boolean) {
      console.log(`[Qiankun 主应用] 微应用加载：${config.name} | ${loading}`);
    },
  };
  return config;
}

// 导出综合的微应用配置列表
export const MICRO_APPS = [
  getMergedConfig(
    {
      ...getDefaultMicroAppConfig(),
      name: 'authcms',
      activeRule: '/page/authcms',
    },
    {
      development: {
        entry: '//localhost:3004/'
      },
      production: {
        entry: '//static.hadeshez.com/vise/webpack5-vue3-element/authcms/'
      }
    }
  ),
  // getMergedConfig(
  //   {
  //     ...getDefaultMicroAppConfig(),
  //     name: 'seafood',
  //     activeRule: '/page/seafood',
  //   },
  //   {
  //     development: {
  //       entry: '//localhost:3006/'
  //     },
  //     production: {
  //       entry: '//static.hadesz.com/seafood/'
  //     }
  //   }
  // ),
];
