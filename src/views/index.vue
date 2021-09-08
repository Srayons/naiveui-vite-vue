<template>
  <n-space vertical size="large" >
    <n-layout >
      <pub-header></pub-header>
      <n-layout-content content-style="padding: 24px;">
        <n-grid cols="1 s:1 m:1 l:6 xl:6 2xl:6" responsive="screen">
          <n-grid-item :span="LeftSpan" id="refLeft" ref="refLeft">
            <div>
              <n-card v-for="k in 10" class="cardStyle"></n-card>
            </div>
          </n-grid-item>
          <n-grid-item :span="CenterSpan" id="refCenter" ref="refCenter">
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
                <n-switch  v-model:value="loading" />
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
                  <n-skeleton
                    class="text-Skeleton"
                    text
                    v-if="loading"
                    :repeat="6"
                  />
                  <!-- 内容渐变文字 -->
                  <template v-else class="text-Skeleton">
                    <n-gradient-text type="info">
                      不要忘了留姓名
                      <br />电话和其他事情 <br />不要说的太快免得我没写下你大名
                      <br />或许你不再打来 <br />我却等到头发白
                      <br />希望有一天你会打来
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
          </n-grid-item>
          <n-grid-item :span="RigthSpan" id="refRigth" ref="refRigth">
            <div>
              <n-card v-for="k in 10" hoverable class="cardStyle"></n-card>
            </div>
          </n-grid-item>
        </n-grid>
      </n-layout-content>
      <pub-footer></pub-footer>
    </n-layout>
  </n-space>
  <n-back-top :listen-to="scroll" :show="showBackTop" to="body" :bottom="100" :visibility-height="300"></n-back-top>
</template>
<script>
import { defineComponent, ref, onMounted,onUpdated } from "vue";
import { useLoadingBar } from "naive-ui";
import PubHeader from "../components/Header.vue";
import PubFooter from "../components/Footer.vue";

const refLeft = ref(null);
const refCenter = ref(null);
const refRigth = ref(null);
const showBackTop = ref(true);

const LeftSpan = ref("1");
const CenterSpan = ref("3");
const RigthSpan = ref("2");

let cardLen = [];
cardLen.length = 10;

export default defineComponent({
  components: {
    PubHeader,
    PubFooter,
  },
  data() {
    return {
      cardLenStyle: cardLen.length,
      cardLen,
      colors: "red",
      LeftSpan: "1",
      CenterSpan: "3",
      RigthSpan: "2",
    };
  },
  setup() {
    const loadingBar = useLoadingBar();
    //开始加载动画
    loadingBar.start();
    //页面加载完
    onMounted(() => {
      console.log("finish")
      loadingBar.finish();
      let clientWidth = ref(document.body.clientWidth).value;
      //更改属性
      if (
        ref(document.body.clientWidth).value > 1280 &&
        ref(document.body.clientWidth).value < 1536
      ) {
        console.log("窗小于1536");
        refLeft.value.$el.attributes.style.value = "display:none;";
        CenterSpan.value = "4";
      }
      if (ref(document.body.clientWidth).value < 1280) {
        console.log("窗口小于1280");
        CenterSpan.value = "3";
        refLeft.value.$el.attributes.style.value = "display:none;";
        refRigth.value.$el.attributes.style.value = "display:none;";
      }
    });


    //页面升级
    onUpdated(()=>{
      console.log("onUpdated=====")
    })

    //滚动条事件
    window.onscroll = () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 200) {
        showBackTop.value = true;
      } else {
        showBackTop.value = false;
      }
    };
    // 不要忘了在return中添加refDiv
    return {
      loading: ref(true), //加载动画
      show: ref(true),
      refLeft, //ref左侧标识
      refCenter, //ref中间侧标识
      refRigth, //ref右侧标识
      LeftSpan, //左侧Span
      CenterSpan, //中间Span
      RigthSpan, //右侧Span
      scroll: scroll, //回到顶部
      showBackTop,
    };
  },
  mounted() {
    var str3 = hex_md5("adc");
    console.log(str3);
    // 获取当前浏览器宽高
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    // 监听窗口变化
    window.onresize = () => {
      return (() => {
        // 重新赋值最新窗口数据
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        // console.log(this.screenWidth + "--" + this.screenHeight);
        if (ref(this.screenWidth).value > 1536) {
          console.log("窗口变化----大于1536");
          CenterSpan.value = "3";
        }
        if (
          ref(this.screenWidth).value > 1280 &&
          ref(this.screenWidth).value < 1536
        ) {
          console.log("窗口变化----小于1536");
          refLeft.value.$el.attributes.style.value = "display:none;";
          CenterSpan.value = "4";
          // refRigth.value.$el.attributes.style.value = "display:none;";
        }
        if (ref(this.screenWidth).value < 1280) {
          console.log("窗口变化----小于1280");
          CenterSpan.value = "3";
          refLeft.value.$el.attributes.style.value = "display:none;";
          refRigth.value.$el.attributes.style.value = "display:none;";
        }
      })();
    };
  }
});
</script>

<style lang="scss" scoped>
/* 响应式栅格 start*/
// .n-grid{
//   height: max-content;
// }
.light-green {
  // height: calc(10px * v-bind(cardLenStyle));
  /* height: max-content; */
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  // color: v-bind(colors);
  /* height: 950px; */
  // height: calc(10px * v-bind(cardLen));
  /* height: max-content; */
  /* width: max-content; */
  background-color: rgba(0, 128, 0, 0.24);
  display: inline-block;
  align-items: center;
  justify-content: center;
}
/* 响应式栅格 end*/
</style>
