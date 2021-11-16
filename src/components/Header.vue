<template>
  <div id="nLayoutHeader">
    <n-layout-header>
      <!-- 目录 -->
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
      <div id="A-h-gradint">
        <!-- 渐变文字 -->
        <n-gradient-text
          gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          @click="toHome"
        >Vogelfrei ——MrSong's Blog</n-gradient-text>
      </div>
      <div id="A-h-icon">
        <!-- 右侧搜索和登录 -->
        <n-space justify="center">
          <!-- SearchCircleIcon -->
          <n-icon size="38">
            <SearchCircleIcon></SearchCircleIcon>
          </n-icon>

          <router-link v-if="nodeEnv" to="/login">
            <!-- PersonCircleIcon -->
            <n-icon size="38">
              <PersonCircleIcon></PersonCircleIcon>
            </n-icon>
          </router-link>
        </n-space>
      </div>
    </n-layout-header>

    <figure id="h-figure" style="margin: 0; height: 969px">
      <div class="focusinfo">
        <div class="header-tou">
          <n-avatar round :size="150" @click="avatarFun" :src="avatars" />
          <!-- <img src="https://cdn.jsdelivr.net/gh/xiaoyou66/imgbed@1.0/xblog/tTSY.jpg" /> -->
        </div>
        <div class="header-info">
          <p>
            <!-- 渐变文字 -->
            <n-gradient-text
              gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
            >Vogelfrei ——MrSong's Blog</n-gradient-text>
          </p>
          <div class="top-social_v2">
            <li style="list-style: none;">
              <a
                href="https://space.bilibili.com/446791818"
                target="_blank"
                class="social-hread"
                title="bilibili"
              >
                <img src="../img/bilibili.png" />
              </a>

              <a
                href="https://blog.csdn.net/u014771882"
                target="_blank"
                class="social-hread"
                title="csdn"
              >
                <img src="../img/csdn.png" />
              </a>

              <a
                href="https://github.com/s1607011324"
                target="_blank"
                class="social-hread"
                title="github"
              >
                <img src="../img/github.png" />
              </a>

              <a
                href="https://gitee.com/songyxin/"
                target="_blank"
                class="social-hread"
                title="gitee"
              >
                <img src="../img/gitee.ico" />
              </a>

              <!-- https://gitee.com/songyxin/ -->
            </li>
          </div>
        </div>
      </div>
    </figure>
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
        "1"
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
        "2"
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
        "3"
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
        "4"
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
        "5"
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
        "6"
      ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: "7",
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
    const avatars  = ref(import.meta.env.VITE_ENV_FORE_URL+"/public/img/avatars.jpg")
    if (process.env.NODE_ENV == 'production') {
      avatars.value = import.meta.env.VITE_ENV_FORE_URL+"/img/avatars.jpg"
    }
    onMounted(() => {
      let LHeader = document.getElementById("nLayoutHeader").children[0];
      nextTick(() => {
        let Navatar = document.getElementsByClassName("header-tou")[0];
        //鼠标移入事件
        Navatar.onmouseover = () => {
          // console.log("Navatar-onmouseover");
          // console.log(Navatar);
          Navatar.style.setProperty("display", "none;");
        };

        //鼠标移入事件
        Navatar.onmouseout = () => {
          // console.log("Navatar-onmouseout");
        };
      });
    });

    const nodeEnv = ref(false);
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV == "development") {
      nodeEnv.value = true;
    }

    return {
      avatars,
      nodeEnv,
      activeKey: ref(null),
      menuOptions,
      toHome: () => {
        document.getElementById("app").scrollIntoView();
      },
      avatarFun: () => {
        document.getElementById("refCenter").scrollIntoView();
      },
    };
  },
});
</script>

<style>
.social-hread {
  padding: 5px;
}

.social-hread img {
  width: 6%;
  height: 6%;
}
</style>
