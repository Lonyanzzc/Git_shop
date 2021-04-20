<template>
	<swiper :figues="figues" class="detailSwiperStyle">
	</swiper>
</template>

<script>
import Swiper from "@/swiper/swiper.vue"

export default {
	name: "detailSwiper",
	props:{
		figues:{
			type: Array,
			default(){
				return []
			}
		}
	},
	components:{
		Swiper
	},
}
</script>

<style scoped>
.detailSwiperStyle{
	height: 300px;
}
</style>