<template>
  <n-layout-content style="height: 759px">
    <div id="loginCenter">
      <n-card>
        <n-tabs default-value="signin" size="large">
          <n-tab-pane name="signin" tab="密码登录">
            <n-form :show-label="false">
              <n-form-item-row label="用户名">
                <n-input placeholder="用户名/邮箱" />
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input placeholder="请输入登录密码" />
              </n-form-item-row>
            </n-form>
            <n-button @click="submit()" type="primary" block>登录</n-button>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </n-layout-content>
</template>
<style>
#loginCenter {
  background-image: url("../../img/LB1.jpg");
  background-position: 50%;
  width: 100%;
  height: 100%;
}

#loginCenter .n-card {
  width: 20%;
  top: 20%;
  left: 60%;
  position: absolute;
  background: hsla(0, 0%, 100%, 0.9);
  opacity: 0.8;
}
#loginCenter .n-card .n-card__content {
  width: 100%;
}
</style>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const submit = () => {
      router.push({
        path:"/admin/Index",
      })
    };
    return {
      submit,
      router,
    };
  },
};
</script>
