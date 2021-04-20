<template>
  <div id="buttom">
    <div class="slotItemAll" 
          v-if="this.$route.path.indexOf('/detail')==-1">
          
      <slot-item class='flex' path='/home'>
        <template>
          <home></home>
        </template>
      </slot-item>

     <slot-item class='flex' path='/categroy'>
       <template>
         <categroy></categroy>
       </template>
     </slot-item>

      <slot-item class='flex' path='/shopCar'>
        <template>
          <shop-car></shop-car>
        </template>
      </slot-item>

      <slot-item class='flex' path='/profile'>
        <template>
          <profit></profit>
        </template>
      </slot-item>
    </div>
  </div>
</template>

<script>
import slotItem from '@/components/buttomItem/slotItem'
import home from '@/components/buttomItem/home'
import profit from '@/components/buttomItem/profit'
import categroy from '@/components/buttomItem/categroy'
import shopCar from '@/components/buttomItem/shopCar'

export default {
  name: "buttom",
  components: {
    slotItem,
    home,
    shopCar,
    categroy,
    profit
  },
}
</script>

<style scoped>
#buttom {
  position: fixed;
  display: flex;
  
  /* background-color:wheat; */
  width:100%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:5;

  box-shadow: 0rem -0.1875rem .0625rem rgba(100, 100, 100, 0.15);
}
.slotItemAll{
  flex:1;
  display: flex;
}
.flex{
    flex:1;
}
</style>