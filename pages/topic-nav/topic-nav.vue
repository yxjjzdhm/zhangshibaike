<template>
  <view>
    <!-- 话题分类页面 -->
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
              <!-- 话题区域 -->
              <topic-list :topic="item" :index="index1"></topic-list>
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
import indexTabs from "../../components/index/index-tabs.vue";
import indexList from "../../components/index/index-list.vue";
import blank from "../../components/common/blank.vue";
import topicList from "../../components/dynamic/dynamic-topicList/dynamic-topicList.vue";
export default {
  components: {
    indexTabs,
    indexList,
    blank,
    topicList,
  },
  data() {
    return {
      tabIndex: 0, //当前点击的导航栏
      tabBars: [
        { name: "关注", id: "guanzhu" },
        { name: "推荐", id: "tuijian" },
        { name: "体育", id: "tiyu" },
        { name: "热点", id: "redian" },
        { name: "财经", id: "caijing" },
        { name: "娱乐", id: "yule" },
      ],
      swiperHeight: 500,
      newList: [
        {
          loadingText: "上拉加载更多",
          list: [
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
        {
          loadingText: "上拉加载更多",
          list: [],
        },
      ],
    };
  },
  onLoad() {
    uni.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - uni.upx2px(100);
        this.swiperHeight = height;
        console.log(this.swiperHeight);
      },
    });
  },
  methods: {
    //点击导航栏切换
    tabtap(index) {
      this.tabIndex = index;
    },
    //滑动内容 切换导航栏
    ontabchange(e) {
      this.tabIndex = e.detail.current;
    },
    // 上拉加载更多
    topLoading(index) {
      if (this.newList[index].loadingText != "上拉加载更多") {
        return;
      }
      this.newList[index].loadingText = "加载中...";

      setInterval(() => {
        let arr = {
          pic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3271739782,3661796413&fm=26&gp=0.jpg",
          title: "如何看待憨八龟回归",
          recommend: "天纳天纳 憨八龟他回来了 他回来了",
          dynamicSum: 4000,
          todaySum: 3333,
        };
        this.newList[index].list.push(arr);
      }, 1000);
      this.newList[index].loadingText != "上拉加载更多";
    },
  },
};
</script>

<style lang="scss">
@import "../../common/scroll.css";
.active {
  .tab-line {
    width: 70upx;
    margin: auto;
    border-bottom: 7upx solid #fede33;
  }
}
// 话题主体部分
.hot-content {
  margin-top: 30rpx;
  margin-left: 27rpx;
  font-size: 14rpx;
}
.loadingBox {
  text-align: center;
}
</style>
