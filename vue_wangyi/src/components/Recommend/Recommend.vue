<template>
    <div class="recommend" >
        <!-- 轮播 -->
            <van-swipe  class="swiper"
            autoplay='3000'
            loop
            :show-indicators =false
            >
                <van-swipe-item class="swiperItem">
                    <img src="https://yanxuan.nosdn.127.net/31b0c2a0424fe7b152950fa0ed53f8b6.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
                </van-swipe-item>
                <van-swipe-item class="swiperItem">
                    <img src="https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
                </van-swipe-item>
                <van-swipe-item class="swiperItem">
                    <img src="http://yanxuan-miaobi.nos-jd.163yun.com/3988777_1_6_wap_ac032a0fccc1195727761846263f20ba.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
                </van-swipe-item>
                <van-swipe-item class="swiperItem">
                    <img src="https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
                </van-swipe-item>
                <van-swipe-item class="swiperItem">
                    <img src="https://yanxuan.nosdn.127.net/6569149eeece0e39b9b38554570235da.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
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
            <div class="kinkongList">
                <div class="kinkongItem" v-for="(item,index) in (homeData.kingKongModule.kingKongList)" :key="index">
                    <img :src="item.picUrl" alt="">
                    <div>{{item.text}}</div>
                </div>
            </div>
            <!-- 广告图片 -->
            <div class="advertising">
                <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
            </div>
            <div class="floor">
                <!-- 新人专享礼 -->
                <div class="activity">
                    <div class="title"><span></span><p>新人专享礼</p><span></span></div>
                    <div class="content">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>

            </div>
        
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import {mapState} from 'vuex'
    export default {
        data () {
            return {
               
            }
        },
        components: {
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        },
        computed: {
           ...mapState({homeData:state=> state.home.homeData
        })
        },
       
          
    }
</script>

<style lang="stylus" scoped>
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
            .activity
                width 100%
                margin-top 20px
                background-color #fff
                pading 0 30px
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
                    background-color pink 
                    
</style>