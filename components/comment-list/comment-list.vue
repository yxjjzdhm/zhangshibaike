<!--
 * @Author: 除了我前端还有谁姓张
 * @Date: 2021-02-20 11:53:42
 * @LastEditTime: 2021-02-20 14:44:55
 * @Description: 评论模块封装
 * @FilePath: \枫言枫语\components\comment-list\comment-list.vue
-->
<template>
  <view>
    <view
      class="uni-comment-list"
      :class="{ 'u-comment-list-child': item.fid > 0 }"
    >
      <view class="uni-comment-face"
        ><image :src="item.userpic" mode="widthFix"></image
      ></view>
      <view class="uni-comment-body">
        <view class="uni-comment-top"
          ><text>{{ item.username }}</text>
        </view>
        <view class="uni-comment-content">{{ item.data }}</view>
        <view class="uni-comment-date">
          <view>{{ item.time }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.u-comment-list-child {
  padding: 20rpx;
  background-color: #f4f4f4;
  border-bottom: 1rpx solid #eee;
  margin-left: 70rpx;
  width: auto;
}
</style>
