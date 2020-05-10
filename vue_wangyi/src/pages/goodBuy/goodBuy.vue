<template>
  <div class="goodBuy">
   
    <div class="header">
      <van-icon name="wap-home-o" size='30' color="#333"/>
      <p>值得买</p>
      <div>
      <van-icon name="search" size='30' color="#333" class="search"/>
      <van-icon name="logistics" size='30' color="#333"/>
      </div>
    </div>
    <div class="goodBuyscroll" ref="goodBuyscroll">
      <div class="goodBuyContainer">
          <div class="navWrap">
            <img src="../../static/images/topic_title_bg.png" alt="">
            <div class="title">
              <img src="../../static/images/topic_logo.png" alt="">
              <span>严选好物</span><span>用心生活</span>
            </div>
            <div class="navScroll" ref="navScroll">
                <div class="container" v-if="navList">
                  <div class="navItem" v-for="item in navList" :key="item.id">
                    <img :src="item.picUrl" alt="">
                    <p class="text1">{{item.mainTitle}}</p>
                    <p class="text2">{{item.viceTitle}}</p>
                  </div>
                </div>
                <div class="paginations">
                  <div class="pagination" v-for="item in paginationsList" :key="item" :class="{active:item === initIndex}"></div>
                </div>
            </div>
          </div>
          <div class="goodBuyListWrap">
          <GoodBuyList></GoodBuyList>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import http from 'http'
import { Icon } from 'vant';
import BScroll from 'better-scroll'
import GoodBuyList from 'components/GoodBuyList/GoodBuyList'

  export default {
    name:'goodBuy',
    data () {
      return {
        navList:[],
        
        paginationsList:[0,1,2,3,4,],
        initX:0,
        itemWidth:88,
        initIndex:0
      }
    },
    components: {
      [Icon.name]:Icon,
      "GoodBuyList":GoodBuyList
    },
    methods: {
       navScroll(){
            this.$nextTick(()=>{
                this.navScroll = new BScroll(this.$refs.navScroll,{
                    scrollX: true,
                    click: true,
                    probeType:3
                })
                this.navScroll.on('scrollEnd',({x,y})=>{
                    let index = Math.floor(Math.abs(x) /this.itemWidth)
                    this.initX = index * this.itemWidth
                    this.initIndex = index
                   
                   this.navScroll.scrollTo(-this.initX, y)

                })
            })
            },
          goodBuyscroll(){
            this.$nextTick(()=>{
                this.goodBuyscroll = new BScroll(this.$refs.goodBuyscroll,{
                    scrollY: true,
                    click: true
                })
            })
            },
       
    
    },
    async mounted () {
      let navData= await http.goodBuy.getGoodBuyNav()
      if(navData.code === "200") this.navList = navData.data.navList
     
      this.navScroll()
      this.goodBuyscroll()
    }
  }
</script>

<style lang="stylus" >
 .goodBuy
    width 100%
    height 100%
    .header
      height 100px
      width 100%
      box-sizing border-box
      padding 0 24px
      background #fff
      display flex
      align-items center
      justify-content space-between
      position relative
      top 0
      left 0
      z-index 99
      p
        font-size 36px
        line-height 100px
      .search
        margin-right 30px
    .goodBuyscroll
      height calc(100vh - 100px)
      .goodBuyContainer
        background #eee
        min-height 2000px
        .navWrap
          width 100%
          height 628px
          position relative
          img 
            height 528px
            width 100%
          .title
            position  absolute
            left 20px
            top 20px
            display flex
            img 
              height 68px
              width 130px
            span 
              font-size 30px
              display inline-block
              margin 26px 10px 0 
              color #ffffff
          .navScroll
            position absolute
            left 0
            top 100px
            width  710px
            height calc(628px - 100px)
            margin 0 20px
            box-sizing border-box
            background #ffffff
            border-radius 10px
            overflow hidden
            .container
                width 1400px
                height 80%
                display flex
                flex-wrap wrap
                padding  0 10px 32px
                .navItem
                  width 168px
                  height 200px
                  margin-top 28px
                  display flex
                  flex-direction column 
                  align-items center
                  margin-left 6px
                  img 
                    height 120px
                    width 120px
                  .text1
                    font-size 28px
                    color #333
                    margin 10px 0
                    font-weight 700
                  .text2
                    font-size 24px
                    color #999
                  
            .paginations
              height 32px
              width 710px
              position absolute
              left 0
              bottom 20px
              display flex
              justify-content center
              align-items flex-end
              .pagination
                width 40px
                height 4px
                background #d9d9d9
                &.active
                  background #dd1a21
        .goodBuyListWrap
            width 100%
            min-height 2000px
            position relative




              


          




</style>