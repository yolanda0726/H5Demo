<template>
    <div class="app-init">
        <Headerback title="分类"></Headerback>

        <div class="wrapper-box">
            <div class="left-menu scroll-box" ref="leftMenu">
                <ul v-for="(item,index) in dataItem" :key="index">
                    <li :class="{'active':index==currentActive}" @click="jumpToTarget(index)">{{item.name}}</li>
                </ul>
            </div>
            <div class="right-menu scroll-box" ref="rightMenu">
                <ul v-for="(item,index) in dataItem" :key="index">
                    <li class="item-classification">
                        <p class="title"><span>{{item.name}}</span></p>
                        <div class="clear">
                            <div class="production fl" v-for="(item_x,index) in item.children" :key="index"
                                 @click="$router.openPage(item_x.link)">
                                <p><img v-lazy="item_x.src" alt=""></p>
                                <p class="name">{{item_x.name}}</p>
                            </div>

                        </div>

                    </li>

                </ul>

            </div>
        </div>

    </div>
</template>
<script>
    import Headerback from '../../components/HeaderBeck'
    import _ from 'lodash'

    export default {
        data() {
            return {
                currentActive: 0,
                dataItem: [
                    {
                        name: '新品',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }, {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '手机',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '电视',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '电脑',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '家电',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '路由',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '智能',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '电源',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '耳机',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '音箱',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '礼品',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '生活',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '米粉卡',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    },
                    {
                        name: '零售店',
                        children: [
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            },
                            {
                                name: '小米5s',
                                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                                link: '/detail/1019'
                            }
                        ]
                    }
                ],
                rightOffset: []
            }
        },
        components: {
            Headerback
        },
        methods: {
            jumpToTarget: function (index) {
                var scrollTop = this.rightOffset[index]
                this.$refs.rightMenu.scrollTop = scrollTop;

                setTimeout(() => {
                    this.currentActive = index
                }, 10)

            }
        },
        mounted() {
            setTimeout(() => {
                _.forEach(this.$refs.rightMenu.querySelectorAll('.item-classification'), (value, key) => {
                    this.rightOffset.push(value.offsetHeight * key)
                })


                var mySort = this.rightOffset;

                this.$refs.rightMenu.addEventListener('scroll', () => {

                    var eScrollTop = this.$refs.rightMenu.scrollTop;

                    for (var indexer = 0; indexer < mySort.length; indexer++) {
                        if (eScrollTop > mySort[indexer]) {
                            this.currentActive = indexer;
                        }
                    }

                })


            }, 100)

        }
    }

</script>
<style lang="sass">
    @import "../../assets/sass/util"
    .wrapper-box
        background-color: #ffffff
        position: absolute
        top: $backHeaderHeight
        left: 0
        right: 0
        bottom: $footerHeight

        .left-menu
            position: absolute
            width: getIphonese(133px)
            bottom: 0
            top: 0
            left: 0
            border-right: 1px solid #efefef
            /*overflow-x: hidden*/
            @include box-sizing
            text-align: center

            li
                margin-top: getIphonese(56px)
                text-align: center
                -webkit-transition: all .1s ease
                transition: all .1s ease

            li:last-child
                margin-bottom: getIphonese(56px)

            li.active
                color: #fb7d34
                transform: scale(1.2)
                border-left: 8px solid #fb7d34

        .right-menu
            position: absolute
            left: getIphonese(133px)
            top: 0
            bottom: 0
            right: 0

            .item-classification
                .title
                    text-align: center
                    margin-top: 0.8rem
                    margin-bottom: 0.2rem

                    span
                        position: relative

                        &:after, &:before
                            display: inline-block
                            width: getIphonese(34px)
                            height: 1px
                            top: 50%
                            background-color: #e0e0e0
                            position: absolute
                            content: ''

                        &:after
                            left: getIphonese(-50px)

                        &:before
                            right: getIphonese(-50px)

                .production
                    width: 33.3%
                    text-align: center

                    img
                        margin-top: 0.2rem
                        width: getIphonese(80px)
                        padding-bottom: 0.1rem

                    .name
                        @include f12px
                        color: #757575
                        margin-bottom: 0.1rem


</style>