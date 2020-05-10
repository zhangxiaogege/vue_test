<template>
    <div class="contentScroll" ref="cateGoryScroll">
        <div class="cateGoryListOfNav" v-if="itemObj">
       <!-- 轮播 -->
            <van-swipe  class="swiper"
            autoplay='3000'
            loop
            :show-indicators =false
            >
                <van-swipe-item class="swiperItem" v-for="(item,index) in itemObj.category.bannerUrlList" :key="index">
                    <img :src="item" alt="">
                </van-swipe-item>
            </van-swipe>
        <!-- 商品列表 -->
            <div class="shopList">
               <div class="shopHeader">
                   <p class="top">{{itemObj.category.name}}</p>
                    <p class="bottom">{{itemObj.category.frontDesc}}</p>
               </div>
               <ShopListOfNav :shopList = 'itemObj.itemList'></ShopListOfNav>
            </div>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {GETNAVCATELISTDATA} from 'store/mutaions_type'
import ShopListOfNav from 'components/ShopListOfNav/ShopListOfNav'
    export default {
        props:["navId"],
        components: {
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            "ShopListOfNav":ShopListOfNav
        },
        computed: {
            ...mapState({pageListOfNav:state=>state.home.pageListOfNav}),
            itemObj(){
               return this.pageListOfNav.find((item)=>{
                    return item.category.parentId === this.navId
                })

            }
        },
        methods: {
            ...mapActions([GETNAVCATELISTDATA]),
             //内容区scroll
           cateGoryScroll(){
                this.$nextTick(()=>{
                this.cateGoryScroll = new BScroll(this.$refs.cateGoryScroll,{
                    scrollY: true,
                    click: true
                })
                })
            },
            refresh(){
               
                this.cateGoryScroll.scrollTo(0,0)
                this.cateGoryScroll.refresh()
               
            }
        },
        watch: {
            navId:'refresh'
              
        },
        async mounted () {
            await this[GETNAVCATELISTDATA]()
            this.cateGoryScroll()
            
        }
    }
</script> 

<style lang="stylus" scoped>
.contentScroll   
    height calc(100vh - 150px)
    .cateGoryListOfNav
        background #eeeeee
        width 100%
        .swiper
            position relative
            width 100%
            height 300px
            .swiperItem
                width 100%
                height 100%
                img 
                    width 100%
                    height 300px
        .shopList
            background #fff
            margin-top 30px
            .shopHeader
                width 100%
                height 120px
                display flex
                flex-direction column
                justify-content center
                .top
                    text-align center
                    font-size 32px
                    color #333
                .bottom
                    text-align center
                    font-size 24px
                    margin-top 16px
                    color #999



</style>