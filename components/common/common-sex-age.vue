<template>
  <view>
    <view class="sex iconfont" :class="[sex == 0 ? 'icon-nan' : 'icon-nv']">
      <text decode class="sex-txt"> {{ age }}</text></view
    >
  </view>
</template>

<script>
export default {
  props: {
    sex: Number,
    age: Number,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
// 年龄
.sex {
  font-size: 24rpx;
  padding: 0rpx 8rpx;
  border-radius: 20rpx;
  color: #fff;
  margin-top: 6rpx;
  margin-left: 20rpx;

  .sex-txt {
    font-size: 24rpx;
    margin-left: 8rpx;
  }
}
.icon-nan {
  background-color: #44b3ff;
}
.icon-nv {
  background-color: #ff698d;
}
</style>
