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
            >个人信息</n-gradient-text
          >
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
          之不看剧不肯定就那电脑电脑到那时电脑都女大三担待的难点的拿掉拿到你的扫你的内地哦按地阿森纳带哦你掉电脑赛欧带哦你收到的
        </n-gradient-text>
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
            >音乐</n-gradient-text
          >
        </n-divider>
        <!--  -->
        <Aplayer
          :music="videoUpload.music"
          :showLrc="true"
          :listFolded="false"
          :list="lists"
          volume="0.8"
        ></Aplayer>
      </n-card>
    </n-space>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  onUpdated,
  reactive,
  nextTick,
} from "vue";
import {
  PersonOutline,
  PaperPlaneOutline,
  PlayOutline,
} from "@vicons/ionicons5";
import Aplayer from "vue3-aplayer";
export default defineComponent({
  components: {
    PersonOutline,
    PaperPlaneOutline,
    PlayOutline,
    Aplayer,
  },
  setup() {
    const lists = reactive([]);
    let videoUpload = {
      music: {
        // theme: "pic",
        title: "新的心跳",
        artist: "---无",
        src: "https://m704.music.126.net/20210917175323/4a2101534b5e5ccd2b8df442e5244b6c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/10160599708/da03/b3d4/dc8f/0d7df5a9b3bfcf00dc7b9c5e02d77a34.m4a?authSecret=0000017bf315e4e91e880aaba07bed13",
        pic: "https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg",
        lrc: "http://localhost:9999/sync/getLyricById"//"https://api.imjad.cn/cloudmusic/?id=1330348068&type=lyric",
      },
    };
    //页面加载完
    onMounted(() => {
      //发送请求

    });

    return {
      LeftSpan: ref("1"),
      videoUpload,
      lists
      // ap,
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
  padding-left: 10px
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
