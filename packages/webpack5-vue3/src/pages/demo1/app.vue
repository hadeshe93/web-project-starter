<template>
  <div class="view-app">
    <div>
      <p>count 值: {{ cnt }}</p>
      <button @click="addCnt">Click</button>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

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