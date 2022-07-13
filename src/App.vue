<template>
  <!-- <n-scrollbar> -->
  <n-loading-bar-provider>
    <n-message-provider>
      <!-- <index></index> -->
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </n-message-provider>
  </n-loading-bar-provider>
  <!-- </n-scrollbar> -->
</template>

<script setup>
// import index from "./views/index.vue";
//标题

$("#BlogTitle").html("个人学习笔记 ---MrSong's Blog");
</script>
