import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from 'store/home'
import category from 'store/category'
export default new Vuex.Store({
    modules:{
        home,
        category
    }
})