<template>
 <div class="contentScroll" v-if="homeData" ref="recommendScroll">
    <div class="recommend" >
        <!-- 轮播 -->
            <van-swipe  class="swiper"
            autoplay='3000'
            loop
            :show-indicators =false
            >
                <van-swipe-item class="swiperItem" v-for="item in homeData.focusList" :key="item.id">
                    <img :src="item.picUrl" alt="">
                </van-swipe-item>
            </van-swipe>
        
            <!-- 轮播下方的内容 --> 
            <div class="textContent">
                <div class="policy" v-for="(item,index) in (homeData.policyDescList)" :key="index">
                    <img :src="item.icon" alt="">
                    <span>{{item.desc}}</span>
                </div>
            </div>
            <!-- 列表 -->
            <div class="kinkongList" v-if="homeData.kingKongModule">
                <div class="kinkongItem" v-for="(item,index) in (homeData.kingKongModule.kingKongList)" :key="index">
                    <img :src="item.picUrl" alt="">
                    <div>{{item.text}}</div>
                </div>
            </div>
            <!-- 广告图片 -->
            <div class="advertising">
                <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
            </div>
            <div class="floor" v-if="homeData.categoryHotSellModule">
                <!-- 新人专享礼 -->
                <div class="activity">
                    <div class="title"><span></span><p>新人专享礼</p><span></span></div>
                    <div class="content">
                        <div class="left">
                            <p>新人专享礼包</p>
                            <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                        </div>
                        <div class="right">
                            <div  class="rightItem " :class="'rightItem'+index"    v-for="(item,index) in homeData.indexActivityModule" :key="index">
                                <p>{{item.title}}</p>
                                <span>{{item.tag}}</span>
                                <img :src="item.picUrl" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="floorItem">
                    <div class="itemTitle">{{homeData.categoryHotSellModule.title}}</div>
                    <CategoryHotList :CategoryHotList='homeData.categoryHotSellModule.categoryList'></CategoryHotList>
                </div>
            </div>
        
    </div>
 </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import CategoryHotList from 'components/CategoryHotList/CategoryHotList'
    export default {
        data () {
            return {
               
            }
        },
        components: {
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            "CategoryHotList":CategoryHotList
        },
        computed: {
           ...mapState({homeData:state=> state.home.homeData
             }),
       
        },
        methods: {
             //内容区scroll
            recommendScroll(){
                this.$nextTick(()=>{
                this.recommendScroll = new BScroll(this.$refs.recommendScroll,{
                    scrollY: true,
                    click: true
                })
                })
            }
        },
        mounted () {
             this.recommendScroll()
        }

       
          
    }
</script>

<style lang="stylus" scoped>
.contentScroll   
    height calc(100vh - 150px)
    .recommend
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
        .textContent
            width 100%
            height 72px
            display flex
            justify-content space-around
            align-items center
            .policy
                display flex
                align-items center
                img 
                    width 32px
                    height 32px
                    margin-right 10px
                span  
                    font-size 24px
        .kinkongList       
            width 100%
            height 340px
            display flex
            flex-wrap wrap
            .kinkongItem
                display flex
                flex-direction column
                align-items center
                width 20%
                img 
                    height 110px
                    width 110px 
                    margin-bottom 20px
        .advertising
            width 100%
            height 240px
            img 
                width 100%
                height 100%
        .floor
            background #eee
            overflow hidden
            height 10000px
            .activity
                width 100%
                margin-top 20px
                background-color #fff
                padding  0   30px
                box-sizing border-box
                height 560px
                overflow hidden
                .title
                    width 100%
                    height 90px
                    display flex
                    justify-content center
                    font-size 32px
                    align-items center
                    color #333
                    span 
                        width 30px
                        height 4px
                        background  #666
                        margin 0 10px
                .content
                    width 100%
                    display flex
                    height 434px
                    box-sizing border-box
                   .left
                        width 50%
                        height 434px
                        background #F9E9CF
                        display flex
                        flex-direction column
                        p
                            font-size 32px
                            padding 30px 0 0 30px
                        img 
                            width 258px
                            height 258px
                            align-self center
                            margin-top 40px
                    .right
                        width 50%  
                        height 434px
                        .rightItem
                            position relative
                            height 50%
                            width 100%
                            box-sizing border-box
                            margin-left 6px
                            padding 20px 30px
                            background  #F9E9CF
                            p
                                font-size 32px
                                color #333
                            span 
                                font-size 24px
                                line-height 50px
                                color #7f7f7f
                            img 
                                width 200px
                                height 200px
                                position absolute
                                bottom 10px
                                right 10px
                        .rightItem1
                            margin-top 6px
                            span 
                                background #cbb693
                                color #ffffff
                                padding 5px  5px 0 5px
            .floorItem
                width 100%
                margin-top 20px
                background-color #fff
                padding  0   30px
                box-sizing border-box
                .itemTitle
                    width 100%
                    height 100px
                    color #333
                    font-size 32px
                    line-height 100px


</style>