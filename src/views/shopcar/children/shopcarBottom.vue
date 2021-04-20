<template>
  <div id="shopcarBottom">
    <label class="check"><div>
			<input type="checkbox" :disabled='isdisabled' id='shopcarCheck'
              @click='allcheck' v-model="isSelect" />  全部
		</div></label>
    <div class="price">合计:￥{{ allPrice }}</div>
    <div class="count" @click="buy()">去计算({{ allCount }})</div>
  </div>
</template>

<script>
export default {
  name: "shopcarBottom",
  data() {
    return {
      ischeck: false,
      isdisabled: false
    };
  },
	methods:{
		allcheck(){
      if(!this.ischeck){
        this.$store.state.shopcarList.forEach(item => item.check = true)
      }else{
        this.$store.state.shopcarList.forEach(item => item.check = false)
      }
		},
    buy(){
      if(this.$store.state.shopcarList.find(item => item.check) === undefined){
        this.$toast.show('请选择商品!', 1000)
      }else{
        this.$toast.show('跳转到支付页面中，请稍等..', 1000)
      }
    }
	},
  computed: {
    allPrice() {
      return this.$store.state.shopcarList
        .filter((item) => {
          return item.check;
        })
        .reduce((prevalue, num) => {
          return prevalue + num.price * num.count;
        }, 0).toFixed(2);
    },
    allCount() {
      return this.$store.state.shopcarList.filter(item => item.check).length;
    },
    //因为是双向绑定，所以需要set
    isSelect: { 
      get(){
        if(this.$store.state.shopcarList.length === 0) {
           return this.isdisabled = true
        }
        this.isdisabled = false
        return  this.ischeck = !this.$store.state.shopcarList.find(item => !item.check)
      },
      set(){}
    }
  },
};
</script>

<style scoped>
#shopcarBottom {
  display: flex;
	height:57px;
  font-size: 18px;
	background: #eee;
	line-height: 40px;
}
.check {
	display: flex;
	justify-content: center;
  align-items: center;
	height:100%;
  width: 70px;
}
.price{
	display: flex;
	justify-content: center;
  align-items: center;
	flex:1;
	height:100%;
}
.count {
	display: flex;
	justify-content: center;
  align-items: center;
	border-radius: 15px;;
	background: #ff5777;
	font-size: 19px;
	height:100%;
  width: 110px;
}
</style>