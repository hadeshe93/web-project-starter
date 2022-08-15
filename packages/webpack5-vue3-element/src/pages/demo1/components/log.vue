<template>
  <div class="a">
    <div v-if="show" v-for="item in list" :key="item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // show: true,
      list: [1, 2, 3],
    };
  },
  computed: {
    show() {
      return this.list && this.list.length > 0;
    },
  },
  mounted() {
    console.log('mounted', this.$options.render.toString());
  }
}
</script>