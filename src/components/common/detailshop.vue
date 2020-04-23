<template>
  <div class="shop">
    <div>{{desc.title}}</div>
    <div class="price">
   <span v-for="val in price" :key="val">
{{val|pipe}}
   </span>
   <span :style="{background:pricecolor}">{{priceh}}</span>
    </div>
    <div class="detailspeak">
      <span v-for="val in detail" :key="val">
        {{val}}
      </span>
    </div>
   <div class="icon">
      <div v-for=" (val,i) in proise" :key="i">
      <img :src="val.icon" alt="">
      <span>{{val.name}}</span>
    </div>
   </div>
  </div>
</template>

<script>
export default {
/* mounted(){
this.handle()
  }, */
props:{
  desc:{
    type:Object,
    default:{}
  },
   price:{
    type:Object,
     default:{}
  },
   proise:{
  },
    detail:{
    type:Object,
     default:{}
  }
},
filters:{
pipe(val){
return`￥${val}`
}
},
data(){
  return{
    pricecolor:'',
    index:1,
    priceh:''
  }
},
  watch:{
      proise(newValue){
       /*  console.log(newValue); */
       this.hangd
      },
   price(val){
     this.handle
   }   
  },
/* methods:{
 handle(){
   this.pricecolor=this.price.pricecolor
   delete this.price.pricecolor;
   console.log(this.proise);


 },}, */
 computed:{
   hangd(){
  this.proise.pop();  
   },
   handle(){
    this.pricecolor=this.price.discountcolor
    this.priceh=this.price.discount
    delete this.price.discount;
   delete this.price.discountcolor;
   
   }
 }
/*  hangd(){
if(this.index){
  console.log(this.proise);
  
 this.proise.pop() 
 this.index=this.index-1
}


 }  */

}
</script>

<style scoped>
.price span:nth-child(2){
  color: gray;
  font-size: 18px;
  text-decoration: line-through;
}
.price span:first-child{
font-size: 22px;
color: red
}
.price span:last-child{
 border-radius: 8px;
 font-size: 12px;
 padding-left: 2px;
 padding-right: 3px;
 vertical-align: 10px;
}
.price{
  margin: 13px 0;
  
}
.detailspeak{
  display: flex;
justify-content: space-between;
}
.detailspeak span{

  font-size: 13px;
  color: gray;
  padding-bottom: 10px;

}
.icon{
  display: flex;
  height: 60px;
  line-height: 60px;
  border-bottom:3px solid rgba(221, 218, 218,0.3) ;
  border-top:3px solid rgba(221, 218, 218,0.3) ;
  justify-content: space-between;
}
.icon div{

  font-size: 14px;

}
.icon img{
  width: 15px;
  height: 15px;
}
</style>