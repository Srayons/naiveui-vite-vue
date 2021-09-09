//main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import naive from 'naive-ui'
// import {
//     // create naive ui
//     create,
//     // component
//     NButton,
//     NLoadingBarProvider,
//     NSpace,
//     NLayout,
//     NLayoutHeader,
//     NMenu,
//     NLayoutContent,
//     NGrid,
//     NGridItem,
//     NCard,y
//     NCarousel,
//     NSkeleton,
//     NGradientText,
//     NImage,
//     NBackTop,
//     NLayoutFooter,
//     NSwitch,
// } from 'naive-ui'

// const naive = create({
//     components: [
//         NButton,
//         NLoadingBarProvider,
//         NSpace,
//         NLayout,
//         NLayoutHeader,
//         NMenu,
//         NLayoutContent,
//         NGrid,
//         NGridItem,
//         NCard,
//         NCarousel,
//         NSkeleton,
//         NGradientText,
//         NImage,
//         NBackTop,
//         NLayoutFooter,
//         NSwitch,
//     ]
// })

const app = createApp(App)
app.use(naive)
app.mount('#app')