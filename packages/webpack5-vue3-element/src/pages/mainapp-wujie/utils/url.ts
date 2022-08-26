import { MICRO_APPS_MAP } from '../configs/micro-apps';

export function getMicroAppUrl(microAppName: string) {
  const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
  return MICRO_APPS_MAP[microAppName][env].url;
}