<template>
  <n-layout-content :style="LoginPanelStyle">
    <div id="loginCenter">
      <n-card>
        <n-tabs size="large">
          <!-- 登录面板 -->
          <n-tab-pane v-if="loginConfig" name="signin" tab="账户登录">
            <n-spin :show="show">
              <n-form
                v-if="loginConfig"
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
                  v-if="loginConfig"
                  style="width: 100%; text-align: center; margin-bottom: 5px"
                  type="danger"
                  :size="13"
                >
                  <i class="tips" v-html="errorIcon" v-if="loginConfig"></i>
                  {{ errorMsg }}
                </n-gradient-text>
                <n-form-item
                  v-if="loginConfig"
                  label="账号"
                  path="userName"
                  :validation-status="userNameValidaStatus"
                  :feedback="userNameFeedback"
                  clearable
                >
                  <n-input
                    v-if="loginConfig"
                    ref="userNameRef"
                    placeholder="用户名/邮箱"
                    v-model:value="model.userName"
                  />
                </n-form-item>
                <n-form-item
                  v-if="loginConfig"
                  label="密码"
                  path="passWord"
                  :validation-status="passWordValidaStatus"
                  :feedback="passWordFeedback"
                  clearable
                >
                  <n-input
                    v-if="loginConfig"
                    @keyup.enter="enterkey"
                    placeholder="密码"
                    type="password"
                    show-password-on="mousedown"
                    v-model:value="model.passWord"
                  />
                </n-form-item>
                <n-gradient-text
                  v-if="loginConfig"
                  style="float: right; margin-bottom: 15px"
                  type="danger"
                  @click="forgetPwd"
                  :size="13"
                >忘记密码</n-gradient-text>
              </n-form>
            </n-spin>
            <n-button v-if="loginConfig" @click="handleValidateButtonClick" type="primary" block>登录</n-button>
          </n-tab-pane>

          <n-tab-pane v-if="!loginConfig" name="signin" tab="重置密码">
            <ForgetPwdForm @loginConfigValue="loginConfigValue"></ForgetPwdForm>
          </n-tab-pane>

          <!-- <n-form-item label="验证码" path="passWord">
                <n-input placeholder="Input" v-model:value="model.passWord" />
          </n-form-item>-->
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

<script setup>
import { useRouter } from "vue-router";
import {
  defineComponent,
  computed,
  ref,
  nextTick,
  onMounted,
  onUnmounted,
} from "vue";
import { useMessage } from "naive-ui";
import { userLogin } from "../../http/api";
import ForgetPwdForm from "./panel/forgetPwdForm.vue";
// import cookies from "vue-cookies";
/**
 * 输入框反馈事件
 */
function pubFeedback(
  userName,
  passWord,
  userNameValidaStatus,
  passWordValidaStatus,
  errorMsg,
  errorIcon
) {
  if (!userName || !passWord) {
    errorMsg.value = undefined;
    errorIcon.value = undefined;
  } else {
    userNameValidaStatus.value = undefined;
    passWordValidaStatus.value = undefined;
  }
}

const router = useRouter();
const message = useMessage();
const formRef = ref(null);
const errorIcon = ref(null);
const errorMsg = ref(null);
const show = ref(false);
const size = ref("medium");
let LoginPanelStyle = ref("height: 759px");
// 设置表单状态（true为登录，false为忘记密码）
const loginConfig = ref(true);
// 登录面板变量
const userNameRef = ref(null);
const userNameValidaStatus = ref(undefined);
const passWordValidaStatus = ref(undefined);
const model = ref({
  userName: null,
  passWord: null,
  verifiCode: null,
});

// 登录非空验证
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

