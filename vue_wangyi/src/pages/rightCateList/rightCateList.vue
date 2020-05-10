<template>
    <div class="rigthScroll" ref="rigthScroll">
        <div class="rightContainer" >
            <div class="containerWrap" v-if="cateNavObj">
            <img  :src="cateNavObj.bannerUrl" alt="">
            <div class="content" v-if="cateObj">
                <div class="wrap" v-if="cateObj.categoryList">
                    <div class="item" v-for="item in cateObj.categoryList" :key="item.id">
                        <img :src="item.bannerUrl" alt="">
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <div class="wrap" v-if="cateObj.subCateList">
                    <div class="item" v-for="item in cateObj.subCateList" :key="item.id">
                        <img :src="item.wapBannerUrl" alt="">
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import BScroll from 'better-scroll'
import {GETCATELISTS} from 'store/mutaions_type'

export default {
    props:['cateNavObj','navId'],
    computed: {
        ...mapState({cateLists : state => state.category.cateLists}),
        cateObj(){
            return this.cateLists.find((item)=>{
                return item.id === this.navId
                })
            }
    },
    methods: {
        ...mapActions([GETCATELISTS]),
        rigthScroll(){
            this.$nextTick(()=>{
                this.rigthScroll = new BScroll(this.$refs.rigthScroll,{
                    scrollY: true,
                    click: true
                })
            })
            },
        refresh(){   
            this.rigthScroll.scrollTo(0,0)
            this.rigthScroll.refresh()
           }
       
    },
    watch: {
        navId:'refresh'
            
    },
    async mounted () {
        await this[GETCATELISTS]()
        this.rigthScroll()
    }
}
</script>

<style lang="stylus" scoped>
.rigthScroll
    width 80%
    height 100%
    padding 20px 40px 120px
    box-sizing border-box
    .rightContainer
        width 100%
        img
            height 200px
            width 100% 
        .content
            .wrap
                display flex
                justify-content space-between
                flex-wrap wrap
                &:after
                    content ""
                    display block
                    width 144px

                .item
                    img 
                        height 144px
                        width 144px
                    p
                        font-size 24px
                        color #333
                        height 72px
                        width 144px
                        text-align center
                
</style>