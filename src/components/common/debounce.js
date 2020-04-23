export function debounce(func,day){
let timer=null;
return function(...args){
if(timer){
  clearTimeout(timer)
}
timer=setTimeout(()=>{
  func.apply(this,args)
},day)
}
}