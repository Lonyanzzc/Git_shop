<template>
  <div class="cart-list-main flex">
    <div class="cart-list-left flex">
      <input type="checkbox" class="check" 
						 v-model="isSelect" >
      <img :src="product.image" alt="" class="img" />
    </div>
    <div class="cart-list-right">
      <div class="goods-title">{{ product.title }}</div>
      <div class="goods-info flex">
        <span class="price">￥{{ product.price }}</span>
				<span class='count'>x{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopcarListItem",
	data(){
		return {
			ischeck:false
		}
	},
  props: {
    product: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  computed:{
    isSelect:{  //v-model双向绑定，所以需要set
      get(){
        return this.ischeck = this.product.check
        },
      set(){
        this.product.check = !this.product.check;
      }
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
}

.cart-list-main {
  padding: 10px;
  border-bottom: 1px solid #ececec;
}
.cart-list-left {
  height: 25%;
  width: 35%;
  align-items: center;
}

.img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid #ececec;
  margin: 0 10px 0px 5px;
  border-radius: 6px;
  vertical-align: middle;
}

.cart-list-right {
  width: 74%;
  position: relative;
}

.goods-info {
  justify-content: space-between;
	vertical-align: bottom;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.goods-title {
  overflow: hidden;
	text-overflow: ellipsis;
  font-size: 16px;
  width: 100%;
  height: calc(100% - 30px);
}
.price {
  color: #f9cd0b;
	font-size: 19px;
}
.count{
	margin-top: 3px;
}

.check {
  width: 21px;
  height: 20px;
  overflow: hidden;
  border-radius: 100%;
  border: 1px solid #ececec;
}

</style>