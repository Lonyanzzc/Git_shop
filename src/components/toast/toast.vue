<template>
	<div id='toast' v-show='isshow'>
		{{message}}
	</div>
</template>

<script>
export default {
	name: 'toast',
	data(){
		return {
			message: '',
			isshow: false
		}
	},
	methods:{
		show(message='', during=500){
			this.message = message
			this.isshow = true

			setTimeout(() => {
				this.isshow = false
			}, during)
		}
	}
}
</script>

<style scoped>
#toast{
	position : fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	padding: 8px;
	color: #eee;
	background-color: rgba(0,0,0, 0.57);

	z-index: 999;
}
</style>