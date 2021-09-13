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

import vue3Aplayer from 'vue3-aplayer'
import aplayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css'
// import vue3videoPlay from 'vue3-video-play'; // 引入组件
// import 'vue3-video-play/dist/'; // 引入css

const app = createApp(App)

app.use(naive,aplayer);

app.mount('#app')