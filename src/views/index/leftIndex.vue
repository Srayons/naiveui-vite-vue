<template>
  <div>
    <n-card v-for="k in 10" class="cardStyle"></n-card>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";

export default defineComponent({
  setup() {
    //页面加载完
    // onMounted(() => {
    //   // 获取当前浏览器宽高
    //   let screenWidth = document.body.clientWidth;
    //   let screenHeight = document.body.clientHeight;
    //   // let clientWidth = ref(document.body.clientWidth).value;
    //   //加载完毕执行响应布局
    //   if (
    //     ref(document.body.clientWidth).value > 1280 &&
    //     ref(document.body.clientWidth).value < 1536
    //   ) {
    //     console.log("窗小于1536");
    //     refLeft.value.$el.attributes.style.value = "display:none;";
    //   }
    //   if (ref(document.body.clientWidth).value < 1280) {
    //     console.log("窗口小于1280");
    //     refLeft.value.$el.attributes.style.value = "display:none;";
    //   }

    //   // 监听窗口变化
    //   window.onresize = () => {
    //     return (() => {
    //       // 重新赋值最新窗口数据
    //       let screenWidth = document.body.clientWidth;
    //       let screenHeight = document.body.clientHeight;
    //       // console.log(this.screenWidth + "--" + this.screenHeight);
    //       if (ref(screenWidth).value > 1280 && ref(screenWidth).value < 1536) {
    //         console.log("窗口变化----小于1536");
    //         refLeft.value.$el.attributes.style.value = "display:none;";

    //         // refRigth.value.$el.attributes.style.value = "display:none;";
    //       }
    //       if (ref(screenWidth).value < 1280) {
    //         console.log("窗口变化----小于1280");
    //         refLeft.value.$el.attributes.style.value = "display:none;";
    //       }
    //     })();
    //   };
    // });

    return {};
  },
  data() {
    return {
      LeftSpan: "1",
    };
  },
});
</script>
