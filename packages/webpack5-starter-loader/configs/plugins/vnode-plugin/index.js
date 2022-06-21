const { startServer } = require('./server');

const PLUGIN_NAME = 'VNodePlugin';

class VNodePlugin {
  constructor() {
    startServer();
  }

  apply(compiler) {
    compiler.hooks.run.tap(PLUGIN_NAME, (compilation) => {
      console.log('webpack 构建正在启动！');
    });
  }
}

module.exports = VNodePlugin;