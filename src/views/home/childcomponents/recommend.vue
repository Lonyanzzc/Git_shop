<template>
    <div class="recommend">
        <div v-for="item in recommend" :key="item.link" class="recommend-item"> <!--这里明明不需要key的-->
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class='title'>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name : "recommend",
    props:{
        recommend:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display:flex;
    
    box-shadow: 0 5px 0 0px #eee
}
.recommend-item{
    flex:1;
    padding:4px;
}
a img{
    width:100%;
}
a div{
    font-size: 14px;
    align-content: center;
    text-align: center;
    color: black;

}
.title{
    font-weight:700;
}
</style>