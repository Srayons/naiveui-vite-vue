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

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import index from "./views/index.vue";
import { useRouter } from "vue-router";
import disableDevtool from "disable-devtool";
import { addListener, launch } from "devtools-detector";

export default defineComponent({
  // components: {
  //   index,
  // },
  setup() {
    //标题
    $("#BlogTitle").html("Vogelfrei ——MrSong's Blog");
    if (process.env.NODE_ENV != "development") {
    onMounted(() => {
      // launch();
      
    });

    }
  },
});
</script>
