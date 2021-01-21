<template>
  <!-- 图文列表区域 -->

  <view class="item">
    <!-- 头部部分 -->
    <view class="header">
      <view class="header-left">
        <!-- 头像 -->
        <image class="portrait" :src="tempList.userPic" />
        <text class="name">{{ tempList.userName }}</text>
      </view>
      <view class="header-right">
        <block>
          <view
            class="attention icon iconfont icon-zengjia"
            v-if="!tempList.isGuanZhu"
            @tap="attention"
          >
            关注</view
          >
        </block>

        <!-- 关注 -->

        <view class="delete icon iconfont icon-guanbi"></view>
      </view>
    </view>
    <!-- 标题部分 -->
    <view class="title"> {{ tempList.title }} </view>
    <!-- 图片|视频区域 -->
    <view class="content">
      <image class="img" :src="tempList.content" />
      <block v-if="tempList.type == 'video'">
        <view class="pause icon iconfont icon-bofang"> </view>
        <view class="playnum">
          {{ tempList.playNum }}万次播放{{ tempList.timeNum }}</view
        >
      </block>
    </view>
    <!-- 底部评论点赞区域 -->
    <!-- 底部评论点赞区域 -->
    <view class="bottom">
      <view class="left">
        <!-- 点赞 -->
        <view class="praise" @tap="caozuo('ding')">
          <block v-if="tempList.infoNum.status == 1">
            <image
              class="iconImg"
              src="../../static/images/praise_active.png"
            />
          </block>
          <block v-else>
            <image class="iconImg" src="../../static/images/praise.png" />
          </block>
          <text class="count"> {{ tempList.infoNum.praiseNum }} </text>
        </view>
        <!-- 踩 -->
        <view class="trample" @tap="caozuo('cai')">
          <block v-if="tempList.infoNum.status == 2">
            <image
              class="iconImg"
              src="../../static/images/trample_active.png"
            />
          </block>
          <block v-else>
            <image class="iconImg" src="../../static/images/trample.png" />
          </block>

          <text class="count"> {{ tempList.infoNum.trampleNum }} </text>
        </view>
      </view>
      <view class="right">
        <!-- 评论 -->
        <view class="comment">
          <image class="iconImg" src="../../static/images/comment.png" />
          <view class="count"> {{ tempList.commentNum }}</view>
        </view>
        <view class="transpond">
          <image class="iconImg" src="../../static/images/transpond.png" />
          <view class="count">{{ tempList.transpondNum }}</view>
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
    return {
      tempList: {},
    };
  },
  created() {
    this.tempList = this.item;
  },
  methods: {
    attention() {
      console.log(this.item);
      this.tempList.isGuanZhu = true;
      // this.$set( this.item, this.item.isGuanZhu, true )
      // console.log(this.item.isGuanZhu)
      uni.showToast({
        title: "关注成功",
        duration: 2000,
      });
    }, // 顶踩
    caozuo(type) {
      switch (type) {
        case "ding":
          console.log("我顶了啊");
          if (this.tempList.infoNum.status == 1) {
            return;
          }
          this.tempList.infoNum.praiseNum++;
          if (this.tempList.infoNum.status == 2) {
            this.tempList.infoNum.trampleNum--;
          }
          this.tempList.infoNum.status = 1;
          break;

        case "cai":
          console.log("我踩了啊");
          if (this.tempList.infoNum.status == 2) {
            return;
          }
          this.tempList.infoNum.trampleNum++;
          if (this.tempList.infoNum.status == 1) {
            this.tempList.infoNum.praiseNum--;
          }
          this.tempList.infoNum.status = 2;
          console.log(this.item);
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.item {
  border-bottom: 2upx solid #ccc;
  padding: 0 22upx 40upx;
  .header {
    margin-top: 40upx;
    display: flex;
    justify-content: space-between;
    .header-left {
      .portrait {
        width: 74upx;
        height: 74upx;
        border-radius: 37upx;
        vertical-align: middle;
      }
      .name {
        margin-left: 20upx;
        font-size: 32upx;
        color: #999999;
      }
    }
    .header-right {
      text-align: center;
      .attention {
        width: 100upx;
        height: 52upx;
        background-color: #f4f4f4;
        border-radius: 8upx;
        font-size: 24upx;
        display: inline-block;
        margin-right: 20upx;
      }

      .delete {
        display: inline-block;
      }
    }
  }
  //标题部分
  .title {
    margin-top: 38upx;
    font-size: 30upx;
    font-weight: bold;
  }
  // 视频 图片区域
  .content {
    margin-top: 20upx;
    position: relative;
    color: #fff;
    .img {
      width: 700upx;
      height: 400upx;
      border-radius: 12upx;
    }
    .pause {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 100upx;
    }
    .playnum {
      min-width: 100upx;
      background-color: rgba(0, 0, 0, 0.7);
      font-size: 32upx;
      border-radius: 12upx;
      position: absolute;
      bottom: 20upx;
      right: 30upx;
      text-align: center;
      font-size: 30upx;
      padding: 0 10upx;
    }
  }
  // 评论点赞区域
  .bottom {
    margin: 10upx 20upx 0;
    display: flex;
    justify-content: space-between;
    .count {
      font-size: 24upx;
      color: #d3d3d3;
      margin-left: 10upx;
      vertical-align: middle;
    }
    .iconImg {
      width: 36upx;
      height: 36upx;
    }

    .left {
      display: flex;

      .trample {
        margin-left: 30upx;
      }
    }
    .right {
      color: #cdcdcd;
      display: flex;
      .comment {
        margin-right: 16upx;
      }
      .count {
        display: inline-block;
      }
    }
  }
}
.disNone {
  display: none;
}
</style>
