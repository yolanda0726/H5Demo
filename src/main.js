import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from  './store'
import VueLazyload from 'vue-lazyload'

//false关闭生产模式下给出的提示
Vue.config.productionTip = true

// Vue.use(VueLazyload);

//or with this options
Vue.use(VueLazyload,{
  preLoad:1.3, //预加载高度
  error:require('@/assets/images/error.png'), //图片路径错误时加载的图片
  loading:'',//预加载图片
  attempt:1 //尝试加载图片数量
})


//router的钩子函数
router.beforeEach((to,from,next)=>{
  store.commit("nowStatus",'loading');
  next();
})

router.afterEach(()=>{
  store.commit("nowStatus","end");
  setTimeout(()=>{
    store.commit("nowStatus","hide");
  },900);
  setTimeout(()=>{
    store.commit("nowStatus","normal");
  },1000)
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
