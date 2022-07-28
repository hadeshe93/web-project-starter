/*
 * @Description   : webpack 构建配置
 * @usage         : 
 * @Date          : 2022-04-19 09:30:01
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe
 * @LastEditTime  : 2022-07-27 23:28:16
 * @FilePath      : /webpack5-starter/packages/webpack5-starter-vue3-ts/configs/webpack.config.js
 */

const { resolve: pathResolve } = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { getDllFilePathMap, dllOutputPath } = require('./webpack.dll.config.js');

const MODE_DEVELOPMENT = 'development';

const resolve = (pathname) => pathResolve(__dirname, '../', pathname);
const mode = process.env.MODE || MODE_DEVELOPMENT;
const targetPage = process.env.TARGET_PAGE;
if (!targetPage) {
  console.error('请指定环境变量 TARGET_PAGE 为需要构建的页面名称');
  process.exit(0);
}

const isDevMode = mode === MODE_DEVELOPMENT;
const styleLoader = isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader;

const outputPath = resolve(`dist/${targetPage}/`);
const config = {
  mode,
  entry: {
    app: resolve(`src/pages/${targetPage}/main.ts`),
  },
  output: {
    filename: '[name].[hash:8].js',
    path: outputPath,
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.(j|t)sx?$/,
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
              limit: 1024,
              name: 'assets/images/[name].[hash].[ext]',
              esModule: false
            }
          }
        ],
        type: 'javascript/auto'
      },
    ],
  },
  devServer: {
    hot: true,
    port: 8200,
  },
  resolve: {
    alias: {
      '@': resolve(`src/`),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    ...( isDevMode ? [] : [new MiniCssExtractPlugin()] ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html'),
    }),
    ...( isDevMode ? [] : [
      ...[...getDllFilePathMap().keys()].map(key => new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: pathResolve(dllOutputPath, `${key}.mainifest.json`),
      })),
      new AddAssetHtmlPlugin([...getDllFilePathMap().values()].map(filepath => ({
        publicPath: '../common/',
        outputPath: '../common/',
        filepath,
      }))),
    ]),
  ],
}

module.exports = config;
