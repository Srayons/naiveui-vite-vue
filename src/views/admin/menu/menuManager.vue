<template>
  <n-data-table
    striped
    size="large"
    :columns="columns"
    :data="data"
    :row-key="rowKey"
    :pagination="pagination"
  />
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

// 父组件传递的值
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

// 每行的唯一值
const rowKey = (row) => row.index;

// 列名
const columns = [
  {
    type: "selection",
  },
  {
    title: "菜单名称",
    key: "name",
  },
  {
    title: "菜单图标",
    key: "index",
  },
  {
    title: "菜单图标",
    key: "index",
  },
];

// 渲染的数据
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

const pagination = reactive({
  pageSize: 5,
});
</script>
<style lang="less" scoped>
</style>