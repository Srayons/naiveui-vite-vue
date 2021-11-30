<template>
  <n-layout>
    <n-card content-style="padding:8px;">
      <n-space>
        <!-- 标签页 -->
        <!--:color="{ color: '#BBB', textColor: '#555', borderColor: '#555' }" -->
        <n-tag
          v-for="(panel,index) in panels"
          :type="panelType"

          :closable="panel.code !== 'home'"
          @close="handleClose(panel, index)"
          @click="changeMenu(panel)"
        >{{panel.title}}</n-tag>
      </n-space>
    </n-card>
  </n-layout>
</template>
<script>
import { defineComponent, h, ref, reactive, computed } from "vue";
import { useMessage } from "naive-ui";
export default defineComponent({
  props: {
    resourceChild: {
      type: Array,
      default: [], //还有一种写法 default ()=>[]
    },
  },
  setup(props, ctx) {
    const message = useMessage();
    const panelType = ref('');
    const panelsRef = props.resourceChild;
    return {
      panelType:panelType,
      checked: ref(false),
      panels: props.resourceChild,
      handleAdd() {
        message.info("添加一个标签。");
        const newValue = {};
        panelsRef.push(newValue);
        nameRef.value = newValue;
      },
      changeMenu(item) {
        panelType.value = 'success'
        console.log(item);
      },
      /**
       * 
       */
      handleClose(item,index) {
        console.log(item)
        console.log(index)
        // const { value: panels } = panelsRef;
        // console.log(panelsRef);
        // message.info("关掉 " + name);
        // const index = panelsRef.findIndex((v) => name === v.title);
        // console.log(index);
        // if (!~index) return;
        // panelsRef.splice(index, 1);
        // if (nameRef.value === name) {
        //   nameRef.value = panels[index];
        // }
      },
    };
  },
});
</script>
