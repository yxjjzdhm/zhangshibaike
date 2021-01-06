<template>
  <!-- 当页面没内容的显示 -->
  <view class="nothing">
    <image src="../../static/images/kongbai.png" mode="widthFix"></image>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang='less'>
    //当页面没内容时
.nothing{
  position:absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  image{
  width: 60%;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);

  }
}

</style>
