/*
 * @Description   : webpack 构建配置
 * @usage         : 
 * @Date          : 2022-04-19 09:30:01
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe93<hadeshe93@gmail.com>
 * @LastEditTime  : 2022-04-26 08:39:25
 * @FilePath      : /webpack5-starter/packages/webpack5-starter-vue3/configs/webpack.config.js
 */

const { resolve: pathResolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE_DEVELOPMENT = 'development';

const resolve = (pathname) => pathResolve(__dirname, '../', pathname);
const mode = process.env.MODE || MODE_DEVELOPMENT;
const isDevMode = mode === MODE_DEVELOPMENT;
const styleLoader = isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader;

const config = {
  mode,
  entry: {
    app: resolve('src/main.js'),
  },
  module: {
    rules: [
      // { test: /\.txt$/, loader: resolve('configs/loaders/customed-loader.js') },
      // { test: /\.txt$/, use: ['customed-loader'] },
      {
        test: /\.txt$/,
        use: [{
          loader: resolve('configs/loaders/customed-loader-last.js'),
          options: {
            key: 'value-last'
          },
        }, {
          loader: resolve('configs/loaders/customed-loader.js'),
          options: {
            key: 'value'
          },
        }],
      },
      {
        test: /\.md$/,
        use: [{
          loader: resolve('configs/loaders/md-highlight-loader.js'),
        }],
      },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [styleLoader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [styleLoader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.(png|svg|jpg|jpeg|gif|eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 100,
              name: 'assets/images/[name].[hash].[ext]',
              esModule: false
            }
          }
        ],
        type: 'javascript/auto'
      },
    ],
  },
  resolveLoader: {
    modules: [
      // resolve('../node_modules'),
      'node_modules',
      // 为了让 webpack 能够识别 loaders 目录下的自定义 loader
      resolve('./configs/loaders'),
    ]
  },
  devServer: {
    hot: true,
    port: 8200,
  },
  plugins: [
    new VueLoaderPlugin(),
    ...( isDevMode ? [] : [new MiniCssExtractPlugin()] ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html'),
    }),
  ],
}

module.exports = config;
