<template>
  <div class="views" @click="Dispatch()">
<div class="box">
  <img src="../../../../../1.png" alt="">
<div class="fonts">首页</div>
</div>
  </div>
</template>

<script>
export default {
  props:{
path:String
  },
  data(){
    return {
   
    }
  },
methods:{
  Dispatch(){
    
this.$router.push(this.path)
  }
}
}
</script>

<style scoped>
.views{
  flex: 1;
  text-align: center;

}
.box{
  margin: 0 auto;

}

</style>