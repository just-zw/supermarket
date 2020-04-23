<template>
  <div class="lunbo">
  <div class="box" >
      <slot class="lunboi">

    </slot>
  </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
       timer:null,
    itemlist:[],
    wraper:[],
    position:0,
    itemwidth:0,
    speed:0,
    length:0,
    flat:true
    }
  },
  mounted(){
this.itemlist=document.querySelectorAll('.box div')
this.wraper=document.querySelector('.box');
this.start();
/* let that=this */
setTimeout(()=>{
let a=document.querySelectorAll('.box a')
/* console.log(a); */

this.length=parseInt(a.length)
/* console.log(this.length); */
this.wraper.style.width=this.length*100+'%'
},300)


  },

  methods:{
    start(){
this.timer=setInterval(() => {
      this.stop()
 this.wraper.style.marginLeft=this.position+'px'
 this.itemwidth=parseInt(window.getComputedStyle(this.wraper).width);
 this.speed=this.itemwidth/1000;
   this.position=(this.position-this.speed);
 
   if(this.position==(-this.itemwidth)/4*3){
     this.position=0;
   }

}, 10);
    },
    stop(){ 
/*       if(this.position==0 ||this.position==-this.itemwidth/4 || this.position==-this.itemwidth/2 || (this.position>-this.itemwidth/4*3-2 && this.position<-this.itemwidth/4*3+2)){
       clearInterval(this.timer)
if(this.timer){
  setTimeout(()=>{
  this.start()
},3000)
}
      } */
      for(let i=1;i<this.length;i++){

      
    /*      console.log((-this.itemwidth/i+1));
         console.log((-this.itemwidth/i-1)); */
         
 if(Math.ceil(this.position)>=-this.itemwidth/i && Math.floor(this.position)<=-this.itemwidth/i){

  
this.flat=false
}
      };
      
      
   
      
      if(this.position==0 ||this.flat==false){
       clearInterval(this.timer)
if(this.timer){
  setTimeout(()=>{
  this.start()
},3000)
}
    }
  }
  }}

</script>

<style scoped>
.lunbo{
width: 100%;
overflow: hidden;
margin-top: 48px;
}
.box{
/*   width: 400%; */
  display: flex;
}
.lunbo::after{
  content: '';
  display: block;
  clear: both;
}
</style>