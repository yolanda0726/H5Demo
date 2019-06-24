<template>
    <div class="app-init home-index">
        <header class="public-header">
<!--            搜索框-->
            <form class="search-box clear">
                <div class="fl logo">
                        <span class="iconfont icon-xiaomi"></span>
                </div>
                <div class="input-box" @click="$router.openPage('search')">
                    <span class="iconfont icon-sousuo-copy absolute"></span>
                    <input class="input-controller" type="text" placeholder="搜索商品名称" readonly>
                </div>
                <div class="myself-center fr" @click="$router.openPage('mine')">
                    <span class="iconfont icon-smile"> </span>
                </div>
            </form>
<!--                导航栏-->
            <nav class="menu-box scroll-box-x noscroll" >
                <ul class="wrap-box clear ">
                    <li class="item" :class="{'active' : index == navListActiveIndex} " v-for="(item,index) in navList" :key="index" @click="changeNav(index)">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </nav>
        </header>


<!--        推荐-->
        <div class="app-init scroll-box  scroll-content footer-hack" v-show="navListActiveIndex==0">
            <Swiper :list="bannerList"></Swiper>

<!--            米粉卡  以旧换新 新品发布 物流查询-->
            <div >
                <a href="javascript:;" class="fl tabA">
                    <img @click="$router.openPage('pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292984819.png" alt="">
                </a>
                <a href="javascript:;" class="fl tabA">
                    <img @click="$router.openPage('pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292372054.png" alt="">
                </a>
                <a href="javascript:;" class="fl tabA">
                    <img @click="$router.openPage('pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022291629252.png" alt="">
                </a>
                <a href="javascript:;" class="fl tabA">
                    <img @click="$router.openPage('pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022290460400.png" alt="">
                </a>
            </div>
<!--            优惠部分-->
            <div class="clear" style="margin-top: 0.15rem">
                <img  @click="$router.openPage('/detail/1001')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png" class="fl href" alt="">
                <img style="margin-bottom: 0.05rem" @click="$router.openPage('/detail/1004')" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" class="fr href"  alt="">
                <img  @click="$router.openPage('/detail/1005')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png" class="fr href" alt="">
            </div>
<!--            广告信息 -->
            <div>
                <img style="margin-top: 0.15rem" @click="$router.openPage('/detail/1003')"  v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg'" alt="">
                <img style="margin-top: 0.15rem" @click="$router.openPage('/detail/1006')" v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png'" alt="">
                <img style="margin-top: 0.15rem" @click="$router.openPage('/detail/1007')" v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011115033089933.png'" alt="">

            </div>

<!--            列表信息-->
            <div class="shop-list-box clear">
                <ShopItem :list="shoplist"></ShopItem>


            </div>
        </div>
<!--手机-->
        <div class="app-init scroll-box scroll-content footer-hack" v-show="navListActiveIndex==1">
            <Swiper :list="bannerList01"></Swiper>

            <div class="shop-list-box clear">
                <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
                <ShopItem :list="shoplist01"></ShopItem>
            </div>
        </div>
