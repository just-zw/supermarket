<template>
  <div class="tapcontrol">
    <div class="tapcontrolitem" v-for="(item,index) in arrays" :key="index" @click="add(index)" :class='{active:currentindex==index}'>
      <div>{{item}}
        <span></span>
      </div>
      
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
/* this.currentindex=index; */
 this.$emit('showdata',index)
  },


}
}
</script>

<style scoped>
.tapcontrol{
  display: flex;
  width: 100%;
  height: 50px;
  line-height:40px;
  text-align: center;
    background: white;
}
.tapcontrol .tapcontrolitem{
  flex: 1;
  margin: 0 30px;
}
.tapcontrol .active{
  color: pink;
}
.tapcontrol .active span{
  border-bottom: 2px solid pink;
  display: block;
  text-align: center
}

</style>