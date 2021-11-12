<template>
  <n-layout-content style="height: 759px">
    <div id="loginCenter">
      <n-card>
        <n-tabs default-value="signin" size="large">
          <n-tab-pane name="signin" tab="账户登录">
            <n-form
              :model="model"
              :rules="rules"
              ref="formRef"
              label-placement="left"
              :label-width="58"
              :size="size"
              :style="{
                maxWidth: '640px',
              }"
            >
              <n-gradient-text
                style="width: 100%; text-align: center; margin-bottom: 5px"
                type="danger"
                :size="13"
              >&nbsp;{{ errorMsg }}</n-gradient-text>
              <n-form-item
                label="账号"
                path="userName"
                :validation-status="userNameValidaStatus"
                :feedback="userNameFeedback"
                clearable
              >
                <n-input ref="userNameRef" placeholder="用户名/邮箱" v-model:value="model.userName" />
                <!-- {{userNameRef}} -->
              </n-form-item>
              <n-form-item
                label="密码"
                path="passWord"
                :validation-status="passWordValidaStatus"
                :feedback="passWordFeedback"
                clearable
              >
                <n-input placeholder="密码" v-model:value="model.passWord" />
              </n-form-item>
              <n-gradient-text
                style="float: right; margin-bottom: 15px;cursor: pointer;"
                type="danger"
                @click="forgetPwd"
                :size="13"
              >忘记密码</n-gradient-text>
              <!-- <n-form-item label="验证码" path="passWord">
                <n-input placeholder="Input" v-model:value="model.passWord" />
              </n-form-item>-->
            </n-form>
            <n-button @click="handleValidateButtonClick" type="primary" block>登录</n-button>
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
  height: 45%;
  top: 20%;
  left: 65%;
  position: absolute;
  background: hsla(0, 0%, 100%, 0.9);
  opacity: 0.8;
}
#loginCenter .n-card .n-card__content {
  width: 100%;
}

.n-form-item {
  margin-bottom: 10px;
}
</style>

<script>
import { useRouter } from "vue-router";
import { defineComponent, computed, ref, nextTick } from "vue";
import { useMessage } from "naive-ui";

function pubFeedback(userName, passWord, errorMsg) {
  if (!userName || !passWord) {
    errorMsg.value = undefined;
  }
}
export default {
  setup() {
    const router = useRouter();
    const formRef = ref(null);
    const userNameRef = ref(null);
    const message = useMessage();
    const userNameValidaStatus = ref(undefined);
    const userNameFeedback = ref(undefined);
    const passWordValidaStatus = ref(undefined);
    const passWordFeedback = ref(undefined);
    const errorMsg = ref(null);
    const model = ref({
      userName: null,
      passWord: null,
      verifiCode: null,
    });

    const rules = {
      userName: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入 用户名/邮箱",
      },
      passWord: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入 登录密码",
      },
    };
    return {
      userNameRef,
      errorMsg,
      router,
      formRef,
      size: ref("medium"),
      model: model,
      rules: rules,
      userNameValidaStatus: userNameValidaStatus,
      userNameFeedback: computed(() => {
        let userName = model.value.userName;
        let passWord = model.value.passWord;
        pubFeedback(userName, passWord, errorMsg);
      }),
      passWordValidaStatus: passWordValidaStatus,
      passWordFeedback: computed(() => {
        let userName = model.value.userName;
        let passWord = model.value.passWord;
        pubFeedback(userName, passWord, errorMsg);
      }),
      //忘记密码
      forgetPwd() {},
      //验证登录
      handleValidateButtonClick(e) {
        e.preventDefault();
        formRef.value.validate((errors) => {
          if (!errors) {
            let userName = model.value.userName;
            let passWord = model.value.passWord;
            if (userName == "admin" && passWord == "admin") {
              userNameValidaStatus.value = undefined;
              passWordValidaStatus.value = undefined;
              // message.success("登录成功");
              router.push({
                path: "/admin/Index",
              });
            } else {
              if (userName != "admin" || passWord != "admin") {
                userNameValidaStatus.value = "error";
                passWordValidaStatus.value = "error";
                errorMsg.value = "账户名与密码输入不匹配，请重新输入";
                userNameRef.value.focus();
              }
              // message.error("账户或密码错误");
            }
          } else {
            errorMsg.value = "";
            console.log(errors);
            // message.error("登录失败");
          }
        });
      },
    };
  },
};
</script>