<!--        智能-->
        <div class="app-init scroll-box scroll-content footer-hack" v-show="navListActiveIndex==2">
            <Swiper :list="bannerList02"></Swiper>

            <div class="shop-list-box clear">
                <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
                <ShopItem :list="shoplist02"></ShopItem>
            </div>
        </div>
        <div class="app-init scroll-box scroll-content footer-hack" v-show="navListActiveIndex==3">
            <Swiper :list="bannerList03"></Swiper>

            <div class="shop-list-box clear">
                <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
                <ShopItem :list="shoplist03"></ShopItem>
            </div>
        </div>
        <div class="app-init scroll-box scroll-content footer-hack" v-show="navListActiveIndex==4">
            <Swiper :list="bannerList04"></Swiper>

            <div class="shop-list-box clear">
                <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
                <ShopItem :list="shoplist04"></ShopItem>
            </div>
        </div>
        <div class="app-init scroll-box scroll-content footer-hack" v-show="navListActiveIndex==5">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317010732422.png'" @click="$router.openPage('/detail/1003')" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/48ca6cfb19c45e7cbecbd8c34c757445.jpg'" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317012799998.png'" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317013522274.png'" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317005752430.png'" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317011947232.png'" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317014434073.png'" alt="">
        </div>
        <div class="app-init scroll-box scroll-content footer-hack" v-show="navListActiveIndex==6">
            <Swiper :list="bannerList06"></Swiper>

            <div class="shop-list-box clear">
                <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
                <ShopItem :list="shoplist06"></ShopItem>
            </div>
        </div>
        <div class="app-init scroll-box scroll-content footer-hack" v-show="navListActiveIndex==7">
            <Swiper :list="bannerList07"></Swiper>

            <div class="shop-list-box clear">
                <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
                <ShopItem :list="shoplist07"></ShopItem>
            </div>
        </div>
        <div class="app-init scroll-box scroll-content footer-hack" v-show="navListActiveIndex==8">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317154829739.png'" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317155627636.png'" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317160444789.png'" alt="">
            <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317161351928.png'" alt="">
        </div>
    </div>
