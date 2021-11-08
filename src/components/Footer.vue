<template>
  <n-layout-footer >
    <!-- 渐变文字 -->
    <n-gradient-text @click="beian" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
      京ICP备2021033955
    </n-gradient-text>
    <n-gradient-text  gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
      Copyright © 2020 - 2021 Mr's song. All Rights Reserved.
    </n-gradient-text>
  </n-layout-footer>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => {});
    return {
      beian(){
        location.href = "https://beian.miit.gov.cn/"
      }
    };
  },
});
</script>
<style>
.n-layout-footer .n-gradient-text{
  padding: 10px;
  cursor:pointer;
}
</style>
