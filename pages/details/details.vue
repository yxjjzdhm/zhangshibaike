<!--
 * @Author: 老张
 * @Date: 2021-02-19 15:26:41
 * @LastEditTime: 2021-02-22 09:27:03
 * @Description: 文章详情模块
 * @FilePath: \枫言枫语\pages\details\details.vue
-->
<template>
  <view class="container">
    <details-info :item="detail"> </details-info>
    <view class="u-comment-title">最新评论 {{ comment.count }}</view>

    <view class="uni-comment u-comment">
      <block v-for="(item, index) in comment.list" :key="index">
        <comment-list :item="item"></comment-list>
      </block>
    </view>
    <!-- 输入框 -->
    <user-chat-bottom @submit="submit"></user-chat-bottom>

    <!-- 分享 -->
    <more-share :show="shareshow" @togle="togle"></more-share>
  </view>
</template>

<script>
import detailsInfo from "../../components/details/details-info.vue";
import time from "../../util/time.js";
import commentList from "../../components/comment-list/comment-list.vue";
import userChatBottom from "../../components/common/user-chat-bottom.vue";
import moreShare from "../../components/common/more-share.vue";

export default {
  components: {
    detailsInfo,
    commentList,
    userChatBottom,
    moreShare,
  },
  data() {
    return {
      detail: {
        userPic:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa2.att.hudong.com%2F27%2F81%2F01200000194677136358818023076.jpg&refer=http%3A%2F%2Fa2.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616317393&t=1416bf8d2634f0409f3888b3fdb7ed69",
        username: "哈哈",
        sex: 1, //0 男 1 女
        age: 25,
        isguanzhu: false,
        title: "我是标题",
        img:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg&refer=http%3A%2F%2Fa3.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616317393&t=96f26c4298de9769380ea2d2bd04b484",
        morepic: [
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=323791707,3480957240&fm=26&gp=0.jpg",
          "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEG7.38dtYTBu6vXsX*Q.PXoBQpqkD.mEzgt9uYUQRt7OX38f2rQzcMnE5.sIyP5l5jlb*NWsrnGlySIUrCTjA4U!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1940377933,2043271201&fm=26&gp=0.jpg",
        ],
        video: false,
        share: false,
        site: "深圳 龙岗",
        transmitSum: 20,
        commentSum: 30,
        goodSum: 20,
      },
      //评论模块
      comment: {
        count: 20, //评论数量
        list: [], //评论存放数组
      },
      shareshow: false,
      sharedata: {
        title: "",
        url: "",
        titlepic: "",
        shareType: 0,
      },
    };
  },
  onLoad(e) {
    let datailsData = JSON.parse(decodeURIComponent(e.datailsData));
    this.initDetails(datailsData);
    this.getcomment();
  },
  // 监听导航右边按钮
  onNavigationBarButtonTap(e) {
    if (e.index == 0) {
      this.togle();
    }
  },
  methods: {
    /**
     * 点击弹出分享菜单
     *
     */
    togle() {
      this.shareshow = !this.shareshow;
    },
    /**
     *
     * 点击发送评论
     */
    submit(data) {
      let obj = {
        id: 1,
        fid: 0,
        userpic: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
        username: "小猫咪",
        time: time.gettime.gettime(new Date().getTime()),
        data: data,
      };
      this.comment.list.push(obj);
    },
    /**
     *初始化窗口
     *
     */
    initDetails(obj) {
      console.log(obj);
      // 修改窗口标题
      uni.setNavigationBarTitle({ title: obj.title });
    },
    /**
     *  获取评论
     *
     */
    getcomment() {
      let arr = [
        // 一级评论
        {
          id: 1,
          fid: 0,
          userpic:
            "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
          username: "小猫咪",
          time: "1555400035",
          data: "支持国产，支持DCloud!",
        },
        // 子级评论
        {
          id: 2,
          fid: 1,
          userpic:
            "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
          username: "小猫咪",
          time: "1555400035",
          data: "支持国产，支持DCloud!",
        },
        {
          id: 3,
          fid: 1,
          userpic:
            "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
          username: "小猫咪",
          time: "1555400035",
          data: "支持国产，支持DCloud!",
        },
        {
          id: 4,
          fid: 0,
          userpic:
            "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
          username: "小猫咪",
          time: "1555400035",
          data: "支持国产，支持DCloud!",
        },
      ];
      for (let i = 0; i < arr.length; i++) {
        arr[i].time = time.gettime.gettime(arr[i].time);
      }
      this.comment.list = arr;
    },
  },
};
</script>

<style scope lang="scss">
.u-comment {
  padding: 0 20upx 130rpx;
}
.u-comment-title {
  padding: 20upx;
  font-size: 30upx;
  font-weight: bold;
}
</style>
