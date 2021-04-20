<template>
	<scroll ref='scroll' id='scroll'>
		<shopcar-list-item v-for='item in this.$store.state.shopcarList'
					:product='item'/>
	</scroll>
</template>

<script>
import ShopcarListItem from './shopcarListItem'

import Scroll from '@/components/scroll/scroll'

export default {
	name: 'shopcarList',
	components:{
		Scroll,
		ShopcarListItem
	},
	activated(){
		this.$refs.scroll.refresh()
		// console.log(this.$refs.scroll.scroll.scrollerHeight)
		// console.log(document.getElementById("scroll").offsetHeight)
	},
	methods:{

	}
}
</script>

<style scoped>
</style>