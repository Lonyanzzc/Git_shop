export function debounce(func, delay){
	let timer = null;
	return function(...args){  //这个项目中 这个args去掉也没问题
			if(timer)    clearTimeout(timer);
			timer = setTimeout(() => {
					func.apply(this, args) //这里直接func()是可以的
					//  console.log(1)
			}, delay);
	}
}