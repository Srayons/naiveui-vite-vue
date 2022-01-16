<template>
  <n-layout-header style="position: inherit; opacity: 1; height: 88px">
    <div id="A-h-gradint" style="display: inline-flex;">
      <!-- 渐变文字 -->
      <n-gradient-text
        gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
        @click="toHome"
      >MrSong's Blog</n-gradient-text>
      <n-gradient-text
        gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
        @click="toAdminHome"
      >&nbsp;&nbsp;&nbsp;欢迎管理员登录</n-gradient-text>
    </div>
  </n-layout-header>
</template>
<script setup>
import { useRouter } from "vue-router";
import { defineComponent, ref, onMounted, onUpdated } from "vue";

const router = useRouter();

const toHome = () => {
  window.location.href = import.meta.env.VITE_ENV_FORE_URL;
};
const toAdminHome = () => {
  window.location.reload(true);
};
</script>