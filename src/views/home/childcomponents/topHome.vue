<template>
<div id ="top">
    <top-slot-item>
        <template slot='center'>购物栏</template>
    </top-slot-item>
</div>
</template>

<script>
import topSlotItem from '@/components/topItem/topSlotItem.vue'

export default {
    name : "topHome",
    components: { topSlotItem },
}
</script>

<style scoped>
#top{
    width: 100%;
    height: 2.75rem;
    /* top: 0rem;
    left: 0rem;
    right: 0rem; */
    background-color: #ff8198;
    box-shadow: 0rem .1875rem .0625rem rgba(100, 100, 100, 0.15);
    z-index:3
}
</style>