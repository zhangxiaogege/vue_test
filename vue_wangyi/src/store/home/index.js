//主页相关数据
import http from 'http'
import {GETINDEXDATA,GETNAVDATA} from 'store/mutaions_type'
const state = {
    homeData:{},
    navList:[],
    
}



const  mutations={
    [GETINDEXDATA](state,data){
        state.homeData = data
    },
    [GETNAVDATA](state,data){
        state.navList = data
    },

}

const actions={
    async [GETINDEXDATA]({commit}){
        let indexData = await http.home.getIndexData()
        commit(GETINDEXDATA,indexData)
    },
    async [GETNAVDATA]({commit}){
        let navData = await http.home.getNavData()
        commit(GETNAVDATA,navData)
    },
}

export default {
    state,
    actions,
    mutations
}