/*
 * @Description   : webpack 构建配置
 * @usage         : 
 * @Date          : 2022-04-19 09:30:01
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe
 * @LastEditTime  : 2022-07-08 12:32:50
 * @FilePath      : /webpack5-starter/packages/webpack5-starter-vue3-ts/configs/webpack.dll.config.js
 */

const { resolve: pathResolve } = require('path');
const webpack = require('webpack');

const MODE_DEVELOPMENT = 'development';

const resolve = (pathname) => pathResolve(__dirname, '../', pathname);
const mode = process.env.MODE || MODE_DEVELOPMENT;

// 构建入口 map
const ENTRY_MAP = {
  'vue-stack': ['vue', 'vue-router'],
};

// 构建产物目录
const OUTPUT_PATH = resolve('dist/common/');

const config = {
  mode,
  entry: {
    ...ENTRY_MAP,
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name]_[hash:8].js',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash:8]',
      path: pathResolve(OUTPUT_PATH, '[name].mainifest.json'),
    }),
  ],
}

const getDllFilePathMap = () => {
  const keys = Object.keys(ENTRY_MAP);
  const map = new Map();
  for (const key of keys) {
    const manifestJson = require(pathResolve(OUTPUT_PATH, `${key}.mainifest.json`));
    map.set(key, pathResolve(OUTPUT_PATH, `${manifestJson.name}.js`));
  }
  return map;
}

// 定义下 getDllFilePathMap 以备导出，否则直接以键方式赋值的话，webpack 会报错
Object.defineProperty(config, 'getDllFilePathMap', {
  enumerable: false,
  writable: false,
  value: getDllFilePathMap,
});
// 定义下 dllOutputPath 以备导出，否则直接以键方式赋值的话，webpack 会报错
Object.defineProperty(config, 'dllOutputPath', {
  enumerable: false,
  writable: false,
  value: OUTPUT_PATH,
});

module.exports = config;
