<template>
  <div class="wrap" ref="bsc">
    <div class="continer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
probeType:{
 type:Number,
 default:0,
}
  },
data(){
  return{
    bscroll:'',
  }

},
mounted(){
  console.log(this.probeType)
this.bscroll=new BScroll(this.$refs.bsc,{
  probeType:this.probeType,
  pullUpLoad:true,
  click:true
});
this.bscroll.on('scroll',data=>{
  this.$emit('scroll',data)
})
this.bscroll.on('pullingUp',()=>{
  console.log(111)
 setTimeout(function(){
this.bscroll.finishPullUp()
 },3000)
})
} 
}
</script>

<style scoped>

</style>