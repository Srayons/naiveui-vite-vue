import router from '../route/index'

export const routerPackag = routers => {
  console.log(routers)
    routers.filter(itemRouter => {
      if (itemRouter.routerComponent != "Layout") {
        router.addRoute("adminIndex", {
          path: `${itemRouter.routerPath}`,
          name: itemRouter.routerName,
          component: () => import(/* @vite-ignore */`../${itemRouter.routerComponent}`)
        });
      }
      // 是否存在子集
      if (itemRouter.menuChildren && itemRouter.menuChildren.length) {
        routerPackag(itemRouter.menuChildren);
      }
      return true;
    });
  };