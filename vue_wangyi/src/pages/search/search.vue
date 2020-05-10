<template>
    <div class="searchWrap">
        <div class="searchContainer" >
            <div class="searchIput" v-if="initSearchData.defaultKeyword">
                <form action="/">
                    <van-search class="input"
                        v-model="value"
                        show-action
                        :placeholder="initSearchData.defaultKeyword.keyword"
                        @input="onInput(value)"
                        @search="onSearch(value)"
                        @cancel="onCancel"
                    />
                </form>
                <div class="currentSearchData" v-if="currentSearList">
                    <div class="dataItem" v-for="(item,index) in currentSearList" :key="index">
                        <span>{{item}}</span>
                        <van-icon name="arrow"  class="icon"/>
                    </div>
                </div>
            
            </div> 
            <div class="searchContent" v-if="initSearchData.hotKeywordVOList">
                <div class="searchHistory" v-if="searchHistory.length>0">
                    <div class="textTitle">历史记录</div>
                    <van-icon name="delete"  class="delete" @click="clearHistory"/>
                    <div class="contenItem" v-for="(item,index) in searchHistory" :key="index">
                        {{item}}
                    </div>
                </div>
                <div class="textTitle">热门搜索</div>
                <div class="contenItem" v-for="(item,index) in initSearchData.hotKeywordVOList" :key="index"
                :class="{active:item.extra}"
                >
                    {{item.keyword}}
                </div>
            </div>

    </div>
    </div>
</template>

<script>
import { Search } from 'vant';
import { Icon } from 'vant'
import http from 'http'
    export default {
        name:"search",
        data () {
            return {
                value:'',
                initSearchData:{},
                currentSearList:[],
                searchHistory:[]
            }
        },
        components: {
            [Search.name]:Search,
            [Icon.name]:Icon
        },
        methods: {
            async repSearchData(value){
                let getSearchData= await http.goodBuy.getSearchData({keywordPrefix:value})
                    if(getSearchData.code === "200") this.currentSearList = getSearchData.data
            },
            onInput(value){
                clearTimeout(this.timer)
                this.timer = setTimeout(()=>{
                    this.repSearchData(value)
                }, 500)

           },
            onSearch(value){
                this.repSearchData()
                this.searchHistory.unshift(value) 
            },
            onCancel(){
                this.$router.go(-1)
            },
            clearHistory(){
                this.searchHistory=[]
            }

        },
        async mounted () {
            let initData= await http.goodBuy.getSearchInitData()
            if(initData.code === "200") this.initSearchData = initData.data
             
        }
    }
</script>

<style lang="stylus" scoped>
.searchWrap
    background #eee
    height 100%
    width 100%
    .searchContainer
        background #fff
        padding 0 30px 30px
        .searchIput
            width 100%
            height 88px
            box-sizing border-box
            position relative
            .van-cell
                height 56px
                width 600px
                background #f4f4f4
                
                .van-icon 
                    font-size 50px !important 
                .van-cell__value 
                    height 40px
                    .van-field__control
                        font-size 50px !important 
                        line-height 56px
            .currentSearchData
                width 750px
                background #eeeeee
                position absolute
                top 88px
                left -30px
                .dataItem
                    height 104px
                    background #ffffff
                    font-size 28px
                    color #333
                    line-height 104px    
                    padding 0 30px
                    display flex
                    justify-content space-between       
        .searchContent
            position relative
            .textTitle
                font-size 30px
                color #999
                height 90px
                line-height 90px
            .contenItem
                display inline-block
                font-size 24px
                padding 10px 15px
                margin 0 32px 32px 0
                color #333
                border-radius 4px
                border 2px solid #999
                font-weight 400
                &.active
                    border 2px solid #dd1a21
                    color #dd1a21
            .delete
                position absolute
                right 20px
                top 20px
                font-size 40px



            
           
</style>