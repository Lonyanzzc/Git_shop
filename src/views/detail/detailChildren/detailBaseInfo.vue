<template>
	<div v-if="Object.keys(goods).length !== 0" class="baseinfo">
		<div class='info-title'>{{goods.title}}</div>
		<div class='info-price'>
			<span class='price-new'>{{goods.newPrice}}</span>
			<span class='price-old'>{{goods.oldPrice}}</span>
			<span v-if='goods.discount' class='price-discount'>{{goods.discount}}</span>
		</div>
		<div class='info-other'>
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class='info-wrap'>
			<span v-for='index in goods.services.length-1'>
				<img :src='goods.services[index-1].icon' alt="">
				{{goods.services[index-1].name}}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "detailGoosInfo",
	props:{
		goods:{
			type: Object,
			default(){
				return {}
			}
		}
	}
}
</script>

<style scoped>
.info-title{
	margin: 10px 0;
	padding: 4px 7px;
	font-size: 18px;
	line-height: 20px
}
.info-price{
	display: flex;
	padding: 0 4px 10px;
}
.price-new{
	color: #ff5777;
	font-size: 18px;
}
.price-old{
	color: #999;
	font-size: 14px;
	margin: 0 4px;
	text-decoration: line-through;
}
.price-discount{
	color: #fff;
	font-size: 15px;
	border-radius: 100px;
	padding: 2px 6px;
	margin-left: 7px;
	background-color: #ff5777;
}
.info-other{
	display: flex;
	color: #999;
	padding: 8px 4px;
	justify-content: space-between;
	font-size: 15px;
	border-bottom: 1px solid #ededed;
}
.info-wrap{
	display: flex;
	font-size: 12px;
	padding: 10px 4px;
	justify-content: space-between;
	border-bottom: 4px solid #ededed;
}
.info-wrap img{
	width: 12px;
	height: 12px;
	vertical-align: middle;
}
</style>