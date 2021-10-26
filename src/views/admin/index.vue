<template>
  <div id="adminIndexDiv">
    <n-space vertical>
      <!-- <n-space> <n-switch v-model:value="inverted" />inverted</n-space> -->
      <n-layout>
        <n-layout-header style="position: unset; opacity: 1">
          <div id="A-h-gradint">
            <!-- 渐变文字 -->
            <n-gradient-text
              gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
              >Vogelfrei bolg admin</n-gradient-text
            >
          </div>

          <div id="A-h-icon">
            <n-space justify="center">
              <!-- SearchIcon -->
              <n-icon size="25">
                <SearchIcon></SearchIcon>
              </n-icon>
              <router-link to="">
                <!-- SettingsIcon -->
                <n-icon size="25">
                  <SettingsIcon></SettingsIcon>
                </n-icon>
              </router-link>
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
                <!-- FullscreenIcon -->
                <n-icon size="25">
                  <SkinIcon></SkinIcon>
                </n-icon>
              </router-link>
              <n-avatar
                round
                size="small"
                src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg"
              />
            </n-space>
          </div>
        </n-layout-header>
      </n-layout>
      <n-layout has-sider>
        <!-- <n-scrollbar>
        
      </n-scrollbar> -->
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
        >
          <n-menu
            :inverted="inverted"
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :default-expanded-keys="[menuOptions[3].whateverKey]"
            key-field="whateverKey"
            label-field="whateverLabel"
            children-field="whateverChildren"
          />
        </n-layout-sider>
        <n-layout>
          <span>内容</span>
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  SearchOutline as SearchIcon,
  SettingsOutline as SettingsIcon,
  LockClosedOutline as LockClosedIcon,
} from "@vicons/ionicons5";

import {
  FullscreenOutlined as FullscreenIcon,
  SkinOutlined as SkinIcon,
} from "@vicons/antd";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    whateverLabel: "且听风吟",
    whateverKey: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    whateverLabel: "1973年的弹珠玩具",
    whateverKey: "pinball-1973",
    icon: renderIcon(BookIcon),
    disabled: true,
    whateverChildren: [
      {
        whateverLabel: "鼠",
        whateverKey: "rat",
      },
    ],
  },
  {
    whateverLabel: "寻羊冒险记",
    whateverKey: "a-wild-sheep-chase",
    disabled: true,
    icon: renderIcon(BookIcon),
  },
  {
    whateverLabel: "舞，舞，舞",
    whateverKey: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    whateverChildren: [
      {
        type: "group",
        whateverLabel: "人物",
        whateverKey: "people",
        whateverChildren: [
          {
            whateverLabel: "叙事者",
            whateverKey: "narrator",
            icon: renderIcon(PersonIcon),
          },
          {
            whateverLabel: "羊男",
            whateverKey: "sheep-man",
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        whateverLabel: "饮品",
        whateverKey: "beverage",
        icon: renderIcon(WineIcon),
        whateverChildren: [
          {
            whateverLabel: "威士忌",
            whateverKey: "whisky",
          },
        ],
      },
      {
        whateverLabel: "食物",
        whateverKey: "food",
        whateverChildren: [
          {
            whateverLabel: "三明治",
            whateverKey: "sandwich",
          },
        ],
      },
      {
        whateverLabel: "过去增多，未来减少",
        whateverKey: "the-past-increases-the-future-recedes",
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
    return {
      inverted: ref(false),
      collapsed: ref(false),
      menuOptions,
    };
  },
});
</script>
<style>
#adminIndexDiv .n-layout-sider {
  background-color: var(--color);
}

#adminIndexDiv .n-menu {
  height: calc(90vh);
}
</style>
