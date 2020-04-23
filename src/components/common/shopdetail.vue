<template>
  <div class="shopdetail">
    <div class="oneof" v-for="(v,i) in cart" :key="i">
      <div class="icon"><span :class='{actived:v.isactived}'  @click="isac(i)">√</span></div>
      <div class="imgs">
        <img :src="v.cartimg" alt="">
      </div>
      <div class="miaoshu">
         <div class="one" style="font-size:17px">
           {{v.comment}}
         </div>
         <div class="two" style="font-size:14px;color:gray;margin-top:15px;margin-bottom:10px">
           商品描述:{{v.comment}}
         </div>
         <div class="thrid">
           <span>{{v.cartprice|price}}</span>
           <span>{{v.count|counts}}</span>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  
  created(){
/*     this.handle() */
    this.cart=this.showcart
   
    
    },
data(){
  return{
    cart:[],
  }
},
filters:{
  price(val){
    return`￥${val}`
  },
  counts(val){
    return`x${val}`
  }
},
computed:{
  ...mapGetters(['showcart'])
},
methods:{
  ...mapMutations(['isactive']),
isac(i){
 this.isactive(i) 
}

}
 
 

}
</script>

<style scoped>
.oneof {
  display:flex;
padding: 5px;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.oneof div{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon{
  width: 18px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}
.icon span{
   margin-top:50%;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background: white;
  display: block;
 color: white;
   border: 1px solid gray;
}
.icon .actived{
  background: pink;
  
  border: 1px solid gray;
}
.miaoshu div{
width: 257px;
padding: 5px 10px;
}
.imgs img{
  width: 80px;
  height: 100px;
  padding: 5px;
  border-radius: 15px;
}
.thrid span:nth-child(1){
  color: red;
}
.thrid span:nth-child(2){
  float: right;
  margin-right: 15px;
}
</style>