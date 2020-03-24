import Vue from 'vue'
import App from './App.vue'

//一.导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 二.定义组件
import index from './view/index.vue';
import hellow from './view/hellow.vue'
//三.定义路由规则
const routes =[
  {path:'/index',component:index},
  {path:'/hellow',component:hellow},
  {path:'/',redirect:'hellow'}
]
//四.创建路由实例
const router= new VueRouter({
    routes
})

  // //全局组件
  // import index from './view/index.vue'
  // Vue.component('index',index)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
