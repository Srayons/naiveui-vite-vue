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
        @update:value="handleUpdateValue"
        key-field="menuKey"
        label-field="menuLabel"
        children-field="menuChildren"
      />
      <!--         :default-expanded-keys="[menuOptions[menuOptions.length - 1].menuKey]" -->
    </n-scrollbar>
  </n-layout-sider>
  <n-layout>
    <n-space vertical>
      <n-card content-style="padding:10px;">
        <n-space>
          <!-- 标签页 -->
          <!--:color="{ color: '#BBB', textColor: '#555', borderColor: '#555' }" -->
          <n-tag
            v-for="(panel, index) in tabList"
            size="large"
            :type="activePath === panel.routerName ? 'success' : ''"
            :closable="panel.routerName !== 'wellcome'"
            @close="
              handleClose(
                panel,
                index,
                activePath === panel.routerName ? 'success' : ''
              )
            "
            ><span @click="handleMenu(panel, index)">{{
              panel.menuLabel
            }}</span></n-tag
          >
        </n-space>
      </n-card>
      <n-card>
        <!-- vue3.0配置 -->
        <router-view v-slot="{ Component }">
          <keep-alive>
            <!-- <component :is="Component" v-if="$route.meta.keepAlive" /> -->
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive" />
        </router-view>
      </n-card>
    </n-space>
  </n-layout>
</template>
<script>
import { defineComponent, h, ref, reactive, computed, onMounted } from "vue";
import { useMessage } from "naive-ui";
import { useStore, mapState, mapMutations } from "vuex";
import { RouterLink, useRouter } from "vue-router";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";

import { axiosReq } from "../../http/requestApi/requestApi";

/**
 * 图标事件
 */
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default defineComponent({
  computed: {
    ...mapState({
      // 从 state 中的到的计算属性
      activePath: (state) => state.activePath, // 已选中菜单
      tabList: (state) => state.tabList, // tags菜单列表
      catch_components: (state) => state.catch_components, // keepalive缓存
    }),
  },
  data() {
    return {
      menuOptions: [],
    };
  },
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    window.$message = useMessage();
    var menuOptions = [];

    let menuData = {
      pageNum: "1",
      pageSize: "10",
    };

    
    let result = axiosReq("/menu/selectMenuAll", "get", menuData)

    console.log(result);
    const requestMenu = (resuit) => {
      console.log(resuit);
      menuOptions = resuit.data.list;
      console.log(menuOptions);
    };

    console.log(menuOptions);

    menuOptions = [
      {
        menuLabel: "控制台",
        menuPath: "/wellcome",
        menuKey: "wellcome",
        icon: () => h(NIcon, null, { default: () => h(BookIcon) }),
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
    return {
      requestMenu,
      inverted: ref(false),
      collapsed: ref(false),
      menuOptions,
      // 标签选择
      handleMenu(item, index) {
        console.log("handleMenu:", item);
        // 历史选中菜单
        var oldActivePath = store.state.activePath;
        // 首先判断点击的是否是自己，如果是自己则return
        if (oldActivePath === item.routerName) {
          return;
        }
        // 不是自己，存储菜单
        store.commit("changeMenu", item.routerName);
        // 页面跳转
        router.push({ path: item.routerName });
      },
      /**
       *标签关闭事件
       */
      handleClose(tab, index) {
        console.log("handleClose:", tab);
        // 历史选中菜单
        var oldActivePath = store.state.activePath;
        // 历史已选中菜单列表
        var oldTabList = store.state.tabList;
        // 计算标签个数
        let length = oldTabList.length - 1;
        // 删除tabList中的该对象
        for (let i = 0; i < oldTabList.length; i++) {
          let item = oldTabList[i];
          if (item.routerName === tab.routerName) {
            oldTabList.splice(i, 1);
          }
        }
        // 删除keepAlive缓存
        store.commit("removeKeepAliveCache", tab.routerName);
        // 如果关闭的标签不是当前路由的话，就不跳转
        if (tab.routerName !== oldActivePath) {
          return;
        }
        // 如果length为1，必然只剩下首页标签，此时关闭后，更新到首页
        if (length === 1) {
          // 同时存储菜单
          store.commit("closeTab", {
            activePath: "wellcome",
            tabList: oldTabList,
          });
          // tab页向左跳转
          router.push({ path: oldTabList[index - 1].routerPath });
          // 不再向下执行
          return;
        }
        // 关闭的标签是最右边的话，往左边跳转一个
        if (index === length) {
          router.push({ path: "/test2" });
          // 同时更新路径
          oldActivePath = oldTabList[index - 1].routerName;
          // 同时存储菜单
          store.commit("closeTab", {
            activePath: oldActivePath,
            tabList: oldTabList,
          });
          // tab页向左跳转
          router.push({ path: oldTabList[index - 1].routerPath });
        } else {
          // 同时更新路径
          oldActivePath = oldTabList[index].routerName;
          // 同时存储菜单
          store.commit("closeTab", {
            activePath: oldActivePath,
            tabList: oldTabList,
          });
          // tab页向右跳转
          router.push({ path: oldTabList[index].routerPath });
        }
      },

      /**菜单点击  */
      handleUpdateValue(key, item) {
        console.log("handleUpdateValue:", item);
        // message.info("[onUpdate:value]: " + JSON.stringify(item));
        // 加入keepalive缓存
        store.commit("addKeepAliveCache", item.menuKey);
        //添加tags标签
        //访问wellcome 就代表home
        var menuKey = item.menuKey === "wellcome" ? "wellcome" : item.menuKey;
        var submenu = {
          routerPath: item.menuPath,
          routerName: menuKey,
          menuLabel: item.menuLabel,
        };
        //修改选中菜单
        store.commit("selectMenu", submenu);
        // 页面跳转
        router.push({ path: item.menuPath });
      },
    };
  },
});
</script>
