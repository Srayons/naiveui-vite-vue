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
          >个人信息</n-gradient-text>
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
        >作者正在努力开发中。。。。。。</n-gradient-text>
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
          >音乐</n-gradient-text>
        </n-divider>
        <!--  -->
        <div v-if="!isAplayer">
          <n-skeleton v-if="loading" width="100%" :repeat="6" />
        </div>
        <div v-if="isAplayer">
          <!--             autoplay -->
          <Aplayer
            :music="videoUpload.music"
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

<script setup>
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
import { useLoadingBar } from "naive-ui";
import { getSongsById, getParamsAndKey, PostByPlayerUrl } from "../../http/api";

const volume = ref(0.8);

const isAplayer = ref(false);
const LeftSpan = ref("1");
const videoUpload = reactive({
  music: {},
});
const lists = reactive([]);
const repeatAll = ref("list");
const loading = ref(true);
const loadingBar = useLoadingBar();
//发送请求  http://localhost:9999/sync/getSongsById?id=6962426121
// console.log(import.meta.env.VITE_ENV_BASE_URL)
// console.log(import.meta.env.VITE_ENV_SONGID)
getSongsById({ id: import.meta.env.VITE_ENV_SONGID }).then((res) => {
  // console.log(res);
  if (res.code == "200") {
    //结束加载条
    loadingBar.finish();
    let data = res.data;
    // console.log(data);
    for (let index = 0; index < data.length; index++) {
      let musics = {
        title: data[index].msname,
        artist: "   " + data[index].martist,
        src:
          "https://music.163.com/song/media/outer/url?id=" +
          data[index].msid +
          ".mp3", //data[index].mSurl,
        pic: data[index].mpic,
        lrc:
          import.meta.env.VITE_ENV_BASE_URL +
          "/sync/getLyricById?id=" +
          data[index].msid, //"https://api.imjad.cn/cloudmusic/?id=1330348068&type=lyric",
      };
      lists.push(musics);
    }
    // console.log(import.meta.env.VITE_ENV_BASE_URLS);
    // console.log(import.meta.env);
    // console.log(lists);
    videoUpload.music = lists[0];
    // console.log(JSON.stringify(this.lists[0]));
    // console.log(videoUpload);
    isAplayer.value = true;
  }
});

//页面加载完
onMounted(() => {});
nextTick(() => {});
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
