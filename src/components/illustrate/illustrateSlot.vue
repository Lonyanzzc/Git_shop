<template>
    <div id="illustrateSlot">
        <div v-for="(item, index) in title" :key="item" class="flex" @click="press(index)">
            <span :class="{select:istrue===index}"  >{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "illustrateSlot",
    data(){
        return {
            istrue:0
        }
    },
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        press(index){
 //           this.istrue=index;    在home的94行设置了全局变换，这里可有可无
            this.$emit("selectType",index)
        }
    }
}
</script>

<style scoped>
#illustrateSlot{
    display:flex;

    padding-bottom: 4px;
    padding-top: 4px;
    border-bottom:3px solid white;
    font-size: 18px;
    align-items: center;
    text-align: center;
}
.flex{
    flex:1;
}
.select{
    border-bottom:3px solid pink;
}
</style>