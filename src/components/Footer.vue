<template>
  <n-layout-footer>
    <!-- 渐变文字 -->
    <n-gradient-text
      @click="beian"
      gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
    >京ICP备2021033955</n-gradient-text>
    <n-gradient-text
      gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
    >Copyright © 2020 - 2021</n-gradient-text>
    <n-gradient-text
      @click="toHome"
      gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
      style="padding: 0px;"
    >MrSong's Blog</n-gradient-text>
  </n-layout-footer>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => {});
    return {
      beian() {
        window.open("https://beian.miit.gov.cn/", "_blank");
      },
      toHome() {
        window.location.href = import.meta.env.VITE_ENV_FORE_URL;
      },
    };
  },
});
</script>
<style>
.n-layout-footer .n-gradient-text {
  padding: 10px;
  /* cursor:pointer; */
}
</style>
