<template>
     <!-- 导航栏部分 -->
    <view class="tabs">
      <scroll-view id="tab-bar" scroll-x="true" class="scroll-h">
        <block v-for="(tab, index) in tabBars" :key="tab.id">
          <view
            class="uni-tab-item"
            :class="{ active: tabIndex == index }"
            @tap="tabtap(index)"
          >
            {{ tab.name }}
            <view class="tab-line"></view>
          </view>
        </block>
      </scroll-view>
    </view>
</template>

<script>
export default {
  props:{
    tabBars:Array,
    tabIndex:Number
  },
  	data() {
			return {
		
      };
    },
   methods: {
     tabtap(index){
       this.$emit("tabtap",index)
     }
   },
}
</script>



<style lang="scss">
@import "../../common/scroll.css";


</style>