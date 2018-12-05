import Vue from 'vue';
import Router from 'vue-router';
import editor from '@/system/page/active/editor/editor';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/editor', name: 'editor', component: editor }
    ]
});
