<template>
    <div id="topSlotItem">

        <div class="left"><slot name='left'></slot></div>

        <div  class="center"><slot name='center'></slot></div>

        <div class="right"><slot name='right'></slot></div>
    </div>
</template>

<script>
export default {
    name : "topSlotItem"
}
</script>

<style scoped>
#topSlotItem{
    display: flex;

    top: 0rem;
    left: 0rem;
    right: 0rem;
    height: 2.75rem;
    box-shadow: 0rem .1875rem .0625rem rgba(100, 100, 100, 0.15);
}
.right, .left{
    display: flex;
    
    width:4.375rem;
    justify-content: center;
    align-items: center;
}
.center{
    flex:1;
    display: flex;

    justify-content: center;
    align-items: center;
}
</style>