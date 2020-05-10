<template>
 
    <div class="googBuyList" v-if="contentList">
        <waterfall :col='col'    :data="contentList" :width="itemWidth" :gutterWidth='gutterWidth'>
         <template >
            <div class="cell-item" v-for="item in contentList" :key="item.topicId">
              <!-- <div class="pic" :style="{backgroundImage:'url(' + item.topics[0].picUrl + ')'}"> -->
                <img :src="item.topics[0].picUrl + `?w=${item.topics[0].appBanWidth}&h=${item.topics[0].appBanHeight}`" :width="itemWidth" class="pic"/>
                <!-- </div> -->
              <div class="item-body">
                  <div class="item-desc">{{item.topics[0].title}}</div>
                  <div class="item-footer">
                    <div class="footer-left">
                         <img :src="item.topics[0].avatar" alt="" class="avatarImg">
                         <div class="name">{{item.topics[0].nickname}}</div>
                    </div>
                    <div class="footer-right">
                        <img src="../../static/images/eye.png" alt="" class="eye">
                        <div class="count">{{item.topics[0].readCount}}</div>
                    </div>
                  </div>
              </div>
            </div>
          </template >
        </waterfall>

    </div>
</template>

<script>
import Vue from 'vue'
import waterfall from 'vue-waterfall2';
Vue.use(waterfall);
import http from 'http'
    export default {
      name:"GoodBuyList",
        data () {
            return {
                contentList:[],
                col:2
            }
        },
        computed: {
          itemWidth(){  
            return 172.5 
          },
          gutterWidth(){
            return  10   
          }

        },
        methods: {
            
        },
        async mounted () {
            let listData= await http.goodBuy.getGoodBuyDatas()
            if(listData.code === "200") this.contentList = listData.data
             console.log(this.contentList)
        }
    }
</script>

<style lang="stylus">
  .googBuyList
    width 100%
    background #eee
    box-sizing border-box
    padding 30px 20px 30px 20px
    position relative
    .cell-item
      background #fff
      margin-bottom 20px
      .pic
       
       
        border-radius 15px 15px 0 0
      .item-body
        width 100%
        .item-desc
          font-size 28px
          padding 18px 16px 0
          color #333
        .item-footer
          width 100%
          display flex
          .footer-left
            display flex
            .avatarImg
              width 48px
              height 48px
              border-radius 50%
            .name
              font-size 24px
              color #7f7f7f
              margin-left 8px
          .footer-right
            display flex
            .eye
              width 32px
              height 32px
            .count
              font-size 24px
              color #7f7f7f
              margin-left 2px



    

</style>