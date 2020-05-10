<template>
  <div class="app">
    <router-view></router-view>
    <van-tabbar 
    v-show="$route.meta.showTabBar"
    class="tabbar" 
    v-model="active" 
    active-color="#D43C33" 
    inactive-color="#555"
    @change="onChange"
    route
    >
        <van-tabbar-item icon="wap-home-o" name='home' class="item" to='/home'>首页</van-tabbar-item>
        <van-tabbar-item icon="search" name='categroy'  class="item" to ='/category'>分类</van-tabbar-item>
        <van-tabbar-item icon="goods-collect-o" name='goodBuy'  class="item" to='/goodBuy'>值得买</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" name ='cart'  class="item" to='/cart'>购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" name = 'personal'  class="item" to='/personal'>个人</van-tabbar-item>
</van-tabbar>
  </div>
 
</template>

<script>
import {Tabbar, TabbarItem} from 'vant';
  export default {
    data () {
      return {
        active:'home'
      }
    },
    components: {
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem
    },
    methods: {
      onChange(){
         
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    .tabbar
      height 100px     
      font-size 24px
      .item
        font-size 30px
</style>

