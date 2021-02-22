<template>
  <view class="animated fadeInLeft fast">
    <!-- 顶部导航栏部分 -->
    <tabs
      :tabIndex="tabIndex"
      :tabBarList="tabBarList"
      @change-tab="clickTab"
    ></tabs>

    <!-- banner部分 -->

    <!-- 主体内容部分 -->
    <swiper
      :current="tabIndex"
      class="swiper-box"
      :duration="300"
      @change="ontabchange"
      :style="{ height: swiperHeight + 'px' }"
    >
      <swiper-item class="swiper-item">
        <scroll-view
          class="scroll-v list"
          scroll-y
          :style="{ height: swiperHeight + 'px' }"
          @scrolltolower="topLoading"
        >
          <!-- 文章视频内容部分 -->
          <block v-for="(item, index1) in dynamicList.list" :key="index1">
            <common-list :item="item" :index="index1"></common-list>
          </block>
        </scroll-view>
      </swiper-item>
      <swiper-item class="swiper-item">
        <scroll-view
          class="scroll-v list"
          scroll-y
          :style="{ height: swiperHeight + 'px' }"
        >
          <!-- 搜索框部分 -->
          <view class="search">
            <input
              class="uni-input"
              placeholder-class="center icon iconfont icon-sousuo"
              placeholder="搜索一下"
            />
          </view>
          <!-- 轮播图部分 -->
          <view class="slideshow">
            <swiper
              indicator-dots
              indicator-active-color="#fff"
              circular
              autoplay
            >
              <swiper-item>
                <image
                  class="img"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180904%2F6f0baa37e58f4091bfe88cd858ac1059.jpg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612926359&t=4a76345e5e7377b7939d9f01c792e443"
              /></swiper-item>
              <swiper-item>
                <image
                  class="img"
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1421839858,2090131526&fm=26&gp=0.jpg"
              /></swiper-item>
              <swiper-item>
                <image
                  class="img"
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3865142307,1710979721&fm=26&gp=0.jpg"
                />
              </swiper-item>
            </swiper>
          </view>
          <!-- 热门分类 -->
          <hot-list :hotList="hotList"></hot-list>
          <!-- 话题主体部分 -->

          <view class="hot-content">
            <view class="update">最近更新</view>
            <block v-for="(topic, index2) in topicList" :key="index2">
              <topic-list :topic="topic" :index="index2"></topic-list>
            </block>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import commonList from "../../components/common/common-list.vue";
