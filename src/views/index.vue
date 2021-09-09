<template>
  <n-back-top
    ref="backTop"
    :listen-to="scroll"
    :show="showBackTop"
    to="body"
    :bottom="30"
    :visibility-height="500"
  >
    <div class="text">
      <img
        src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png"
      />
    </div>
  </n-back-top>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
      const backTop = ref(null);
      onMounted(()=>{
          backTop.value.$el.style="heigh:15px";
          backTop._value.cssVars.heigth = "100px"
          console.log(backTop._value)
          console.log(backTop.value.$el.style)
      })
    return {
      backTop,
    };
  },
  data() {
    return {
      h: "600px",
      scroll: scroll,
      showBackTop: true,
      colors: "green",
      hig: "160px",
      wig: "15px",
      font: {
        size: "2em",
      },
    };
  },
});
</script>

<style>
/* 回到顶部样式 */
.n-back-top {
  height: v-bind(hig);
}

.text {
  color: v-bind(colors);
  background-color: red;
  /* expressions (wrap in quotes) */
  font-size: v-bind("font.size");
  height: var(--heigth);
  width: v-bind(wig);
}
</style>
