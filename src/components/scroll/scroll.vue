<template>
    <div class='wrapper' ref="wrapper">
        <div ref="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'scroll',
    data(){
        return {
            scroll: ''
        }
    },
    props:{
        whatProbeType:{ 
            Type: Number,
            default: 0
        },
        whatPullUpLoad:{
            Type: Boolean,
            default: false
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true,
            probeType: this.whatProbeType,
            pullUpLoad: this.whatPullUpLoad,
            mouseWheel:true     //鼠标滚轮滚动
        })
        //监听滚动事件
        if(this.whatProbeType===2 || this.whatProbeType===3){
            this.scroll.on("scroll", (position) => {
            this.$emit("scrollTop", position)
            })
        }
        //监听上拉加载事件
        if(this.whatPullUpLoad){
            this.scroll.on("pullingUp", () => {
               // console.log("1")
                this.$bus.$emit("pullingup");
            })
        }
    },
    methods:{
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        setScrollTo(x, y, time=0){
            this.scroll && this.scroll.scrollTo(x, y, time);
        },
        getScrollY(){
            return this.scroll && this.scroll.y
        },
        finishPullUp(){
            this.scroll.finishPullUp();
        }
    }
}
</script>

<style scoped>
.wrapper{
    overflow:hidden;
    /* height: calc(100% - 93px);  在需要scroll的组件中添加wrapper的高度 */
}
</style>