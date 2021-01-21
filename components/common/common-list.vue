<template>
  <view class="container">
    <!-- 头像部分 -->
    <view class="portraits">
      <image class="touxiang" :src="item.userPic" />
    </view>
    <!-- 主体部分 -->
    <view class="main">
      <!-- 名字 年龄 关注部分 -->
      <view class="header">
        <view class="name">{{ item.username }}</view>
        <view class="sex iconfont icon-nan">
          <text decode class="sex-txt"> {{ item.age }}</text></view
        >
        <view class="guanzhu iconfont icon-zengjia">关注</view>
      </view>
      <!-- 标题部分 -->
      <view class="title">
        {{ item.title }}
      </view>
      <!-- 图片部分 -->
      <view class="image" v-if="item.img">
        <image class="img" :src="item.img" />
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
export default {
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

<style scoped lang="less">
// 内容区域
.container {
  margin-top: 32upx;
  display: flex;
  //头像部分
  .portraits {
    margin-left: 15rpx;
    width: 100upx;
    height: 100upx;
    .touxiang {
      width: 100upx;
      height: 100upx;
      border-radius: 50%;
    }
  }
  //主体部分
  .main {
    margin-left: 28rpx;
    padding-right: 22rpx;
    // 名字 年龄 关注部分
    flex: 1;
    // 主体头部
    .header {
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 28rpx;
        color: #919191;
      }
      // 年龄
      .sex {
        height: 32rpx;
        font-size: 24rpx;
        padding: 4rpx 8rpx;
        background-color: #44b3ff;
        border-radius: 12rpx;
        line-height: 26rpx;
        color: #fff;
        margin: 12rpx 0 0 -244rpx;
        .sex-txt {
          font-size: 24rpx;
          margin-left: 8rpx;
        }
      }
      //关注
      .guanzhu {
        align-self: flex-end;
        padding: 0 6rpx;
        font-size: 24rpx;
        background-color: #f4f4f4;
        margin-right: 34rpx;
      }
    }
    // 主体title部分
    .title {
      margin-top: 15rpx;
      color: #000;
      font-size: 30rpx;
      line-height: 50rpx;
    }
    // 图片部分
    .image {
      margin-top: 10rpx;
      position: relative;
      .img {
        width: 561rpx;
        height: 360rpx;
        border-radius: 30rpx;
      }
      // 视频部分
      .video {
        color: #fff;
        .icon-bofang {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 90rpx;
        }
        .details {
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 20rpx;
          padding: 4rpx 10rpx;
          position: absolute;
          bottom: 25rpx;
          right: 45rpx;
          font-size: 28rpx;
          .txt {
            margin-left: 6rpx;
          }
        }
      }
    }
    // 转载部分
    .reprint {
      margin-top: 20rpx;
      background-color: #f7f7f7;
      padding: 20rpx 15rpx;
      display: flex;
      border-radius: 18rpx;

      .reprint-img {
        max-width: 250rpx;
        min-width: 150rpx;
        min-height: 100rpx;
        max-height: 150rpx;
        border-radius: 25rpx;
      }
      .reprint-title {
        margin-left: 10rpx;
        font-size: 26rpx;
        color: #4f4f4f;
      }
    }
    // 底部部分
    .bottom {
      color: #bbbbbb;
      display: flex;
      justify-content: space-between;
      .site {
        color: #c6c6c6;
      }
      .right {
        display: flex;
        .icon-xiaoxi {
          margin: 0 20rpx;
        }
        .txt {
          margin-left: 10rpx;
        }
      }
    }
  }
}
</style>