// 登录验证
let toLogin = () => {
  console.log("toLogin---");
  let userName = model.value.userName;
  let passWord = model.value.passWord;
  let md5Pwd = hex_md5(userName + "!@!@!" + passWord);
  //写入加密密码到密码框
  model.value.passWord = md5Pwd;
  let data = {
    userCode: userName,
    passWord: md5Pwd,
  };
  userLogin(data).then((res) => {
    if (res.code == 200) {
      console.log(res);
      let userData = res.data;
      if (userData) {
        let userInfo = res.data.userInfo;
        $cookies.set("token", userData.token, userData.expires_in);
        $cookies.set(
          "refresh_token",
          userData.refresh_token,
          userData.expires_in
        );
        $cookies.set("userId", userInfo.uid);
        localStorage.setItem("userCode", userInfo.userCode);
        localStorage.setItem("userName", userInfo.userName);
        const { href } = router.resolve({
          path: "/admin/Index",
        });
        // location.href = href;
        window.close();
        window.open(href);
      }
    } else {
      show.value = false;
      userNameValidaStatus.value = "error";
      passWordValidaStatus.value = "error";
      errorIcon.value =
        '<svg t="1636874031347" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6752" width="16" height="16"><path d="M512.055964 734.413788m-52.620148 0a52.620148 52.620148 0 1 0 105.240296 0 52.620148 52.620148 0 1 0-105.240296 0Z" fill="#FF517F" p-id="6753"></path><path d="M510.65276 631.629099a43.850123 43.850123 0 0 1-43.499322-44.200924l2.631007-350.800984A43.850123 43.850123 0 0 1 513.283768 193.127869a43.674723 43.674723 0 0 1 43.499322 44.200924l-2.631008 350.800984A43.850123 43.850123 0 0 1 510.65276 631.629099z" fill="#FF517F" p-id="6754"></path><path d="M512.055964 1024A511.994036 511.994036 0 1 1 874.08258 149.979348a511.994036 511.994036 0 0 1-362.026616 874.020652z m0-936.112426a424.29379 424.29379 0 1 0 300.110242 124.008148A423.942989 423.942989 0 0 0 512.055964 87.887574z" fill="#FF517F" p-id="6755"></path></svg>';
      errorMsg.value = "账户名与密码输入不匹配，请重新输入";
      userNameRef.value.focus();
    }
  });
};

// 监听事件
let enterkey = (event) => {
  const code = event.keyCode;
  if (code == 13) {
    if (loginConfig.value) {
      // toLogin();
      handleValidateButtonClick(event);
    }
  }
};

//验证登录
let handleValidateButtonClick = (e) => {
  e.preventDefault();
  formRef.value.validate((errors) => {
    if (!errors && loginConfig.value) {
      show.value = true;
      document.removeEventListener("keyup", enterkey);
      toLogin();
    } else {
      errorIcon.value = "";
      errorMsg.value = "";
      console.log(errors);
      // message.error("登录失败");
    }
  });
};

let loadingListener = () => {
  document.addEventListener("keyup", enterkey);
  if ($cookies.get("token")) {
    router.push({
      path: "/admin/Index",
    });
  }
};

// 初始化函数
onMounted(() => {
  console.log("1");
  loadingListener();
});

// 销毁事件
onUnmounted(() => {
  console.log("已销毁---");
  document.removeEventListener("keyup", enterkey);
});

//返回登录
const loginConfigValue = (value) => {
  loginConfig.value = value.loginConfig;
  LoginPanelStyle.value = value.LoginPanelStyle;
};
//忘记密码
const forgetPwd = () => {
  loginConfig.value = false;
  LoginPanelStyle.value = "height: 1024px";
};

const userNameFeedback = computed(() => {
  let userName = model.value.userName;
  let passWord = model.value.passWord;
  pubFeedback(
    userName,
    passWord,
    userNameValidaStatus,
    passWordValidaStatus,
    errorMsg,
    errorIcon
  );
});

let passWordFeedback = computed(() => {
  let userName = model.value.userName;
  let passWord = model.value.passWord;
  pubFeedback(
    userName,
    passWord,
    userNameValidaStatus,
    passWordValidaStatus,
    errorMsg,
    errorIcon
  );
});
</script>
