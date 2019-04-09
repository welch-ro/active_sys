import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 当前选中的组件id，用于控制组件选中状态的变化
        selectComId: '',

        // 用于保存当前拖拽的组件类型，用于布局的组件类型限制
        componentType: ''
    },

    mutations: {
        changeSelectComId (state, cid) {
            state.selectComId = cid;
        },

        changeComponentType (state, type) {
            state.componentType = type;
        }
    },

    // 异步方法在这里调用
    actions: {}
});
