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
            v-for="(panel, index) in tabList"
            :type="panelType"
            :closable="panel.name !== 'wellcome'"
            @close="handleClose(panel, index)"
            @click="changeMenu(panel)"
          >{{ panel.label }}</n-tag>
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
import { RouterLink, useRouter } from "vue-router";
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
    menuLabel: "控制台",
    menuPath: "/wellcome",
    menuKey: "wellcome",
    icon: renderIcon(BookIcon),
  },
  {
    menuLabel: "测试页面2",
    menuPath: "/test2",
    menuKey: "test2",
    icon: renderIcon(BookIcon),
  },
  {
    menuLabel: "寻羊冒险记",
    menuPath: "/test3",
    menuKey: "test3",
    icon: renderIcon(BookIcon),
  },
  {
    menuLabel: "羊男",
    menuPath: "/test4",
    menuKey: "test4",
    icon: renderIcon(PersonIcon),
  },
  {
    menuLabel: "羊男5",
    menuKey: "test5",
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
        menuPath: "/test6",
        menuKey: "test6",
        menuChildren: [
          {
            menuLabel: "叙事者",
            menuPath: "/test7",
            menuKey: "test7",
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
  setup(props, ctx) {
    console.log(menuOptions.length);
    const store = useStore();
    const router = useRouter();
    const message = useMessage();
    const panelType = ref("");
    const panelsRef = (state) => state.tabList;
    return {
      inverted: ref(false),
      collapsed: ref(false),
      menuOptions,
      panelType: panelType,
      checked: ref(false),

      changeMenu(item) {
        // panelType.value = "success";
        console.log(item);

        // 历史选中菜单
        var oldActivePath = store.state.activePath;
        // 首先判断点击的是否是自己，如果是自己则return
        if (oldActivePath === item.name) {
          return;
        }
        // 不是自己，存储菜单
        store.commit("changeMenu", item.name);
        // 页面跳转
        router.push({ name: item.name });
      },
      /**
       *标签关闭事件
       */
      handleClose(tab, index) {
        console.log(tab);
        console.log(index);
        // 历史选中菜单
        var oldActivePath = store.state.activePath;
        // 历史已选中菜单列表
        var oldTabList = store.state.tabList;
        // 计算标签个数
        let length = oldTabList.length - 1;
        // 删除tabList中的该对象
        for (let i = 0; i < oldTabList.length; i++) {
          let item = oldTabList[i];
          if (item.name === tab.name) {
            oldTabList.splice(i, 1);
          }
        }
        // 删除keepAlive缓存
        store.commit("removeKeepAliveCache", tab.name);
        // 如果关闭的标签不是当前路由的话，就不跳转
        if (tab.name !== oldActivePath) {
          return;
        }
        // 如果length为1，必然只剩下首页标签，此时关闭后，更新到首页
        if (length === 1) {
          // 同时存储菜单
          store.commit("closeTab", { activePath: "home", tabList: oldTabList });
          // tab页向左跳转
          router.push({ name: oldTabList[index - 1].name });
          // 不再向下执行
          return;
        }
        // 关闭的标签是最右边的话，往左边跳转一个
        if (index === length) {
          // 同时更新路径
          oldActivePath = oldTabList[index - 1].name;
          // 同时存储菜单
          store.commit("closeTab", {
            activePath: oldActivePath,
            tabList: oldTabList,
          });
          // tab页向左跳转
          router.push({ name: oldTabList[index - 1].name });
        } else {
          // 同时更新路径
          oldActivePath = oldTabList[index].name;
          // 同时存储菜单
          store.commit("closeTab", {
            activePath: oldActivePath,
            tabList: oldTabList,
          });
          // tab页向右跳转
          router.push({ name: oldTabList[index].name });
        }
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
        var menuKey = item.menuKey === "wellcome" ? "wellcome" : item.menuKey;
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
