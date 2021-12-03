<template>
  <div id="adminIndexDiv">
    <n-space vertical>
      <!-- <n-space> <n-switch v-model:value="inverted" />inverted</n-space> -->
      <!-- 头部 -->
      <adminHeader></adminHeader>
      <n-layout has-sider>
        <adminCenterRight
          :resourceChild="resource"
        ></adminCenterRight>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import { defineComponent, h, ref, toRefs, reactive } from "vue";

import adminHeader from "./adminHeader.vue";
import adminCenterRight from "./adminCenter.vue";

export default defineComponent({
  components: {
    adminHeader,
    adminCenterRight,
  },
  setup() {
    //标题
    $("#BlogTitle").html("Vogelfrei-后台管理");
    const data = reactive({
      resource: [
        {
          _id: "1",
          title: "首页",
          code:"home",
          link: "/",
        },
        {
          _id: "2",
          title: "首页2",
          code:"home2",
          link: "/",
        },
      ],
    });


    return {
      ...toRefs(data),
    };
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
