<template>
  <div id="adminIndexDiv">
    <n-space vertical>
      <!-- <n-space> <n-switch v-model:value="inverted" />inverted</n-space> -->
      <!-- 头部 -->
      <adminHeader></adminHeader>
      <n-layout has-sider>
        <!-- 菜单加折叠 -->
        <adminCenterLeft></adminCenterLeft>
        <!-- iframe 框架 -->
        <adminCenterRight></adminCenterRight>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import { defineComponent, h, ref } from "vue";

import adminHeader from "./adminHeader.vue";
import adminCenterLeft from "./adminCenterLeft.vue";
import adminCenterRight from "./adminCenterRight.vue";

export default defineComponent({
  components: {
    adminHeader,
    adminCenterLeft,
    adminCenterRight,
  },
  setup() {},
});
</script>
<style>
#adminIndexDiv .n-layout-sider {
  background-color: var(--color);
}

#adminIndexDiv .n-menu {
  height: calc(100vh);
}
</style>
