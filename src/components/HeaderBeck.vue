<template>
    <div class="header-back" :class="{'active':active}">
        <p>{{title}}</p>
        <span class="iconfont icon-backer myicon back" @click="$router.go(-1)"></span>
        <span class="iconfont icon-sousuo-copy myicon search" @click="$router.openPage('search')"></span>
    </div>
</template>
<script>
    export default{
        props:{
            title:{
                type:String,
                default:'标题'
            }
        },
        data(){
            return {active: false}
        },
        mounted() {
            setTimeout( ()=> {
                this.active = true;
            },10)
        }

    }

</script>

<style lang="sass">
    @import "../assets/sass/util"
    .header-back.active
        transform: translateY(0%)
    .header-back
        height: $backHeaderHeight
        line-height: $backHeaderHeight
        background: #f2f2f2
        position: relative
        text-align: center
        color: #666
        @include f14px
        /*padding: getIphonese(30px) 0*/
        @include ani01-transform
        transform: translateY(-100%)
        .myicon
            position: absolute
            top: 0
            line-height: $backHeaderHeight
            color: #919191
            font-size: 0.58rem
        .back
            left: 0.4rem
        .search
            right: 0.4rem



</style>