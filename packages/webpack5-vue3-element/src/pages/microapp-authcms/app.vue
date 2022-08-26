<template>
  <div class="view-app">
    <h4>路由导航</h4>
    <ul>
      <li v-for="route in ROUTES">
        <router-link :to="route.path">{{ route.zhName }}</router-link>
      </li>
    </ul>
    <hr />
    <h4>路由界面</h4>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ROUTES } from './routes/index';
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