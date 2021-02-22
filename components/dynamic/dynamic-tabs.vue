<template>
  <div>
    <!-- navbar顶部导航部分 -->
    <u-navbar :is-back="false">
      <view class="slot-wrap">
        <view class="item-box">
          <block v-for="(tab, index) in tabBarList" :key="tab.id">
            <view
              class="tabItem"
              :class="{ active: index == tabIndex }"
              @tap="clickTab(index)"
              >{{ tab.name }}
              <view v-if="index == tabIndex" class="navbar-line"></view>
            </view>
          </block>
        </view>
        <!-- 发布按钮 -->
        <!-- #ifdef APP-PLUS -->
        <view class="iconfont icon-bianji1" @tap="goIssue1"></view>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <view class="iconfont icon-fabu" @tap="goIssue1">发布</view>
        <!-- #endif -->
      </view>
    </u-navbar>
  </div>
</template>

<script>
export default {
  props: {
    tabBarList: Array,
    tabIndex: Number,
  },
  data() {
    return {};
  },
  methods: {
    // 跳转发布页面
    goIssue1() {
      uni.navigateTo({
        url: "../../pages/index/issue/issue",
      });
    },
    clickTab(index) {
      console.log(index);
      this.$emit("change-tab", index);
    },
  },
};
</script>

<style scoped lang="scss">
//nav 顶部导航部分
.slot-wrap {
  width: 750upx;
  display: flex;
  .item-box {
    margin: 0 auto;
    display: flex;
    .tabItem {
      color: #969696;
      font-size: 36rpx;
      text-align: center;
      font-weight: bold;
      .navbar-line {
        border: 4upx solid #fede33;
        width: 80rpx;
        border-radius: 10upx;
        margin: 0 auto;
      }
    }
    .active {
      color: #000;
    }
    :nth-child(1) {
      margin-right: 22rpx;
    }
  }
  // 发布按钮
  //#ifdef APP-PLUS
  .icon-bianji1 {
    position: absolute;
    font-size: 40rpx;
    right: 30rpx;
    top: 50%;
    transform: translateY(-50%);
    width: 50rpx;
    z-index: 999;
  }
  //#endif

  //#ifdef MP-WEIXIN
  .icon-fabu {
    display: flex;
    position: absolute;
    left: 30rpx;
    font-size: 30rpx;
    top: 50%;
    transform: translateY(-50%);
    width: 100rpx;
    z-index: 999;
  }
  //#endif
}
</style>
