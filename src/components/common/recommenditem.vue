<template>
  <div class="recommenditem">
    <div class="itemimg"><a :href="recommendlink"><slot name="imglist"></slot></a></div>
     <div class="itemfont"><slot name="fontlist"></slot></div>
  </div>
</template>

<script>
export default {
props:{
  recommendlink:{
    type:String,
  }
}
}
</script>

<style scoped>
.recommenditem{
  height: 130px;
  flex: 1;
    text-align: center;
    color: gray
}
.itemimg {
  height: 80px;
}
.itemimg img{
  width:80px;
  height: 80px;
}
.itemfont{
  height: 34px;
  line-height: 34px;
}
</style>