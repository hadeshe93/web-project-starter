import merge from 'lodash/merge';
import { fetchWithoutCredentials } from '../utils/fetch';
import { getConstructionEnv } from '../utils/env';

import type { cacheOptions as CacheOptions, preOptions as PreOptions } from 'wujie';

type MicroAppConfig = CacheOptions | PreOptions;
type MicroAppConfigMap<T = Partial<MicroAppConfig>> = Record<'development' | 'production', T>;
type MicroAppConfigKey = keyof CacheOptions | keyof PreOptions;

const getMergedConfig = (
  commonConfig: Partial<MicroAppConfig>,
  multiEnvConfigMap: MicroAppConfigMap
): MicroAppConfig => {
  const env = getConstructionEnv();
  const theEnvConfig = multiEnvConfigMap[env] || {};
  return merge({}, commonConfig, theEnvConfig) as MicroAppConfig;
};

const getWrappedValueFromObject = (key: MicroAppConfigKey, object: any, defaultValue?: any) => {
  if (Object.prototype.hasOwnProperty.call(object, key)) return { [key]: object[key] };
  if (typeof defaultValue === 'undefined') return {};
  return { [key]: defaultValue };
}

function getFormattedMicroAppConfig<T>(microAppConfig: Partial<MicroAppConfig>, keys: [MicroAppConfigKey, any?][]): T {
  return keys.reduce((sum, tuple) => {
    const args = [tuple[0], microAppConfig];
    if (tuple.length > 1) {
      args.push(tuple[1]);
    }
    sum = merge(sum, getWrappedValueFromObject.apply(null, args));
    return sum;
  }, {} as T);
}

/**
 * 获取格式化之后的用于 setupApp 接口的微应用配置
 *
 * @export
 * @param {MicroAppConfig} microAppConfig
 * @returns 用于 setupApp 接口的微应用配置
 */
export function getFormattedSetupAppConfig(microAppConfig: Partial<MicroAppConfig>): CacheOptions {
  const keys: [MicroAppConfigKey, any?][] = [
    ['url', ''],
    ['name', ''],
    ['exec'],
    ['el'],
    ['sync'],
    ['prefix'],
    ['replace'],
    ['fetch'],
    ['props'],
    ['attrs'],
    ['fiber'],
    ['alive'],
    ['degrade'],
    ['plugins'],
    ['beforeLoad'],
    ['beforeMount'],
    ['afterMount'],
    ['beforeUnmount'],
    ['afterUnmount'],
    ['activated'],
    ['deactivated'],
    ['loadError'],
  ];
  return getFormattedMicroAppConfig<CacheOptions>(microAppConfig, keys);
}

/**
 * 获取格式化之后的用于 preloadApp 接口的微应用配置
 *
 * @export
 * @param {MicroAppConfig} microAppConfig
 * @returns 用于 preloadApp 接口的微应用配置
 */
export function getFormattedPreloadAppConfig(microAppConfig: Partial<MicroAppConfig>): CacheOptions {
  const keys: [MicroAppConfigKey, any?][] = [
    ['url', ''],
    ['name', ''],
    ['exec'],
    ['replace'],
    ['fetch'],
    ['props'],
    ['attrs'],
    ['fiber'],
    ['alive'],
    ['degrade'],
    ['plugins'],
    ['beforeLoad'],
    ['beforeMount'],
    ['afterMount'],
    ['beforeUnmount'],
    ['afterUnmount'],
    ['activated'],
    ['deactivated'],
    ['loadError'],
  ];
  return getFormattedMicroAppConfig<CacheOptions>(microAppConfig, keys);
}

/**
 * 获取默认的微应用综合配置
 *
 * @returns 默认的微应用综合配置
 */
export function getDefaultMicroAppConfig(): MicroAppConfig {
  return {
    url: '',
    name: '',
    sync: true,
    exec: true,
    alive: true,
    degrade: false,
    fetch: fetchWithoutCredentials,
  };
}

// 导出综合的微应用配置映射表
export const MICRO_APPS_MAP = {
  authcms: getMergedConfig(
    {
      ...getDefaultMicroAppConfig(),
      name: 'authcms',
    },
    {
      development: {
        url: '//localhost:3004/'
      },
      production: {
        url: '//static.hadeshez.com/vise/webpack5-vue3-element/authcms/'
      }
    }
  ),
  seafood: getMergedConfig(
    {
      ...getDefaultMicroAppConfig(),
      name: 'seafood',
    },
    {
      development: {
        url: '//localhost:3006/'
      },
      production: {
        url: '//static.hadesz.com/seafood/'
      }
    }
  ),
};
