<template>
  <div class="bottombar">
    <div class="first">
      <i></i>
      <span>客服</span>
    </div>
    <div>
      <i></i>
      <span>客服</span>
    </div>
    <div>
      <i></i>
      <span>客服</span>
    </div>
    <div style="background:yellow;margin-right:3px" @click="addcar">
      <span style="line-height:50px">加入购物车</span>
    </div>
    <div style="background:yellow">
      <span  style="line-height:50px;">进入店铺</span>
    </div>
  </div>
</template>

<script>
export default {
methods:{
  addcar(){
    this.$emit('addcar')
  }
}
}
</script>

<style scoped>
.bottombar{
  position: relative;
  bottom: 0;
  height: 50px;
  z-index: 99;
  background: white;
  display: flex;
/*     justify-content: center; */
}
.bottombar div{
  font-size: 14px;
  flex: 1;
text-align: center;
}
.bottombar div i{
  background: url('~assets/img/detail_bottom.png')0 0/100%;
  background-position-y: 100px;
  margin-bottom: 5px;
  display: block;
width: 22px;
height: 25px;
margin: 0 auto;
}
</style>