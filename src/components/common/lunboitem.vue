<template>
  <div class="lunboitem">
    <a :href="imglink"><slot></slot></a>
    
    </div>
</template>

<script>
export default {
props:{
  imglink:{
    type:String
  }
}
}
</script>

<style scoped>
.lunboitem{
display: inline-block;
  width: 100%;
  height: 200px;
  border: 0px
}
.lunboitem img{
  width: 100%;
  height: 200px;
}
</style>