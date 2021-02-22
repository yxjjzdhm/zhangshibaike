<template>
  <!-- 我的好友列表 -->
  <view>
    <view class="list-item">
      <image class="user-pic" :src="list.userPic" />
      <view class="user-box">
        <view class="user-name">{{ list.userName }}</view>
        <view style="display: inline-block">
          <common-sex-age :sex="list.sex" :age="list.age"></common-sex-age>
        </view>
      </view>
      <!-- <view class="icon iconfont icon-xuanze-yixuan"></view> -->
      <view
        class="icon iconfont"
        :class="[list.isGuanZhu ? 'icon-xuanze-yixuan' : 'icon-zengjia1']"
      ></view>
    </view>
  </view>
</template>

<script>
import commonSexAge from "../../../components/common/common-sex-age.vue";

export default {
  components: {
    commonSexAge,
  },
  props: {
    list: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.list-item {
  padding: 35rpx 0;
  border-top: 1rpx solid #efefef;
  border-bottom: 1rpx solid #efefef;
  display: flex;
  margin-left: 30rpx;
  .user-pic {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
}
:nth-child(1) {
  border-top: none;
}
.user-box {
  flex: 1;
  margin-left: 10rpx;
  .user-name {
    margin-left: 8rpx;
    font-size: 35upx;
  }
}
.icon {
  width: 60rpx;
  color: #cccccc;
  line-height: 110rpx;
}
.icon-zengjia1 {
  color: #f65900;
}
</style>
