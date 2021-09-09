<template>
  <div>
    <!-- 轮播图 -->
    <n-carousel autoplay trigger="hover" show-arrow>
      <img
        class="carousel-img"
        src="https://s.anw.red/fav/1623979004.jpg!/fw/600/quality/77/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623372884.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623177220.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623152423.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
    </n-carousel>
    <n-space vertical>
      <n-switch v-model:value="loading" />
      <n-card v-for="i in cardLen" hoverable class="cardStyle">
        <template #header :key="i" class="header-Skeleton">
          <n-skeleton text v-if="loading" width="60%" />
          <template v-else>
            <!-- 标题渐变文字 -->
            <n-gradient-text
              gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
            >
              I'm OK
            </n-gradient-text>
          </template>
        </template>
        <n-skeleton class="text-Skeleton" text v-if="loading" :repeat="6" />
        <!-- 内容渐变文字 -->
        <template v-else class="text-Skeleton">
          <n-gradient-text type="info">
            不要忘了留姓名
            <br />电话和其他事情 <br />不要说的太快免得我没写下你大名
            <br />或许你不再打来 <br />我却等到头发白 <br />希望有一天你会打来
          </n-gradient-text>
        </template>
        <!-- 图片骨架 -->
        <n-skeleton class="imgSkeleton" v-if="loading" />
        <!-- 图片 -->
        <template class="imgSkeleton" v-else>
          <n-image
            class="imgSkeleton"
            object-fit="contain"
            src="https://s3.mashiro.top/view/2018/01/03/sakura.pn"
          />
          <!--  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" -->
        </template>
      </n-card>
    </n-space>
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
    //   console.log(screenWidth)

    //   if (ref(document.body.clientWidth).value > 1536) {
    //     console.log("窗口大于1536");
    //     CenterSpan.value = "3";
    //   }
    //   if (
    //     ref(document.body.clientWidth).value > 1280 &&
    //     ref(document.body.clientWidth).value < 1536
    //   ) {
    //     console.log("窗口小于1536");
    //     CenterSpan.value = "4";
    //   }
    //   if (ref(document.body.clientWidth).value < 1280) {
    //     console.log("窗口小于1280");
    //     CenterSpan.value = "3";
    //   }

    //   // 监听窗口变化
    //   window.onresize = () => {
    //     return (() => {
    //       // 重新赋值最新窗口数据
    //       screenWidth = document.body.clientWidth;
    //       screenHeight = document.body.clientHeight;
    //       // console.log(this.screenWidth + "--" + this.screenHeight);
    //       if (ref(screenWidth).value > 1536) {
    //         console.log("窗口变化----大于1536");
    //         CenterSpan.value = "3";
    //       }
    //       if (ref(screenWidth).value > 1280 && ref(screenWidth).value < 1536) {
    //         console.log("窗口变化----小于1536");
    //         CenterSpan.value = "4";
    //         // refRigth.value.$el.attributes.style.value = "display:none;";
    //       }
    //       if (ref(screenWidth).value < 1280) {
    //         console.log("窗口变化----小于1280");
    //         CenterSpan.value = "3";
    //       }
    //     })();
    //   };
    // });

    //页面升级
    onUpdated(() => {
      console.log("onUpdated=====");
    });

    // 不要忘了在return中添加refDiv
    return {
      loading: ref(true), //加载动画
    };
  },
  data() {
    let cardLen = [];
    cardLen.length = 10;
    return {
      cardLenStyle: cardLen.length,
      cardLen,
    };
  },
});
</script>
