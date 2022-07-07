<template>
  <div class="pannel">
    <h4 class="pannel-title">{{ props.title }}</h4>
    <div class="pannel-body">{{ props.content }}</div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  content: string;
};
const props = withDefaults(defineProps<Props>(), {
  title: '折叠/展开',
  content: '文案',
});
</script>

<style lang="scss">
.pannel {
  height: auto;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: cadetblue;
  .pannel-title {
    height: 32px;
    line-height: 32px;
    background-color: darken(cadetblue, 10%);
  }
  .pannel-body {
    padding: 20px 6px;
  }
}
</style>