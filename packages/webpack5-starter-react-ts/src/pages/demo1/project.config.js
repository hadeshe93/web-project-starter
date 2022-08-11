module.exports = {
  page: {
    title: '标题',
    description: '描述',
  },
  build: {
    framework: 'vue',
    dllEntryMap: {
      vuestack: ['vue', 'vue-router', 'pinia'],
    },
  },
};