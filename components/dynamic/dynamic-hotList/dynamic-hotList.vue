<template>
  <view>
    <!-- 热门分类 -->
    <view class="hot">
      <view class="hot-header">
        <view class="header-left">热门分类</view>
        <view class="header-right" @tap="goTopic">更多 ></view>
      </view>
      <view class="hot-nav">
        <block v-for="item in hotList" :key="item.name">
          <view class="item">{{ item.name }}</view>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    hotList: Array,
  },
  data() {
    return {};
  },
  methods: {
    goTopic() {
      console.log("这个有毒把");
      uni.navigateTo({
        url: "../../pages/topic-nav/topic-nav",
      });
    },
  },
};
</script>

<style lang="scss">
// 热门分类
.hot {
  padding: 17rpx 25rpx;
  border-top: 1rpx solid #ececec;
  border-bottom: 1rpx solid #ececec;

  .hot-header {
    font-size: 24rpx;
    display: flex;
    justify-content: space-between;
    .header-right {
      color: #d8d8d8;
    }
  }
  .hot-nav {
    display: flex;
    margin-top: 30rpx;
    .item {
      flex: 1;
      margin-left: 10rpx;
      background-color: #f7f7f7;
      text-align: center;
      padding: 10rpx 0;
    }
  }
}
</style>
