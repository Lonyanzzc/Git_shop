import { 
	ADD_COUNT, ADD_SHOPCAR_LIST
} from './function-types'

export default{
	addShopcar(context, payload) {
		return new Promise((resolve, reject) => {
			let item = context.state.shopcarList.find(item =>{
				return item.id === payload.id
		})

		if(item){
				context.commit("ADD_COUNT", item)
				resolve('数量+1！')
		}else{
				context.commit('ADD_SHOPCAR_LIST', payload)
				resolve("已添加到购物车中！")
		}
		})
	}
}