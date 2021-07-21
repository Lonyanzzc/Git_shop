<template>
  <swiper ref="mySwiper" :options='swiperOptions'>
    <div class="swiper-slide" v-for="(item,index) in figues">
      <a :href="links[index]">
        <img :src="item" alt="" @load="swiperImgload()">
      </a>
    </div>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script> //swiper-version  : 5.4
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css' 

export default {
	name: "slideshow",   //这里不准用swiper，否者会报错
	data(){
		return {
      bol: true,
			swiperOptions: {
				pagination: {
					el: '.swiper-pagination'
				},
        loop: false,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
			}
		}
	},
  props:{
    figues:{
      type: Array,
      default(){
        return []
      }
    },
    links:{
      type: Array,
      default(){
        return []
      }
    }
  },
	components:{
		Swiper,
		SwiperSlide,
	},
  created(){
    if(this.figues.length >= 1) this.swiperOptions.loop = true
  },
  mounted() {
    //  console.log('Current Swiper instance object', this.swiper)
    //  this.swiper.slideTo(1, 1000, false)
   },
  activated(){
    this.swiper.autoplay.start()
  },
  deactivated(){
    this.swiper.autoplay.stop()
    // console.log(this.swiper.activeIndex) //滚动的位置
  },
  methods:{
    swiperImgload(){
      if(this.bol){
        this.$bus.$emit('swiperImgload');
        this.bol = !this.bol
      }
    },
  },
	computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
}
</script>

<style scoped>
.swiper-slide img{
  width: 100%;  /*home的swiper图片宽度有点问题
/*  height: 100%  detailSwiper会降低分辨率 */
}
</style>>