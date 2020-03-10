import{expert} from 'network/aixos'
export function gethomedata(){
  return expert({
    url:"/todos/1"
  })
}