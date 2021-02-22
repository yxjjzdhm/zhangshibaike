<template>
  <!-- 消息列表 -->
  <view
    class="chat-item animated fadeInLeft fast item u-border-bottom"
    @tap="goDetails"
  >
    <image :src="item.userPic" class="user-touxiang" />
    <view class="chat-list-right">
      <view class="chat-head">
        <view class="name">{{ item.name }}</view>
        <view class="time">{{ item.time }}</view>
      </view>
      <view class="chat-bottom">
        <view class="content">{{ item.content }}</view>
        <view class="message-num"
          ><uni-badge :text="item.messageNum" type="error"></uni-badge
        ></view>
      </view>
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
  methods: {
    /**
     跳转到聊天界面
     */
    goDetails() {
      uni.navigateTo({
        url: "../../pages/chat/chat-interface/chat-interface",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.chat-item {
  display: flex;
  border-bottom: 2rpx solid #eaeaea;
  padding: 30rpx 0;
  width: 750rpx;
  .user-touxiang {
    margin-left: 20rpx;
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .chat-list-right {
    padding: 0 23rpx 0 29rpx;
    flex: 1;

    .chat-head {
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 30rpx;
        color: #161616;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }
      .time {
        font-size: 22rpx;
        color: #c0c0c0;
      }
    }
    .chat-bottom {
      color: #989898;
      font-size: 26rpx;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
