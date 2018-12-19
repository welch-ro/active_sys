import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 当前选中的组件id，用于控制组件选中状态的变化
        selectComId: ''
    },

    mutations: {
        changeSelectComId (state, cid) {
            state.selectComId = cid;
        }
    },

    actions: {}
});
