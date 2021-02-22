<!--
 * @Author: 除了我前端还有谁姓张
 * @Date: 2021-02-20 13:50:57
 * @LastEditTime: 2021-02-20 14:12:41
 * @Description: 底部输入框组件
 * @FilePath: \枫言枫语\components\common\user-chat-bottom.vue
-->
<template>
  <view class="user-chat-bottom animated fadeInDown fast">
    <input
      type="text"
      placeholder="文明发言"
      :focus="focus"
      @blur="blur"
      v-model="text"
      @confirm="submit"
    />
    <view class="icon iconfont icon-fabu" @tap="submit"></view>
  </view>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    submit() {
      if (this.text.trim()) {
        this.$emit("submit", this.text);
        this.text = "";
      }
    },
    blur() {
      this.$emit("blur");
    },
  },
};
</script>

<style scoped lang="scss">
.user-chat-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120upx;
  padding: 0 20upx;
  background: #ffffff;
  border-top: 1upx solid #eeeeee;
  display: flex;
  justify-content: space-between;
  padding-top: 40rpx;
}
.user-chat-bottom > input {
  flex: 1;
  margin-right: 20upx;
  padding: 10upx 20upx;
  border-radius: 10upx;
  background: #f7f7f7;
}
.user-chat-bottom > view {
  width: 80upx;
  font-size: 45upx;
}
</style>
