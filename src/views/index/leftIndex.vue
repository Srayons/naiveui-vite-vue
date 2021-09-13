<template>
  <div id="divLeft">
    <n-space vertical size="large">
      <n-card hoverable class="cardStyle">
        <!-- 个人信息 -->
        <n-divider title-placement="left" dashed>
          <n-icon size="22">
            <PersonOutline></PersonOutline>
          </n-icon>
          <n-gradient-text
            style="margin-left: 6px"
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          >
            个人信息
          </n-gradient-text>
        </n-divider>
        <n-gradient-text
          ref="cGradientText"
          class="c-gradient-text"
          type="info"
          :gradient="{
            deg: 180,
            from: 'rgb(85, 85, 85)',
            to: 'rgb(170, 170, 170)',
          }"
        >
          拖了挺久了，最近又花了点时间去写，总算把本版的功能写完了，同时也修复了大量的bug
          部署系统更新
          之不看剧不肯定就那电脑电脑到那时电脑都女大三担待的难点的拿掉拿到你的扫你的内地哦按地阿森纳带哦你掉电脑赛欧带哦你收到的</n-gradient-text
        >
      </n-card>

      <n-card hoverable class="cardStyle">
        <!-- 音乐 -->
        <n-divider title-placement="left" dashed>
          <n-icon size="22">
            <PaperPlaneOutline></PaperPlaneOutline>
          </n-icon>
          <n-gradient-text
            style="margin-left: 6px"
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          >
            音乐
          </n-gradient-text>
        </n-divider>

        <aplayer :music="videoUpload.music"></aplayer>
      </n-card>
    </n-space>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";
import {
  PersonOutline,
  PaperPlaneOutline,
  PlayOutline,
} from "@vicons/ionicons5";

import aplayer from "vue-aplayer";
export default defineComponent({
  components: {
    PersonOutline,
    PaperPlaneOutline,
    PlayOutline,
    aplayer,
  },
  setup() {
    //页面加载完

    return {};
  },
  data() {
    return {
      LeftSpan: "1",
      videoUpload: {
        progress: false,
        progressPercent: 0,
        successPercent: 0,
        music: {
          title: "",
          author: "",
          url: "",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
        },
      },
    };
  },
});
</script>
<style>
#divLeft {
  width: 300px;
}

#divLeft .n-card {
  width: 300px;
}
#divLeft .n-card > .n-card__content {
  width: 100%;
}

#divLeft .n-divider:not(.n-divider--vertical) {
  margin-top: 5px;
}

/* .aplayer
  .aplayer-info
  .aplayer-controller
  .aplayer-time
  .aplayer-icon.aplayer-icon-loop {
  display: none;

} */

.aplayer {
  margin: 0;
  font-family: "v-sans";
}
</style>
