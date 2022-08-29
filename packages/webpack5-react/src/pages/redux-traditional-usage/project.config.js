module.exports = {
  page: {
    title: 'react 标题',
    description: 'react 描述',
  },
  build: {
    frameworkType: 'react',
  },
  plugins: {
    webpackConfigHooks: [{
      pluginName: 'customed',
      hooks: {
        afterMerge(configs) {
          configs.target = 'web';
          console.log('configs: ', configs);
          return configs;
        }, 
      },
    }],
  },
};