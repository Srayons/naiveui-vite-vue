//main.js
import { createApp } from 'vue'
import App from './App.vue'
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
    ]
})

import v3scroll from 'vue3-scrollbar';
//音乐插件
import vue3aplayer from 'vue3-aplayer'

// import APlayer from "aplayer";
// import meting from 'meting';
// import 'aplayer/dist/APlayer.min.css'
// import vue3videoPlay from 'vue3-video-play'; // 引入组件
// import 'vue3-video-play/dist/'; // 引入css

const app = createApp(App);

app.use(naive, vue3aplayer,v3scroll);
app.mount('#app')