<template>
  <div id="test4">测试页面4444444</div>
</template>
<script setup>
import { useLoadingBar } from "naive-ui";
import {
  defineComponent,
  h,
  ref,
  useSlots,
  useAttrs,
  reactive,
  nextTick,
  computed,
  onMounted,
  onUnmounted,
} from "vue";

const props = defineProps({
  msg: String,
});

// 用于提交事件的函数
const emit = defineEmits({});
// 插槽内容
const slots = useSlots();
// 当前组件标签上声明的属性
const attrs = useAttrs();


const loadingBar = useLoadingBar();
//结束加载条
loadingBar.finish();
</script>
<style lang="less" scoped>
</style>