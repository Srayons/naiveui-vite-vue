<template>
  <!-- 重置密码面板 -->
  <n-form
    :model="model"
    :rules="rules"
    ref="forgetPwdFormRef"
    label-placement="left"
    :label-width="75"
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
      label="手机号"
      path="userPhone"
      :validation-status="userPhoneValidaStatus"
      :feedback="userPhoneFeedback"
      clearable
    >
      <n-input ref="userPhoneRef" placeholder="手机号" v-model:value="model.userPhone" />
    </n-form-item>
    <n-form-item
      label="密码"
      path="forgetPassWord"
      :validation-status="forgetPassWordValidaStatus"
      :feedback="forgetPassWordFeedback"
      clearable
    >
      <n-input
        placeholder="密码"
        type="password"
        show-password-on="mousedown"
        v-model:value="model.forgetPassWord"
      />
    </n-form-item>
    <n-form-item
      label="重复密码"
      path="ResPassWord"
      :validation-status="ResPassWordValidaStatus"
      :feedback="ResPassWordFeedback"
      clearable
    >
      <n-input
        placeholder="重复密码"
        type="password"
        show-password-on="mousedown"
        v-model:value="model.ResPassWord"
      />
    </n-form-item>
    <n-gradient-text
      style="float: right; margin-bottom: 15px"
      type="danger"
      @click="returnLogin"
      :size="13"
    >返回登录</n-gradient-text>
    <!-- <n-form-item label="验证码" path="passWord">
                <n-input placeholder="Input" v-model:value="model.passWord" />
    </n-form-item>-->
  </n-form>
  <n-button @click="handleValidateForgetPwdButtonClick" type="primary" block>重置密码</n-button>
</template>
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
import { userLogin } from "../../../http/api";

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

// defineEmits,defineProps无需导入，直接使用
const emits = defineEmits(["loginConfigValue", "LoginPanelStyle"]);

const router = useRouter();
const message = useMessage();
const errorIcon = ref(null);
const errorMsg = ref(null);
const forgetPwdFormRef = ref(null);
const size = ref("medium");

// 重置密码变量
const userPhoneRef = ref(null);
const userPhoneValidaStatus = ref(undefined);
const forgetPassWordValidaStatus = ref(undefined);
const ResPassWordValidaStatus = ref(undefined);
const model = ref({
  userPhone: null,
  forgetPassWord: null,
  ResPassWord: null,
});

const rules = {
  userPhone: {
    required: true,
    trigger: ["blur", "input"],
    message: "请输入手机号",
  },
  forgetPassWord: {
    required: true,
    trigger: ["blur", "input"],
    message: "请输入密码",
  },
  ResPassWord: {
    required: true,
    trigger: ["blur", "input"],
    message: "请再次输入密码",
  },
};

const forgetPassWordFeedback = computed(() => {});

const ResPassWordFeedback = computed(() => {});
const handleValidateForgetPwdButtonClick = (e) => {
  e.preventDefault();
  forgetPwdFormRef.value.validate((errors) => {
    console.log(errors);
  });
};

const userPhoneFeedback = computed(() => {
  let userPhone = model.value.userPhone;
  let forgetPassWord = model.value.forgetPassWord;
  console.log(userPhone);
  console.log(forgetPassWord);
});

//忘记密码
const returnLogin = () => {
  // console.log(ctx);
  let configVaule = {
    loginConfig: true,
    LoginPanelStyle: "height: 759px",
  };
  emits("loginConfigValue", configVaule);
};
</script>