import tabs from "../../components/dynamic/dynamic-tabs.vue";
import hotList from "../../components/dynamic/dynamic-hotList/dynamic-hotList.vue";
import topicList from "../../components/dynamic/dynamic-topicList/dynamic-topicList.vue";
export default {
  components: {
    commonList,
    tabs,
    hotList,
    topicList,
  },
  data() {
    return {
      swiperHeight: 600,
      tabIndex: 0,
      tabBarList: [
        {
          name: "关注",
          id: 0,
        },
        {
          name: "话题",
          id: 1,
        },
      ],
      dynamicList: {
        loadingText: "上拉加载更多",
        list: [
          {
            userPic:
              "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEG7.38dtYTBu6vXsX*Q.PXoBQpqkD.mEzgt9uYUQRt7OX38f2rQzcMnE5.sIyP5l5reoiPCQ9U5EdMv4uZLIp9c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //头像
            username: "谢轰轰",
            sex: 1, //性别 0 男生  1女生
            age: 42, //年龄
            isguanzhu: false, //是否关注
            title: "好无聊 有五十岁以上的小姐姐聊骚吗 在线等", //标题
            img: "", //图片
            video: false, //视频
            reprint: false, // 转载
            site: "广东 东菀", //地址
            transmitSum: 33, //转发次数
            commentSum: 34, //评论次数
            goodSum: 44, //点赞次数
          },
          {
            userPic:
              "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEG7.38dtYTBu6vXsX*Q.PXoBQpqkD.mEzgt9uYUQRt7OX38f2rQzcMnE5.sIyP5l5reoiPCQ9U5EdMv4uZLIp9c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //头像
            username: "谢轰轰",
            sex: 0, //性别 0 男生  1女生
            age: 19, //年龄
            isguanzhu: false, //是否关注
            title: "有人想躺在我健壮的肱二头肌上吗", //标题
            img:
              "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEG7.38dtYTBu6vXsX*Q.PXoBQpqkD.mEzgt9uYUQRt7OX38f2rQzcMnE5.sIyP5l5reoiPCQ9U5EdMv4uZLIp9c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //图片
            video: false, //视频
            reprint: false, // 转载
            site: "宁德 古田", //地址
            transmitSum: 33, //转发次数
            commentSum: 34, //评论次数
            goodSum: 44, //点赞次数
          },
          {
            userPic:
              "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEG7.38dtYTBu6vXsX*Q.PXoBQpqkD.mEzgt9uYUQRt7OX38f2rQzcMnE5.sIyP5l5reoiPCQ9U5EdMv4uZLIp9c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //头像
            username: "谢轰轰",
            sex: 0, //性别 0 男生  1女生
            age: 19, //年龄
            isguanzhu: false, //是否关注
            title: "世界上最遥远的距离，就是爱的人在身边 却没法说出口", //标题
            img:
              "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEKA9mhoD8A6SfARTf1ZXPpYVG8dju3MTc*cx7Zd3ejUIx0F9YsOpR2VheN4mKk597qtl6N.cNqXX5V7H28EIVRI!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //图片
            video: false, //视频
            reprint: false, // 转载
            site: "宁德 古田", //地址
            transmitSum: 33, //转发次数
            commentSum: 34, //评论次数
            goodSum: 44, //点赞次数
          },
          {
            userPic:
              "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEG7.38dtYTBu6vXsX*Q.PXoBQpqkD.mEzgt9uYUQRt7OX38f2rQzcMnE5.sIyP5l5reoiPCQ9U5EdMv4uZLIp9c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //头像
            username: "谢轰轰",
            sex: 0, //性别 0 男生  1女生
            age: 19, //年龄
            isguanzhu: false, //是否关注
            title: "你温柔的小手 轻抚我的脸庞的那一刻 我醉了", //标题
            img:
              "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEGuoZmlRghZJU84vNSHBvvcLTJUIKDyreD5jJ51woX1UswAiiuvA0ge1sl*Kq*krH2jvr4BUHxRhlk*HOciV914!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //图片
            video: false, //视频
            reprint: false, // 转载
            site: "宁德 古田", //地址
            transmitSum: 33, //转发次数
            commentSum: 34, //评论次数
            goodSum: 44, //点赞次数
          },
          {
            userPic:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.5mcc.com.cn%2F5mcc_com_cn%2Fallimg%2F190130%2F160H5GB-0.jpg&refer=http%3A%2F%2Fimg.5mcc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612593074&t=1a47df133851b120e3999a76ffe6e432", //头像
            username: "憨八龟",
            sex: 1, //性别 0 男生  1女生
            age: 19, //年龄
            isguanzhu: false, //是否关注
            title: "从前从前有一只憨八龟，长得又丑又下饭。", //标题
            img:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1339101750,3210784440&fm=26&gp=0.jpg", //图片
            video: {
              playNum: "20w",
              time: "11:30",
            }, //视频
            reprint: false, // 转载
            site: "广东 东菀", //地址
            transmitSum: 33, //转发次数
            commentSum: 34, //评论次数
            goodSum: 44, //点赞次数
          },
          {
            userPic:
              "https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=38345c9f293fb80e0cd161df06d02ffb/ee0f728b4710b912f121a650cbfdfc039345225d.jpg", //头像
            username: "憨八龟",
            sex: 0, //性别 0 男生  1女生
            age: 19, //年龄
            isguanzhu: false, //是否关注
            title: "", //标题
            img: "", //图片
            video: false, //视频
            reprint: {
              reprintImg:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=805076878,2193967271&fm=26&gp=0.jpg",
              reprintTitle: "哟哟哟 今天是周五 明天是周六 后天是周日",
            }, // 转载
            site: "广东 东菀", //地址
            transmitSum: 33, //转发次数
            commentSum: 34, //评论次数
            goodSum: 44, //点赞次数
          },
        ],
      },
      hotList: [
        { name: "最新" },
        { name: "游戏" },
        { name: "情感" },
        { name: "打卡" },
        { name: "故事" },
        { name: "喜爱" },
      ], //热门分类列表
      topicList: [
        {
          pic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3271739782,3661796413&fm=26&gp=0.jpg",
          title: "如何看待憨八龟回归",
          recommend: "天纳天纳 憨八龟他回来了 他回来了",
          dynamicSum: 4000,
          todaySum: 3333,
        },
        {
          pic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3271739782,3661796413&fm=26&gp=0.jpg",
          title: "如何看待憨八龟回归",
          recommend: "天纳天纳 憨八龟他回来了 他回来了",
          dynamicSum: 4000,
          todaySum: 3333,
        },
      ],
    };
  },
  onLoad() {
    uni.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - uni.upx2px(100);
        this.swiperHeight = height;
      },
    });
  },
  methods: {
    // 上拉加载更多
    topLoading(index) {
      if (this.dynamicList.loadingText != "上拉加载更多") {
        return;
      }
      this.dynamicList.loadingText = "加载中...";

      setInterval(() => {
        let arr = {
          userPic:
            "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEG7.38dtYTBu6vXsX*Q.PXoBQpqkD.mEzgt9uYUQRt7OX38f2rQzcMnE5.sIyP5l5reoiPCQ9U5EdMv4uZLIp9c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //头像
          username: "谢轰轰",
          sex: 0, //性别 0 男生  1女生
          age: 19, //年龄
          isguanzhu: false, //是否关注
          title: "你温柔的小手 轻抚我的脸庞的那一刻 我醉了", //标题
          img:
            "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEEuqTIYVPK.gqSWejfaM9EUPiM7h*3T9I4FSBKVAjQ07skr9dTPKIIozsi4tKksUifhOt2UUJKtt52vwknsCDJ0!/b&bo=OATeBAAAAAABF9Y!&rf=viewer_4", //图片
          video: false, //视频
          reprint: false, // 转载
          site: "宁德 古田", //地址
          transmitSum: 33, //转发次数
          commentSum: 34, //评论次数
          goodSum: 44, //点赞次数
        };
        this.dynamicList.list.push(arr);
      }, 1000);
      this.dynamicList.loadingText != "上拉加载更多";
    },
    //切换顶部导航栏
    clickTab(index) {
      this.tabIndex = index;
    },
    //滑动内容 切换导航栏
    ontabchange(e) {
      this.tabIndex = e.detail.current;
    },
  },
};
</script>

<style lang="scss">
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
swiper-item {
  width: 100%;
  height: 100%;
}
// 话题部分
// 搜索框
.search {
  padding: 28rpx;
  .center {
    text-align: center;
  }
  .uni-input {
    background-color: #f4f4f4;
    border-radius: 16rpx;
    font-size: 28rpx;
  }
}
//轮播图
.slideshow {
  padding: 0 20rpx 10rpx;
  width: 100%;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 20rpx;
  }
}

// 话题主体部分
.hot-content {
  margin-top: 30rpx;
  margin-left: 27rpx;
  font-size: 14rpx;
}
</style>
