<template>
  <div id="adminIndexDiv">
    <n-space vertical>
      <!-- <n-space> <n-switch v-model:value="inverted" />inverted</n-space> -->
      <!-- 头部 -->
      <adminHeader></adminHeader>
      <n-layout has-sider>
        <!-- 菜单加折叠 -->
        <adminCenterLeft
          :detialsResource="selectedResource"
          :resourceChild="resource"
          @fatherHomeClick="selectResource"
        ></adminCenterLeft>
        <!-- iframe 框架 -->
        <adminCenterRight
          :detialsResource="selectedResource"
          :resourceChild="resource"
          @fatherHomeClick="selectResource"
        ></adminCenterRight>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import { defineComponent, h, ref, toRefs, reactive } from "vue";

import adminHeader from "./adminHeader.vue";
import adminCenterLeft from "./adminCenterLeft.vue";
import adminCenterRight from "./adminCenterRight.vue";

export default defineComponent({
  components: {
    adminHeader,
    adminCenterLeft,
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
    const selectedResource = ref(null);
    const selectResource = (res) => {
      console.log(res);
      //声明一个变量来接收数据
      selectedResource.value = res;
    };

    return {
      ...toRefs(data),
      selectedResource,
      selectResource,
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
