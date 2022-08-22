module.exports = {
  page: {
    title: 'vue 标题',
    description: 'vue 描述',
  },
  build: {
    frameworkType: 'vue',
    useBundleAnalyzer: {
      analyzerMode: 'static',
    },
  },
  plugins: {
    webpackConfigHooks: [{
      pluginName: 'selfPlugin',
      hooks: {
        devServer(options) {
          if (options) {
            // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
            options.historyApiFallback = true;
          }
          return options;
        },
      },
    }],
  },
};