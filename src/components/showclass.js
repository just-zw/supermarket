export class Price{
constructor(prices){
  this.nowprice=prices.lowNowPrice
this.oldprice=prices.lowPrice
this.discountcolor=prices.discountBgColor
this.discount=prices.discountDesc
}
};
export class Detail{
  constructor(column,services){
this.detail1=column[0]
this.detail2=column[1]
let length=services.length-1
this.detail3=services[length].name
  }
}
export class Proise{
  constructor(proise){

this.proise=proise
/* console.log(proise); */

  }
}
export class Desc{
  constructor(title){
this.title=title
  }
}
export class Shopdetaillog{
  constructor(shopInfo){
    this.shopLogo=shopInfo.shopLogo
this.shopname=shopInfo.name;
  }
}
export class Shopdetail{
  constructor(shopInfo){
    this.cGoods=shopInfo.cGoods
this.cSells=shopInfo.cSells
this.shopscore=shopInfo.score
  }
}
export class DetailInfo{
  constructor(detailinfo){
this.detailinfo=detailinfo
  }
}
export class ItemParams{
constructor(itemparams){
this.set=itemparams.info.set;
this.tables=itemparams.rule.tables[0]
}
}
export class Cart{
  constructor(res,id){
this.comment=res.desc
this.cartprice=res.lowNowPrice
this.cartimg=res.topImages[0]
this.id=id
}}