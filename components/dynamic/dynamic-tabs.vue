<template>
  <div>
    <!-- navbar顶部导航部分 -->
    <u-navbar :is-back="false">
      <view class="slot-wrap">
        <view class="item-box">
          <block v-for="(tab, index) in tabBarList" :key="tab.id">
            <view
              class="tabItem"
              :class="{ active: index == tabIndex }"
              @tap="clickTab(index)"
              >{{ tab.name }}
              <view v-if="index == tabIndex" class="navbar-line"></view>
            </view>
          </block>
        </view>
        <!-- 发布按钮 -->
        <!-- #ifdef APP-PLUS -->
        <view class="iconfont icon-bianji1" @tap="goIssue1"></view>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <view class="iconfont icon-fabu" @tap="goIssue1">发布</view>
        <!-- #endif -->
      </view>
    </u-navbar>
  </div>
</template>

<script>
export default {
  props: {
    tabBarList: Array,
    tabIndex: Number,
  },
  data() {
    return {};
  },
  methods: {
    // 跳转发布页面
    goIssue1() {
      uni.navigateTo({
        url: "../../pages/index/issue/issue",
      });
    },
    clickTab(index) {
      console.log(index);
      this.$emit("change-tab", index);
    },
  },
};
</script>

<style scoped lang="less"></style>
