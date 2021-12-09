<template>
  <div id="wellcome">欢迎页</div>
</template>
<script>
import { useLoadingBar } from "naive-ui";
export default {
  name: "wellcome",
  //组件创建
  created() {
    const loadingBar = useLoadingBar();
    //结束加载条
    loadingBar.finish();
  },
  mounted() {
      const loadingBar = useLoadingBar();
      console.log(loadingBar)
    //结束加载条
    loadingBar.finish();
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>