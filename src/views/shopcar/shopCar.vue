<template>
  <div id='Shopcar'>
    <top-slot-item class='detailTop'>
        <div slot='center'>购物车 ({{length}})</div>
    </top-slot-item>
    <shopcar-list class='content'/>
    <shopcar-bottom/>
  </div>
</template>

<script>
import TopSlotItem from '@/components/topItem/topSlotItem.vue'
import ShopcarList from './children/shopcarList'
import ShopcarBottom from './children/shopcarBottom'

import {mapGetters} from "vuex"

export default {
  name: "Shopcar",
  components:{
    TopSlotItem,
    ShopcarList,
    ShopcarBottom,
  },
  computed:{
    // ...mapGetters(['listLength']),   //参数是数组
    ...mapGetters({   //起别名，参数是对象
      length: 'listLength'
    })
  }
};
</script>

<style scoped>
#Shopcar{
  height: 100vh
}
.detailTop{
  background: #ff8198;
  color:white
}
.content{
	position: relative;
	height: calc(100% - 44px - 49px - 57px);
}
</style>