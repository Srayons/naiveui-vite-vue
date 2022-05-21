<template>
  <n-modal
    :mask-closable="false"
    v-model:show="showModal"
    preset="card"
    :style="bodyStyle"
    title="卡片预设"
    size="huge"
    :bordered="false"
    :segmented="segmented"
  >
    <template #header-extra>噢!</template>
    内容
    <template #footer>尾部</template>
  </n-modal>
  <n-layout>
    <n-layout-header
      style="
        position: unset;
        z-index: 6;
        opacity: 1;
        border-bottom: solid 1px rgb(239, 239, 245);
      "
    >
      <div id="A-h-gradint">
        <!-- 渐变文字 -->
        <router-link to="/">
          <n-gradient-text
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          >Vogelfrei bolg admin</n-gradient-text>
        </router-link>
      </div>

      <div id="A-h-icon">
        <n-space justify="center">
          <n-popover trigger="hover">
            <template #trigger>
              <router-link to>
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
              <!-- SettingsIcon -->
              <n-icon size="25" @click="showModalSetting">
                <SettingsIcon></SettingsIcon>
              </n-icon>
            </template>
            <span>设置</span>
          </n-popover>

          <n-popover trigger="hover">
            <template #trigger>
              <router-link to>
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
              <router-link to>
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
              <router-link to>
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
            <n-avatar round size="small" :src="avatars" />
          </n-dropdown>
        </n-space>
      </div>
    </n-layout-header>
  </n-layout>
</template>
<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {
  LockClosedOutline as LockClosedIcon,
  SearchOutline as SearchIcon,
  SettingsOutline as SettingsIcon,
} from "@vicons/ionicons5";

import {FullscreenOutlined as FullscreenIcon, SkinOutlined as SkinIcon,} from "@vicons/antd";
import {useMessage} from "naive-ui";

// 菜单数组
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
];

const showModal = ref(false);
// 头像地址
const avatars = ref(import.meta.env.VITE_ENV_FORE_URL + "/img/avatars.jpg");
// 导入路由
const router = useRouter();
// 导入信息模块
const message = useMessage();
/**
 * 页面加载事件
 */
onMounted(() => {
  // 如果当前浏览器没token，则直接跳转到登录界面
  if (!$cookies.get("token")) {
    router.push({
      path: "/login",
    });
  }
});

// 设置弹出框
const bodyStyle = {
  width: "600px",
};

const segmented = {
  content: "soft",
  footer: "soft",
};
// 选择事件
const handleSelect = (key) => {
  // message.info(key);
  // 个人中心
  if (key === "toFrontDesk") {
    router.push({
      path: "/",
    });
  }
  // 前台
  if (key === "toFrontDesk") {
    router.push({
      path: "/",
    });
  }

  // 登出
  if (key === "loginOut") {
    $cookies.remove("token");
    $cookies.remove("refresh_token");
    $cookies.remove("userId");
    localStorage.removeItem("userCode");
    localStorage.removeItem("userName");
    router.push({
      path: "/login",
    });
  }
};
// 设置弹出框
const showModalSetting = () => {
  showModal.value = true;
};
</script>
<style scoped>
</style>
