<template>
  <n-space vertical size="large">
    <n-layout>
      <pub-header></pub-header>
      <n-layout-content content-style="padding: 24px;">
        <n-grid cols="1 s:1 m:1 l:6 xl:6 2xl:6" responsive="screen">
          <n-grid-item :span="LeftSpan" id="refLeft" ref="refLeft">
            <div class="light-green">1</div>
          </n-grid-item>
          <n-grid-item :span="CenterSpan" id="refCenter" ref="refCenter">
            <div class="green">
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
                <n-switch @click="add" v-model:value="loading" />
                <n-card v-for="c in cardLen">
                  <template #header>
                    <n-skeleton text v-if="loading" width="60%" />
                    <template v-else>I'm OK</template>
                  </template>
                  <n-skeleton text v-if="loading" :repeat="6" />
                  <template v-else>
                    不要忘了留姓名
                    <br />电话和其他事情 <br />不要说的太快免得我没写下你大名
                    <br />或许你不再打来 <br />我却等到头发白
                    <br />希望有一天你会打来
                  </template>
                </n-card>
              </n-space>
            </div>
          </n-grid-item>
          <n-grid-item :span="RigthSpan" id="refRigth" ref="refRigth">
            <div class="light-green">3</div>
          </n-grid-item>
        </n-grid>
      </n-layout-content>
      <pub-footer></pub-footer>
    </n-layout>
  </n-space>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { useLoadingBar } from "naive-ui";
import PubHeader from "../components/Header.vue";
import PubFooter from "../components/Footer.vue";

const refLeft = ref(null);
const refCenter = ref(null);
const refRigth = ref(null);

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
      LeftSpan :"1",
      CenterSpan : "3",
      RigthSpan : "2",
    };
  },
  setup() {
    const loadingBar = useLoadingBar();
    onMounted(() => {
      console.log("onMounted---");
      let clientWidth = ref(document.body.clientWidth).value;
      //更改属性
      // refCenter.value.$el.attributes.style.value="display:none;"
      if (
          ref(document.body.clientWidth).value > 1280 &&
          ref(document.body.clientWidth).value < 1536
        ) {
          console.log("窗小于1536");
          refLeft.value.$el.attributes.style.value = "display:none;";
          CenterSpan.value = "4"
          // refRigth.value.$el.attributes.style.value = "display:none;";
        }
      if (ref(document.body.clientWidth).value < 1280) {
        console.log("窗口小于1280");
        CenterSpan.value = "3"
        refLeft.value.$el.attributes.style.value = "display:none;";
        refRigth.value.$el.attributes.style.value = "display:none;";
      }
    });
    // 不要忘了在return中添加refDiv
    return {
      loading() {
        loadingBar.start();
      },
      loading: ref(true),
      refLeft,
      refCenter,
      refRigth,
      LeftSpan,
      CenterSpan,
      RigthSpan,
    };
  },
  mounted() {
    this.setUI();
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
          CenterSpan.value = "3"
        }
        if (
          ref(this.screenWidth).value > 1280 &&
          ref(this.screenWidth).value < 1536
        ) {
          console.log("窗口变化----小于1536");
          refLeft.value.$el.attributes.style.value = "display:none;";
          CenterSpan.value = "4"
          // refRigth.value.$el.attributes.style.value = "display:none;";
        }
        if (ref(this.screenWidth).value < 1280) {
          console.log("窗口变化----小于1280");
          CenterSpan.value = "3"
          refLeft.value.$el.attributes.style.value = "display:none;";
          refRigth.value.$el.attributes.style.value = "display:none;";
        }
      })();
    };
  },
  methods: {
    setUI() {
      console.log(this.$refs);
      // this.$refs.UI.style.setProperty("--colors",this.colors);//给变量赋值
    },
    add: function () {
      // console.log(this.$refs)
    },
  },
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
