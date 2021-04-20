<template>
    <div id='Goods'>
        <goods-item v-for="item in goods[currentType].list"
                    :goodsitem='item' 
                    class="station">
        </goods-item>
    </div>
</template>

<script>
import GoodsItem from '@/components/goodsImg/goodsItem'

import {getHomeGoods} from "@/network/homedata.js"

export default {
    name:'Goods',
    data(){
        return {
            goods:{
                pop: {page:0, list:[] },
                new: {page:0, list:[] },
                sell: {page:0, list:[] }
            }
        }
    },
    props:{
        //获取要查看类型，并向服务器请求该类型数据
        currentType:{
            type:String,
            default:'pop'
        }
    },
    components:{
        GoodsItem
    },
    created(){
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell')
    },
    mounted(){
        this.$bus.$on("pullingup",() => {
            this.loadMore();
            this.$bus.$emit("finishpullup");
        });
    },
    methods:{
        loadMore(){
            this.getHomeGoods(this.currentType)
        },
        getHomeGoods(type){
            let page = this.goods[type].page+1
            getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page +=1
            })
            
        }
    }
}
</script>

<style scoped>
#Goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.station{
    /*无法覆盖子组件的样式元素↓  这玩意相当于没用*/ 
    width:100%
}
</style>