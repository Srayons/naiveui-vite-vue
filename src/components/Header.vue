<template>
  <div id="nLayoutHeader">
    <n-layout-header>
      <!-- 目录 -->
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
      <div id="A-h-gradint">
        <!-- 渐变文字 -->
        <n-gradient-text
          gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
        >Vogelfrei ——MrSong's Blog</n-gradient-text>
      </div>
      <div id="A-h-icon">
        <!-- 右侧搜索和登录 -->
        <n-space justify="center">
          <!-- SearchCircleIcon -->
          <n-icon size="38">
            <SearchCircleIcon></SearchCircleIcon>
          </n-icon>
          <!-- PersonCircleIcon -->
          <n-icon size="38">
            <PersonCircleIcon></PersonCircleIcon>
          </n-icon>
        </n-space>
      </div>
    </n-layout-header>

    <div>
      <figure id="h-figure" style="margin: 0;
          height: 969px;"></figure>
    </div>
  </div>
</template>

<script>
import { defineComponent, h, ref, onMounted, nextTick } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  SearchCircleOutline as SearchCircleIcon,
  PersonCircleOutline as PersonCircleIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        "a",
        {
          href:
            "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "且听风吟"
      ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href:
            "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "且听风吟"
      ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href:
            "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "且听风吟"
      ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href:
            "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "且听风吟"
      ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href:
            "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "且听风吟"
      ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href:
            "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "且听风吟"
      ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
            icon: renderIcon(PersonIcon),
          },
          {
            label: "羊男",
            key: "sheep-man",
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: "饮品",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];

export default defineComponent({
  components: {
    SearchCircleIcon,
    PersonCircleIcon,
  },
  setup() {
    onMounted(() => {
      let LHeader = document.getElementById("nLayoutHeader").children[0];
      nextTick(() => {
        
        
      });
    });

    return {
      activeKey: ref(null),
      menuOptions,
    };
  },
});
</script>