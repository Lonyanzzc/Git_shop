<template>
	<div id="detail">
		<detail-children-top ref='detailTop' @whatCurrentIndex="whatCurrentIndex" />
		<scroll ref="detailScroll" class="detail-scroll-h"
						:whatProbeType='3' @scrollTop="commentScroll">
			<detail-Swiper :figues="topImages" ref="detailSwiper"/>
			<detail-base-info :goods="goods"/>
			<detail-shop-info :shop='shop'/>
			<detail-goods-info :detailInfo='detailInfo' @imgLoad='imgLoad'/>
			<detail-param-info :paramInfo='paramInfo' ref="detailParam"/>
			<detail-comment-info :commentInfo='commentInfo' ref="detailComment"/>
			<div class='rec-flex' id="detailRecommend">
				<goods-item v-for='item in recommendInfo'
												:goodsitem='pickGoodsItem(item)' @detailImgload='imgLoad'/>
			</div>
		</scroll>
		<detail-shopcar @addCart='addCart'></detail-shopcar>
	</div>
</template>

<script>
import DetailChildrenTop from "./detailChildren/detailChildrenTop"
import DetailSwiper from "./detailChildren/deteailSwiper"
import DetailBaseInfo from './detailChildren/detailBaseInfo.vue'
import DetailShopInfo from "./detailChildren/detailShopInfo"
import DetailGoodsInfo from "./detailChildren/detailGoodsInfo"
import DetailParamInfo from "./detailChildren/detailParamInfo"
import DetailCommentInfo from "./detailChildren/detailCommentInfo"
import DetailShopcar from "./detailChildren/detailShopcar"

import Scroll from '@/components/scroll/scroll'
import GoodsItem from '@/components/goodsImg/goodsItem.vue'

import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "@/network/detail"
import {debounce} from '@/components/utils/debounce'
 
export default {
	name: 'detail',
	data(){
		return {
			id: null,
			refresh: null,
			refreshTopY: null,

			currentIndex: 0,
			topImages: [],
			goods: {},
			shop: {},
			detailInfo: {},
			paramInfo: {},
			commentInfo: {},
			recommendInfo: {},
			themeTopYs: [],
		}
	},
	components:{
		Scroll,
		GoodsItem,

		DetailChildrenTop,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo,
		DetailGoodsInfo,
		DetailParamInfo,
		DetailCommentInfo,
		DetailShopcar,
	},

	created(){
		this.id = this.$route.params.id;
		
		getDetail(this.id).then(res => {
			//  console.log(res);
			var data = res.result;
			//获取顶部信息
			this.topImages = res.result.itemInfo.topImages;

			//穿着效果图片
			this.detailInfo = data.detailInfo

			//获取商品价格 折扣等信息
			this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

			//获取商家信息
			this.shop = new Shop(data.shopInfo)

			//参数信息，尺码等
			this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

			if(data.rate.cRate !== 0)	this.commentInfo = data.rate.list[0]
			//  console.log(this.commentInfo)
		})

		getRecommend().then(res =>{
			this.recommendInfo = res.data.list;
		})
	},

	mounted(){
		this.refresh = debounce(this.$refs.detailScroll.refresh, 100)
		//获取顶部四个参数所对应的组件的高度
		this.refreshTopY = debounce(() =>{
			this.themeTopYs=[]
			this.themeTopYs.push(this.$refs.detailSwiper.$el.offsetTop)
			this.themeTopYs.push(this.$refs.detailParam.$el.offsetTop)
			this.themeTopYs.push(this.$refs.detailComment.$el.offsetTop)
			//这里因为是div组件，只有vue中才带$el，无法获取到组件
			this.themeTopYs.push(document.getElementById("detailRecommend").offsetTop  ) 
		}, 100)
		
		this.$bus.$on('swiperImgload', () => {   //获取轮播图的高度后再刷新一次，防止scroll不滚动
			this.$refs.detailScroll.refresh()
		})
	},

	beforeDestroy(){
		this.$bus.$off('swiperImgload') //跳转、摧毁路由时，必须删除添加到$bus中的事件
	},

	methods:{
		imgLoad(){  //detailGoodsInfo里获取图片刷新scroll的节流处理
			this.refresh();
			this.refreshTopY()
		},

		whatCurrentIndex(index){
			this.$refs.detailScroll.setScrollTo(0, -this.themeTopYs[index], 500)
		},
		
		pickGoodsItem(data){
			const item = new class pick{
				constructor(){
					this.show = data;
				  this.show.img = data.image
					this.title = data.title;
					this.price = data.price;
					this.cfav = data.cfav;
				}
			}
			return item
		},

		addCart(){
			const product = {};
			product.image = this.topImages[0];
			product.title = this.goods.title
			product.desc = this.goods.desc;
			product.price = this.goods.realPrice;
			product.id = this.id;
			product.check = false
			// this.$store.commit('addShopcar', product)
			this.$store.dispatch('addShopcar', product).then(res =>{
				this.$toast.show(res, 1000)
			})
			// console.log(this.$store.state.shopcarList)
			
		},
		
		//监听滚动
		commentScroll(position){
			let scrollY = -position.y
			for(let i=0; i<this.themeTopYs.length; i++){
				if(scrollY >= this.themeTopYs[i]){
					this.currentIndex = i
					this.$refs.detailTop.currentIndex = i
				}
			}
		}
	}
}
</script>

<style scoped>
#detail{
	height: 100vh;
}
.detail-scroll-h{
	position: relative;
	height: calc(100% - 2.75rem - 3.0625rem);
	background-color: white;
}

.rec-flex{
	display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>