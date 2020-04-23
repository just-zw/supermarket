<template>
  <div class="shoppingbottom">
    <div class="left">
      <div class="icon"><span class="iconspan" :class='{actived:handle}' @click="isac"><span>√</span></span></div>
    <span>全选</span>
    </div>
    <div class="mid">
      <span>合计：</span>
      <span>{{showzongcount}}</span>
    </div>
    <div class="right">去计算</div>
  </div>
</template>

<script>
import{mapGetters} from 'vuex'
export default {
  created(){
/*     console.log(this.$store.cart); */
    console.log(this.handle);
    
 
  },
  data(){
    return{
     /*  isactived:true */
    }
  },
  updated(){
/* this.handle() */
  },
methods:{
isac(){

},

},
computed:{
  ...mapGetters(['showzongcount']),

handle(){
  let key=true;
this.$store.state.cart.forEach(function(v,i){
if(v.isactived==false){
  key=false
}
});
if(key==false){
  return false
}else{
  return true
}
   
}
}
}
</script>

<style scoped>
.shoppingbottom{
  display: flex;
  height:44px ;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
align-items: center;
background: #eee;;
}
.left{
  display: flex;
  flex: 2;
  height: 100%;
  line-height: 44px;
  }
  .mid{
flex:6 ;
  }
  .right{
flex: 3;
background: red;
height: 100%;
line-height: 44px;
text-align: center;
color: white;
  }
.icon{
  width: 18px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

}
.icon .iconspan{
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background: white;
  display: block;
 color: white;
   border: 1px solid gray;
}
.icon .iconspan span{
  position: relative;
  top: -13px;
}
.icon .actived{
  background: pink;
  
  border: 1px solid gray;
}
</style>