// 携带登录态 credentials 必须为 include
export function fetchWithCredentials(url, options) {
  return window.fetch(url, { ...options, credentials: "include" });
}

export function fetchWithoutCredentials(url, options) {
  return window.fetch(url, { ...options, credentials: "omit" });
}
