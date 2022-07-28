
module.exports = {
  page: {
    title: '调试标题',
    description: '调试描述',
  },
  build: {
    dllEntryMap: {
      'vue-stack': ['vue', 'vue-router', 'pinia'],
    }
  },
};
