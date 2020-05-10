<template>
    <div class="categoryHotList">
        <div class="top">
            <div class="left main">
            <p>{{CategoryHotList[0].categoryName}}</p>
            <img :src="CategoryHotList[0].picUrl" alt="">
            </div>
            <div class="right main">
            <p>{{CategoryHotList[1].categoryName}}</p>
                <img :src="CategoryHotList[1].picUrl" alt="">
            </div>
        </div>
        <div class="bottom">
            <div class="cateItem"  v-for="(item,index) in newCategoryHotList" :key="index" >
                <div>
                    <p>{{item.categoryName}}</p>
                    <img :src="item.picUrl" alt="">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        props:['CategoryHotList'],
        computed: {
             newCategoryHotList(){
            return this.CategoryHotList.filter((item,index)=>{
              return index !== 0 &&  index !== 1
            })
        }
        }
       
    }
</script>

<style lang="stylus" scoped>
    .categoryHotList
        width 100%
        .top
            display flex
            width 100%
            height 200px
            .main
                width 50%
                margin 0 10px 10px 0
                display flex
                justify-content space-between
                p
                    font-size 27px
                    color #333
                    line-height 50px
                    align-self center
                    margin-left 24px
                    &:after
                        height 4px
                        width 30px
                        background #333
                        content ""
                        display block
                img 
                    width 200px
                    height 200px
            .left
                background #f9f3e4
            .right
                background #ebeff6
        .bottom
            display flex
            flex-wrap wrap
            .cateItem
                
                width 25%
                padding  0 10px 10px 0
               
                box-sizing border-box
                div
                    background #f5f5f5
                    p
                        font-size 24px
                    img 
                        height 120px
                        width 120px



</style>