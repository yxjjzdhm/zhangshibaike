<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->

    <!-- #endif -->
    <view class="hd"></view>

    <u-search
      input-align="left"
      height="70"
      action-text="返回"
      @custom="goBack"
      v-model="inputTxt"
    ></u-search>

    <!-- 导航栏部分 -->
    <view class="tabs">
      <index-tabs
        :tabBars="tabBarList"
        :tabIndex="tabIndex"
        @tabtap="tabtap"
        scrollItemStyle="width:33%;"
      ></index-tabs>
    </view>

    <!-- 用户列表页面 -->
    <!-- <view class="user-list">
      <block v-for="(list, listIndex) in userList" :key="listIndex">
        <user-list :list="list"></user-list>
      </block>
    </view> -->
    <!-- 主体内容部分 -->
    <swiper
      :current="tabIndex"
      class="swiper-box"
      :duration="300"
      @change="ontabchange"
      :style="{ height: swiperHeight + 'px' }"
    >
      <swiper-item
        class="swiper-item"
        v-for="(items, index) in newList"
        :key="index"
      >
        <scroll-view
          class="scroll-v list"
          scroll-y
          :style="{ height: swiperHeight + 'px' }"
          @scrolltolower="topLoading(index)"
        >
          <template v-if="items.userList.length > 0">
            <block v-for="(item, index1) in items.userList" :key="index1">
              <!-- 图文区域 -->
              <user-list :list="item" :index="index1"></user-list>
            </block>
            <view class="loadingBox">{{ items.loadingText }}</view>
          </template>
          <template v-else>
            <blank></blank>
          </template>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import indexTabs from "../../../components/index/index-tabs.vue";
import userList from "../../../components/chat/user-friend/user-list.vue";
export default {
  components: {
    indexTabs,
    userList,
  },
  data() {
    return {
      inputTxt: "",
      tabIndex: 0,
      swiperHeight: 500,
      tabBarList: [
        {
          name: "互关",
          id: "huguan",
          num: 20,
        },
        {
          name: "关注",
          id: "guanzhu",
          num: 30,
        },
        {
          name: "粉丝",
          id: "fensi",
          num: 2,
        },
      ],
      newList: [
        {
          loadingText: "上拉加载更多",
          userList: [
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雪中憨八龟",
              age: 18,
              sex: 0,
              isGuanZhu: false,
            },
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雪中憨八龟",
              age: 18,
              sex: 1, //0为男生 1为女生
              isGuanZhu: true,
            },
          ],
        },
        {
          loadingText: "上拉加载更多",
          userList: [
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雪中憨八龟",
              age: 18,
              sex: 0,
              isGuanZhu: false,
            },
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雨中憨八龟",
              age: 18,
              sex: 1, //0为男生 1为女生
              isGuanZhu: true,
            },
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雨中憨八龟",
              age: 18,
              sex: 1, //0为男生 1为女生
              isGuanZhu: true,
            },

            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雨中憨八龟",
              age: 18,
              sex: 1, //0为男生 1为女生
              isGuanZhu: true,
            },
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雨中憨八龟",
              age: 18,
              sex: 1, //0为男生 1为女生
              isGuanZhu: true,
            },
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雨中憨八龟",
              age: 18,
              sex: 1, //0为男生 1为女生
              isGuanZhu: true,
            },
          ],
        },
        {
          loadingText: "上拉加载更多",
          userList: [
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "马路憨八龟",
              age: 18,
              sex: 1,
              isGuanZhu: false,
            },
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
              userName: "雪中憨八龟",
              age: 18,
              sex: 1, //0为男生 1为女生
              isGuanZhu: true,
            },
          ],
        },
      ],
    };
  },
  /**
   *
   * 自定义导航栏的按钮
   */
  onNavigationBarButtonTap() {
    this.goBack();
  },
  onLoad() {
    uni.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - uni.upx2px(300);
        this.swiperHeight = height;
      },
    });
  },
  methods: {
    /**
     *
     * 返回
     */
    goBack() {
      uni.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      });
    },
    /**
     * 点击切换导航栏
     *
     */
    tabtap(index) {
      this.tabIndex = index;
    },
    /**
     * 点击导航切换
     *
     */
    //滑动内容 切换导航栏
    ontabchange(e) {
      this.tabIndex = e.detail.current;
    },
    /**
     *
     *
    // 上拉加载更多
     *
     */
    topLoading(index) {
      if (this.newList[index].loadingText != "上拉加载更多") {
        return;
      }
      this.newList[index].loadingText = "加载中...";

      setInterval(() => {
        let arr = {
          userPic:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F72%2F70%2F3657b96a43e51c9.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615097440&t=c869c6a12770bcb5e5f4edfb7dc04584",
          userName: "马路憨八龟",
          age: 18,
          sex: 1,
          isGuanZhu: false,
        };
        this.newList[index].userList.push(arr);
      }, 1000);
      this.newList[index].loadingText != "上拉加载更多";
    },
  },
};
</script>

<style lang="scss">
.loadingBox {
  text-align: center;
  color: #aaa;
  padding: 16upx;
}
.hd {
  height: 140rpx;
}
//#ifdef APP-PLUS
.hd {
  height: 40rpx;
}
// #endif
.tabs {
  margin-top: 30rpx;
}

// 用户列表页面
.user-list {
  padding: 0 30rpx;
}
</style>
