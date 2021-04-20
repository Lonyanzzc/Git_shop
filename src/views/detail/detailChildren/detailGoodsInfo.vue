<template>
	<div v-if="Object.keys(detailInfo).length !== 0">
		<div class="info-text-wrap">
			<div class="text-top"></div>
			<div class='text-desc'>{{detailInfo.desc}}</div>
			<div class='text-bot'></div>
		</div>

		<div v-for='item in detailInfo.detailImage'>
			<div class='desc'>{{item.key}}↓</div>
			<div v-for="(item,index) in item.list" class='img-list'>
				<img :src='item' alt='' @load='imgLoad()'>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'detailGoodsInfo',
	props:{
		detailInfo: {
			type: Object,
			default(){
				return {}
			}
		}
	},
	methods: {
		imgLoad(){
			this.$emit('imgLoad')  //这里L没大写的话，开发者工具会出现warm
		}
	}
}
</script>

<style scoped>
.info-text-wrap{
	position: relative;
}
.text-top{   /*黑色横线*/
	width: 60px;
	height: 1px;
	background-color: #333;
	margin-left: 4px;
}
.text-top::before{
	content: '';   /*撑开*/
 	position: absolute;
	left: 4px;
	top: -2.5px;
	display: block;
	width: 5px;
	height: 5px;
	background-color: #333;
}

.text-bot{    /*黑色横线*/
	width: 60px;
	height: 1px;
	background-color: #333;
	position: absolute;
	right: 4px;
}
.text-bot::after{
	position: absolute;
	right: 0;
	top: -2.5px;
	display: block;
	content: '';
	width: 5px;
	height: 5px;
	background-color: #333;
}

.text-desc{
	padding: 10px 5px;
	font-size: 16px;
	padding-bottom: 6px;
	line-height: 20px;
	margin: 4px 0;
	text-indent: 30px;
}

.desc {
	display: inline-block;
	font-size: 17px;
	padding: 5px 7px;
	margin-left: 40%;
	text-indent: 5px;

	border-radius: 100px;
	color: #584717;
	background-color: #cdd1d3;
}

.img-list img{
	width: 100%;
}
</style>