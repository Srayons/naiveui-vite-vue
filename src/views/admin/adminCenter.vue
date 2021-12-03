<template>
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
    <n-scrollbar style="height: calc(90vh)">
      <n-menu
        :inverted="inverted"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :default-expanded-keys="[menuOptions[menuOptions.length - 1].menuKey]"
        @update:value="handleUpdateValue"
        key-field="menuKey"
        label-field="menuLabel"
        children-field="menuChildren"
      />
    </n-scrollbar>
  </n-layout-sider>
  <n-layout>
    <n-space vertical>
      <n-card content-style="padding:8px;">
        <n-space>
          <!-- 标签页 -->
          <!--:color="{ color: '#BBB', textColor: '#555', borderColor: '#555' }" -->
          <n-tag
            v-for="(panel, index) in panels"
            :type="panelType"
            :closable="panel.code !== 'home'"
            @close="handleClose(panel, index)"
            @click="changeMenu(panel)"
            >{{ panel.title }}</n-tag
          >
        </n-space>
      </n-card>
      <n-card>
        <!-- vue3.0配置 -->
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" />
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive" />
        </router-view>
      </n-card>
    </n-space>
  </n-layout>
</template>
<script>
import { defineComponent, h, ref, reactive, computed } from "vue";
import { useMessage } from "naive-ui";
import { useStore, mapState, mapMutations } from "vuex";
import { RouterLink } from "vue-router";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";

/**
 * 图标事件
 */
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

/**
 * 跳转路由
 */
function renderPath(option) {
  return () =>
    h(
      RouterLink,
      { to: { path: option.path, name: option.name, params: option.params } },
      { default: () => option.lableName }
    );
}

let option = {
  lableName: "花开花落",
  path: "",
  name: "",
  params: {},
};

/**
 * 菜单
 */
const menuOptions = [
  {
    menuLabel: option.lableName,
    menuPath: "/test1",
    menuKey: "hear-the-wind-sings",
    icon: renderIcon(BookIcon),
  },
  {
    menuLabel: "1973年的弹珠玩具",
    menuKey: "pinball-1973",
    icon: renderIcon(BookIcon),
  },
  {
    menuLabel: "寻羊冒险记",
    menuKey: "a-wild-sheep-chase",
    icon: renderIcon(BookIcon),
  },
  {
    menuLabel: "羊男",
    menuKey: "sheep-man",
    icon: renderIcon(PersonIcon),
  },
  {
    menuLabel: "羊男",
    menuKey: "sheep-man",
    icon: renderIcon(PersonIcon),
  },
  {
    menuLabel: "舞，舞，舞",
    menuKey: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    menuChildren: [
      {
        type: "group",
        menuLabel: "人物",
        menuKey: "people",
        menuChildren: [
          {
            menuLabel: "叙事者",
            menuKey: "narrator",
            icon: renderIcon(PersonIcon),
          },
        ],
      },
    ],
  },
];

export default defineComponent({
  computed: {
    ...mapState({
      // 从 state 中的到的计算属性
      activePath: (state) => state.activePath, // 已选中菜单
      tabList: (state) => state.tabList, // tags菜单列表
      catch_components: (state) => state.catch_components, // keepalive缓存
    }),
  },
  props: {
    resourceChild: {
      type: Array,
      default: [], //还有一种写法 default ()=>[]
    },
  },
  setup(props, ctx) {
    console.log(menuOptions.length);
    const store = useStore();
    const message = useMessage();
    const panelType = ref("");
    const panelsRef = props.resourceChild;
    return {
      inverted: ref(false),
      collapsed: ref(false),
      menuOptions,
      panelType: panelType,
      checked: ref(false),
      panels: props.resourceChild,
      handleAdd() {
        message.info("添加一个标签。");
        const newValue = {};
        panelsRef.push(newValue);
        nameRef.value = newValue;
      },
      changeMenu(item) {
        panelType.value = "success";
        console.log(item);
      },
      /**
       *标签关闭事件
       */
      handleClose(item, index) {
        console.log(item);
        console.log(index);
      },

      /**菜单点击  */
      handleUpdateValue(key, item) {
        console.log(key);
        console.log(item);
        message.info("[onUpdate:value]: " + JSON.stringify(item));
        // 加入keepalive缓存
        store.commit("addKeepAliveCache", item.name);
        //添加tags标签
        //访问wellcome 就代表home
        var menuKey = item.menuKey === "wellcome" ? "home" : item.menuKey;
        var submenu = {
          path: item.menuPath,
          name: menuKey,
          label: item.menuLabel,
        };
        //修改选中菜单
        store.commit("selectMenu", submenu);
      },
    };
  },
});
</script>
