<template>
  <view>
    <view class="hot-item">
      <view class="hot-item-left">
        <image class="img" :src="topic.pic" />
      </view>
      <view class="hot-item-right">
        <!-- 导航 -->
        <view class="title"> # {{ topic.title }} #</view>
        <!-- 说明 -->
        <view class="recommend"> {{ topic.recommend }}</view>
        <!-- 动态 今日访问数 -->
        <view class="sum">
          <text class="dynamicSum"> 动态 {{ topic.dynamicSum }}</text>
          <text class="todaySum"> 今日 {{ topic.todaySum }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    topic: Object,
    index: Number,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.hot-item {
  margin-top: 50rpx;
  display: flex;
  border-bottom: 1rpx solid #eee;
  padding-bottom: 10rpx;
  .hot-item-left {
    .img {
      width: 180rpx;
      height: 180rpx;
      border-radius: 30rpx;
    }
  }
  .hot-item-right {
    margin: 0 40rpx;

    .title {
      font-size: 34rpx;
      font-weight: bold;
    }
    .recommend {
      font-size: 26rpx;
      color: #b7b7b7;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .sum {
      color: #b6b6b6;
      font-size: 30rpx;
      .todaySum {
        margin-left: 10rpx;
      }
    }
  }
}
</style>
