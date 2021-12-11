<template>
  <n-data-table :columns="columns" :data="data" :row-key="rowKey" />
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
onMounted(() => {});

const rowKey = (row) => row.index;

const columns = [
  {
    type: "selection",
  },
  {
    title: "name",
    key: "name",
  },
  {
    title: "index",
    key: "index",
  },
];

const data = [
  {
    name: "07akioni",
    index: "07",
    children: [
      {
        name: "08akioni",
        index: "08",
        children: [
          {
            name: "09akioni",
            index: "09",
          },
          {
            name: "10akioni",
            index: "10",
          },
        ],
      },
    ],
  },
  {
    name: "11akioni",
    index: "11",
  },
];
</script>
<style lang="less" scoped>
</style>