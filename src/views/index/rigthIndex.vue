<template>
  <div>
    <n-card v-for="k in 10" hoverable class="cardStyle"></n-card>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";

export default defineComponent({
  setup() {
    
    return {};
  },
  data() {
    return {
      RigthSpan: "2",
    };
  },
});
</script>
