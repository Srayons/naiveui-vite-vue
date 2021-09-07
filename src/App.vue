<template>
  <n-loading-bar-provider>
    <index></index>
  </n-loading-bar-provider>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import index from "./views/index.vue";
export default defineComponent({
  components: {
    index,
  }
});


</script>