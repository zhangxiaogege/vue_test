//主页相关数据
import http from 'http'
import {GETCATENAVDATAS,
        GETCATELISTS
       } from 'store/mutaions_type'
const state = {
    cateNavList:[],
    cateLists:[]
}



const  mutations={
    [GETCATENAVDATAS](state,data){
        state.cateNavList = data
    },
    [GETCATELISTS](state,data){
        state.cateLists = data
    }

}

const actions={
    async [GETCATENAVDATAS]({commit}){
        let getCateNavDatas= await http.category.getCateNavDatas()
        commit(GETCATENAVDATAS,getCateNavDatas.categoryL1List)
    },
     async [GETCATELISTS]({commit}){
        let getCateLists= await http.category.getCateLists()
        commit(GETCATELISTS,getCateLists)
    }
}

export default {
    state,
    actions,
    mutations
}