</template>
<script>
    import Swiper  from '../../components/Swiper'
    import ShopItem from '../../components/ShopItem'

    export default {
        data(){
            return {
                bannerList : [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/01.png',
                        href: '/detail/1001'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/02.jpg',
                        href: '/detail/1002'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/03.jpg',
                        href: '/detail/1003'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/04.jpg',
                        href: '/detail/1004'
                    }
                ],
                shoplist : [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
                        title: '米家感应灯',
                        con: '举步之明，光明立现',
                        money: 49,
                        href: '/detail/1008'
                    }
                ],
                navList: [
                    {
                        name: '推荐'
                    },
                    {
                        name: '手机'
                    },
                    {
                        name: '智能'
                    },
                    {
                        name: '电视'
                    },
                    {
                        name: '电脑'
                    },
                    {
                        name: '全面屏'
                    },
                    {
                        name: '生活周边'
                    },
                    {
                        name: '盒子'
                    },
                    {
                        name: '艺术'
                    }
                ],
                navListActiveIndex: 0,

                bannerList01 : [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/1888a9f0a6ae807113cb428b9e01f5fe.jpg',
                        href: '/detail/1007'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213275295675.png',
                        href: '/detail/1009'
                    }
                ],
                shoplist01: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
                        title: '红米Note 4X 32GB',
                        con: '多彩金属 / 超长续航',
                        money: 899,
                        href: '/detail/1010'
                    }
                ],

                bannerList02 : [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213533255816.png',
                        href: '/detail/1011'
                    }
                ],
                shoplist02: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
                        title: '米家四位四控插线板',
                        con: '四位分控，随用随开',
                        money: 89,
                        href: '/detail/1012'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
                        title: '米家四位四控插线板',
                        con: '四位分控，随用随开',
                        money: 89,
                        href: '/detail/1012'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
                        title: '米家四位四控插线板',
                        con: '四位分控，随用随开',
                        money: 89,
                        href: '/detail/1012'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
                        title: '米家四位四控插线板',
                        con: '四位分控，随用随开',
                        money: 89,
                        href: '/detail/1012'
                    }
                ],

                bannerList03: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2bf70582edb45d83d7120a22c87200c9.jpg',
                        href: '/detail/1013'
                    }
                ],
                shoplist03: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
                        title: '小米电视4A 43英寸',
                        con: '全高清 HDR，64位处理器',
                        money: 1999,
                        href: '/detail/1004'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
                        title: '小米电视4A 43英寸',
                        con: '全高清 HDR，64位处理器',
                        money: 1999,
                        href: '/detail/1004'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
                        title: '小米电视4A 43英寸',
                        con: '全高清 HDR，64位处理器',
                        money: 1999,
                        href: '/detail/1004'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
                        title: '小米电视4A 43英寸',
                        con: '全高清 HDR，64位处理器',
                        money: 1999,
                        href: '/detail/1004'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
                        title: '小米电视4A 43英寸',
                        con: '全高清 HDR，64位处理器',
                        money: 1999,
                        href: '/detail/1004'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
                        title: '小米电视4A 43英寸',
                        con: '全高清 HDR，64位处理器',
                        money: 1999,
                        href: '/detail/1004'
                    }
                ],

                bannerList04: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316542272196.png',
                        href: '/detail/1014'
                    }
                ],
                shoplist04: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
                        title: '13.3"笔记本i5 独显',
                        con: '指纹解锁，全金属机身',
                        money: 5199,
                        href: '/detail/1014'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
                        title: '13.3"笔记本i5 独显',
                        con: '指纹解锁，全金属机身',
                        money: 5199,
                        href: '/detail/1014'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
                        title: '13.3"笔记本i5 独显',
                        con: '指纹解锁，全金属机身',
                        money: 5199,
                        href: '/detail/1014'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
                        title: '13.3"笔记本i5 独显',
                        con: '指纹解锁，全金属机身',
                        money: 5199,
                        href: '/detail/1014'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
                        title: '13.3"笔记本i5 独显',
                        con: '指纹解锁，全金属机身',
                        money: 5199,
                        href: '/detail/1014'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
                        title: '13.3"笔记本i5 独显',
                        con: '指纹解锁，全金属机身',
                        money: 5199,
                        href: '/detail/1014'
                    }
                ],

                bannerList06: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083831934.png',
                        href: '/detail/1015'
                    }
                ],
                shoplist06: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
                        title: '8H护颈乳胶枕 Z2',
                        con: '多重新科技  升级好睡眠',
                        money: 239,
                        href: '/detail/1016'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
                        title: '8H护颈乳胶枕 Z2',
                        con: '多重新科技  升级好睡眠',
                        money: 239,
                        href: '/detail/1016'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
                        title: '8H护颈乳胶枕 Z2',
                        con: '多重新科技  升级好睡眠',
                        money: 239,
                        href: '/detail/1016'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
                        title: '8H护颈乳胶枕 Z2',
                        con: '多重新科技  升级好睡眠',
                        money: 239,
                        href: '/detail/1016'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
                        title: '8H护颈乳胶枕 Z2',
                        con: '多重新科技  升级好睡眠',
                        money: 239,
                        href: '/detail/1016'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
                        title: '8H护颈乳胶枕 Z2',
                        con: '多重新科技  升级好睡眠',
                        money: 239,
                        href: '/detail/1015'
                    }
                ],

                bannerList07: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317121511939.png',
                        href: '/detail/1017'
                    }
                ],
                shoplist07: [
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png',
                        title: '小米影视会员卡',
                        con: '畅享海量片库',
                        money: 498,
                        href: '/detail/1018'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png',
                        title: '小米影视会员卡',
                        con: '畅享海量片库',
                        money: 498,
                        href: '/detail/1018'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png',
                        title: '小米影视会员卡',
                        con: '畅享海量片库',
                        money: 498,
                        href: '/detail/1018'
                    },
                    {
                        src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png',
                        title: '小米影视会员卡',
                        con: '畅享海量片库',
                        money: 498,
                        href: '/detail/1018'
                    }
                ]
            }
        },
        components:{
          Swiper, ShopItem
        },
        methods:{
            changeNav:function (index) {
                this.navListActiveIndex = index
            }
        }
    }

</script>
<style lang="sass">
    .scroll-content
        top: 2.5rem
        .tabA
            width: 25%
        .href
            width: 4.96rem
        .shop-list-box
            margin-top: 0.15rem
            background: #ffffff


</style>