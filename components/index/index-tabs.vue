<template>
  <!-- 导航栏部分 -->
  <view class="tabs">
    <scoll-view id="tab-bar" scroll-x class="scroll-h">
      <block v-for="(tab, index) in tabBars" :key="tab.id">
        <view
          class="uni-tab-item"
          :class="{ active: tabIndex == index }"
          @tap="tabtap(index)"
          :style="scollStyle"
        >
          {{ tab.name }}
          <view class="tab-line"></view>
        </view>
      </block>
    </scoll-view>
  </view>
</template>

<script>
export default {
  props: {
    tabBars: Array,
    tabIndex: Number,
    scollStyle: {
      type: String,
      default: "",
    },
    scrollItemStyle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    tabtap(index) {
      this.$emit("tabtap", index);
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
</style>
