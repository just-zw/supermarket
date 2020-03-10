<template>
  <div class="tapcontrol">
    <div class="tapcontrolitem" v-for="(item,index) in arrays" :key="index" @click="add(index)" :class='{active:currentindex==index}'>
      <div>{{item}}</div>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
props:{
  arrays:{
    type:Array,
    default:[]
  }
},
data(){
  return{
    currentindex:0
  }
},
methods:{
  add(index){
this.currentindex=index;
 this.$emit('showdata',index)
  },


}
}
</script>

<style scoped>
.tapcontrol{
  position: sticky;
  top: 30px;
  display: flex;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center
}
.tapcontrol .tapcontrolitem{
  flex: 1;
  margin: 0 30px;
}
.tapcontrol .active{
  color: pink;
}
.tapcontrol .active span{
  border-bottom: 1px solid pink;
  display: block;
  text-align: center
}

</style>