<template>
  <div class="view-app">
    count 值: {{ cnt }} 
    <button @click="addCnt">Click</button>

    <Log />
    <Pannel title="大漠孤烟直" content="君不见黄河之水天上来君不见黄河之水天上来君不见黄河之水天上来君不见黄河之水天上来" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Pannel from './components/pannel.vue';
import Log from './components/log.vue';

const cnt = ref(0);
const addCnt = () => {
  cnt.value += 1;
  console.log('cnt value: ', cnt);
};
</script>

<style lang="scss">
.view-app {
  button {
    width: 80px;
    height: 30px;
    padding: 0;
    line-height: 30px;
    text-align: center;
  }
}
</style>