<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view class="searchBox">
      <u-search
        v-model="searchTxt"
        @custom="searchBtn"
        @search="searchBtn"
        :show-action="true"
        :animation="true"
        input-style="{width:100%}"
        action-text="搜索"
        @clear="clear"
        height="100"
      ></u-search>
    </view>

    <!-- #endif -->
    <template v-if="list.length > 0">
      <block v-for="(item, index) in list" :key="index">
        <index-list :item="item" :index="index"> </index-list>
      </block>
      <view class="loadingBox">{{ loadingText }}</view>
    </template>
    <template v-else>
      <blank></blank>
    </template>
  </view>
</template>

<script>
import indexList from "../../../components/index/index-list.vue";
import blank from "../../../components/common/blank.vue";
export default {
  components: {
    indexList,
    blank,
  },
  data() {
    return {
      loadingText: "上拉加载更多",
      searchTxt: "",
      list: [
        {
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
        },
      ],
    };
  },

  //#ifdef APP-PLUS

  onNavigationBarSearchInputChanged(e) {
    this.searchTxt = e.text;
  },

  //* 内置点击导航栏搜索时触发

  onNavigationBarSearchInputConfirmed(e) {
    if (e.text) {
      this.searchBtn();
    }
  },
  //监听原生标题栏按钮点击取消事件
  onNavigationBarButtonTap(res) {
    uni.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    });
  },
  //#endif
  /**
   *
   * 监听上拉事件
   */
  onReachBottom() {
    this.topLoading();
  },
  methods: {
    /**
     * 点击搜索按钮
     *
     */
    searchBtn(e) {
      console.log(e);
    },

    clear() {
      this.searchTxt;
    },
    /**
     * 上拉加载更多
     *
     *  */
    topLoading() {
      if (this.loadingText != "上拉加载更多") {
        return;
      }
      this.loadingText = "加载中...";

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
        this.list.push(arr);
      }, 1000);
      this.loadingText != "上拉加载更多";
    },
  },
};
</script>

<style lang="scss">
.searchBox {
  width: 100%;
  z-index: 200000;
}
//下拉加载提示

.loadingBox {
  text-align: center;
  color: #aaa;
  padding: 16upx;
  z-index: -2;
}
</style>
