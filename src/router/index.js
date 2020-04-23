import vue from 'vue'
import VueRouter from 'vue-router'
import main from 'views/main'
import my from 'views/my'
import shooping from 'views/shooping'
import sort from 'views/sort'
import detail from 'views/detail'
vue.use(VueRouter)
const routes=[
  {path:'/',
redirect:'/main'
},
  {path:'/main',
component:main
},
{path:'/my',
component:my
},
{path:'/shooping',
component:shooping
},
{path:'/sort',
component:sort
},
{
  path:'/detail/:id',
  component:detail
}
];
const router=new VueRouter({
  routes,
  mode:'history'
  
})
export default router