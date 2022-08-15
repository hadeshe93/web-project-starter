module.exports = {
  // 启用缓存机制以防止在重新打包未更改的模块时进行二次编译
  // cacheDirectory: true,
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        // 将ES6 Module的语法交给Webpack本身处理
        modules: false
      }
    ],
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        allExtensions: false
      }
    ],
  ],
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }], require.resolve('react-refresh/babel')]
};
