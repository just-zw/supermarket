<template>
  <div class="nav">
   <div class="left">
     <slot name="left" ></slot> 
   </div>
   <div class="mid">
     <slot name="mid"></slot>
   </div>
   <div class="right">
     <slot name="right"></slot>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
  display: flex;
  width: 100%;

}
.left{
  flex: 1
}
.mid{
  flex:4
}
.right{
  flex: 1
}
</style>