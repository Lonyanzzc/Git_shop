<template>
  <div id="home" ref="home">
    <top-home></top-home>
    <illustrate-slot :title="['流行','新款','精选']" class="sticky" v-show="topIsshow"
                        @selectType='selectType' ref="illustrate1"></illustrate-slot>
    <scroll ref="scroll"  class="scroll-h"
            :what-probe-type=3 
            :what-pull-up-load="true"
            @scrollTop="backtopShow">
        <swiper :figues="figues" :links="links"></swiper>
        <recommend :recommend="recommend"></recommend>
        <fashion class="fashion"></fashion>
        <illustrate-slot :title="['流行','新款','精选']" 
                            @selectType='selectType' ref="illustrate2"></illustrate-slot>
        <goods :currentType='currentType'></goods>
    </scroll>
    <back-top v-show="backtopIsshow" @backtopClick="backtopClick"></back-top>
  </div>
</template>

<script>
import TopHome from './childcomponents/topHome'
import Recommend from "@/views/home/childcomponents/recommend"
import Fashion from '@/views/home/childcomponents/fashion'
import BackTop from '@/views/home/childcomponents/backtop'
import Scroll from '@/components/scroll/scroll'
import IllustrateSlot from "@/components/illustrate/illustrateSlot"
import Goods from '@/views/home/childcomponents/goods'
import Swiper from "@/swiper/swiper"

import {getmultidatadata} from '@/network/homedata'
import {debounce} from '@/components/utils/debounce'

export default {
    name : "home",
    data(){
        return {
            banners:[], figues:[], links:[],
            recommend:[],
            backtopIsshow:false,  
            topIsshow: false,
            currentType:'pop', 
            tabOffsetTop: 0,         //回溯的位置
            savaY: 0
        }
    },
    components: {
        TopHome,
        Swiper,
        Recommend,
        Fashion,
        BackTop,
        Scroll,
        IllustrateSlot,
        Goods
    },
    created(){
        this.getmultidatadata();
    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh, 100) //直接把debounce放到$bus函数里面就没有节流的效果了
        this.$bus.$on('imgload', () => {    //从goodItems发射出来的事件
            refresh();
        })
        this.$bus.$on('finishpullup', () => {  //从goods发射出来的事件
            this.$refs.scroll.finishPullUp();
        })
        console.log(this.$refs.illustrate1);
    },
    activated(){
        this.$refs.scroll.refresh() 
        this.$refs.scroll.setScrollTo(0, this.saveY, 0)
    },
    deactivated(){
        this.saveY = this.$refs.scroll.getScrollY()//保持切换组件时的页面位置
        this.$refs.scroll.refresh()   //在滚动的时候跳转到别的路由后，之前路由的监听滚动事件不会停止
    },
    methods: {
        getmultidatadata(){
            getmultidatadata().then(res => {
            // console.log(res),
                this.banners = res.data.banner.list, //轮播图的数据
                this.recommend = res.data.recommend.list  //轮播图下面的数据
                for(let i=0; i<this.banners.length; i++){
                        this.figues.push(this.banners[i].image)
                       this.links.push(this.banners[i].link)
                    }
            })
        },
        backtopClick(){
            this.tabOffsetTop = this.$refs.illustrate2.$el.offsetTop;           //使用vue backtop应该回溯的位置
         //   this.tabOffsetTop = document.getElementById("illustrateSlot").offsetTop //使用js backtop应该回溯的位置

            this.$refs.scroll.setScrollTo(0,-this.tabOffsetTop,1000);       //1000代表backtop的运动事件为1s
        },
        backtopShow(position){
            this.tabOffsetTop = this.$refs.illustrate2.$el.offsetTop

            this.backtopIsshow = (-position.y) > 1500;
            this.topIsshow = -position.y > this.tabOffsetTop;
        },
        selectType(index){
            switch(index){
                case 0:
                    this.currentType = 'pop';
                    this.$refs.scroll.setScrollTo(0,-this.tabOffsetTop, 0)
                    break;
                case 1:
                    this.currentType = 'new';
                    this.$refs.scroll.setScrollTo(0,-this.tabOffsetTop, 0)
                    break;
                case 2:
                    this.currentType = 'sell';
                    this.$refs.scroll.setScrollTo(0,-this.tabOffsetTop, 0)
                    break;
            }
            this.$refs.illustrate1.istrue=index;  //为了让点击效果保持一致
            this.$refs.illustrate2.istrue=index;
        }
    }
}
</script>

<style scoped>
#home{
    position:relative;
    height:100vh;
} 
.fashion{
    height:9.375rem;
}
.scroll-h{
    height: calc(100% - 5.8125rem);
    top:2.75rem;
}
.sticky{
    position: fixed;
    width: 100%;  /*这里必须设置宽度*/
    z-index: 1;
    background-color: white;  /*覆盖低于z-index的内容*/
}
</style>