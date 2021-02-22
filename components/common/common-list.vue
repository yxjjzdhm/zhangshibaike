<template>
  <view class="container animated fadeInLeft fast">
    <!-- 头像部分 -->
    <view class="portraits">
      <image class="touxiang" :src="item.userPic" />
    </view>
    <!-- 主体部分 -->
    <view class="main">
      <!-- 名字 年龄 关注部分 -->
      <view class="header">
        <view class="name">{{ item.username }}</view>
        <!-- <view
          class="sex iconfont"
          :class="[item.sex == 0 ? 'icon-nan' : 'icon-nv']"
        >
          <text decode class="sex-txt"> {{ item.age }}</text></view
        > -->
        <common-sex-age :sex="item.sex" :age="item.age"> </common-sex-age>
        <view class="guanzhu iconfont icon-zengjia">关注</view>
      </view>
      <!-- 标题部分 -->
      <view class="title">
        {{ item.title }}
      </view>
      <!-- 图片部分 -->
      <view class="image" v-if="item.img">
        <image mode="widthFix" class="img" :src="item.img" />
        <!-- 视频部分 -->
        <view class="video" v-if="item.video">
          <view class="icon iconfont icon-bofang"></view>
          <view class="details"
            >{{ item.video.playNum }}次播放
            <text class="txt">{{ item.video.time }}</text></view
          >
        </view>
      </view>

      <!-- 转载部分 -->
      <view class="reprint" v-if="item.reprint">
        <image
          class="reprint-img"
          mode="widthFix"
          :src="item.reprint.reprintImg"
        />
        <view class="reprint-title"> {{ item.reprint.reprintTitle }}</view>
      </view>
      <!-- bottom底部部分 -->
      <view class="bottom">
        <view class="site">{{ item.site }}</view>
        <view class="right">
          <!-- 转发 -->
          <view class="iconfont icon-zhuanfa">
            <text class="txt"> {{ item.transmitSum }}</text>
          </view>
          <!-- 评论 -->
          <view class="iconfont icon-xiaoxi">
            <text class="txt">{{ item.commentSum }}</text>
          </view>
          <view class="iconfont icon-dianzan">
            <text class="txt">{{ item.goodSum }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import commonSexAge from "./common-sex-age.vue";

export default {
  components: {
    commonSexAge,
  },

  props: {
    item: Object,
    index: Number,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../../common/list.scss";
</style>
