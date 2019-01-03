import Vue from 'vue';
import Router from 'vue-router';
import editor from '@/system/page/active/editor/editor';
import list from '@/system/page/active/list/list';
import detail from '@/system/page/active/detail/detail';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/editor/:id?', name: 'editor', component: editor },
        { path: '/list', name: 'list', component: list },
        { path: '/detail/:id?', name: 'detail', component: detail }
    ]
});
