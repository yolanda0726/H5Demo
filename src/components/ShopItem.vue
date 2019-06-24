<template>
    <div>
        <div class="shop-box-item fl" v-for="(target, index) in list" :key="index" @click="$router.openPage(target.href)">
            <img v-lazy="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
                <span class="small">￥</span> {{ target.money }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            list:{
                type:Array,
                default:function () {
                    return[]
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "../assets/sass/util.sass"

    .shop-box-item
        width: 50%
        margin-bottom: 0.24rem
        padding-left: 0.03rem
        @include box-sizing

    .shop-box-item img
        min-height: 4.96rem

    .shop-box-item p
        padding: 0 0.2rem

    .shop-box-item p.title
        padding-top: 0.2rem
        font-size: .36rem
        color: rgba(0, 0, 0, .87)

    .shop-box-item p.con
        margin-top: .06rem
        font-size: .32rem
        line-height: .38rem
        color: rgba(0, 0, 0, .54)

    .shop-box-item p.money
        font-size: .38rem
        color: #ea625b
        padding-top: 0.05rem
    .shop-box-item p.money .small
        font-size: 0.3rem

</style>