<template>
  <div class="category" v-if="cateNavList && cateLists">
    <div class="header">
      <div class="inputWrap">
          <span class="input"><van-icon name="search" class="icon" @click="toSearch"/> 搜索商品</span>
      </div>
    </div>
    <div class="container">
        <div class="leftNavWrap">
          <div class="leftContainer">
            <div class="navItem"  v-for="item in cateNavList" :key="item.id"
            @click="changeNavId(item.id)"
            :class="{active:item.id===navId}"
            >
              {{item.name}}
            </div>
          </div>
        </div>
        
          <rightCateList :cateNavObj="cateNavObj" :navId ='navId'></rightCateList>
       
    </div>
  </div>
</template>

<script>
import {Icon} from 'vant';
import {mapState,mapActions} from 'vuex'
import {GETCATENAVDATAS} from 'store/mutaions_type'
import rightCateList from 'pages/rightCateList/rightCateList'
  export default {
    data () {
      return {
        navId:0
      }
    },
    components: {
      [Icon.name] : Icon,
      "rightCateList":rightCateList
    },
    computed: {
      ...mapState({cateNavList : state => state.category.cateNavList,
                  cateLists : state => state.category.cateLists,
      }),
      cateNavObj(){
        return this.cateNavList.find((item)=>{
           return item.id === this.navId
        })
      }


    },
    methods: {
      ...mapActions([GETCATENAVDATAS]),
      changeNavId(id){
        this.navId = id
      },
      //跳转至搜索页面
      toSearch(){
        this.$router.push({ path: 'search' })
      }
      
    },
    async mounted () {
      await this[GETCATENAVDATAS]()
      this.navId=this.cateNavList && this.cateNavList[0].id
    }

  }
</script>

<style lang="stylus" scoped>
.category
    width 100%
    height 100%
    .header
        background #fff
        position relative
        padding 10px 30px
        z-index 99
        width 100%
        .inputWrap
            width 690px
            height 55px
            background #ededed
            text-align center
            line-height 55px
            color #666
           
            border-radius 5px
            .icon
              font-size 40px
              vertical-align middle
      .container
          width 100%
          height calc(100vh - 75px)
          display flex
          .leftNavWrap
            width 20%
            height 100%
            box-sizing border-box
            border-right  1px solid  #eee 
            .leftContainer
              width 100%
              height 100%
              .navItem
                position relative
                font-size 26px
                text-align center
                height 80px
                line-height 80px
                &.active
                  color #ab2b2b
                  &:after
                    position absolute
                    left 2px
                    top 20%
                    content ''
                    width 6px
                    height 60%
                    background #ab2b2b
      


</style>