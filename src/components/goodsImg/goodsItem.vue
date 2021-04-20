<template>
    <div id='goodsItem' @click='itemClick()'>
        <img :src='showImage' @load="imgload()">
        <div class="goodsInfo">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}￥</span>
            <span class='colect'>{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"goodsItem",
    props:{
        goodsitem:{
            type:Object,
            default(){
                return ''
            }
        }
    },
    computed: {
        showImage(){
            return  this.goodsitem.img || this.goodsitem.image || this.goodsitem.show.img
        }
    },
    methods:{
        imgload(){
            if(this.$route.path.indexOf('/home') !== -1) this.$bus.$emit('imgload')
            else if(this.$route.path.indexOf('/detail') !== -1) this.$emit('detailImgload')

            // if(this.$route.path == '/home') this.$bus.$emit('imgload')  也可以使用，不懂区别在哪里
        },
        itemClick(){
            if(this.$route.path == '/home') this.$router.push('/detail/'+ this.goodsitem.iid)
        }
    }
}
</script>

<style scoped>
#goodsItem{
    position: relative;
    padding-bottom: 47px;
    width:49%;
}
#goodsItem img{
    width:100%;
    height:100%;
    border-radius: 5px;
}
.goodsInfo{
    position: absolute;

    left: 0;
    right: 0;
    bottom: 5px;
    font-size: 15px;
    overflow:hidden;
    text-align: center;
}
.goodsInfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;

    margin-bottom: 0px;
}
.goodsInfo .price{
    margin-right:20px;
    color:pink
}
.goodsInfo .colect{
    /*为元素用了absolute，所以父相子绝*/
    position: relative;
}
.goodsInfo .colect::before{
    content:'';
    /*absolute不需要content也能撑开内容，relative如果content内容为空则高度为0（不显示）*/
    position:absolute;

    left: -15px;
    top: 3px;
    width: 15px;
    height: 15px;
    background: url("../../assets/cfav.jpg") 0 0/14px 14px;
}
</style>