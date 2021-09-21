<template>
  <n-loading-bar-provider>
    <n-message-provider>
    <index></index>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import index from "./views/index.vue";


export default defineComponent({
  components: {
    index,
  },
  setup() {
    
  },
});
</script>
