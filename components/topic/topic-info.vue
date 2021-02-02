<template>
  <view>
    <!-- 话题详情页面 -->
    <!-- 背景图片 -->
    <view class="bg-img">
      <image class="img" :src="item.pic" />
    </view>

    <!-- 话题详细信息 -->
    <view class="topic-info">
      <view class="topic-info-head uni-flex">
        <image class="topic-info-pic" :src="item.pic" />
        <view class="title">#{{ item.title }}#</view>
      </view>
      <view class="topic-info-center uni-flex">
        <view class="dynamicSum">动态 {{ item.dynamicSum }}</view>
        <view class="todaySum"> 今日 {{ item.todaySum }}</view>
      </view>
      <view class="topic-info-bottom"> {{ item.recommend }} </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
// <!-- 背景图片 -->
.bg-img {
  height: 300rpx;
  width: 100%;
  position: relative;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(10rpx);
  }
}
// 话题详细信息
.topic-info {
  padding: 0 40rpx;
  // 话题头部部分
  .topic-info-head {
    margin-top: 10rpx;
    .topic-info-pic {
      width: 120rpx;
      height: 120rpx;
      border-radius: 12rpx;
      margin-top: -60rpx;
      z-index: 999;
    }
    .title {
      font-size: 38rpx;
      margin-left: 40rpx;
    }
  }
  //话题今日活跃部分
  .topic-info-center {
    margin: 20rpx 0;
    color: #cdcdcd;
    font-size: 28rpx;
    .todaySum {
      margin-left: 30rpx;
    }
  }

  .topic-info-bottom {
    color: #a3a3a3;
    font-size: 32rpx;
    line-height: 1.6;
  }
}
</style>
