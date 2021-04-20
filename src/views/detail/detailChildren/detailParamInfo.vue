<template>
	<div v-if="Object.keys(paramInfo).length !== 0" class="params-wrap">
		<div v-for="item in paramInfo.sizes" class="rule">
			<div v-for="list in item" class="rule-list">
				<div v-for="listItem in list" class="rule-list-item">{{listItem}}</div>
			</div>
		</div>
		<div v-for="(info, index) in paramInfo.infos" class="info-list-wrap">
			<div class="info-list-left">{{info.key}}</div>
			<div class="info-list-right">{{info.value}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'detailParamInfo',
	props:{
		paramInfo:{
			type: Object,
			default(){
				return {}
			}
		}
	}
}
</script>

<style scoped>
	.params-wrap {
		border-top: 4px solid #ececec;
		border-bottom: 4px solid #ececec;
	}
	.rule{
		margin-bottom: 10px;
		border-bottom: 1px solid #ececec;
	}
	.rule-list{
		display: flex;
		margin-bottom: 3px
	}
	.rule-list-item {
		font-size: 15px;
		width: 100%;
		border-bottom: 1px solid #ececec;
		padding: 10px 4px;
	}
	.info-list-wrap {
		display: flex;
		font-size: 15px;;
		border-bottom: 1px solid #ececec;
		padding: 10px 4px;
		line-height: 20px;
	}
	
	.info-list-left{
		color: #ff8198;
		padding-left: 6px;
		border-right: 1px solid #ececec;
		width: 25%;
	}
	.info-list-right{
		padding-right: 6px;
		padding-left: 12px;
		width: 100%
	}
</style>