const path = require('path')
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    // 项目启动的根路径
    // root:  'G:\\work\\myself\\studyNode\\nodeMysql\\client',
    refTransform: true,
    // 入口
    entry: 'index.html',
    // 打包后的跟路径
    base: './',
    //作为静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。
    // 该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。
    // 将 publicDir 设定为 false 可以关闭此项功能。
    publicDir: './public',
    server: {
        // 代理，最重要，其他的都可以有默认配置
        // proxy: {
        //     '/admin': {
        //         target: 'http://localhost:9999',
        //         changeOrigin: true,
        //     }
        // },

        // 是否开启ssr服务断渲染
        ssr: false,
        // 端口
        port: 2123,
        // 是否自动开启浏览器
        open: true,
        // 是否关闭控制台输出日志
        silent: false,
        //用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。
        envDir: './src',
        // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。
        envPrefix: 'VITE_ENV_'
    },
    resolve: {
        // 重命名路径  path.resolve(__dirname, './src')
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "public": path.resolve(__dirname, "./public"),
        },
    },
    // 哪个第三方的包需要重新编译
    optimizeDeps: {
        include: [
        ],
    },
    build: {
        // 压缩
        minify: "esbuild",
        // 输出的静态资源的文件夹名称
        assetsDir: 'assets',
        // 出口
        outDir: './dist',
    },
})

