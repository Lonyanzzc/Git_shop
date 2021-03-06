import {request} from "@/network/request.js"

export function getDetail(id){
	return request({
		url: "/detail",
		params: {
			iid :id
		}
	})
}

export function getRecommend(){
	return request({
		url:'recommend'
	})
}

export class Goods{
	constructor(itemInfo, columns, services){
		this.title = itemInfo.title;
		this.oldPrice = itemInfo.oldPrice;
		this.newPrice = itemInfo.price;
		this.realPrice = itemInfo.lowNowPrice;
		this.desc = itemInfo.desc;
		this.discount = itemInfo.discountDesc;
		this.columns = columns;
		this.services = services;
	}
}

export class GoodsParam{
	constructor(info, rule){
		// this.image = info.images? info.image[0] : ''
		this.infos = info.set;
		this.sizes = rule.tables;
	}
}

export class Shop{
	constructor(shopInfo){
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods
	}
}