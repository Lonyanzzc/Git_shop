<template>
    <div id='interface'>
        <keep-alive exclude="detail">
            <router-view></router-view>
        </keep-alive>
   <!--     <p>{{$store.state.count}}</p>
        <h1 @click="$store.commit('add',[10,20])">555</h1>
    -->
    </div>
</template>

<script>
export default {
    name:"interface"
}
</script>

<style scope>
/* 这只是路由的样式，若是在app中添加内容，则top:44px对app中添加的内容无效，会产生内容重叠的问题*/
/* #interface{
    position: relative; 
    top:44px;
} */
</style>
