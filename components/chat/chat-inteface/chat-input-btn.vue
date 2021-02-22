<template>
  <!-- 底部输入框	   -->
  <view class="input-box">
    <input class="ipt" confirm-type="send" v-model="iptTxt" @confirm="submit" />
    <view class="more" @tap="submit">发送</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      iptTxt: "",
    };
  },
  methods: {
    submit() {
      if (this.iptTxt) {
        this.$emit("submit", this.iptTxt);
        this.iptTxt = "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
/* // 底部输入框 */
.input-box {
  position: fixed;
  background-color: #f3f3f3;
  bottom: 0;
  display: flex;
  left: 0;
  right: 0;
  height: 102rpx;

  .more {
    width: 200rpx;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
  }
  .ipt {
    height: 72rpx;
    margin: 18rpx 23rpx 0 40rpx;
    padding-left: 20rpx;
    flex: 1;
    background-color: #fff;
    border: 1rpx solid #e2e2e2;
    box-shadow: 0rpx 4rpx 14rpx 0rpx rgba(229, 229, 229, 0.5);
    border-radius: 8rpx;
  }
}
</style>
