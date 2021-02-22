<template>
  <view>
    <!-- 消息界面 -->
    <!-- 兼容微信小程序 -->
    <!-- #ifdef MP-WEIXIN -->
    <view class="head">
      <!-- 好友列表 -->
      <view class="friend-box" @tap="goChatDetails">
        <image
          src="../../static/images/wodehaoyou_sel@2x.png"
          class="head-pic"
        />
        <view class="head-txt">我的好友</view>
      </view>
      <!-- 添加好友 -->
      <view class="friend-box" @tap="showpopup">
        <image
          src="../../static/images/wodequnzu_nor@2x.png"
          class="head-pic"
        />
        <view class="head-txt">添加好友</view>
      </view>
    </view>
    <view class="line"></view>
    <!-- #endif -->

    <!-- 用户聊天列表 -->
    <view class="chat-list">
      <u-swipe-action
        :show="item.show"
        v-for="(item, index) in chatList"
        :index="index"
        :key="item.id"
        @click="click"
        @open="open"
        btn-width="180"
        :options="options"
      >
        <chat-list :item="item"></chat-list>
      </u-swipe-action>
      <view class="loadingBox">{{ loadingText }}</view>
    </view>

    <!-- 添加好友弹窗 -->
    <chat-popup
      :isshow="isshow"
      @hidepopup="hidepopup"
      @addfriend="addfriend"
      @clear="clear"
    ></chat-popup>
  </view>
</template>

<script>
import chatList from "../../components/chat/chat-list.vue";
import chatPopup from "../../components/chat/chat-popup.vue";
export default {
  components: {
    chatList,
    chatPopup,
  },
  data() {
    return {
      loadingText: "上拉加载更多",
      chatList: [
        {
          id: 0,
          userPic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=766637910,3824934095&fm=26&gp=0.jpg",
          name: "谢轰轰",
          time: "22:00", //后期是时间戳
          content: "你好 我是谢疯疯",
          messageNum: 1,
          show: false,
        },
      ],
      disabled: false,
      btnWidth: 180,
      show: false, //控制滑动删除的显示
      index: 0,
      options: [
        {
          text: "删除",
          style: {
            backgroundColor: "#dd524d",
          },
        },
      ],
      isshow: false, //控制弹窗是否隐藏
    };
  },
  /**
   * 监听下拉事件
   */

  onPullDownRefresh() {
    this.pullDown();
  },
  /**
   *
   * 监听上拉事件
   */
  onReachBottom() {
    this.topLoading();
  },
  /**
   *
   * 监听导航按钮点击事件
   */
  onNavigationBarButtonTap(e) {
    switch (e.index) {
      case 0:
        this.hidepopup();
        this.goChatDetails();
        break;
      case 1:
        this.showpopup();
        break;
    }
  },
  methods: {
    /**
     * 下拉刷新
     *
     */
    pullDown() {
      setTimeout((res) => {
        uni.stopPullDownRefresh();
      }, 2000);
    },
    /**
     * 下拉加载
     *
     */
    topLoading() {
      if (this.loadingText != "上拉加载更多") {
        return;
      }
      this.loadingText = "加载中...";

      setInterval(() => {
        let arr = {
          id: this.chatList.length,
          userPic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=766637910,3824934095&fm=26&gp=0.jpg",
          name: "憨八龟",
          time: "22:00", //后期是时间戳
          content: "在吗在吗 你在干嘛啊",
          messageNum: 20,
        };
        this.chatList.push(arr);
      }, 1000);
    },
    /**
     *
     * 点击隐藏好友添加和清除列表
     */
    hidepopup() {
      this.isshow = false;
    },
    /**
     *
     * 跳转到我的好友
     */
    goChatDetails() {
      uni.navigateTo({
        url: "./user-friend/user-friend",
      });
    },
    /**
     *
     * 点击显示好友添加和清除列表
     */
    showpopup() {
      console.log("我压根就没执行");

      this.isshow = true;
    },
    /**
     * 点击添加好友
     *
     */
    addfriend() {
      console.log("点击添加了好友");
      this.isshow = false;
    },
    /**
     *
     * 点击清空好友
     */
    clear() {
      console.log("点击清空好友列表");
      this.isshow = false;
    },
    /**
     *
     * 点击滑块时触发
     */

    click(index, index1) {
      console.log(index1);
      console.log("index:", index);
      this.chatList.splice(index, 1);
      // this.$u.toast(`删除了第${index}个cell`);
      this.$u.toast(`删除成功`);
    },
    /**
     *
     * 滑动滑块时触发
     *
     */
    // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
    open(index) {
      // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
      // 原本为'false'，再次设置为'false'会无效
      this.chatList[index].show = true;
      this.chatList.map((val, idx) => {
        if (index != idx) this.chatList[idx].show = false;
      });
    },
  },
};
</script>

<style lang="scss">
// #ifdef MP-WEIXIN
.head {
  height: 150rpx;
  width: 100%;
  display: flex;
  .friend-box {
    width: 50%;
    text-align: center;
    margin-top: 20rpx;
  }
  .head-pic {
    width: 50rpx;
    height: 50rpx;
  }
}
.line {
  height: 10rpx;
  width: 100%;
  background-color: #f5f5f5;
}
//#endif

//用户聊天列表

//下拉加载提示

.loadingBox {
  text-align: center;
  color: #aaa;
  padding: 16upx;
}
</style>
