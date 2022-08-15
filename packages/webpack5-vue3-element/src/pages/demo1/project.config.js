const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  page: {
    title: 'vue 标题',
    description: 'vue 描述'
  },
  build: {
    frameworkType: 'vue'
  },
  plugins: {
    webpackConfigHooks: [
      {
        pluginName: 'autoImport',
        hooks: {
          async plugins(plugins) {
            console.log('===> plugins:', plugins);
            // plugins.push(
            //   // @ts-ignore
            //   AutoImport({
            //     resolvers: [ElementPlusResolver()]
            //   }),
            //   // @ts-ignore
            //   Components({
            //     resolvers: [ElementPlusResolver()]
            //   })
            // );
            return plugins;
          }
        }
      }
    ]
  }
};
