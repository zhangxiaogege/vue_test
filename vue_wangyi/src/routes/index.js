import home from 'pages/home/home.vue'
import category from 'pages/category/category.vue'
import goodBuy from 'pages/goodBuy/goodBuy.vue'
import cart from 'pages/cart/cart.vue'
import personal from 'pages/personal/personal.vue'
let routes = [
  { path: '/home', component: home },
  { path: '/category', component: category },
  { path: '/goodBuy ', component: goodBuy  },
  { path: '/cart', component: cart },
  { path: '/personal', component: personal },
  { path: '/', redirect: '/home' }
  
]
export default routes