import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
const store=new vuex.Store({
  state:{
    cart:[]
  },
  mutations:{
    showthing(state,res){ 
      if(!res.count){
        res.count=1;
        res.isactived=true
        state.cart.push(res)
      }
      else{
        for(let v of state.cart){
          if(res.id==v.id){
            v.count++
          }
        }
   
      }
   
    },
  isactive(state,i){
state.cart[i].isactived=!state.cart[i].isactived
  }
  },
  actions:{

  },
  getters:{
showcart(store){
  return store.cart
},
showzongcount(store){
let sum=0;
store.cart.forEach(function(v,i){ 
if(v.isactived==true){
  sum+=v.count*v.cartprice
}
})
return sum
},
  }

}
)
export default store