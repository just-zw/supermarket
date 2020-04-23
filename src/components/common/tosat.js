import toast from './toast'

let obj={};
obj.install=function(Vue){
let toastcons=Vue.extend(toast);
const toasts=new toastcons();
toasts.$mount(document.createElement('div'));
document.body.appendChild(toasts.$el)
Vue.prototype.$toast=toasts
}



export default obj;