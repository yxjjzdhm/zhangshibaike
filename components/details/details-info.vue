<!--
 * @Author: 老张
 * @Date: 2021-02-19 15:38:36
 * @LastEditTime: 2021-02-20 10:06:50
 * @Description: 
 * @FilePath: \枫言枫语\components\details\details-info.vue
-->
<template>
  <view class="container animated fadeInLeft fast">
    <!-- 头像部分 -->
    <view class="portraits">
      <image class="touxiang" :src="item.userPic" />
    </view>
    <!-- 主体部分 -->
    <view class="main">
      <!-- 名字 年龄 关注部分 -->
      <view class="header">
        <view class="name">{{ item.username }}</view>
        <common-sex-age :sex="item.sex" :age="item.age"> </common-sex-age>
        <view class="guanzhu iconfont icon-zengjia">关注</view>
      </view>
      <view class="time"> 21天前</view>
      <!-- 标题部分 -->
      <view class="title">
        {{ item.title }}
      </view>

      <view class="image" v-if="item.img">
        <!-- 视频部分 -->
        <template v-if="item.video">
          <view class="video">
            <image mode="widthFix" class="img" :src="item.img" />

            <view class="icon iconfont icon-bofang"></view>
            <view class="details"
              >{{ item.video.playNum }}次播放
              <text class="txt">{{ item.video.time }}</text></view
            >
          </view>
        </template>

        <!-- 图片部分 -->
        <template v-else-if="item.morepic">
          <block v-for="(pic, picIdx) in item.morepic" :key="picIdx">
            <image class="img" :src="pic" @tap="preImg(picIdx)" />
          </block>
        </template>
      </view>

      <!-- 转载部分 -->
      <view class="reprint" v-if="item.reprint">
        <image
          class="reprint-img"
          mode="widthFix"
          :src="item.reprint.reprintImg"
        />
        <view class="reprint-title"> {{ item.reprint.reprintTitle }}</view>
      </view>
      <!-- bottom底部部分 -->
      <view class="bottom">
        <view class="site">{{ item.site }}</view>
        <view class="right">
          <!-- 转发 -->
          <view class="iconfont icon-zhuanfa">
            <text class="txt"> {{ item.transmitSum }}</text>
          </view>
          <!-- 评论 -->
          <view class="iconfont icon-xiaoxi">
            <text class="txt">{{ item.commentSum }}</text>
          </view>
          <view class="iconfont icon-dianzan">
            <text class="txt">{{ item.goodSum }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import commonSexAge from "../common/common-sex-age.vue";

export default {
  components: {
    commonSexAge,
  },

  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {
    /**
     * @description: 点击图片预览图片
     * @param {index} index 图片索引
     * @return {}
     * @author: 除了我前端还有谁姓张
     */
    preImg(index) {
      console.log(this.item.morepic);
      console.log(index);
      uni.previewImage({
        current: index,
        urls: this.item.morepic,
        indicator: "number",
        loop: true,
        success: (res) => {
          console.log("我成功了");
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../common/list.scss";
</style>
