import{expert}from'network/aixos'
export function getdetaildata(iid){
return expert({
  url:'/detail',
  params:{
iid
  }
})
}
