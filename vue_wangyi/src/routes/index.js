import home from 'pages/home/home.vue'
import category from 'pages/category/category.vue'
import goodBuy from 'pages/goodBuy/goodBuy.vue'
import cart from 'pages/cart/cart.vue'
import personal from 'pages/personal/personal.vue'
import search from 'pages/search/search.vue'
let routes = [
  { path: '/home', component: home,meta: {showTabBar: true }},
  { path: '/category', component: category ,meta: {showTabBar: true }},
  { path: '/goodBuy', component: goodBuy ,meta: {showTabBar: true } },
  { path: '/cart', component: cart ,meta: {showTabBar: true }},
  { path: '/personal', component: personal ,meta: {showTabBar: true }},
  { path: '/search', component: search ,meta: {showTabBar: false }},
  { path: '/', redirect: '/home' }
  
]
export default routes