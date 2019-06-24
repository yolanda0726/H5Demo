<template>
    <div>
        <div class="loading-bar"  :class="nowStatus">
            <span class="press"></span>
        </div>


        <div class="app-init">
            <transition :name="transitionName">
                <router-view/>
            </transition>
        </div>


<!--        footer  tab切换部分-->
        <footer class="footer  clear" :class="{'leave':isLeave}">
            <div class="footer-item" :class="{'active':isActive('home')}" @click="open('/home')">
                <p>
                    <span class="iconfont icon-shouye"></span>
                </p>
                <span>首页</span>
            </div>
            <div class="footer-item" :class="{'active':isActive('classification')}" @click="open('/classification')">
                <p>
                    <span class="iconfont icon-fenlei"></span>
                </p>
                <span>分类</span>
            </div>
            <div class="footer-item shop-car" :class="{'active':isActive('cart')}" @click="open('/cart')">
                <p>
                    <span class="iconfont icon-gouwuche"></span>
                </p>
                <span>购物车</span>
                <span class="num" v-show="true" :class="{'full':false}">0</span>
            </div>
            <div class="footer-item" :class="{'active':isActive('mine')}" @click="open('/mine')">
                <p>
                    <span class="iconfont icon-smile"></span>
                </p>
                <span>我的</span>
            </div>
        </footer>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Rem from '@/assets/js/rem'
    new Rem();

    export default {
        name: 'app',
        data() {
            return {
                transitionName: 'slide-go',
                nowUrl: '/'
            }
        },
        watch: {
            //路由动画
            '$route' (to, from) {
                if (from.query.time) {
                    if (to.query.time > from.query.time) {
                        this.transitionName = 'slide-go'
                    } else {
                        this.transitionName = 'slide-back'
                    }
                } else {
                    this.transitionName = 'slide-go'
                }
                this.nowUrl = to.fullPath
            }
        },
        computed: {
            isLeave(){
                var leave = true;
                var tabPath = ['home','classification','cart','mine']
                for (let i = 0; i < tabPath.length; i++) {
                    if (this.isActive(tabPath[i])) {
                        leave=false // 有在选中状态的tab就不离开，就是显示
                    }
                }

                //当购物车中有东西的时候，tab消失，显示结算，购物车没有东西，tab显示
                // if (this.isActive(tabPath[2])&&){
                //     leave=false
                // }

                return leave;
            },
            ...mapGetters([
                'nowStatus',
                'getShopCarLength'
            ]),
        },
        methods: {

            /**
             * 检查是否是当前url，以判断底部状态栏是否激活
             * @param name
             * @returns {boolean}
             */
            isActive: function (name) {
                return this.nowUrl.indexOf(name) != -1
            },
            open: function (path) {
                this.$router.openPage(path)

            }

        }
    }
</script>

<style lang="sass">
    @import "./assets/sass/mypublic"
    @import "./assets/font/iconfont.css"

</style>
