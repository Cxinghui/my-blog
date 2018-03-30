// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routers from './router'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false


//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString(16).slice(2,8);
  }

})
Vue.directive("theme",{
  bind(el,binding,vnode){
    if(binding=='wide'){
        el.style.backgroundColor=red;
    }
  }
})


//自定义过滤器  value 为 |  左边的值

// Vue.filter("to-uppercase",function(value){
//     return value.toUpperCase(); 
// })
 
// Vue.filter("snippet",function(value){
//     return value.slice(0,100)+"...";
// });

//创建路由
const router=new VueRouter({
  routes:Routers,
  mode:"history"

})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
