<template>
  <WujieVue
    width="100%"
    height="100%"
    :name="name"
    :url="url"
    :sync="true"
    :fetch="fetch"
    :alive="true"
    :props="props"
    :attrs="attrs"
    :degrade="degrade"
    :beforeLoad="lifecycles['beforeLoad']"
    :beforeMount="lifecycles['beforeMount']"
    :afterMount="lifecycles['afterMount']"
    :beforeUnmount="lifecycles['beforeUnmount']"
    :afterUnmount="lifecycles['afterUnmount']"
    :activated="lifecycles['activated']"
    :deactivated="lifecycles['deactivated']"
    :loadError="lifecycles['loadError']"
    :plugins="plugins"
  ></WujieVue>
</template>

<script lang="ts" setup>
import { cacheOptions as CacheOptions } from 'wujie';

type Lifecycle = (appWindow: Window) => any;
interface Lifecycles {
  beforeLoad?: Lifecycle;
  beforeMount?: Lifecycle;
  afterMount?: Lifecycle;
  beforeUnmount?: Lifecycle;
  afterUnmount?: Lifecycle;
  activated?: Lifecycle;
  deactivated?: Lifecycle;
  loadError?: Lifecycle;
}
// 目前组件内 defineProps 使用的生命无法提出去： https://github.com/vuejs/core/issues/4294
// 最新进展（将在 Vue 3.3 in Q3, 2022 修复）： https://github.com/vuejs/core/issues/4294#issuecomment-1204534444
interface WujieProps {
  name: string;
  url: CacheOptions['url'];
  fetch?: CacheOptions['fetch'];
  props?: CacheOptions['props'];
  attrs?: CacheOptions['attrs'];
  degrade?: CacheOptions['degrade'];
  plugins?: CacheOptions['plugins'];
  lifecycles?: Lifecycles;
}

const props = withDefaults(defineProps<WujieProps>(), {
  name: '',
  url: '',
  degrade: false,
  fetch: () => window.fetch,
  props: () => ({}),
  attrs: () => ({}),
  plugins: () => [],
  lifecycles: () => ({}),
});
</script>
