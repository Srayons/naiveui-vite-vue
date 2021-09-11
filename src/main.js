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
        NIcon
    ]
})

const app = createApp(App)
app.use(naive)
app.mount('#app')