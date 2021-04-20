import { 
	ADD_COUNT, ADD_SHOPCAR_LIST
} from './function-types'

export default{
	ADD_COUNT(state, payload){
		payload.count++
	},

	ADD_SHOPCAR_LIST(state, payload){
		payload.count = 1
		state.shopcarList.push(payload)
	},
}