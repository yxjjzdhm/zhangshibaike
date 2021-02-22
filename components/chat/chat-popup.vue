<template>
  <view>
    <!-- 添加好友弹窗 -->
    <view class="shade" v-show="isshow" @tap="hidepopup"></view>
    <view class="chat-left-popup" v-show="isshow">
      <view class="u-f-ac" hover-class="chat-left-popup-h" @tap="addfriend">
        <view class="icon iconfont icon-sousuo"></view>
        加好友
      </view>
      <view class="u-f-ac" hover-class="chat-left-popup-h" @tap="clear">
        <view class="icon iconfont icon-qingchu"></view>
        清除缓存
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    isshow: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    hidepopup() {
      this.$emit("hidepopup");
    },
    addfriend() {
      this.$emit("addfriend");
    },
    clear() {
      this.$emit("clear");
    },
  },
};
</script>

<style lang="scss">
// 添加好友弹窗
.chat-left-popup {
  width: 410rpx;
  height: 200rpx;
  background-color: #fff;
  box-shadow: 0rpx 7rpx 6rpx 6rpx #ccc;
  position: fixed;
  z-index: 20000;
  top: 140rpx;
  right: 130rpx;
  // #ifdef APP-PLUS
  top: 0rpx;
  right: 0;
  //#endif
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  .u-f-ac {
    display: flex;
    height: 50%;
    padding-left: 20rpx;
    font-size: 35rpx;
    .iconfont {
      margin-right: 20rpx;
      font-weight: bold;
    }
  }
  .chat-left-popup-h {
    background-color: #eee;
  }
}
.shade {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1999;
}
</style>
