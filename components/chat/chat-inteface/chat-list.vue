<template>
  <view class="user-chat-item">
    <!-- 聊天列表 -->
    <view v-if="item.gstime" class="user-chat-time"> {{ item.gstime }}</view>
    <view class="user-chat-list" :class="{ 'user-chat-me': item.isme }">
      <image v-if="!item.isme" class="user-pic" :src="item.user_pic" />
      <view class="uesr-chat-body">
        <view class="txt" v-if="item.type == 'text'">{{ item.data }}</view>

        <image
          @tap="preview(item.data)"
          v-if="item.type == 'img'"
          :src="item.data"
          class="img"
        />
      </view>
      <image v-if="item.isme" class="user-pic" :src="item.user_pic"></image>
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
  onLoad() {},
  methods: {
    /**
     * 点击预览图片
     *
     */
    preview(data) {
      let arr = [];
      arr[0] = data;
      console.log(data);
      console.log(arr);
      uni.previewImage({
        // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
        urls: arr,
        success: function (res) {
          // success
          console.log(res);
        },
        fail: function (fail) {
          console.log(fail);
          // fail
        },
        complete: function (err) {
          // complete
          console.log(err);
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
/* // 聊天列表 */
.user-chat-item {
  margin: 0 40rpx;
}
.user-chat-time {
  font-size: 24rpx;
  text-align: center;
  color: #8a8a8e;
  margin-top: 40rpx;
}
/* // 对方发言 */
.user-chat-list {
  margin-top: 40rpx;
  display: flex;
  .user-pic {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .uesr-chat-body {
    background: #f4f4f4;
    box-shadow: 0rpx 4rpx 14rpx 0rpx rgba(229, 229, 229, 0.5);
    border-radius: 12rpx;
    margin-left: 20rpx;
    margin-right: 100rpx;
    padding: 25rpx;

    .txt {
      font-size: 32rpx;
      word-break: break-all;
    }
    .img {
      max-width: 450rpx;
      max-height: 300rpx;
    }
  }
}
/*我方聊天 */
.user-chat-me {
  width: 100%;
  justify-content: flex-end;
  .user-pic {
    order: 20;
  }
  .uesr-chat-body {
    margin-left: 100rpx;
    margin-right: 20rpx;
  }
}
</style>
