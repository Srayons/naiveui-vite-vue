<template>
  <n-layout>
    <n-layout-header
      style="
        position: unset;
        opacity: 1;
        border-bottom: solid 1px rgb(239, 239, 245);
      "
    >
      <div id="A-h-gradint">
        <!-- 渐变文字 -->
        <router-link to="/">
          <n-gradient-text
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
            >Vogelfrei bolg admin</n-gradient-text
          >
        </router-link>
      </div>

      <div id="A-h-icon">
        <n-space justify="center">
          <n-popover trigger="hover">
            <template #trigger>
              <router-link to="">
                <!-- SearchIcon -->
                <n-icon size="25">
                  <SearchIcon></SearchIcon>
                </n-icon>
              </router-link>
            </template>
            <span>搜索</span>
          </n-popover>

          <n-popover trigger="hover">
            <template #trigger>
              <router-link to="">
                <!-- SettingsIcon -->
                <n-icon size="25">
                  <SettingsIcon></SettingsIcon>
                </n-icon>
              </router-link>
            </template>
            <span>设置</span>
          </n-popover>

          <n-popover trigger="hover">
            <template #trigger>
              <router-link to="">
                <!-- LockClosedIcon -->
                <n-icon size="25">
                  <LockClosedIcon></LockClosedIcon>
                </n-icon>
              </router-link>
            </template>
            <span>锁屏</span>
          </n-popover>

          <n-popover trigger="hover">
            <template #trigger>
              <router-link to="">
                <!-- FullscreenIcon -->
                <n-icon size="25">
                  <FullscreenIcon></FullscreenIcon>
                </n-icon>
              </router-link>
            </template>
            <span>全屏</span>
          </n-popover>

          <n-popover trigger="hover">
            <template #trigger>
              <!-- SkinIcon -->
              <router-link to="">
                <n-icon size="25">
                  <SkinIcon></SkinIcon>
                </n-icon>
              </router-link>
            </template>
            <span>换肤</span>
          </n-popover>

          <n-dropdown
            placement="bottom-start"
            trigger="hover"
            size="medium"
            @select="handleSelect"
            :options="options"
          >
            <n-avatar
              round
              size="small"
              :src="avatars"
            />
          </n-dropdown>
        </n-space>
      </div>
    </n-layout-header>
  </n-layout>
</template>
<script>
import { useRouter } from "vue-router";
import { defineComponent,onMounted, h, ref } from "vue";
import {
  SearchOutline as SearchIcon,
  SettingsOutline as SettingsIcon,
  LockClosedOutline as LockClosedIcon,
} from "@vicons/ionicons5";

import {
  FullscreenOutlined as FullscreenIcon,
  SkinOutlined as SkinIcon,
} from "@vicons/antd";
import { useMessage } from "naive-ui";

const options = [
  {
    label: "个人中心",
    key: "userInfo",
  },
  {
    label: "进入前台",
    key: "toFrontDesk",
  },
  {
    type: "divider",
    key: "d1",
  },
  {
    label: "退出登录",
    key: "loginOut",
  },
  // {
  //   label: "其他",
  //   key: "others1",
  //   children: [
  //     {
  //       label: "乔丹·贝克",
  //       key: "jordan baker",
  //     },
  //     {
  //       label: "汤姆·布坎南",
  //       key: "tom buchanan",
  //     },
  //     {
  //       label: "其他",
  //       key: "others2",
  //       children: [
  //         {
  //           label: "鸡肉",
  //           key: "chicken",
  //         },
  //         {
  //           label: "牛肉",
  //           key: "beef",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
export default defineComponent({
  components: {
    SearchIcon,
    SettingsIcon,
    LockClosedIcon,
    FullscreenIcon,
    SkinIcon,
  },
  setup() {
    const avatars  = ref(import.meta.env.VITE_ENV_FORE_URL+"/img/avatars.jpg")
    const router = useRouter();
    const message = useMessage();
    // if (process.env.NODE_ENV == 'production') {
    //   avatars.value = import.meta.env.VITE_ENV_FORE_URL+"/img/avatars.jpg"
    // }

    onMounted(()=>{
      if (!$cookies.get("token")) {
        router.push({
            path:'/login',
          })
      }
    });

    return {
      avatars,
      // 菜单数组
      options,
      // 选择事件
      handleSelect(key) {
        // message.info(key);
        // 个人中心
        if (key=='toFrontDesk') {
          router.push({
            path:'/',
          })
        }
        // 前台
        if (key=='toFrontDesk') {
          router.push({
            path:'/',
          })
        }
        // 登出
        if (key=='loginOut') {
          $cookies.remove("token")
          $cookies.remove("refresh_token")
          $cookies.remove("userId")
          localStorage.removeItem("userCode")
          localStorage.removeItem("userName")
          router.push({
            path:'/login',
          })
        }
      },
    };
  },
});
</script>
