const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { startServer } = require('./server');
const { debug } = require('./utils/debug');

const PLUGIN_NAME = 'VNodePlugin';
const INJECT_SCRIPT_PATH = path.resolve(__dirname, './template/inject.script.js');
const fileCacheMap = new Map();

class VNodePlugin {
  constructor() {
    this.startServerPromise = startServer();
    this.watcher = this.startWatcher();
  }

  startWatcher() {
    const onChange = (path) => {
      const content = fs.readFileSync(path, 'utf-8');
      fileCacheMap.set(path, content);
    };
    
    const watcher = chokidar.watch(INJECT_SCRIPT_PATH);
    watcher.on('change', onChange);
    onChange(INJECT_SCRIPT_PATH);
    return watcher;
  }

  async getAppendPartialHtml() {
    let content = fileCacheMap.get(INJECT_SCRIPT_PATH);
    if (!content) content = fs.readFileSync(INJECT_SCRIPT_PATH, 'utf-8');
    const server = await this.startServerPromise;
    content = content.replace('${PLACEHOLDER_PORT}', server.locals.port);
    return `<script>${content}</script>`;
  }

  apply(compiler) {
    debug('加载插件');
    compiler.hooks.afterCompile.tapAsync(PLUGIN_NAME, (compilation, callback) => {
      // 监听注入的脚本文件，可以达到重新编译的效果
      compilation.fileDependencies.add(INJECT_SCRIPT_PATH);
      callback();
    });
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(PLUGIN_NAME, async (data, cb) => {
        // Manipulate the content
        const newContent = await this.getAppendPartialHtml();
        data.html = data.html.replace('</body>', `${newContent}</body>`);
        // Tell webpack to move on
        cb(null, data);
      });
    });
  }
}

module.exports = VNodePlugin;