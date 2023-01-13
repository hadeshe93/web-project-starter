/*
 * @Description   :
 * @usage         :
 * @Date          : 2022-04-24 10:14:11
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe93<hadeshe93@gmail.com>
 * @LastEditTime  : 2022-04-24 10:16:59
 * @FilePath      : /webpack5-starter/packages/webpack5-starter-vue3/utils/cookie.js
 */

export function get(key, oriCookie) {
  let cookie = typeof oriCookie !== 'string' ? '' : oriCookie;
  if (typeof window !== 'undefined') {
    cookie = typeof oriCookie === 'undefined' ? document.cookie : '';
  }

  const r = new RegExp(`(?:^|;\\s*)${key}=([^;]*)`);
  const m = cookie.match(r);
  return m?.[1] || '';
}
