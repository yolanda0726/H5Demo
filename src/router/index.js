import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash'

VueRouter.prototype.openPage = function (link, query) {
    this.push({
        path: link,
        query: _.assignIn({
            time: new Date().getTime()
        }, query || {})
    })
}


Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component(resolve){
                require(['@/views/home/index.vue'],resolve)
            }

        },
        {
            path:'/classification',
            name:'classification',
            component(resolve){
                require(['@/views/classification/index.vue'],resolve)
            }
        },
        {
            path:'/cart',
            name:'cart',
            component(resolve){
                require(['@/views/cart/index.vue'],resolve)
            }
        },
        {
            path:'/mine',
            name:'mine',
            component(resolve){
                require(['@/views/mine/index.vue'],resolve)
            }
        },
        {
            path:'/search',
            name:'search',
            component(resolve){
                require(['@/views/search/index.vue'],resolve)
            }
        },
        {
            path:'/pay',
            name:'pay',
            component(resolve) {
                require(['@/views/pay/index.vue'],resolve)
            }
        },
        {
            path:'/detail/:id',
            name:'detail',
            component(resolve){
                require(['@/views/detail/index.vue'],resolve)
            }
        }
    ]
})