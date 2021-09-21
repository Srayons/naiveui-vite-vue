<template>
  <n-space vertical size="large">
    <n-layout>
      <pub-header></pub-header>
      <n-layout-content content-style="padding: 24px;">
        <n-grid cols="1 s:1 m:1 l:7 xl:6 2xl:6" responsive="screen">
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
    id="backTop"
    :listen-to="scroll"
    :show="showBackTop"
    to="body"
    :bottom="30"
    :visibility-height="500"
  >
    <div>
      <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png" />
    </div>
  </n-back-top>
</template>
<script>
import { defineComponent, ref, onMounted, onUpdated, nextTick } from "vue";
import { useLoadingBar } from "naive-ui";
import PubHeader from "../components/Header.vue";
import PubFooter from "../components/Footer.vue";
import leftIndex from "./index/leftIndex.vue";
import centerIndex from "./index/centerIndex.vue";
import rigthIndex from "./index/rigthIndex.vue";
import { useMessage } from "naive-ui";

// import api from "/@/api/index.js";

export default defineComponent({
  components: {
    PubHeader,
    leftIndex,
    centerIndex,
    rigthIndex,
    PubFooter,
  },
  setup() {
    window.$message = useMessage();
    const loadingBar = useLoadingBar();
    const refLeft = ref(null);
    const LeftSpan = ref("1");

    const refCenter = ref(null);
    const CenterSpan = ref("3");

    const refRigth = ref(null);
    const RigthSpan = ref("2");
    const showBackTop = ref(false);

    onMounted(() => {
      console.log("finish");
      // 获取当前浏览器宽高
      let screenWidth = document.body.clientWidth;
      let screenHeight = document.body.clientHeight;
      let element = document.getElementById("backTop");

      // let clientWidth = ref(document.body.clientWidth).value;
      nextTick(() => {
        //开始加载动画
        // loadingBar.start();

        const keyCodeMap = {
          // 91: true, // command
          61: true,
          107: true, // 数字键盘 +
          109: true, // 数字键盘 -
          173: true, // 火狐 - 号
          187: true, // +
          189: true, // -
        };
        // 覆盖ctrl||command + ‘+’/‘-’
        document.onkeydown = function (event) {
          const e = event || window.event;
          const ctrlKey = e.ctrlKey || e.metaKey;
          if (ctrlKey && keyCodeMap[e.keyCode]) {
            e.preventDefault();
          } else if (e.detail) {
            // Firefox
            event.returnValue = false;
          }
        };
        // 覆盖鼠标滑动
        document.body.addEventListener(
          "wheel",
          (e) => {
            if (e.ctrlKey) {
              if (e.deltaY < 0) {
                e.preventDefault();
                return false;
              }
              if (e.deltaY > 0) {
                e.preventDefault();
                return false;
              }
            }
          },
          { passive: false }
        );

        //加载完毕执行响应布局
        if (ref(screenWidth).value > 1536) {
          console.log("窗口大于1536");
          CenterSpan.value = "3";
          LeftSpan.value = "1";
          RigthSpan.value = "2";

          if (element) {
            //更改返回置顶高度
            element.style.setProperty("--backTopHeigth", "90%");
          }

          // refLeft.value.$el.attributes.style.value = "display:none;";
        }
        if (ref(screenWidth).value > 1280 && ref(screenWidth).value < 1536) {
          console.log("窗口小于1536");

          CenterSpan.value = "4";
          // refLeft.value.$el.attributes.style.value = "display:none;";
          // document.getElementById("refLeft").style = "display:none;";

          //  CenterSpan.value = "3";
          //  RigthSpan.value = "3";
          // refLeft.value.$el.attributes.style.value = "display:none;";
          // document.getElementById("refLeft").style = "display:none;";

          if (element) {
            //更改返回置顶高度
            element.style.setProperty("--backTopHeigth", "60%");
          }
        }
        if (ref(screenWidth).value < 1280) {
          console.log("窗口小于1280");
          CenterSpan.value = "3";

          if (element) {
            //更改返回置顶高度
            element.style.setProperty("--backTopHeigth", "55%");
          }

          refLeft.value.$el.attributes.style.value = "display:none;";
          refRigth.value.$el.attributes.style.value = "display:none;";
        }

        let LHeader = document.getElementById("nLayoutHeader").children[0];

        let Navatar = document.getElementsByClassName("header-tou")[0];

        let scrollTop0 =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let hFigure = document.getElementById("h-figure");
        // console.log(scrollTop);

        //鼠标移入事件
        LHeader.onmouseover = () => {
          console.log("LHeader-onmouseover");
          //当滚动条不移动则为完全不透明
          if (scrollTop0 == 0) {
            LHeader.style.setProperty("animation", "unset");
            LHeader.style.setProperty("opacity", "1");
          }
        };

        //鼠标移入事件
        hFigure.onmouseover = () => {
          console.log("binderFollowerContent-onmouseover");
          //当滚动条不移动则为完全不透明
          if (scrollTop0 == 0) {
            LHeader.style.setProperty("animation", "hide-detail 1s linear");
            LHeader.style.setProperty("opacity", "0");
          }
        };
        //鼠标移出事件
        LHeader.onmouseout = () => {
          let LHeaderChild = document.getElementsByClassName("n-submenu")[0];
          let binderFollowerContent = document.getElementsByClassName(
            "n-dropdown-menu n-popover n-dropdown"
          )[0];
          console.log(LHeaderChild);
          console.log(binderFollowerContent);
          if (LHeaderChild && binderFollowerContent) {
            console.log("LHeader-onmouseout");
            //鼠标移入事件
            LHeaderChild.onmouseover = () => {
              console.log("LHeaderChild-onmouseover");
              //当滚动条不移动则为完全不透明
              if (scrollTop0 == 0) {
                LHeader.style.setProperty("animation", "unset");
                LHeader.style.setProperty("opacity", "1");
              }
            };
            return;
          }
          //当滚动条不移动则为完全透明
          if (scrollTop0 == 0) {
            LHeader.style.setProperty("animation", "hide-detail 1s linear");
            LHeader.style.setProperty("opacity", "0");
          }
        };

        console.log("nextTick");
        //结束加载条
        loadingBar.finish();
      });

      //滚动条事件
      window.onscroll = () => {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let LHeader = document.getElementById("nLayoutHeader").children[0];
        let hFigure = document.getElementById("h-figure");
        // console.log(scrollTop);890
        let LHeaderChild = document.getElementsByClassName("n-submenu")[0];
        let binderFollowerContent = document.getElementsByClassName(
          "n-dropdown-menu n-popover n-dropdown"
        )[0];
        //固定右面布局
        let divRigth = document.getElementById("divRigth");
        //固定左面布局
        let divLeft = document.getElementById("divLeft");
        if (scrollTop <= "890") {
          //top: 95px;left: 1235px;position: fixed;
          divRigth.style.setProperty("position", "unset");
          divLeft.style.setProperty("position", "unset");
        }
        if (scrollTop > "890") {
          //固定左面布局
          divLeft.style.setProperty("position", "fixed");
          divLeft.style.setProperty("top", "95px");
          divLeft.style.setProperty("left", "30px");
          //top: 147px;left: 1235px;position: fixed;
          //固定右面布局
          divRigth.style.setProperty("position", "fixed");
          // divLeft.style.setProperty("width", "550px");
          divRigth.style.setProperty("top", "95px");
          divRigth.style.setProperty("left", "1274px");
        }

        //鼠标移入事件
        LHeader.onmouseover = () => {
          //当滚动条不移动则为完全不透明
          if (scrollTop == 0) {
            LHeader.style.setProperty("animation", "unset");
            LHeader.style.setProperty("opacity", "1");
          }
        };
        //鼠标移出事件
        LHeader.onmouseout = () => {
          if (LHeaderChild && binderFollowerContent) {
            //当滚动条不移动则为完全透明
            if (scrollTop == 0) {
              LHeader.style.setProperty("animation", "hide-detail 1s linear");
              LHeader.style.setProperty("opacity", "0");
            }
            //鼠标移入事件
            LHeaderChild.onmouseover = () => {
              //当滚动条不移动则为完全不透明
              if (scrollTop == 0) {
                LHeader.style.setProperty("animation", "unset");
                LHeader.style.setProperty("opacity", "1");
              }
            };
          }
        };

        //鼠标移入事件
        hFigure.onmouseover = () => {
          //当滚动条不移动则为完全透明
          if (scrollTop == 0) {
            //animation: hide-detail 1s linear ;
            LHeader.style.setProperty("animation", "hide-detail 1s linear");
            LHeader.style.setProperty("opacity", "0");
          }
        };
        //当滚动条不移动则为完全透明
        if (scrollTop == 0) {
          LHeader.style.setProperty("animation", "hide-detail 1s linear");
          LHeader.style.setProperty("opacity", "0");
        }
        //当滚动条移动距离大于1则为完全不透明
        if (scrollTop > 1) {
          LHeader.style.setProperty("animation", "unset");
          LHeader.style.setProperty("opacity", "1");
        }
        //当滚动条移动距离大于200则显示置顶按钮，反之则不显示
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
          element = document.getElementById("backTop");

          let scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          //固定右面布局
          let divRigth = document.getElementById("divRigth");
          //固定左面布局
          let divLeft = document.getElementById("divLeft");
          if (scrollTop <= "890") {
            //top: 95px;left: 1235px;position: fixed;
            divRigth.style.setProperty("position", "unset");
            divLeft.style.setProperty("position", "unset");
          }
          if (scrollTop > "890") {
            //固定左面布局
            divLeft.style.setProperty("position", "fixed");
            divLeft.style.setProperty("top", "95px");
            divLeft.style.setProperty("left", "30px");
            //top: 147px;left: 1235px;position: fixed;
            //固定右面布局
            divRigth.style.setProperty("position", "fixed");
            // divLeft.style.setProperty("width", "550px");
            divRigth.style.setProperty("top", "95px");
            divRigth.style.setProperty("left", "1274px");
          }
          // console.log(this.screenWidth + "--" + this.screenHeight);
          //加载完毕执行响应布局
          if (ref(screenWidth).value > 1536) {
            console.log("窗口大于1536");
            CenterSpan.value = "3";
            LeftSpan.value = "1";
            RigthSpan.value = "2";

            if (element) {
              //更改返回置顶高度
              element.style.setProperty("--backTopHeigth", "90%");
            }

            // refLeft.value.$el.attributes.style.value = "display:none;";
          }
          if (ref(screenWidth).value > 1280 && ref(screenWidth).value < 1536) {
            console.log("窗口小于1536");

            // refLeft.value.$el.attributes.style.value = "display:none;";
            // document.getElementById("refLeft").style = "display:none;";

            CenterSpan.value = "4";

            if (element) {
              //更改返回置顶高度
              element.style.setProperty("--backTopHeigth", "60%");
            }
          }
          if (ref(screenWidth).value < 1280) {
            console.log("窗口小于1280");
            CenterSpan.value = "3";

            if (element) {
              //更改返回置顶高度
              element.style.setProperty("--backTopHeigth", "55%");
            }

            refLeft.value.$el.attributes.style.value = "display:none;";
            refRigth.value.$el.attributes.style.value = "display:none;";
          }
        })();
      };
    });

    onUpdated(() => {
      console.log("onUpdated");
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
      backTopHeigth: "10px",
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
.n-back-top,
.n-back-top:hover {
  height: var(--backTopHeigth);
}
</style>
