<template>
  <n-back-top
    id="backTop"
    ref="backTop"
    :listen-to="scroll"
    :show="showBackTop"
    to="body"
    :bottom="600"
    :visibility-height="300"
  >
    <!-- <div>
      <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png" />
    </div> -->
  </n-back-top>
  <div class="text">hello</div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup(props, context) {
    const backTop = ref(null);
    const colors = ref("green")
    const hig = ref("100ox")
    onMounted(() => {
      colors.value = "red";
      hig.value = "30px";
      backTop.value.$el.style.setProperty("--height", "100px");
      backTop._value.style.heigth = "100px";
      // document.getElementsByClassName("n-back-top").setProperty("--height", "100px")
      // console.log(document.getElementsByClassName("n-back-top").getPropertyValue("--height"))
      // document.getElementsByClassName("n-back-top").style.heigth = "100px"
      let element = document.getElementById("backTop")
      
      // let style = window.getComputedStyle(element,null );
      // element.style.setProperty("--BackTopHeight", "100px")
      element.style.setProperty("--height", "100px")
      // console.log(window.getComputedStyle(element).getPropertyValue("--BackTopHeight"))
      console.log(element.style.getPropertyValue("--height"))
      console.log(backTop._value.style.heigth)
      console.log(backTop._value);
      console.log(backTop.value.$el.style);
      console.log(backTop);
    });
    return {
      backTop,
      h: "600px",
      scroll: scroll,
      showBackTop: true,
      colors,
      hig
    };
  },
});
</script>

<style>
/* 回到顶部样式 */
.n-back-top {
  height: var(--height)
}

.text {
  color: v-bind(colors);
  background-color: v-bind("colors");
  /* expressions (wrap in quotes) */
  width: v-bind(hig);
}
</style>
