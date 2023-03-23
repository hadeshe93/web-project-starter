<script setup lang="ts">
import vueSvgSrc from '~/common/assets/vue.svg';
import viteSvgSrc from '~/common/assets/vite.svg';
import HelloWorld from '~/common/components/HelloWorld.vue'
</script>

<template>
  <div class="logo-wrapper">
    <a href="https://vitejs.dev" target="_blank">
      <img :src="viteSvgSrc" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="vueSvgSrc" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss" scoped>
.logo-wrapper {
  margin-top: 100px;
}
.logo {
  height: 150px;
  padding: 20px;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 30px #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 30px #42b883aa);
}
</style>
