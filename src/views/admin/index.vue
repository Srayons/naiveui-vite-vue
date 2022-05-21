<template>
  <div id="adminIndexDiv">
    <n-space :size="0" vertical>
      <!-- <n-space> <n-switch v-model:value="inverted" />inverted</n-space> -->
      <!-- 头部 -->
      <adminHeader></adminHeader>
      <n-layout has-sider>
        <adminCenterRight></adminCenterRight>
      </n-layout>
    </n-space>
  </div>
</template>

<script setup>
import {useLoadingBar} from "naive-ui";

const loadingBar = useLoadingBar();
//开始加载动画
loadingBar.start();
//标题
$("#BlogTitle").html("Vogelfrei-后台管理");
</script>
<style>
#adminIndexDiv .n-layout-sider {
  background-color: var(--color);
}

#adminIndexDiv .n-menu {
  height: calc(100vh);
}
</style>
