<template>
    <div id="useless">
        <illustrate-slot :title="['流行','新款','精选']" class="stricky" 
                        @selectType='selectType'>
        </illustrate-slot>
        <goods :currentType='currentType'></goods>
    </div>
</template>

<script>
import IllustrateSlot from "@/components/illustrate/illustrateSlot"
import Goods from '@/views/home/childcomponents/goods'

export default {
    name: "detail",
    data(){
        return { currentType:'pop'}
    },
    components:{
        IllustrateSlot,
        Goods
    },
    // mounted(){
    //   console.log(document.getElementById("illustrateSlot").offsetHeight)  
    // },
    methods:{
        selectType(index){
            switch(index){
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;
            }
        }
    }
}
</script>

<style scope>
.stricky{
    background-color: white;  /*覆盖低于z-index的内容*/
}

</style>