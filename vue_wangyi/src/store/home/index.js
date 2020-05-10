//主页相关数据
import http from 'http'
import {GETINDEXDATA,
        GETNAVDATA,
        GETNAVCATELISTDATA,
        GETCATENAVDATAS} from 'store/mutaions_type'
const state = {
    homeData:{},
    navList:[],
    pageListOfNav:[],
    cateNavList:[],
    
}



const  mutations={
    [GETINDEXDATA](state,data){
        state.homeData = data
    },
    [GETNAVDATA](state,data){
        state.navList = data
    },
    [GETNAVCATELISTDATA](state,data){
        state.pageListOfNav = data
    },
    [GETCATENAVDATAS](state,data){
        state.cateNavList = data
    }

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
    async [GETNAVCATELISTDATA]({commit}){
        let getNavCateListData= await http.home.getNavCateListData()
        commit(GETNAVCATELISTDATA,getNavCateListData)
    },
    async [GETCATENAVDATAS]({commit}){
        let getCateNavDatas= await http.home.getCateNavDatas()
        commit(GETCATENAVDATAS,getCateNavDatas.categoryL1List)
    }
}

export default {
    state,
    actions,
    mutations
}