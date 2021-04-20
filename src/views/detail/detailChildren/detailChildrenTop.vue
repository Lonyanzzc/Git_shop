<template>
	<div>
		<top-slot-item >
			<div slot="left" @click="backRoute()">&lt;</div>
			<div slot='center' class="title">
				<div v-for="(item,index) in title" @click="whatTitle(index)"
						 class='title-item' :class="{active: currentIndex===index}">
					{{item}}
				</div>
			</div>
		</top-slot-item>
	</div>
</template>

<script>
import TopSlotItem from "@/components/topItem/topSlotItem"

export default {
	name: 'detailChildrenTop',
	data(){
		return {
			title: ['商品','参数','评论','推荐'],
			currentIndex: 0
		}
	},
	components:{
		TopSlotItem,
	},
	methods:{
		backRoute(){
			this.$router.back();
		},
		whatTitle(index){
			this.currentIndex = index
			this.$emit("whatCurrentIndex",index)
		}
	}
}
</script>

<style scoped>
.title{
	display: flex;
	flex:1
}
.title-item{
	flex: 1;
	font-size:14px;

	display: flex;
	justify-content: center;
	align-items: center;
}
.active{
	color: #ff5777
}
</style>