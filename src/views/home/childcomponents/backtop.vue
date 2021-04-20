<template>
    <div id='backTop'>
        <img src='@/assets/backtop.svg' @click="press()">
    </div>
</template>

<script>
export default {
    name: 'backtop',
    methods:{
        press(){
            this.$emit("backtopClick");
        }
    }
}
</script>

<style scoped>
#backTop img{
    position:fixed;

    right:10px;
    bottom:60px;
    width:40px;
    height:40px;
    z-index:1
}
</style>