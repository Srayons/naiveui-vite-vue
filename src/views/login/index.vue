<template>
  <n-layout>
    <n-layout-header style="position: inherit;opacity: 1;height: 88px;">颐和园路</n-layout-header>
    <!-- 中间部分 -->
    <loginCenter></loginCenter>
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
import loginCenter from "./loginCenter.vue";
import PubFooter from "../../components/Footer.vue";
import { defineComponent, ref, onMounted, onUpdated } from "vue";
export default defineComponent({
  components: {
    loginCenter,
    PubFooter,
  },
});
</script>