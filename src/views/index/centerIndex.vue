<template>
  <div
    style="
      background-color: rgba(255, 255, 255, 0.8);
      padding: 0 20px;
      width: auto;
      border-radius: 10px;
    "
  >
    <n-space vertical size="large">
      <!-- 最热文章 -->
      <n-divider title-placement="left" dashed>
        <n-icon size="22">
          <BookmarkOutline></BookmarkOutline>
        </n-icon>
        <n-gradient-text
          style="margin-left: 6px"
          gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
        >最热文章</n-gradient-text>
      </n-divider>
      <!-- 轮播图 -->
      <n-carousel autoplay trigger="hover" show-arrow>
        <img class="carousel-img" src="../../img/1.jpg" />
        <img class="carousel-img" src="../../img/2.jpg" />
        <img class="carousel-img" src="../../img/3.jpg" />
        <img class="carousel-img" src="../../img/4.jpg" />
        <img class="carousel-img" src="../../img/5.jpg" />
      </n-carousel>
      <!-- <n-switch v-model:value="loading" /> -->
      <!-- 最热文章 -->
      <n-divider title-placement="left" dashed>
        <n-icon size="22">
          <BookmarkOutline></BookmarkOutline>
        </n-icon>
        <n-gradient-text
          gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          style="margin-left: 6px"
        >最新文章</n-gradient-text>
      </n-divider>
      <n-card v-for="(grad, index) in GradientTexts" hoverable class="cardStyle">
        <template #header :key="i" class="header-Skeleton">
          <n-skeleton text v-if="loading" width="60%" />
          <template v-else>
            <!-- 标题渐变文字 -->
            <a href="#" style="text-decoration: none">
              <n-gradient-text
                ref="hGradientText"
                class="h-gradient-text"
                gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
                v-text="grad.title"
              ></n-gradient-text>
              <!-- 博客系统4.2发布 -->
            </a>
          </template>
        </template>
        <n-skeleton class="text-Skeleton" text v-if="loading" :repeat="6" />

        <!-- 内容渐变文字 -->
        <template v-else class="text-Skeleton">
          <a
            href="#"
            style="
              text-decoration: none;
              display: block;
              height: 120px;
              text-indent: 2em;
            "
          >
            <n-gradient-text
              ref="cGradientText"
              class="c-gradient-text"
              type="info"
              :gradient="{
                deg: 180,
                from: 'rgb(85, 85, 85)',
                to: 'rgb(170, 170, 170)',
              }"
            >{{ grad.content }}</n-gradient-text>
            <n-icon size="30" style="text-indent: 0.5em; margin-top: 15px">
              <EllipsisHorizontal></EllipsisHorizontal>
            </n-icon>
            <!-- 拖了挺久了，最近又花了点时间去写，总算把本版的功能写完了，同时也修复了大量的bug 部署系统更新 之 -->
          </a>
        </template>
        <template #action>
          <div class="iconTextDivLeft">
            <!-- 标签 -->
            <span class="iconText">
              <n-icon size="16">
                <PricetagsOutline></PricetagsOutline>
              </n-icon>
              <n-gradient-text
                type="info"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                style="margin-left: 5px"
                v-text="grad.tag"
              ></n-gradient-text>
              <!-- 10条评论 -->
            </span>
            <!-- 发布日期 -->
            <span class="iconText iconTimeText">
              <n-icon size="16">
                <TimeOutline></TimeOutline>
              </n-icon>
              <n-gradient-text
                type="info"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                style="margin-left: 5px"
                v-text="grad.dateTime"
              ></n-gradient-text>
              <!-- 发布于 2021-08-21 -->
            </span>
          </div>

          <div class="iconTextDivRight">
            <!-- 热度 -->
            <span class="iconText">
              <n-icon size="16">
                <EyeOutline></EyeOutline>
              </n-icon>
              <n-gradient-text
                type="info"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                style="margin-left: 5px"
                v-text="grad.vitisy"
              ></n-gradient-text>
            </span>
            <!-- 评论 -->
            <span class="iconText">
              <n-icon size="16">
                <EllipsisHorizontalCircle></EllipsisHorizontalCircle>
              </n-icon>
              <n-gradient-text
                type="info"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                style="margin-left: 5px"
                v-text="grad.commont"
              ></n-gradient-text>
              <!-- 10条评论 -->
            </span>
            <!-- 点赞 -->
            <span class="iconText">
              <n-icon size="16">
                <ThumbsUpOutline></ThumbsUpOutline>
              </n-icon>
              <n-gradient-text
                type="info"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                style="margin-left: 5px"
                v-text="grad.like"
              ></n-gradient-text>
              <!-- 10条评论 -->
            </span>
          </div>
        </template>
        <!-- 图片骨架 -->
        <n-skeleton class="imgSkeleton" v-if="loading" />
        <!-- 图片 -->
        <template class="imgSkeleton" v-else>
          <div class="imgSkeleton">
            <img :src="srcUrl + (index + 7 * 8 - 3 + 5) + '.jpg'" />
          </div>
          <!-- <n-image
            class="imgSkeleton"
            object-fit="contain"
            :src="srcUrl+i"
          />-->
          <!--  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" -->
        </template>
      </n-card>
    </n-space>
  </div>
</template>

<script setup>
import {nextTick, onMounted, onUpdated, reactive, ref,} from "vue";
//小眼睛、信息、时间、标签、点赞、书签、三个点
import {
  BookmarkOutline,
  EllipsisHorizontal,
  EllipsisHorizontalCircle,
  EyeOutline,
  PricetagsOutline,
  ThumbsUpOutline,
  TimeOutline,
} from "@vicons/ionicons5";

const cardLen = reactive([]);
//https://xiaoyou66.com/assets/images/background/img173.jpg
const srcUrl = ref("https://xiaoyou66.com/assets/images/background/img"); //https://s3.mashiro.top/view/2018/01/03/sakura.pn
const loading = ref(true);
const active = ref(false);
const disabled = ref(true);
const hGradientText = ref(null);
const cGradientText = ref(null);
const GradientTexts = reactive([]);
let data = {
  title: "作者正在努力开发中。。。。。。",
  vitisy: "9999k",
  commont: "9999",
  tag: "Java",
  like: "99999k",
  dateTime: "2099-08-21",
  content: "作者正在努力开发中。。。。。。",
};
// GradientTexts.length = 5;
for (let index = 0; index < 5; index++) {
  GradientTexts.push(data);
}

//页面加载完
onMounted(() => {
  if (navigator.onLine) {
    // console.log("有网");
    ref(loading).value = false;
    nextTick(() => {
      let el = document.getElementsByClassName("c-gradient-text");
      if (el) {
        for (let index = 0; index < el.length; index++) {
          /* 多行超出变省略号 */
          //设置不强制换行
          el[index].style.setProperty("white-space", "unset");
          //将对象作为弹性伸缩盒子模型显示
          el[index].style.setProperty("display", "-webkit-box");
          //设置超出隐藏
          el[index].style.setProperty("overflow", "hidden");
          /* 几行超出 */
          el[index].style.setProperty("-webkit-line-clamp", "3");
          el[index].style.setProperty("-webkit-box-orient", "vertical");
          el[index].style.setProperty("height", "auto");
        }
      }
    });
  } else {
    // console.log("没网");
  }
  cardLen.length = 5;
  // updateSwitch();
});

//页面升级
onUpdated(() => {
  // console.log("onUpdated=====");
});
</script>
