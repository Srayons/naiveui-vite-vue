<template>
  <div id="adminIndexDiv">
    <n-space vertical>
      <!-- <n-space> <n-switch v-model:value="inverted" />inverted</n-space> -->
      <!-- 头部 -->
      <adminHeader></adminHeader>
      <n-layout has-sider>
        <!-- 菜单加折叠 -->
        <adminCenterLeft
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
          title: "新闻1",
          description: "新闻新闻",
          type: "video",
          link: "",
        },
        {
          _id: "2",
          title: "新闻2",
          description: "新闻新闻",
          type: "video2",
          link: "",
        },
        {
          _id: "3",
          title: "新闻3",
          description: "新闻新闻",
          type: "video3",
          link: "",
        },
        {
          _id: "4",
          title: "新闻4",
          description: "新闻新闻4",
          type: "video",
          link: "",
        },
        {
          _id: "5",
          title: "新闻5",
          description: "新闻新闻5",
          type: "video",
          link: "",
        },
        {
          _id: "6",
          title: "新闻6",
          description: "新闻新闻6",
          type: "video",
          link: "",
        },
        {
          _id: "7",
          title: "新闻7",
          description: "新闻新闻7",
          type: "video",
          link: "",
        },
      ],
    });
    const selectedResource = ref(null);
    const selectResource = (res) => {
        console.log(res);
      //声明一个变量来接收数据
      selectedResource.value = res;
    };

    return{
      ...toRefs(data), 
      selectedResource, 
      selectResource
    }
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
