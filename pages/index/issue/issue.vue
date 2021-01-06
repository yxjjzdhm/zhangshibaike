<template>
  <view>
    <!-- 自定义导航栏部分 -->
    <u-navbar class="navBar" :is-back="false">
      <view class="slot-wrap">
        <text class="iconfont icon-fanhui" @tap="gohome"></text>

        <view class="select" @tap="getSelect">
          {{ titleName }}
          <text class="icon iconfont icon-xialazhankai"></text>
        </view>

        <!-- #ifdef APP-PLUS  -->
        <view class="submit">发布</view>
        <!-- #endif -->
      </view>
    </u-navbar>
    <!--多行输入框  -->
    <view class="uni-textarea">
      <textarea v-model="text"  placeholder="发布我的动态">
      </textarea>
    </view>
    <u-upload :file-list="fileList" :auto-upload="false"></u-upload>
    <!-- #ifdef MP-WEIXIN -->
    <button class="btn">发布</button>
    <!-- #endif -->
  </view>
</template>

<script>
var itemList = ["所有人可见", "仅自己可见"];
export default {
  data() {
    return {
      titleName: "所有人可见",
      text: "",
      fileList: [],
      showMask: false,
    };
  },
  //监听事件
  onBackPress() {
	  if( !this.text &&this.fileList.length<1){
		  return 
	  }
	 if (!this.showMask) {
		   	this.cache();
	 		return true;
	   }
	  


  },
  methods: {
    // 询问用户是否保留草稿
    cache() {
        uni.showModal({
          content: "是否保存为草稿",
          confirmText: "保存",
          cancelText: "不保存",
          success: (res) => {
			  	if(res.confirm){
							console.log("保存")
						}else{
							console.log("不保存")
						}
            this.showMask = true;
            uni.navigateBack({
              delta: 1, // 回退前 delta(默认为1) 页面
			});
			
          },
        });
	  
	  
    },
    // 返回上一级
    gohome() {
      uni.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
        selectName: "所有人可见",
      });
    },
    // 选择设置谁可见
    getSelect() {
      uni.showActionSheet({
        itemList: itemList,
        success: (res) => {
          console.log("选中了第" + (res.tapIndex + 1) + "个按钮");
          this.titleName = itemList[res.tapIndex];
        },
      });
    },
  },
};
</script>

<style lang="less">
// 自定义导航栏部分
.navBar {
  width: 100%;
  .slot-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-fanhui {
      font-size: 48rpx;
      margin-left: 20rpx;
    }
    .select {
      width: 300rpx;
      text-align: center;

      .icon-xialazhankai {
        font-size: 32rpx;
      }
    }
    .submit {
      font-size: 32rpx;
      font-weight: bold;
      margin-right: 40rpx;
    }
  }
}
// 多行输入框
.uni-textarea {
  border: 2rpx solid #eeeeee;
  height: 400rpx;
}
</style>
