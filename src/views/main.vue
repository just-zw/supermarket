<template>
<div>
  <div class="maintittlebar">
    <tittlebar class="nav">
   <div slot="mid" class="navmid">购物街</div>
</tittlebar>
 <tapcontrol :arrays="['流行','新款','精选']" @showdata='showdatas' ref="ccc"  class="tapcontrols" v-show="isshow"/>
 </div>
  <bscroll class="continer" ref="aaa"  :probeType='2' @scroll="showscroll" @pullingUp="showpullingUp" @showfresh="fresh">
<div class="mainlunbo">
  <lunbo>
    <lunboitem v-for="(values,index) in lists" :key="index" :imglink="lists[index].link">
    <img :src="lists[index].image" alt="" @load="showimgload">
    </lunboitem>
  </lunbo>
</div>
<div class="recommend">
<recommend>
  <recommenditem v-for="(value,index) in recommend" :key="index"  :recommendlink="recommend[index].link"> 
<img slot="imglist" :src="recommend[index].image" alt="">
<span slot="fontlist">{{recommend[index].title}}</span>
  </recommenditem>
</recommend>
<feater></feater>
</div>
 

<tapcontrol :arrays="['流行','新款','精选']" @showdata='showdatas' ref="bbb"/>
<div class="showimg">
  <div v-for="(values,index) in  getkind" :key="index" >
    <img :src="values.show.img" alt="" @load="frish" @click="revail(values,index)">
    <span class="worde">{{values.props[0]}}</span>
    <div>
      <span class="price">{{values.price }}</span>
        <span class="popularStar">{{" ⭐ "+values.popularStar}}</span>
    </div>
  </div>



</div>

 </bscroll>
<backtop @click.native="backtop()" v-show="isactive"></backtop>

</div>
</template>

<script>
import tittlebar from'components/common/tittlebar'
import lunbo from 'components/common/lunbo'
import lunboitem from 'components/common/lunboitem'
import {gethomedata,gethomedital}from 'network/aixoshome'
import tapcontrol from 'components/common/tapcontrol'
import bscroll from 'components/common/betterscrool'
import backtop from 'components/common/backtop'
import recommenditem from 'components/common/recommenditem'
import recommend from 'components/common/recommond'
import feater from 'components/common/feater'

export default {
  data(){
return{
  isactive:false,
  lists:[],
  recommend:[],
  page:0,
  listdital:['pop','sell','new'],
pop:{},
sell:{},
new:{},
sortindex:0,
frsh:undefined,
positiontop:0,
isload:true,
isshow:false,
}
  },

components:{
  tittlebar,
  lunbo,
  lunboitem,
  tapcontrol,
  bscroll,
  backtop,
  recommend,
  recommenditem,
  feater
},

created(){
  gethomedata().then(res=>{
    console.log(res);
    
    this.lists=res.data.banner.list;
    this.recommend=res.data.recommend.list;
    
  });
  this.page=0;
  gethomedital(this.listdital[this.sortindex],this.page).then(res=>{

this[this.listdital[this.sortindex]]=res.data.list


  })

},
mounted(){

},
activated(){
 this.$refs.aaa.bscroll.refresh()
},
deactivated(){
console.log(11)
},
methods:{
  showdatas(a){
 this.sortindex=a
 this.$refs.bbb.currentindex=a
  this.$refs.ccc.currentindex=a
 this.page=0;
 gethomedital(this.listdital[this.sortindex],this.page).then(res=>{
this[this.listdital[this.sortindex]]=res.data.list  })
  },
  backtop(){
this.$refs.aaa.bscroll.scrollTo(0,0);
  },

showpullingUp(pag){
   gethomedital(this.listdital[this.sortindex],pag).then(res=>{
     console.log(res.data.list);
     
     
this[this.listdital[this.sortindex]]=this[this.listdital[this.sortindex]].concat(res.data.list)
  })
},
fresh(aa){
this.frsh=aa
},
frish(){
let timer=null;
if(timer){
  clearTimeout(timer)
}
timer=setTimeout(()=>{
  this.$refs.aaa.bscroll.refresh()
})

},
/* mainrefresh(aa){
  this.frsh=aa
  console.log(aa);  
} */
showimgload(){
if(this.isload){
  this.positiontop=this.$refs.bbb.$el.offsetTop
this.isload=false;
}
},
  showscroll(data){
    
  this.isactive=-data.y>1200
  if(this.positiontop==0){
    this.isshow=false
  }
  else{
this.isshow=(-data.y-48)>this.positiontop
  }

  
},
revail(values,index){
  this.$router.push('/detail/'+values.iid)

}
},

computed:{
  getkind(){
    if(this.sortindex==0){
      return this.pop
    }
      if(this.sortindex==1){
      return this.sell
    }
      if(this.sortindex==2){
      return this.new
    }
  }
}
}
</script>

<style scoped>
.maintittlebar .nav{
   color: aliceblue;
   background: pink;
}
.navleft{
  text-align: center
}
.navmid{
  text-align: center
}
.navright{
  text-align: center
}
.continer{
  height: calc(100vh - 98px);
  overflow: hidden;
}
.showimg{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around
}
.showimg div{
  width: 48%;
 text-overflow: ellipsis;
}
.showimg img{
  width: 100%;
  height: 80%;
border-radius: 10px;
display:block;
}
.showimg .worde{
 width: 100%;
display: inline-block;
  white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
margin-top: 10px;
font-size: 14px;
color: gray;
}
.showimg div div{
  margin: 0 auto;
  width: 55%;
  text-align: center;
}
.showimg div div span{
font-size: 14px;
color:pink;
margin-bottom: 10px;
display: inline-block;
}
.showimg .popularStar{
  color: gray;
  margin-left: 3px;
 vertical-align: 1px;
}
.tapcontrols{
  position: absolute;
  z-index: 5;

}
</style>