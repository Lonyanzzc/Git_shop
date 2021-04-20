<template>
    <div id='Item' :class="{color : press}" @click="pressclick()">
        <slot>
            <img src="@/assets/timg.gif">
        </slot>
    </div>
</template>

<script>
export default {
    name:'slotItem',
    props:{
        path:String
    },
    methods:{
        pressclick(){
            if(this.$route.path !== this.path) this.$router.replace(this.path)
        }
    },
    computed:{
        press(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    }
}
</script>

<style scoped>
#Item{
    font-size: 15px;
    text-align: center;
    background-color: #f2f2f2;
}
#Item img{
    height:24px;
    width: 27px;
    margin-top:3px;
    margin-bottom: 2px;
    vertical-align: middle;
}
.color{
  color:#ff5777;
}
</style>