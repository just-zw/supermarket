<template>
  <div class="wrapper" ref="bsc">
    <div class="continer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {debounce} from 'components/common/debounce'
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

this.bscroll=new BScroll(this.$refs.bsc,{
  probeType:this.probeType,
  pullUpLoad:true,
  click:true
});
    let fresh=debounce(this.bscroll.refresh,500)
  this.$emit('showfresh',fresh)
this.bscroll.on('scroll',data=>{
  this.$emit('scroll',data)
})
this.bscroll.on('pullingUp',()=>{
  console.log(22)
  let page=2
  this.$emit('pullingUp',page)
  page=page+1
  let that=this
 setTimeout(function(){
that.bscroll.finishPullUp()
 },3000)
});


} 
}
</script>

<style scoped>

</style>