<template>
  <view>
    <!-- 导航搜索 -->
    <!-- #ifdef MP-WEIXIN -->
    <view class="headerNav">
      <view class="left iconfont"> </view>
      <view class="center" @tap="goSearch">
        <u-search
          :disabled="true"
          input-align="center"
          height="70"
          :show-action="false"
        ></u-search>
      </view>
      <view class="right" @tap="goIssue">
        <view class="iconfont icon-fabu"></view>
      </view>
    </view>
    <!-- #endif -->

    <!-- 导航栏部分 -->
    <index-tabs
      :tabBars="tabBars"
      :tabIndex="tabIndex"
      @tabtap="tabtap"
    ></index-tabs>

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
          <template v-if="items.list.length > 0">
            <block v-for="(item, index1) in items.list" :key="index1">
              <!-- 图文区域 -->
              <index-list
                :item="item"
                :index="index1"
                @goVideo="goVideo"
              ></index-list>
            </block>
            <view class="loadingBox">{{ items.loadingText }}</view>
          </template>
          <template v-else>
            <blank></blank>
          </template>
        </scroll-view>
      </swiper-item>
    </swiper>
    <view class="index-list"> </view>
  </view>
</template>

<script>
import indexList from "../../components/index/index-list.vue";
import indexTabs from "../../components/index/index-tabs.vue";
import blank from "../../components/common/blank.vue";

