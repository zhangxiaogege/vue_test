<template>
	<div class="cartContainer">
		<div class="cartTitle">购物车</div>
        <div class="cartHeader">
          <span>30天无忧退货</span>
          <span>48小时快速退货</span>
          <span>满99元免邮费</span>
        </div>
    <div class="contentContainer">
        <div class="initContent">
          <img class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imagediv&type=webp"/> 
          <button >登录</button>
        </div>
    </div>
	</div>
</template>

<script>
	
	export default {
	
	
	}
</script>

<style lang="stylus" scoped>
  .cartContainer
      background #f4f4f4
      height 100%
      .cartTitle
          font-size 32px
          line-height 80px
          margin-left 30px
          background #fff
      .cartHeader
          display flex
          background #eee
          span
              width 33.333%
              height 80px
              line-height 80px
              text-align center
              font-size 24px
              color #666
      .contentContainer
          .initContent
              display flex
              flex-direction column
              align-items center
              margin-top 400px
              .cartImg
                  height 248px
                  width 248px
              button
                  width 480px
                  height 92px
                  background #DD1A21
                  color #fff
                  font-size 32px
                  line-height 92px
                  margin-top 20px
              .addMore
                  text-align center
                  font-size 26px
                  color #7f7f7f
                  line-height 60px
        
</style>
