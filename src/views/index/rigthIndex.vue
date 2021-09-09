<template>
  <div>
    <n-card v-for="k in 10" hoverable class="cardStyle"></n-card>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";

export default defineComponent({
  setup() {
    //页面加载完
    // onMounted(() => {
    //   var str3 = hex_md5("adc");
    //   console.log(str3);

    //   // 获取当前浏览器宽高
    //   let screenWidth = document.body.clientWidth;
    //   let screenHeight = document.body.clientHeight;
    //   // let clientWidth = ref(document.body.clientWidth).value;
    //   //加载完毕执行响应布局
    //   if (ref(document.body.clientWidth).value < 1280) {
    //     console.log("窗口小于1280");
    //     refRigth.value.$el.attributes.style.value = "display:none;";
    //   }

    //   // 监听窗口变化
    //   window.onresize = () => {
    //     return (() => {
    //       // 重新赋值最新窗口数据
    //       screenWidth = document.body.clientWidth;
    //       screenHeight = document.body.clientHeight;
    //       // console.log(this.screenWidth + "--" + this.screenHeight);
    //       if (ref(screenWidth).value < 1280) {
    //         console.log("窗口变化----小于1280");
    //         refRigth.value.$el.attributes.style.value = "display:none;";
    //       }
    //     })();
    //   };
    // });

    return {};
  },
  data() {
    return {
      RigthSpan: "2",
    };
  },
});
</script>
