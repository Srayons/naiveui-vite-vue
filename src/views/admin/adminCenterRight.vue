<template>
  <n-layout>
    <n-tabs
      v-model:value="name"
      type="card"
      :closable="closable"
      @close="handleClose"
      @add="handleAdd"
      tab-style="min-width: 80px;"
    >
      <n-tab-pane
        v-for="panel in panels"
        :key="panel"
        :tab="panel.toString()"
        :name="panel"
      >
        <n-card>
          <span>{{ panel }}</span></n-card
        >
      </n-tab-pane>
    </n-tabs>
  </n-layout>
</template>
<script>
import { defineComponent, h, ref,computed  } from "vue";
import { useMessage } from "naive-ui";
export default defineComponent({
  setup() {
    const nameRef = ref(1);
    const message = useMessage();
    const panelsRef = ref([1]);
    const closableRef = computed(() => {
      return panelsRef.value.length > 1
    })
    // function handleClose(name) {
    //   // const { value: panels } = panelsRef;
    //   // console.log(panels[0])
    //   // // if (panels.length === 1) {
    //   // //   message.error("最后一个了");
    //   // //   return;
    //   // // }
    //   // message.info("关掉 " + name);
    //   // const index = panels.findIndex((v) => name === v);
    //   // panels.splice(index, 1);
    //   // if (nameRef.value === name) {
    //   //   nameRef.value = panels[index];
    //   // }
    // }
    return {
      panels: panelsRef,
      name: nameRef,
      closable: closableRef,
      handleAdd () {
        const newValue = Math.max(...panelsRef.value) + 1
        panelsRef.value.push(newValue)
        valueRef.value = newValue
      },
      handleClose (name) {
        const { value: panels } = panelsRef
        const nameIndex = panels.findIndex((panelName) => panelName === name)
        if (!~nameIndex) return
        panels.splice(nameIndex, 1)
        if (name === nameRef.value) {
          nameRef.value = panels[Math.min(nameIndex, panels.length - 1)]
        }
      }
    };
  },
});
</script>
