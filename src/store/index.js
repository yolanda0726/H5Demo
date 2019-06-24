import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const AppLoading = {
    state: {
        nowStatus: 'loading'
    },
    mutations: {
        nowStatus: (state, data) => {
            state.nowStatus = data
        }
    },
    getters: {
        nowStatus: state => {
            return state.nowStatus
        }
    }
}

export default new Vuex.Store({
    modules:{
        AppLoading
    }
})