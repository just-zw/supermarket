<template>
  <div class="detail">
<tittlebar>
  <div slot="left" class="left" @click="back">⬅</div>
  <div slot="mid" class="mid">
    <span v-for="(values,index) in detailparams" :key=index :class="{active:index==currentindex}" @click="addactive(index)">
      {{values}}
    </span>
  </div>
</tittlebar>
<bscroll class="continer" :probeType=3 ref="aaa" @scroll='showscroll'>
<div class="mainlunbo">
  <lunbo >
    <lunboitem v-for="(values,index) in lists" :key="index" imglink="#">
    <img :src="lists[index]" alt="">
    </lunboitem>
  </lunbo>
</div>
<div class="shopdetailtop">
<detailshop :desc="desc" :price="price" :proise="proise" :detail="detail"></detailshop>
</div>
<div class="detailshopinf">
  <detailshopinf :shopdetaillog="shopdetaillog" :shopdetail='shopdetail'></detailshopinf>
</div>
<detailthings :detailinfo="detailinfo.detailinfo" :vueref="refs" :itemparams="itemparams"></detailthings>
</bscroll>
<bottombar @addcar="adddetail"></bottombar>
  </div>
</template>

<script>
import tittlebar from'components/common/tittlebar'
import {getdetaildata} from'network/axiosdetail'
import lunbo from 'components/common/lunbo'
import lunboitem from 'components/common/lunboitem'
import {Price,Detail,Proise,Desc,Shopdetail,Shopdetaillog,DetailInfo,ItemParams,Cart} from'components/showclass'
import recommenditem from 'components/common/recommenditem'
import recommend from 'components/common/recommond'
import detailshop from 'components/common/detailshop'
import detailshopinf from'components/common/detailshopinf'
import bscroll from 'components/common/betterscrool'
import detailthings from 'components/common/detailthings'
import bottombar from 'components/common/bottombar'

export default {
  name:'detail',
data(){
  return{
detailid:null,
detailparams:['商品','参数','评论','推荐'],
currentindex:0,
lists:[],
price:{},
detail:{},
proise:{},
desc:{},
shopdetail:{},
shopdetaillog:{},
detailinfo:{},
refs:{},
itemparams:{}
  }
},
created(){
this.detailid= this.$route.params.id
  getdetaildata(this.detailid).then(res=>{    
    this.lists=res.result.itemInfo.topImages;
this.price=new Price(res.result.itemInfo);
this.detail=new Detail(res.result.columns,res.result.shopInfo.services)
this.proise=new Proise(res.result.shopInfo.services).proise
this.desc=new Desc(res.result.itemInfo.title)
this.shopdetail=new Shopdetail(res.result.shopInfo)
this.shopdetaillog=new Shopdetaillog(res.result.shopInfo)
this.detailinfo=new DetailInfo(res.result.detailInfo)
this.itemparams=new ItemParams(res.result.itemParams)
this.refs=this.$refs.aaa
this.cart=new Cart(res.result.itemInfo,res.iid)
/* console.log(this.cart);
let that=this */


  });

},
components:{
  tittlebar,
  lunbo,
  lunboitem,
  detailshop,
  detailshopinf,
  bscroll,
  detailthings,
  bottombar
},
methods:{
  addactive(i){
this.currentindex=i
if(this.currentindex==0){
  this.refs.bscroll.scrollTo(0,0)
}
else if(this.currentindex==1){
  this.refs.bscroll.scrollTo(0,-3080)
}
  },
  back(){
    this.$router.back()
  },
  showscroll(position){
    if(-position.y<=3080){
      this.currentindex=0
    }
    else if(-position.y>3080){
      this.currentindex=1
    }
    
  },
  adddetail(){
    this.$store.commit('showthing',this.cart)
    /* this.$toast */
  }
}
}
</script>

<style scoped>
.left{
font-size: 40px;
}
.mid{
  text-align: center;
  color: gray;
  display: flex;
}
.mid span{
flex: 1;
}
.active{
  color: pink;
}
.lunbo{
  margin-top: 0;
}
.continer{
  height: calc(100vh - 98px);
  overflow: hidden;
}
.detail{
  height: 100vh;
}
</style>