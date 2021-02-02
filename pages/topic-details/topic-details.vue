<template>
  <view>
    <!-- 话题详情页面 -->
    <!-- 话题详情页面头部介绍 -->
    <topic-info :item="topicInfo"></topic-info>
    <!-- #ifdef MP-WEIXIN -->
    <view class="back" @tap="goBack">
      <image class="icon-back" src="../../static/images/back@2x.png" />
    </view>
    <!-- #endif -->
    <view class="nav">
      <!-- 导航栏部分 -->
      <index-tabs
        :tabBars="tabBars"
        :tabIndex="tabIndex"
        @tabtap="tabtap"
        scollStyle="width:50%"
        scrollItemStyle="border-bottom:0;"
      ></index-tabs>
    </view>
    <!-- 文章图片区域 -->
    <view class="topic-details-list">
      <block v-for="(item, index) in topicDetailsList" :key="index">
        <template v-if="tabIndex == index">
          <block v-for="(list, listIndex) in item.list" :key="listIndex">
            <common-list :item="list" :index="listIndex"></common-list>
          </block>
          <view class="loadingBox">{{ item.loadingText }}</view>
        </template>
      </block>
    </view>
  </view>
</template>

<script>
import topicInfo from "../../components/topic/topic-info.vue";
import indexTabs from "../../components/index/index-tabs.vue";
import commonList from "../../components/common/common-list.vue";
export default {
  components: {
    topicInfo,
    indexTabs,
    commonList,
  },
  data() {
    return {
      tabIndex: 0, //页面索引
      topicInfo: {
        pic: "../../static/images/13.jpeg",
        title: "忆往事,敬余生",
        recommend: "我是说明,今天没上班",
        dynamicSum: 2000,
        todaySum: 2000,
      },
      //话题详情介绍
      tabBars: [
        { name: "最新", id: "zuixin" },
        { name: "默认", id: "默认" },
      ],
      //内容图片列表
      topicDetailsList: [
        {
          loadingText: "上拉加载更多",
          list: [
            {
              userPic:
                "https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=38345c9f293fb80e0cd161df06d02ffb/ee0f728b4710b912f121a650cbfdfc039345225d.jpg", //头像
              username: "憨八龟",
              sex: 0, //性别 0 男生  1女生
              age: 19, //年龄
              isguanzhu: false, //是否关注
              title: "从前从前有一只憨八龟，长得又丑又下饭。真的吗 哈哈哈", //标题
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
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.5mcc.com.cn%2F5mcc_com_cn%2Fallimg%2F190130%2F160H5GB-0.jpg&refer=http%3A%2F%2Fimg.5mcc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612593074&t=1a47df133851b120e3999a76ffe6e432", //头像
              username: "憨八龟",
              sex: 0, //性别 0 男生  1女生
              age: 19, //年龄
              isguanzhu: false, //是否关注
              title: "从前从前有一只憨八龟，长得又丑又下饭。真的吗 哈哈哈", //标题
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1339101750,3210784440&fm=26&gp=0.jpg", //图片
              video: false, //视频
              reprint: false, // 转载
              site: "广东 东菀", //地址
              transmitSum: 33, //转发次数
              commentSum: 34, //评论次数
              goodSum: 44, //点赞次数
            },
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.5mcc.com.cn%2F5mcc_com_cn%2Fallimg%2F190130%2F160H5GB-0.jpg&refer=http%3A%2F%2Fimg.5mcc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612593074&t=1a47df133851b120e3999a76ffe6e432", //头像
              username: "憨八龟",
              sex: 0, //性别 0 男生  1女生
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
        {
          loadingText: "上拉加载更多",
          list: [
            {
              userPic:
                "https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=38345c9f293fb80e0cd161df06d02ffb/ee0f728b4710b912f121a650cbfdfc039345225d.jpg", //头像
              username: "忍者神龟",
              sex: 0, //性别 0 男生  1女生
              age: 19, //年龄
              isguanzhu: false, //是否关注
              title: "从前从前有一只憨八龟，长得又丑又下饭。真的吗 哈哈哈", //标题
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
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.5mcc.com.cn%2F5mcc_com_cn%2Fallimg%2F190130%2F160H5GB-0.jpg&refer=http%3A%2F%2Fimg.5mcc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612593074&t=1a47df133851b120e3999a76ffe6e432", //头像
              username: "憨八龟",
              sex: 0, //性别 0 男生  1女生
              age: 19, //年龄
              isguanzhu: false, //是否关注
              title: "从前从前有一只憨八龟，长得又丑又下饭。真的吗 哈哈哈", //标题
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1339101750,3210784440&fm=26&gp=0.jpg", //图片
              video: false, //视频
              reprint: false, // 转载
              site: "广东 东菀", //地址
              transmitSum: 33, //转发次数
              commentSum: 34, //评论次数
              goodSum: 44, //点赞次数
            },
            {
              userPic:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.5mcc.com.cn%2F5mcc_com_cn%2Fallimg%2F190130%2F160H5GB-0.jpg&refer=http%3A%2F%2Fimg.5mcc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612593074&t=1a47df133851b120e3999a76ffe6e432", //头像
              username: "憨八龟",
              sex: 0, //性别 0 男生  1女生
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
      ],
    };
  },
  onLoad() {},

  /**
   *
   * 滑动刷新下一页
   *
   */
  onReachBottom() {
    this.topLoading();
  },
  methods: {
    /**
     * 返回上一个
    
     */
    goBack() {
      uni.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      });
    },
    //点击导航栏切换
    tabtap(index) {
      this.tabIndex = index;
    },
    // 上拉加载更多
    topLoading(index) {
      console.log("我压根就没执行");

      if (this.topicDetailsList[this.tabIndex].loadingText != "上拉加载更多") {
        return;
      }
      this.topicDetailsList[this.tabIndex].loadingText = "加载中...";

      setInterval(() => {
        let arr = {
          userPic:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.5mcc.com.cn%2F5mcc_com_cn%2Fallimg%2F190130%2F160H5GB-0.jpg&refer=http%3A%2F%2Fimg.5mcc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612593074&t=1a47df133851b120e3999a76ffe6e432", //头像
          username: "憨八龟",
          sex: 0, //性别 0 男生  1女生
          age: 19, //年龄
          isguanzhu: false, //是否关注
          title: "从前从前有一只憨八龟，长得又丑又下饭。真的吗 哈哈哈", //标题
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1339101750,3210784440&fm=26&gp=0.jpg", //图片
          video: false, //视频
          reprint: false, // 转载
          site: "广东 东菀", //地址
          transmitSum: 33, //转发次数
          commentSum: 34, //评论次数
          goodSum: 44, //点赞次数
        };
        this.topicDetailsList[this.tabIndex].list.push(arr);
      }, 1000);
      this.topicDetailsList[this.tabIndex] != "上拉加载更多";
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  position: absolute;
  top: 52rpx;
  left: 20rpx;
  .icon-back {
    width: 50rpx;
    height: 50rpx;
  }
}
// 页面导航部分
.nav {
  margin-top: 40rpx;
}

//下拉加载提示

.loadingBox {
  text-align: center;
  color: #aaa;
  padding: 16upx;
}
</style>
