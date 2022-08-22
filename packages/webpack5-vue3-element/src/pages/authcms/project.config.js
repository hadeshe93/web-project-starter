const { VueLoaderPlugin } = require('vue-loader');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  page: {
    title: 'vue 标题',
    description: 'vue 描述',
    useFlexible: false
  },
  build: {
    frameworkType: 'vue-element'
  },
  plugins: {
    webpackConfigHooks: [
      {
        pluginName: 'autoImport',
        hooks: {
          devServer(options) {
            options.port = 3004;
            options.headers = {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
              'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
            };
            // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
            options.historyApiFallback = true;
            return options;
          },
          async plugins(plugins) {
            const posToInsert =
              plugins.findIndex((plugin) => plugin instanceof VueLoaderPlugin) + 1;
            plugins.splice(
              posToInsert,
              0,
              // @ts-ignore
              AutoImport({
                resolvers: [ElementPlusResolver()]
              }),
              // @ts-ignore
              Components({
                resolvers: [ElementPlusResolver()]
              })
            );
            return plugins;
          }
        }
      }
    ]
  }
};