export default {
  components: {
    indexList,
    indexTabs,
    blank,
  },
  data() {
    return {
      newList: [
        {
          loadingText: "上拉加载更多",
          list: [
            {
              userPic:
                "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEKASG3fotGuuhMUn*sD7slRyRBbbDOOBlYzs5s9JaPsxauwabxhk2oBzWiwrK.Ee9XkFWPmgDG2GvlmshfoiwKs!/b&bo=oAXAAwAAAAABF1Y!&rf=viewer_4",
              userName: "2枫啦啦啦",
              isGuanZhu: false, //是否关注
              title: "憨八龟啦啦啦啦", //标题
              type: "img", // img 图片  video:视频
              content:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww4.sinaimg.cn%2Fmw690%2F61e692a7gy1galqkqhd5fj218z0u07kw.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611813703&t=79d1d825bd20d941d99f4a76cf0c6bde", //封面地址
              infoNum: {
                status: 1, // 0 都没点  1 点赞    2 踩
                praiseNum: 1000, //点赞数
                trampleNum: 1000, //踩的次数
              },
              commentNum: 10, //评论数
              transpondNum: 10, //转发数
            },
            {
              userPic:
                "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEKASG3fotGuuhMUn*sD7slRyRBbbDOOBlYzs5s9JaPsxauwabxhk2oBzWiwrK.Ee9XkFWPmgDG2GvlmshfoiwKs!/b&bo=oAXAAwAAAAABF1Y!&rf=viewer_4",
              userName: "谢霆锋",
              isGuanZhu: true, //是否关注
              title: "震惊 屏南县某男子吃下绿色耙耙 呕吐不止", //标题
              type: "video", // img 图片  video:视频
              content:
                "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEKK*DhH7SoZYTmYZWvDv9JCxSUSJNQQ9Vw3pfMBNFhqp8sjtQ0URI9l2Uug0hh6Xgw8xwuQCJTuz*4UCLzsZiq8!/b&bo=*QEXAwAAAAADN*o!&rf=viewer_4", //封面地址
              infoNum: {
                status: 2, // 0 都没点  1 点赞    2 踩
                praiseNum: 1000, //点赞数
                trampleNum: 1000, //踩的次数
              },
              playNum: 20,
              timeNum: "2:14",
              commentNum: 10, //评论数
              transpondNum: 10, //转发数
            },
          ],
        },
        {
          loadingText: "上拉加载更多",
          list: [
            {
              userPic:
                "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=222510244,4126440134&fm=26&gp=0.jpg",
              userName: "爱你的枫",
              isGuanZhu: false, //是否关注
              title: "寂寞的夜晚", //标题
              type: "img", // img 图片  video:视频
              content:
                "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEMNSaSSHdoisYYZe5uKQnXoZ81nY0IRRnKqh8mH17ky9K0qAnQTXI7HKmSlfcYed5cBlNpQunei44G7XSOrYAZw!/b&bo=6gJ5BAAAAAABF6U!&rf=viewer_4", //封面地址
              infoNum: {
                status: 1, // 0 都没点  1 点赞    2 踩
                praiseNum: 1000, //点赞数
                trampleNum: 1000, //踩的次数
              },

              commentNum: 10, //评论数
              transpondNum: 10, //转发数
            },
          ],
        },
        {
          loadingText: "上拉加载更多",
          list: [],
        },
        {
          loadingText: "上拉加载更多",
          list: [],
        },
        {
          loadingText: "上拉加载更多",
          list: [],
        },
        {
          loadingText: "上拉加载更多",
          list: [],
        },
      ],
      tabIndex: 0, //当前点击的导航栏
      tabBars: [
        { name: "关注", id: "guanzhu" },
        { name: "推荐", id: "tuijian" },
        { name: "体育", id: "tiyu" },
        { name: "NBA", id: "redian" },
        { name: "财经", id: "caijing" },
        { name: "娱乐", id: "yule" },
      ],
      swiperHeight: 500,
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
  //#ifdef APP-PLUS
  onNavigationBarSearchInputClicked() {
    uni.navigateTo({
      url: "./search/search",
    });
  },
  onNavigationBarButtonTap(e) {
    this.goIssue();
  },
  //#endif
  methods: {
    //点击导航栏切换
    tabtap(index) {
      this.tabIndex = index;
    },
    //滑动内容 切换导航栏
    ontabchange(e) {
      this.tabIndex = e.detail.current;
    },
    /**
     * 上拉加载更多
     *
     *  */
    topLoading(index) {
      if (this.newList[index].loadingText != "上拉加载更多") {
        return;
      }
      this.newList[index].loadingText = "加载中...";

      setInterval(() => {
        let arr = {
          userPic:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=222510244,4126440134&fm=26&gp=0.jpg",
          userName: "憨大龟",
          isGuanZhu: true, //是否关注
          title: "憨九龟啦啦啦啦啦", //标题
          type: "video", // img 图片  video:视频
          content:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww4.sinaimg.cn%2Fmw690%2F61e692a7gy1galqkqhd5fj218z0u07kw.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611813703&t=79d1d825bd20d941d99f4a76cf0c6bde", //封面地址
          infoNum: {
            status: 2, // 0 都没点  1 点赞    2 踩
            praiseNum: 1000, //点赞数
            trampleNum: 1000, //踩的次数
          },
          playNum: 20,
          timeNum: "2:14",
          commentNum: 10, //评论数
          transpondNum: 10, //转发数
        };
        this.newList[index].list.push(arr);
      }, 1000);
      this.newList[index].loadingText != "上拉加载更多";
    },
    /**
     * 微信小程序跳转到搜索页面
     *
     *
     */
    goSearch() {
      console.log("我点了啊");
      uni.navigateTo({
        url: "./search/search",
      });
    },
    /**
     *
     * 跳转到发布页面
     */
    goIssue() {
      uni.navigateTo({
        url: "./issue/issue",
      });
    },
    /**
     * 跳转到视频详情页
     *
     */
    goVideo() {
      console.log("你是猪");
      uni.navigateTo({
        url: "../video/video",
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../common/scroll.css";

.loadingBox {
  text-align: center;
  color: #aaa;
  padding: 16upx;
}

// 顶部自定义导航栏
//#ifdef MP-WEIXIN
.headerNav {
  width: 100%;
  height: 100upx;
  padding: 10upx 30upx;
  display: flex;
  .center {
    margin-left: 30upx;

    flex: 9;
  }
  .right {
    margin-left: 30upx;
    text-align: center;

    flex: 2;
    .iconfont {
      font-size: 70upx;
      line-height: 70upx;
    }
  }
}
//#endif
</style>
