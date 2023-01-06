const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { defineProjectConfig } = require('@hadeshe93/builder-core');

module.exports = defineProjectConfig({
  page: {
    title: 'QIANKUN',
    description: 'QIANKUN Description',
  },
  build: {
  },
  middlewares: [
    ['@hadeshe93/wpconfig-mw-vue3'],
    [
      () => (chainConfig) => {
        const VUE_LOADER_PLUGIN_NAME = 'VueLoaderPlugin';
        const UNPLUGIN_AUTO_IMPORT_NAME = 'unplugin-auto-import';
        // 该插件不能用 new 实例化，所有要定制初始化方法
        chainConfig.plugin(UNPLUGIN_AUTO_IMPORT_NAME)
          .before(VUE_LOADER_PLUGIN_NAME)
          .use(AutoImport, [{
            resolvers: [ElementPlusResolver()]
          }]);
        chainConfig.plugin(UNPLUGIN_AUTO_IMPORT_NAME)
          .init((Plugin, args) => Plugin(...args));

        const UNPLUGIN_VUE_COMPONENTS_NAME = 'unplugin-vue-components';
        // 该插件不能用 new 实例化，所有要定制初始化方法
        chainConfig.plugin(UNPLUGIN_VUE_COMPONENTS_NAME)
          .before(VUE_LOADER_PLUGIN_NAME)
          .use(Components, [{
            resolvers: [ElementPlusResolver()]
          }]);
        chainConfig.plugin(UNPLUGIN_VUE_COMPONENTS_NAME)
          .init((Plugin, args) => Plugin(...args));

        return chainConfig;
      },
    ]
  ],
});
