<template>
    <div class="app-init footer-hack scroll-box">
        <div class="user-info">
            <img class="avatar" src="http://qiniu.verydog.cn/show.liluo.cc/normal-face.png" alt="">
            <span class="loginReg">登录 /  注册</span>
        </div>
<!--        我的订单-->
        <div>
            <div class="p_item clear"  @click="$router.openPage('/pay')">
                <span class="fl">我的订单</span>
                <span class="iconfont icon-you fr"></span>
            </div>
            <div class="tab_order clear">
                <div class="item fl" @click="$router.openPage('/pay')">
                    <p class="icon">
                        <span class="iconfont icon-qianbao"></span>
                    </p>
                    <p class="name">待付款</p>
                </div>
                <div class="item fl" @click="$router.openPage('/pay')">
                    <p class="icon">
                        <span class="iconfont icon-daishouhuo"></span>
                    </p>
                    <p class="name">待收货</p>
                </div>
                <div class="item fl" @click="$router.openPage('/pay')">
                    <p class="icon">
                        <span class="iconfont icon-buoumaotubiao46"></span>
                    </p>
                    <p class="name">退换修</p>
                </div>
            </div>
        </div>

        <div class="setting-item">
            <span class="iconfont icon-huiyuan icon" style="color: #FDBF2D;"></span>
            <div class="p_item clear" >
                <span class="fl">会员福利</span>
                <span class="iconfont icon-you fr"></span>
            </div>

        </div>
    </div>
</template>
<script>

</script>
<style lang="sass">
    @import "../../assets/sass/util"
    .user-info
        height: getIphonese(142px)
        background: #f37d0f  url(http://qiniu.verydog.cn/show.liluo.cc/bg.63c8e19.png) repeat top center
        background-size: 7.7rem
        padding: 0 getIphonese(30px)
        @include box-sizing
        padding-top: getIphonese(28px)
        padding-bottom: getIphonese(28px)
        .avatar
            width: 1.33rem
            height: 1.33rem
            border-radius: 100%
            border: 3px solid hsla(0,0%,100%,.4)
            @include box-sizing
        .loginReg
            color: #ffffff
            @include f12px
            line-height: 1.33rem
            padding-left: 0.2rem

    .p_item
        background-color: #fff
        border-bottom: 1px solid #D9D9D9
        padding: 0 getIphonese(26px)
        span
            line-height: getIphonese(80px)

    .p_item:active
        background-color: #eee

    .tab_order
        background-color: #ffffff
        padding-bottom: 0.26rem
        .item
            width: 33.3%
            text-align: center
            .icon
                font-size: 0.6rem
                color: #A4A4A4
                padding-top: 0.36rem
            .name
                @include f12px
                padding-top: 0.1rem


    .setting-item
        margin: 0.26rem 0
        background-color: #ffffff
        .icon
            font-size: 0.65rem
            width: 0.8rem
            display: inline-block
            text-align: center
            float: left
            margin-left: 0.5rem
            line-height: getIphonese(80px)
        .p_item
            margin-left: getIphonese(100px)


</style>