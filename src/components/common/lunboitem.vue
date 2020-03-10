<template>
  <div class="lunboitem"><slot></slot></div>
</template>

<script>
export default {
props:{
  imgurl:{
    type:String
  }
}
}
</script>

<style scoped>
.lunboitem{
display: inline-block;
  width: 100%;
  height: 150px;
  border: 0px
}
.lunboitem img{
  width: 100%;
  height: 150px;
  display: block
}
</style>