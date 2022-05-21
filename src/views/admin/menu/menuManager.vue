<template>
  <div id="menuTable">
    <n-data-table ref="tableRef"
                  :columns="columns"
                  :data="data"
                  :max-height="620"
                  :pagination="pagination"
                  :row-key="rowKey"
                  size="large"
                  striped
    />
  </div>
</template>
<script setup>
import {useLoadingBar} from "naive-ui";
import {onMounted, reactive, ref, useAttrs, useSlots,} from "vue";

// 父组件传递的值
const props = defineProps({
  msg: String,
});

// 用于提交事件的函数
const emit = defineEmits({});
const tableRef = ref(null);
// 插槽内容
const slots = useSlots();
// 当前组件标签上声明的属性
const attrs = useAttrs();
const loadingBar = useLoadingBar();
//结束加载条
loadingBar.finish();
onMounted(() => {
});

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

let dataMap = {
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
}


// 渲染的数据
let data = [
  {
    name: "11akioni",
    index: "11",
  },
];
for (let i = 0; i < 50; i++) {
  data.push(dataMap)
}

const pagination = reactive({
  pageSize: 5,
});


console.log(tableRef)
</script>
<style>
#menuTable {
  width: 100%;
  padding-bottom: 2px;
  height: 718px;
}
</style>