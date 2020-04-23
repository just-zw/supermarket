<template>
<div class="shooping">
  <tittlebar class="tittle">
    <div slot="mid">购物车({{count}})</div>
  </tittlebar>
  <betterscrool class="bs">
     <shopdetail></shopdetail>
  </betterscrool>
  <shoppingbottom></shoppingbottom>
</div>
</template>

<script>
import tittlebar from 'components/common/tittlebar.vue'
import shopdetail from 'components/common/shopdetail'
import shoppingbottom from 'components/common/shoppingbottom'
import betterscrool from 'components/common/betterscrool'
export default {
  data(){
    return{
      count:0
    }
  },
components:{
  tittlebar,
  shopdetail,
  shoppingbottom,
  betterscrool
}
}
</script>

<style scoped>
.tittle{
  background:rgb(243, 127, 175);
  color: white;

}
.tittle div{
 text-align: center;
 font-size: 18px;
}
.bs{
  height: calc(100vh - 50px - 44px - 48px);
}
</style>