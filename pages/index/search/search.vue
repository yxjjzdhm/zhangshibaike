<template>
	<view>
<!-- #ifdef MP-WEIXIN -->
			<view class="searchBox">
				<u-search input-align="center" height="70"></u-search>
			</view>
			
		  
<!-- #endif -->



	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
  //#ifdef APP-PLUS

		onNavigationBarButtonTap(res){
			uni.navigateBack({
				delta: 1, // 回退前 delta(默认为1) 页面
			
			})
		},
  //#endif

		methods: {
			
		}
	}
</script>

<style lang="scss">
	.searchBox{
		width: 80%;
		margin: 0 auto;
	}
</style>
