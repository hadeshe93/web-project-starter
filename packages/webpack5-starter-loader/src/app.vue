<template>
  <div class="view-app">
    <div class="zone">
      <h2>双向数据绑定</h2>
      count 值: {{ cnt }} 
      <button @click="addCnt">Click</button>
    </div>
    
    <div class="zone">
      <h2>读取 txt 文档</h2>
      {{ text }}
    </div>
    
    <div class="zone">
      <h2>读取并渲染 markdown</h2>
      <div v-html="readme"></div>
    </div>
  </div>
</template>

<script setup>
import text from './text.txt';
import readme from './readme.md';
import { ref } from 'vue';

const cnt = ref(0);
const addCnt = () => {
  cnt.value += 1;
  console.log('cnt value: ', cnt);
};
</script>

<style lang="scss">
.view-app {
  padding: 6px;
  button {
    width: 80px;
    height: 30px;
    padding: 0;
    line-height: 30px;
    text-align: center;
  }
}

.zone {
  padding-bottom: 20px;
  border-bottom: 0.5px solid #c0c0c0;
}
.zone:not(:first-child) {
  margin-top: 20px;
}
</style>