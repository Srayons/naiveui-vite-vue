<template>
  <div>
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
    <n-space vertical>
      <n-switch v-model:value="loading" />
      <n-card v-for="i in cardLen" hoverable class="cardStyle">
        <template #header :key="i" class="header-Skeleton">
          <n-skeleton text v-if="loading" width="60%" />
          <template v-else>
            <!-- 标题渐变文字 -->
            <n-gradient-text
              id="h-gradient-text"
              gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
            >
              I'm OK
            </n-gradient-text>
          </template>
        </template>
        <n-skeleton class="text-Skeleton" text v-if="loading" :repeat="6" />
        <!-- 内容渐变文字 -->
        <template v-else class="text-Skeleton">
          <n-gradient-text class="c-gradient-text" type="info">
            <!-- 不要忘了留姓名
            <br />电话和其他事情 <br />不要说的太快免得我没写下你大名
            <br />或许你不再打来 <br />我却等到头发白 <br />希望有一天你会打来 -->
            -啊大大撒第八课稍等哈的hi啊搜到hi安,红豆阿斯顿和赛欧的哈斯殴打hi哦啊是滴啊山东海上的
            hi奥殴打后DOI安徽钓会带哦会DOI爱德华奥,谁都爱大海多哈搜东海寿我哈搜ID号is的
            殴斗阿斯吊带哦多还哦的哈死哦动画赛欧的。海鸥的话斯奥哦啊的哈斯哦对哈搜的hi啊搜到活塞的哈斯殴打后壁但还哦的
            活塞的哈的厚爱四大行赛欧的哈死哦动画赛，欧大慧寺哦对哈哦ID哈DOI上海DOI安徽的死哦单号ID好搜i。
            daidosdjoaj安达斯欧尼吊打你哦王阿森纳地哦啊水泥地哦啊说你懂扫ID年底in带哦你单身的你哦大农ID闹十多年in地哦啊啥你都Ian打死哦鸟你大胆东三段头脑都爱上你打死哦
            奥电脑哦啊死难带哦你都Ian都是闹ID纳斯殴打你哦啊水泥地哦的那搜地奈欧拿掉水泥地哦按点
          </n-gradient-text>
        </template>
        <!-- 图片骨架 -->
        <n-skeleton class="imgSkeleton" v-if="loading" />
        <!-- 图片 -->
        <template class="imgSkeleton" v-else>
          <div class="imgSkeleton">
            <img :src="srcUrl" />
          </div>
          <!-- <n-image
            class="imgSkeleton"
            object-fit="contain"
            :src="srcUrl+i"
          /> -->
          <!--  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" -->
        </template>
      </n-card>
    </n-space>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUpdated, reactive } from "vue";

export default defineComponent({
  setup() {
    const cardLen = reactive([]);
    const srcUrl = ref("https://s3.mashiro.top/view/2018/01/03/sakura.pn");
    const loading = ref(true);
    const active = ref(false);
    const disabled = ref(true);

    //页面加载完
    onMounted(() => {
      if (navigator.onLine) {
        console.log("有网");
        ref(loading).value = false;
        let el = document.getElementsByClassName("c-gradient-text");
        console.log(el);
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
            el[index].style.setProperty("-webkit-line-clamp", "6");
            el[index].style.setProperty("-webkit-box-orient", "vertical");
          }
        }
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
    };
  },
});
</script>
