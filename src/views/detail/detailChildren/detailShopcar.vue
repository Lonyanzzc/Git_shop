<template>
	<div class='bar-wrap'>

		<div class='bat-item'>
			<img class='img-sy' src='@/assets/costomer.jpg' alt=''>
			<div>客服</div>
		</div>

		<div class="bat-item">
			<img class='img-sy' src="@/assets/store.jpg" alt="">
			<div>店铺</div>
		</div>

		<div class="bat-item">
			<img class='img-sy' src="@/assets/collect.jpg" alt="">
			<div>收藏</div>
		</div>

		<div class="btn cart-btn" @click="addCart">加入购物车</div>
		<div class="btn buy-btn">购买</div>

	</div>
</template>

<script>
export default {
	name: 'detailShopcar',
	methods:{
		addCart(){
			this.$emit('addCart')
		}
	}
}
</script>

<style scoped>

.bar-wrap{
	display:flex;
	position: relative;
	height: 49px;
	box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.15);
}

.bat-item{
	/* flex:1;   有了width这个就不需要了 */
	width: 16%;
	font-size: 15px;
	color: #333;
	text-align: center;
}

.btn{
	width: 26%;
	font-size: 15px;
	line-height: 49px;
	border-radius: 8px;
	text-align: center;
}

.cart-btn{
	background-color: #F9CD0B;
	line-height: 49px;
}

.buy-btn{
	color: #fff;
	background-color:#ff5777;
}

.img-sy{
	width:20px;
	height: 20px;
	margin: 4px 0;
	vertical-align: middle;
}
</style>