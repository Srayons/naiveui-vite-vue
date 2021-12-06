// vue3中创建store实例对象的方法createStore()按需引入
import { createStore } from "vuex";

export default createStore({
  // 共享状态（即变量）
  state: {
    // 缓存组件页面
    catch_components: [],
    // 全局请求后台URL
    baseURL: import.meta.env.VITE_ENV_FORE_URL,
    // 当前选中的菜单 - 默认选择首页
    activePath: "wellcome",
    // 菜单项 - 默认包含首页
    tabList: [{ routerPath: "/wellcome", menuLabel: "控制台", routerName: "wellcome" }],
  },
  // 更改vuex的store中状态的唯一方法 - 同步操作
  mutations: {
    //清空vuex数据
    clearVUEX(state) {
      state.catch_components = [];
      state.activePath = "wellcome";
      state.tabList = [{ routerPath: "/wellcome", menuLabel: "首页", routerName: "wellcome" }];
    },
    // 跳转页面执行
    selectMenu(state, submenu) {
      // 首页就是 wellcome   也就是 home
      if (submenu.routerName === "wellcome") {
        submenu.routerName = "wellcome";
        submenu.path = "/wellcome";
      }
      // 当前选中菜单
      var activePath = submenu.routerName;
      // 历史已选中菜单列表
      var oldTabList = state.tabList;
      // 将菜单信息添加到tablist - 添加时判断是否已有该标签
      var result = oldTabList.some((item) => {
        if (item.routerName === activePath) {
          return true;
        }
      });
      // 如果不包含该对象，则添加
      if (!result) {
        oldTabList.push({
          routerPath: submenu.routerPath,
          routerName: submenu.routerName,
          menuLabel: submenu.menuLabel,
        });
      }
      // 重新赋值
      state.activePath = activePath;
      state.tabList = oldTabList;
    },
    // 添加keepalive缓存
    addKeepAliveCache(state, val) {
      // 如果是首页不缓存
      if (val === "wellcome") {
        return;
      }
      // 添加时判断，如果该组件已存在，则不添加
      if (state.catch_components.indexOf(val) === -1) {
        // 不存在，缓存页面
        state.catch_components.push(val);
      }
    },
    // 删除keepalive缓存
    removeKeepAliveCache(state, val) {
      let cache = state.catch_components;
      for (let i = 0; i < cache.length; i++) {
        if (cache[i] === val) {
          cache.splice(i, 1);
        }
      }
      state.catch_components = cache;
    },
    //关闭菜单
    closeTab(state, val) {
      console.log("activePath:",state.activePath)
      // 重新赋值
      state.activePath = val.activePath;
      state.tabList = val.tabList;
    },
    // 点击标签选择菜单
    changeMenu(state, val) {
      state.activePath = val;
    },
  },
  actions: {},
  getters: {},
  modules: {},
});
