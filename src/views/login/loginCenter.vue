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
              >
                <i class="tips" v-html="errorIcon"></i>
                {{ errorMsg }}
              </n-gradient-text>
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

.tips {
  vertical-align: text-top;
  margin-right: 3px;
}
</style>

<script>
import { useRouter } from "vue-router";
import { defineComponent, computed, ref, nextTick } from "vue";
import { useMessage } from "naive-ui";

function pubFeedback(userName, passWord,userNameValidaStatus,passWordValidaStatus,errorMsg, errorIcon) {
  if (!userName || !passWord) {
    errorMsg.value = undefined;
    errorIcon.value = undefined;
  } else {
    userNameValidaStatus.value = undefined;
    passWordValidaStatus.value = undefined;
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
    const errorIcon = ref(null);
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
      errorIcon,
      router,
      formRef,
      size: ref("medium"),
      model: model,
      rules: rules,
      userNameValidaStatus: userNameValidaStatus,
      userNameFeedback: computed(() => {
        let userName = model.value.userName;
        let passWord = model.value.passWord;
        pubFeedback(userName, passWord,userNameValidaStatus,passWordValidaStatus,errorMsg, errorIcon);
      }),
      passWordValidaStatus: passWordValidaStatus,
      passWordFeedback: computed(() => {
        let userName = model.value.userName;
        let passWord = model.value.passWord;
        pubFeedback(userName, passWord,userNameValidaStatus,passWordValidaStatus,errorMsg, errorIcon);
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
                errorIcon.value =
                  '<svg t="1636874031347" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6752" width="16" height="16"><path d="M512.055964 734.413788m-52.620148 0a52.620148 52.620148 0 1 0 105.240296 0 52.620148 52.620148 0 1 0-105.240296 0Z" fill="#FF517F" p-id="6753"></path><path d="M510.65276 631.629099a43.850123 43.850123 0 0 1-43.499322-44.200924l2.631007-350.800984A43.850123 43.850123 0 0 1 513.283768 193.127869a43.674723 43.674723 0 0 1 43.499322 44.200924l-2.631008 350.800984A43.850123 43.850123 0 0 1 510.65276 631.629099z" fill="#FF517F" p-id="6754"></path><path d="M512.055964 1024A511.994036 511.994036 0 1 1 874.08258 149.979348a511.994036 511.994036 0 0 1-362.026616 874.020652z m0-936.112426a424.29379 424.29379 0 1 0 300.110242 124.008148A423.942989 423.942989 0 0 0 512.055964 87.887574z" fill="#FF517F" p-id="6755"></path></svg>';
                errorMsg.value = "账户名与密码输入不匹配，请重新输入";
                userNameRef.value.focus();
              }
              // message.error("账户或密码错误");
            }
          } else {
            errorIcon.value = "";
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
