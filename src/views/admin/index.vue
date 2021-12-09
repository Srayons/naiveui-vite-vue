<template>
  <div id="adminIndexDiv">
    <n-space vertical>
      <!-- <n-space> <n-switch v-model:value="inverted" />inverted</n-space> -->
      <!-- 头部 -->
      <adminHeader></adminHeader>
      <n-layout has-sider>
        <adminCenterRight></adminCenterRight>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import { defineComponent, h, ref, toRefs, reactive } from "vue";
import { useLoadingBar } from "naive-ui";
import adminHeader from "./adminHeader.vue";
import adminCenterRight from "./adminCenter.vue";

export default defineComponent({
  components: {
    adminHeader,
    adminCenterRight,
  },
  setup() {
    const loadingBar = useLoadingBar();
    //开始加载动画
    loadingBar.start();
    //标题
    $("#BlogTitle").html("Vogelfrei-后台管理");
    return {};
  },
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
