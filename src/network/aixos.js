import axios from 'axios'
export function expert(config){
  const instance =axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
  });
  instance.interceptors.request.use(config=>{
   /*  console.log(config) */
    return config
  },err=>{
    console.log(err)
  })
  instance.interceptors.response.use(
    res=>{
   /*    console.log(res) */
      return res.data
    },
    rej=>{
     console.log(rej)
    }
  )

  return instance(config)
}
