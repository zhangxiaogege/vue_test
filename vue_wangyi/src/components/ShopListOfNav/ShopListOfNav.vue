<template>
    <div class="shopListOfNav" v-if="shopList">
       <div class="shopItem" v-for="item in shopList" :key="item.id">
           <img :src="item.listPicUrl" alt="">
           <div class="text">{{item.simpleDesc}}</div>
           <div class="shopName">{{item.name}}</div>
           <span class="shopPrice">￥{{item.retailPrice}}</span>
       </div>
    </div>
</template>

<script>
    export default {
        props:['shopList']
    }
</script>

<style lang="stylus" scoped>
    .shopListOfNav
        width 100%
        padding 0 20px
        box-sizing border-box
        display flex
        flex-wrap wrap
        justify-content space-between
        .shopItem
            width 345px
            img 
                width 345px
                height 345px
            .text
                width 100%
                height 48px
                background #f1ece2
                color #9f8a60
                padding 6px 10px
                font-size 24px
                box-sizing border-box
                line-height 48px
            .shopName
                font-size 28px
                margin-top 16px
                color #333
            .shopPrice
                color #dd1a21
                font-size 32px
                display inline-block
                margin 20px 0

</style>