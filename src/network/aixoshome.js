import{expert} from 'network/aixos'
export function gethomedata(){
  return expert({
    url:"/home/multidata"
  })
};
export function gethomedital(name,page){
return expert({
url:'/home/data',
params: {
  type:name,
  page:page+1
}
})
}