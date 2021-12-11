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
      <n-spin :show="show">
        <n-menu
          :inverted="inverted"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="states.menuOptions"
          @update:value="handleUpdateValue"
          :default-expanded-keys="defaultExpandedKeys.Expandedkeys"
          key-field="menuKey"
          label-field="menuLabel"
          children-field="menuChildren"
        />
      </n-spin>
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
            :closable="panel.routerName !== 'adminWellcome'"
            @close="
              handleClose(
                panel,
                index,
                activePath === panel.routerName ? 'success' : ''
              )
            "
          >
            <span @click="handleMenu(panel, index)">
              {{
              panel.menuLabel
              }}
            </span>
          </n-tag>
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
<script setup>
import {
  defineComponent,
  h,
  ref,
  toRefs,
  toRef,
  reactive,
  computed,
  onMounted,
} from "vue";
import { useMessage } from "naive-ui";
import { useStore, mapState, mapMutations } from "vuex";
import { RouterLink, useRouter } from "vue-router";
import { NIcon } from "naive-ui";
import { useLoadingBar } from "naive-ui";
import { axiosReq } from "../../http/requestApi/requestApi";

/**
 * 图标事件
 */
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const store = useStore();
const router = useRouter();
window.$message = useMessage();
const loadingBar = useLoadingBar();
const inverted = ref(false);
const collapsed = ref(false);
// 已选中菜单
const activePath = toRef(store.state, "activePath");
// tags菜单列表
const tabList = toRef(store.state, "tabList");
// keepalive缓存
const catch_components = toRef(store.state, "catch_components");
// 默认展开菜单key
const defaultExpandedKeys = reactive({
  Expandedkeys: [],
});
// 加载条状态
const show = ref(true);
// 菜单集合
const states = reactive([
  {
    menuOptions: [],
  },
]);

// 菜单入参
let menuData = {
  pageNum: "1",
  pageSize: "10",
};

// 标签选择
const handleMenu = (item, index) => {
  console.log("handleMenu:", item);
  // 历史选中菜单
  var oldActivePath = store.state.activePath;
  // 首先判断点击的是否是自己，如果是自己则return
  if (oldActivePath === item.routerName) {
    return;
  }
  //开始加载条
  loadingBar.start();
  // 不是自己，存储菜单
  store.commit("changeMenu", item.routerName);
  // 页面跳转
  router.push({ path: item.routerName });
};
// 标签关闭事件
const handleClose = (tab, index) => {
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
      activePath: "adminWellcome",
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
};
// 菜单点击
const handleUpdateValue = (key, item) => {
  console.log("handleUpdateValue:", item);
  // message.info("[onUpdate:value]: " + JSON.stringify(item));
  // 加入keepalive缓存
  store.commit("addKeepAliveCache", item.menuKey);
  //添加tags标签
  //访问wellcome 就代表home
  var menuKey =
    item.menuKey === "adminWellcome" ? "adminWellcome" : item.menuKey;
  var submenu = {
    routerPath: item.routerPath,
    routerName: menuKey,
    menuLabel: item.menuLabel,
  };
  //修改选中菜单
  store.commit("selectMenu", submenu);
  loadingBar.start();
  // 页面跳转
  router.push({ path: item.routerPath });
};
// 初始化加载
onMounted(async () => {
  const result = await axiosReq("/admin/menu/selectMenuAll", "get", menuData);
  if (result.code == 200) {
    //结束加载条
    loadingBar.finish();
    //结束加载
    show.value = false;
    let menuData = result.data;
    // 动态导入图标库
    const ionicons5 = await import("@vicons/ionicons5");
    for (let index = 0; index < menuData.list.length; index++) {
      const element = menuData.list[index];
      element.icon = renderIcon(ionicons5[element.menuIcon]);
      if (element.menuChildren instanceof Array) {
        for (let index = 0; index < element.menuChildren.length; index++) {
          const elementMenuChildren = element.menuChildren[index];
          elementMenuChildren.icon = renderIcon(
            ionicons5[elementMenuChildren.menuIcon]
          );
        }
      }
    }
    states.menuOptions = menuData.list;
    defaultExpandedKeys.Expandedkeys.push(menuData.list[1].menuKey);
  }
});
</script>
