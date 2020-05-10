<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <img src="../../static/images/logo.png" alt="">
      <div class="inputWrap" @click="toSearch">
        <span class="input"><van-icon name="search" class="icon" /> 搜索商品</span>
      </div>
      <div class="login">登录</div>
    </div>
    <!-- 导航 -->
    <div class="navScroll" ref="navScroll">
      <div class="navScrollList" ref="navScrollList">
        <div class="navItemWrap recommendItemWrap" @click="handleNav(0,0)">
          <div class="navItem "  :class="{active: navId === 0}">推荐</div>
        </div>
        <div v-for="(navItem,index) in navList" :key="navItem.id"
          class="navItemWrap"
          @click="handleNav(navItem.id,index+1)"
          >
          <div class="navItem"  :class="{active: navId === navItem.id}">
            {{navItem.name}}
          </div>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
   
      <Recommend v-if="navId===0"></Recommend>
      <CateGoryListOfNav v-else  :navId='navId'></CateGoryListOfNav>
    
  </div>
</template>

<script>
import {Icon} from 'vant'
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {GETINDEXDATA,GETNAVDATA} from 'store/mutaions_type'
import  Recommend from 'components/Recommend/Recommend'
import CateGoryListOfNav from 'components/CateGoryListOfNav/CateGoryListOfNav'
  export default {
    data () {
      return {
        navId:0
      }
    },
    components: {
      [Icon.name] : Icon,
      "Recommend":Recommend,
      "CateGoryListOfNav":CateGoryListOfNav
    },
    computed: {
      ...mapState({homeData:state=> state.home.homeData,
                   navList:state=>state.home.navList
      })
    },
    methods: {
      ...mapActions([GETINDEXDATA,GETNAVDATA]),
      handleNav(id,index){
        this.navId = id
        let navScrollList = this.$refs.navScrollList
        let lis = navScrollList.children
        // console.log(lis)
        this.navScroll.scrollToElement(lis[index], 1000)
      },
      //导航scroll
      navScroll(){
        this.$nextTick(()=>{
          this.navScroll = new BScroll(this.$refs.navScroll,{
            scrollX: true,
            click: true,
          })
        })
      },
      //跳转至搜索页面
      toSearch(){
        this.$router.push({ path: 'search' })
      }
     
    },
    async mounted () {
      await this[GETINDEXDATA](),
      await this[GETNAVDATA](),
      this.navScroll()
     
     
    },
    // updated () {
    //   
    // }

  }
</script>

<style lang="stylus" scoped>
  .home
    width 100%
    height 100%
    overflow hidden
    .header
      height 90px
      width 100%
      padding  0 30px
      display flex
      align-items center
      position relative
      z-index 90 
      background #fff
      img 
        width 138px
        height 40px
        margin-right 20px
      .inputWrap
        width 440px
        height 55px
        background #ededed
        text-align center
        line-height 55px
        color #666
        .icon
          font-size 40px
          vertical-align middle
      .login
        width 74px
        height 40px
        color  #dd1a21
        margin-left 15px
        border 2px solid #dd1a21
        text-align center
        line-height 40px
        border-radius 5px
    .navScroll
      height 60px
      width 100%
      margin-bottom 3px
      position relative
      z-index 90 
      background #fff
      .navScrollList
        white-space nowrap
        font-size 28px
        display inline-block
        .navItemWrap
          display inline-block
          width 130px
          height 60px
          padding  0 20px
          .navItem
            display inline-block
            width 100%
            height 100%
            text-align center
            line-height 60px
            color #333
            &.active
              border-bottom 4px solid  #dd1a21 
        .recommendItemWrap
          width 100px
    

          


</style>