//main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import './index.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
// import naive from 'naive-ui'
import {
  // create naive ui
  create,
  // component
  NButton,
  NLoadingBarProvider,
  NMessageProvider,
  NSpace,
  NLayout,
  NLayoutHeader,
  NMenu,
  NLayoutContent,
  NGrid,
  NGridItem,
  NCard,
  NCarousel,
  NSkeleton,
  NGradientText,
  NImage,
  NBackTop,
  NLayoutFooter,
  NSwitch,
  NIcon,
  NAvatar,
  NDivider,
  NTabs,
  NTabPane,
  NForm,
  NFormItemRow,
  NInput,
  NScrollbar,
  NLayoutSider,
  NDropdown,
  NTooltip,
  NPopover,
  NFormItem,
  NTag,
  NSelect,
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NLoadingBarProvider,
    NMessageProvider,
    NSpace,
    NLayout,
    NLayoutHeader,
    NMenu,
    NLayoutContent,
    NGrid,
    NGridItem,
    NCard,
    NCarousel,
    NSkeleton,
    NGradientText,
    NImage,
    NBackTop,
    NLayoutFooter,
    NSwitch,
    NIcon,
    NAvatar,
    NDivider,
    NTabs,
    NTabPane,
    NForm,
    NFormItemRow,
    NInput,
    NScrollbar,
    NLayoutSider,
    NDropdown,
    NTooltip,
    NPopover,
    NFormItem,
    NTag,
    NSelect,
  ]
})

import v3scroll from 'vue3-scrollbar';
//音乐插件
import vue3aplayer from 'vue3-aplayer';
import { addListener, launch } from "devtools-detector";
import VueCookies from "vue-cookies";

// import APlayer from "aplayer";
// import meting from 'meting';
// import 'aplayer/dist/APlayer.min.css'
// import vue3videoPlay from 'vue3-video-play'; // 引入组件
// import 'vue3-video-play/dist/'; // 引入css

const app = createApp(App);
app.use(router);
app.use(naive, vue3aplayer, v3scroll,VueCookies);
app.mount('#app')


if (process.env.NODE_ENV == 'production') {
  launch();
  console.log(process.env.NODE_ENV)
  window.oncontextmenu = function (e) {
    // console.log("取消默认的浏览器自带右键")
    //取消默认的浏览器自带右键 很重要！！
    e.preventDefault();
  };

  // //禁止使用F12
  window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    // 判断是否按下F12，F12键码为123
    if (event.keyCode === 123) {
      event.preventDefault(); // 阻止默认事件行为
      // window.event.returnValue = false;
    }
  };

  const view = document.createElement("font");
  document.body.appendChild(view);
  // 1. add listener
  addListener(
    (isOpen) =>
    (view.innerText = isOpen
      ? "open"
      : "close")
  );

  let DConsoleLog = null;

  DConsoleLog = setInterval(() => {
    let devtoolStatus = $("font").html();
    if (devtoolStatus) {
      if (devtoolStatus == "open") {
        window.close();
        window.open(import.meta.env.VITE_ENV_FORE_URL)
        // alert(devtoolStatus)
        clearInterval(DConsoleLog)
      }
    }
  }, 1000);

  console.log(DConsoleLog)
}



