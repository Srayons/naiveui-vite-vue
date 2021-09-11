<template>
  <div>
    <n-space vertical size="large">
      <!-- 轮播图 -->
      <n-carousel autoplay trigger="hover" show-arrow>
        <img
          class="carousel-img"
          src="https://s.anw.red/fav/1623979004.jpg!/fw/600/quality/77/ignore-error/true"
        />
        <img
          class="carousel-img"
          src="https://s.anw.red/news/1623372884.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
        />
        <img
          class="carousel-img"
          src="https://s.anw.red/news/1623177220.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
        />
        <img
          class="carousel-img"
          src="https://s.anw.red/news/1623152423.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
        />
      </n-carousel>
      <!-- <n-switch v-model:value="loading" /> -->
      <n-card v-for="(grad,index) in GradientTexts" hoverable class="cardStyle">
        <template #header :key="i" class="header-Skeleton">
          <n-skeleton text v-if="loading" width="60%" />
          <template v-else>
            <!-- 标题渐变文字 -->
            <a href="#" style="text-decoration: none;">
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
            text-decoration:none;
            display: block;
            height: 120px;
            text-indent: 2em;"
          >
            <n-gradient-text
              ref="cGradientText"
              class="c-gradient-text"
              type="info"
              :gradient="{
              deg: 180,
              from: 'rgb(85, 85, 85)',
              to: 'rgb(170, 170, 170)'
            }"
              v-text="grad.content"
            ></n-gradient-text>
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
                to: 'rgb(170, 170, 170)'
              }"
                style="margin-left: 5px;"
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
                to: 'rgb(170, 170, 170)'
              }"
                style="margin-left: 5px;"
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
                to: 'rgb(170, 170, 170)'
              }"
                style="margin-left: 5px;"
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
                to: 'rgb(170, 170, 170)'
              }"
                style="margin-left: 5px;"
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
                to: 'rgb(170, 170, 170)'
              }"
                style="margin-left: 5px;"
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
            <img :src="srcUrl+(((index+7*3)-3)+5)+'.jpg'" />
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

<script>
import {
  defineComponent,
  ref,
  onMounted,
  onUpdated,
  reactive,
  nextTick,
} from "vue";
//小眼睛、信息、时间、标签
import {
  EyeOutline,
  EllipsisHorizontalCircle,
  TimeOutline,
  PricetagsOutline,
  ThumbsUpOutline,
} from "@vicons/ionicons5";
export default defineComponent({
  components: {
    EyeOutline,
    EllipsisHorizontalCircle,
    TimeOutline,
    PricetagsOutline,
    ThumbsUpOutline,
  },
  setup() {
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
      title: "博客系统4.2发布",
      vitisy: "0.92k",
      commont: "10",
      tag: "Java",
      like: "60k",
      dateTime: "2021-08-21",
      content:
        "拖了挺久了，最近又花了点时间去写，总算把本版的功能写完了，同时也修复了大量的bug 部署系统更新 之",
    };
    // GradientTexts.length = 5;
    for (let index = 0; index < 5; index++) {
      GradientTexts.push(data);
    }

    //页面加载完
    onMounted(() => {
      if (navigator.onLine) {
        console.log("有网");
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
            }
          }
        });
      } else {
        console.log("没网");
      }
      cardLen.length = 5;
      // updateSwitch();
    });

    //页面升级
    onUpdated(() => {
      console.log("onUpdated=====");
    });

    // 不要忘了在return中添加refDiv
    return {
      loading, //加载动画
      active,
      disabled,
      cardLen,
      srcUrl,
      hGradientText,
      cGradientText,
      // gradient,
      GradientTexts,
    };
  },
});
</script>
