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
          <!-- SearchIcon -->
          <n-icon size="25">
            <SearchIcon></SearchIcon>
          </n-icon>

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

          <router-link to="">
            <!-- LockClosedIcon -->
            <n-icon size="25">
              <LockClosedIcon></LockClosedIcon>
            </n-icon>
          </router-link>
          <router-link to="">
            <!-- FullscreenIcon -->
            <n-icon size="25">
              <FullscreenIcon></FullscreenIcon>
            </n-icon>
          </router-link>
          <!-- SkinIcon -->
          <router-link to="">
            <n-icon size="25">
              <SkinIcon></SkinIcon>
            </n-icon>
          </router-link>
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
              src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg"
            />
          </n-dropdown>
        </n-space>
      </div>
    </n-layout-header>
  </n-layout>
</template>
<script>
import { defineComponent, h, ref } from "vue";
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
    label: "杰·盖茨比",
    key: "jay gatsby",
  },
  {
    label: "黛西·布坎南",
    key: "daisy buchanan",
  },
  {
    type: "divider",
    key: "d1",
  },
  {
    label: "尼克·卡拉威",
    key: "nick carraway",
  },
  {
    label: "其他",
    key: "others1",
    children: [
      {
        label: "乔丹·贝克",
        key: "jordan baker",
      },
      {
        label: "汤姆·布坎南",
        key: "tom buchanan",
      },
      {
        label: "其他",
        key: "others2",
        children: [
          {
            label: "鸡肉",
            key: "chicken",
          },
          {
            label: "牛肉",
            key: "beef",
          },
        ],
      },
    ],
  },
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
    const message = useMessage();
    return {
      options,
      handleSelect(key) {
        message.info(key);
      },
    };
  },
});
</script>
