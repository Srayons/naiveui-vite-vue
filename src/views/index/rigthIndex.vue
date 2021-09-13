<template>
  <div id="divRigth">
    <n-space vertical size="large">
      <n-card hoverable class="cardStyle">
        <!-- 公告 -->
        <n-divider title-placement="left" dashed>
          <n-icon size="22">
            <BookmarkOutline></BookmarkOutline>
          </n-icon>
          <n-gradient-text
            style="margin-left: 6px"
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          >
            公告
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
        <!-- 更多功能 -->
        <n-divider title-placement="left" dashed>
          <n-icon size="22">
            <BookmarkOutline></BookmarkOutline>
          </n-icon>
          <n-gradient-text
            style="margin-left: 6px"
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          >
            更多功能
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
        ></n-card
      >
    </n-space>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated } from "vue";
//书签
import { BookmarkOutline } from "@vicons/ionicons5";
export default defineComponent({
  components: {
    BookmarkOutline,
  },
  setup() {
    return {};
  },
  data() {
    return {
      RigthSpan: "2",
    };
  },
});
</script>

<style>
#divRigth .n-card {
  width: 520px
}
#divRigth .n-card > .n-card__content {
  width: 100%;
}

#divRigth .n-divider:not(.n-divider--vertical) {
  margin-top: 5px;
}
</style>
