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

      <n-card hoverable class="cardStyle" style="--padding-left: 5px">
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
        <div v-if="!isAplayer">
          <n-skeleton v-if="loading" width="100%" :repeat="6" />
        </div>
        <div v-if="isAplayer">
          <Aplayer
            autoplay
            :music="videoUpload"
            :showLrc="true"
            :listFolded="false"
            :list="lists"
            :volume="volume"
            :mutex="true"
            listMaxHeight="395px"
            :repeat="repeatAll"
            :shuffle="false"
          ></Aplayer>
        </div>
      </n-card>
    </n-space>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onUpdated,
  reactive,
  nextTick,
  toRefs,
} from "vue";
import {
  PersonOutline,
  PaperPlaneOutline,
  PlayOutline,
} from "@vicons/ionicons5";
import Aplayer from "vue3-aplayer";

import { getSongsById, getParamsAndKey, PostByPlayerUrl } from "../../http/api";

export default defineComponent({
  components: {
    PersonOutline,
    PaperPlaneOutline,
    PlayOutline,
    Aplayer,
  },
  data() {
    return {
      isAplayer: false,
      LeftSpan: "1",
      videoUpload: {},
      lists: [],

      repeatAll: "list",
      loading: true,
    };
  },
  mounted() {
    //发送请求  http://localhost:9999/sync/getSongsById?id=6962426121
    getSongsById({ id: import.meta.env.VITE_ENV_SongId }).then((res) => {
      console.log(res);
      if (res.code == "200") {
        let data = res.data;
        console.log(data);
        for (let index = 0; index < data.length; index++) {
          let musics = {
            title: data[index].mSname,
            artist: "   " + data[index].mArtist,
            src:
              "https://music.163.com/song/media/outer/url?id=" +
              data[index].mSid +
              ".mp3", //data[index].mSurl,
            pic: data[index].mPic,
            lrc:
              import.meta.env.VITE_ENV_BASE_URLS +
              import.meta.env.VITE_ENV_BASE_URL +
              "/sync/getLyricById?id=" +
              data[index].mSid, //"https://api.imjad.cn/cloudmusic/?id=1330348068&type=lyric",
          };
          this.lists.push(musics);
        }
        console.log(import.meta.env.VITE_ENV_BASE_URLS);
        console.log(import.meta.env);
        console.log(this.lists);
        this.videoUpload = this.lists[0];
        // console.log(JSON.stringify(this.lists[0]));
        // console.log(this.videoUpload);
        this.isAplayer = true;
      }
    });
  },
  setup() {
    //页面加载完
    onMounted(() => {});
    nextTick(() => {});
    return {
      volume: 0.8,
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
  padding-left: 0px;
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

#divLeft .aplayer {
  margin: 0;
  font-family: "v-sans";
}

#divLeft .aplayer-time button:nth-child(3),
#divLeft .aplayer-time button:nth-child(4) {
  display: none;
}
</style>
