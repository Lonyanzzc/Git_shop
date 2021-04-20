<template>
	<div v-if='Object.keys(shop).length !== 0' class='detail-shop-info'>
		<div class='info-name'>
			<img :src='shop.logo' alt="">
			<span>{{shop.name}}</span>
		</div>
		<div class='info-other'>
			<div class='other-left'>
				<div>
					<p class="f20">{{toCount}}</p>
					<p>总销量</p>
				</div>
				<div>
					<p class="f20">{{shop.goodsCount}}</p>
					<p>全部宝贝</p>
				</div>
			</div> 
			<div class='other-right'>
				<div v-for='item in shop.score'>
					{{item.name}}&ensp;
					<span class="right-score" :class="{text: item.isBetter}">{{item.score}}</span>
					<span class="right-score-bg" :class="{bg: item.isBetter}">{{item.isBetter? '高':'低'}}</span>
				</div>
			</div>
		</div>
		<div class="shop-wrap">
			<div class="enter-shop">进店逛逛</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "detaiShopInfo",
	props: {
		shop:{
			type: Object,
			default(){
				return {}
			}
		}
	},
	computed:{
		toCount(){
			return this.shop.sells>=10000? this.shop.sells/10000+'w': this.shop.sells;
		}
	}
}
</script>

<style scoped>
.f20{
	font-size: 17px;
}
.info-name{
	align-items: center;
	font-size: 18px;
	margin: 20px 10px;
}
.info-name img{
	border-radius: 100%;
	width: 50px;
	height: 50px;
	margin-right: 10px;
	vertical-align: middle;
}

.info-other{
	display: flex;
	font-size: 16px;
	align-items: center;
}
.other-left{
	display: flex;
	flex: 1;
	line-height: 10px;
	border-right: 1px solid #ececec;
}
.other-left div{
	flex: 1;
	text-align: center;
}

.other-right{
	flex: 1;
	padding-left: 30px;
	line-height: 30px;
}
.right-score{
	display: inline-block;
	width: 50px;
	color: #006666;
}
.right-score-bg{
	background-color: #006666;
	color: #fff;
	padding: 1px 4px;
	font-size: 12px;
}

.shop-wrap{
	text-align: center;
}
.enter-shop{
	display: inline-block;  /*内联快状元素 block：块级元素 inline：内联元素*/
	padding: 6px 20px;
	border-radius: 100px;
	margin: 10px;
	background-color: #f2f2f2;
}

.text{
	color: #880000;
}
.bg{
	background-color: #880000;
}
</style>