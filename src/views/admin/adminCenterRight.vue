<template>
  <n-layout>
    <n-tabs
      v-model:value="name"
      type="card"
      :closable="closable"
      @add="handleAdd"
      @close="handleClose"
      tab-style="min-width: 80px;"
    >
      <n-tab-pane
        v-for="panel in panels"
        :key="panel._id"
        :tab="panel.title.toString()"
        :name="panel.title"
      >
        <n-card>
          <!-- 内容 -->
          <span>{{ panel.title }}</span>
        </n-card>
      </n-tab-pane>
    </n-tabs>
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
    const nameRef = ref('首页');
    const message = useMessage();
    // const panelsRef = props.resourceChild;
    console.log(ctx)
    const panelsRef = reactive(props.resourceChild);
    const addableRef = computed(() => {
      return {
        disabled: panelsRef.length >= 10,
      };
    });
    const closableRef = computed(() => {
      return panelsRef.length > 1;
    });
    return {
      panels: props.resourceChild,
      name: nameRef,
      addable: addableRef,
      closable: closableRef,
      handleAdd() {
        message.info("添加一个标签。")
        const newValue = Math.max(...panelsRef) + 1;
        panelsRef.push(newValue);
        nameRef.value = newValue;
      },
      handleClose(name) {
        const { value: panels } = panelsRef;
        console.log(panelsRef);
        message.info("关掉 " + name);
        const index = panelsRef.findIndex((v) => name === v.title);
        console.log(index)
        if (!~index) return
        panelsRef.splice(index, 1);
        if (nameRef.value === name) {
          nameRef.value = panels[index];
        }
      },
    };
  },
});
</script>
