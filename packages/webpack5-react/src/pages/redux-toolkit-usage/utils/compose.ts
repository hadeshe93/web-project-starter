function compose(...fns) {
  return fns.reduce((lastComposedFn, fn) => (...args) => fn(lastComposedFn(...args)));
}

function asyncCompose(...fns) {
  return fns.reduce((lastComposedFn, fn) => async (...args) => await fn(await lastComposedFn(...args)));
}

