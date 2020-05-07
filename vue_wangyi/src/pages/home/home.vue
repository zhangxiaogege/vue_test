<template>
  <div class="home">
    <div class="header">
      <img src="../../static/images/logo.png" alt="">
      <div class="inputWrap">
        <span class="input"><van-icon name="search" class="icon" /> 请输入关键字</span>
      </div>
      <div class="login">登录</div>
    </div>
    <div class="navScroll" ref="navScroll">
      <div class="navScrollList">
        <div class="navItem recommend" @click="handleNav(0)" :class="{active: navId === 0}">推荐</div>
        <div v-for="navItem in navList" :key="navItem.id"
        class="navItem"
        :class="{active: navId === navItem.id}"
        @click="handleNav(navItem.id)"
        >{{navItem.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from 'vant'
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {GETINDEXDATA,GETNAVDATA} from 'store/mutaions_type'
  export default {
    data () {
      return {
        navId:0
      }
    },
    components: {
      [Icon.name] : Icon
    },
    computed: {
      ...mapState({homeData:state=> state.home.homeData,
                   navList:state=>state.home.navList
      })
    },
    methods: {
      ...mapActions([GETINDEXDATA,GETNAVDATA]),
      handleNav(id){
        this.navId = id
      },
      //导航scroll
      navScroll(){
        this.$nextTick(()=>{
          this.navScroll = new BScroll(this.$refs.navScroll,{
            scrollX: true,
            click: true
          })
        })
      }
    },
    async mounted () {
      await this[GETINDEXDATA](),
      await this[GETNAVDATA](),
      this.navScroll()
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    width 100%
    height 100%
    overflow hidden
    .header
      height 90px
      width 750px
      padding  0 30px
      display flex
      align-items center
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
      .navScrollList
        white-space nowrap
        font-size 28px
        display inline-block
        .navItem
          display inline-block
          width 130px
          height 60px
          text-align center
          line-height 60px
          color #333
          margin-left 30px
          &.active
            border-bottom 4px solid  #dd1a21 
        .recommend
          width 80px
         

          


</style>