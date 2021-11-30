<template>
  <n-layout>
    <loginHeader></loginHeader>
    <!-- 中间部分 -->
    <loginCenter></loginCenter>
    <!-- 底部 -->
    <pub-footer></pub-footer>
  </n-layout>
</template>
<style>
#loginCenter {
  background-image: url("../../img/LB.jpg");
  background-position: 50%;
  width: 100%;
  height: 100%;
}

#loginCenter .n-card {
  width: 20%;
  top: 20%;
  left: 60%;
  position: absolute;
  background: hsla(0, 0%, 100%, 0.9);
  opacity: 0.8;
}
#loginCenter .n-card .n-card__content {
  width: 100%;
}
</style>
<script>
import loginHeader from "./loginHeader.vue";
import loginCenter from "./loginCenter.vue";
import PubFooter from "../../components/Footer.vue";
import { defineComponent, ref, onMounted, onUpdated } from "vue";
import { useMessage } from "naive-ui";
import { useLoadingBar } from "naive-ui";
export default defineComponent({
  components: {
    loginHeader,
    loginCenter,
    PubFooter,
  },
  setup() {
    window.$message = useMessage();
    const loadingBar = useLoadingBar();
    return {
      /**
       * 点击到热门文章（类似锚点）
       */
      toHome: () => {
        document.getElementById("app").scrollIntoView();
      },
    };
  },
});
</script>
