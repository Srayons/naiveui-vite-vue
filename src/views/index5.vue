<template>
  <n-space vertical size="large">
    <n-layout>
      <pub-header></pub-header>
      <n-layout-content content-style="padding: 24px;">
        <n-grid cols="1 s:1 m:1 l:6 xl:6 2xl:6" responsive="screen">
          <!-- 左侧布局 -->
          <n-grid-item :span="LeftSpan" id="refLeft" ref="refLeft">
            <leftIndex></leftIndex>
          </n-grid-item>
          <!-- 中间布局 -->
          <n-grid-item :span="CenterSpan" id="refCenter" ref="refCenter">
            <centerIndex></centerIndex>
          </n-grid-item>
          <!-- 右侧布局 -->
          <n-grid-item :span="RigthSpan" id="refRigth" ref="refRigth">
            <rigthIndex></rigthIndex>
          </n-grid-item>
        </n-grid>
      </n-layout-content>
      <pub-footer></pub-footer>
    </n-layout>
  </n-space>
  <n-back-top
    :listen-to="scroll"
    :show="showBackTop"
    to="body"
    :bottom="30"
    :visibility-height="500"
  >
    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png"
      />
    </div>
  </n-back-top>
</template>
<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";
import { useLoadingBar } from "naive-ui";
import PubHeader from "../components/Header.vue";
import PubFooter from "../components/Footer.vue";
import leftIndex from "./index/leftIndex.vue";
import centerIndex from "./index/centerIndex.vue";
import rigthIndex from "./index/rigthIndex.vue";
import api from "/@/api/index.js";

export default defineComponent({
  components: {
    PubHeader,
    leftIndex,
    centerIndex,
    rigthIndex,
    PubFooter,
  },
  setup() {
    const loadingBar = useLoadingBar();
    //开始加载动画
    loadingBar.start();

    const refLeft = ref(null);
    const LeftSpan = ref("1");

    const refCenter = ref(null);
    const CenterSpan = ref("3");

    const refRigth = ref(null);
    const RigthSpan = ref("2");
    const showBackTop = ref(true);
    const bottom = ref(100)

    onMounted(() => {
      console.log("finish");
      //结束加载条
      loadingBar.finish();

      // 获取当前浏览器宽高
      let screenWidth = document.body.clientWidth;
      let screenHeight = document.body.clientHeight;
      // let clientWidth = ref(document.body.clientWidth).value;
      //加载完毕执行响应布局
      if (ref(screenWidth).value > 1536) {
        console.log("窗口大于1536");
        CenterSpan.value = "3";
        // refLeft.value.$el.attributes.style.value = "display:none;";
      }
      if (ref(screenWidth).value > 1280 && ref(screenWidth).value < 1536) {
        console.log("窗口小于1536");
        CenterSpan.value = "4";

        refRigth.value.$el.attributes.style.value = "display:none;";
        refLeft.value.$el.attributes.style.value = "display:none;";
        console.log(refLeft.value.$el.attributes.style.value)
      }
      if (ref(screenWidth).value < 1280) {
        console.log("窗口小于1280");
        CenterSpan.value = "3";
        bottom.value = 1000;

        refLeft.value.$el.attributes.style.value = "display:none;";
        refRigth.value.$el.attributes.style.value = "display:none;";
      }

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
      // 监听窗口变化
      window.onresize = () => {
        return (() => {
          // 重新赋值最新窗口数据
          screenWidth = document.body.clientWidth;
          screenHeight = document.body.clientHeight;
          // console.log(this.screenWidth + "--" + this.screenHeight);
          if (ref(screenWidth).value > 1536) {
            console.log("窗口大于1536");
            CenterSpan.value = "3";
            // refLeft.value.$el.attributes.style.value = "display:none;";
          }
          if (ref(screenWidth).value > 1280 && ref(screenWidth).value < 1536) {
            console.log("窗口小于1536");
            CenterSpan.value = "4";

            refLeft.value.$el.attributes.style.value = "display:none;";
          }
          if (ref(screenWidth).value < 1280) {
            console.log("窗口小于1280");
            CenterSpan.value = "3";
            bottom.value = 100;

            refLeft.value.$el.attributes.style.value = "display:none;";
            refRigth.value.$el.attributes.style.value = "display:none;";
          }
        })();
      };
    });

    return {
      showBackTop, //是否显示《回到顶部》
      scroll: scroll, //回到顶部事件
      refLeft, //ref左侧标识
      LeftSpan, //左侧Span
      refCenter, //ref中间侧标识
      CenterSpan, //中间Span
      refRigth, //ref右侧标识
      RigthSpan, //右侧Span
      showBackTop, //控制置顶按钮是否显示
      bottom,
    };
  },
    data() {
    let cardLen = [];
    cardLen.length = 10;
    return {
      cardLenStyle: cardLen.length,
      cardLen,
      LeftSpan: "1",
      CenterSpan: "3",
      RigthSpan: "2",
      backTopHeigth :"10px",
    };
  },
});
</script>

<style>
/* 响应式栅格 start*/
.light-green {
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  background-color: rgba(0, 128, 0, 0.24);
  display: inline-block;
  align-items: center;
  justify-content: center;
}
/* 响应式栅格 end*/

/* 回到顶部样式 */
.n-back-top,.n-back-top:hover {
  height: v-bind(backTopHeigth);
}
</style>
