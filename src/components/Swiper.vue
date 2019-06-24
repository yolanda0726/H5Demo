<template>
    <div class="swiper-container vue-swiper" ref="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                <a href="javascript:;" @click="item.href?$router.openPage(item.href):''"><img :src="item.src" :alt="item.alt||'img'+index"></a>
            </div>

        </div>

        <!--        如果需要分页器-->

        <div class="swiper-pagination" ref="pagination">

        </div>
    </div>
</template>


<script>

    import Swiper from '@/assets/swiper/swiper-3.4.2.min'
    import _ from 'lodash'


    var mySwiper = null;
    // export default{
    //     props: {
    //         list: {
    //             type: Array,
    //             default: function () {
    //                 return []
    //             }
    //         },
    //         config: {
    //             type: Object,
    //             default: function () {
    //                 return {
    //                     autoplay: 60000,
    //                     observer: true,
    //                     observeParents: true,
    //                     autoplayDisableOnInteraction: false
    //                 }
    //             }
    //         }
    //     },
    //
    //     mounted() {
    //         mySwiper = new Swiper (this.$refs.swiper, _.assign({
    //             pagination: this.$refs.pagination
    //         }, this.config))
    //     },
    //     watch: {
    //         list(){
    //             setTimeout(function () {
    //                 mySwiper.update();
    //             }, 10)
    //         }
    //     }
    // }

    export default{
        props: {
            list: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        config: {
            type: Object,
            default: function () {
                return {
                    autoplay: 6000,
                    observer: true,
                    observeParents: true,
                    autoplayDisableOnInteraction: false
                }
            }
        },

        mounted() {
            mySwiper =  new Swiper (this.$refs.swiper, _.assign({
                pagination: this.$refs.pagination
            }, this.config))

        },
        watch: {
            list() {
                setTimeout(function () {
                    mySwiper.update();
                },10)
            }

        }
    }

</script>

<style type="text/css">
    @import "../assets/swiper/swiper-3.4.2.min.css";

    .swiper-container img{
        width: 100%;
    }

    .vue-swiper .swiper-pagination-bullet{
        background-color: #fff;
    }
    .vue-swiper .swiper-pagination-white .swiper-pagination-bullet-active{
        background-color: #fff;
    }
</style>

