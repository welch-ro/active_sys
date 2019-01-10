/*
    import axios from './../axios';

    const REQUEST = {
        // 获取所有列表
        getList (data = {}, cancelInterceptors = false) {
            return axios('getListUsl', {
                method: 'get',
                data: data
            }, cancelInterceptors);
        },

        // 上传图片 接口地址： /active/upload_img
        upLoad (data = {}, cancelInterceptors = false) {
            return axios('upLoadAPI', {
                method: 'post',
                data: data
            }, cancelInterceptors);
        },

        // 编辑页获取单个活动的数据 /active/get
        getActiveInfo (data = {}, cancelInterceptors = false) {
            return axios('getActiveInfo', {
                method: 'get',
                data: data
            }, cancelInterceptors);
        },

        // 保存编辑页信息 /active/save
        saveActiveInfo (data = {}, cancelInterceptors = false) {
            return axios('saveActiveInfo', {
                method: 'post',
                data: data,
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            }, cancelInterceptors);
        }
    };

    export default REQUEST;
*/

import requestBase from './RequestBase';

class Request extends requestBase {
    // 获取所有列表
    getList (data) {
        return this.request('getListUsl', {
            data: data,
            method: 'get'
        });
    }

    // 上传图片 接口地址： /active/upload_img
    upLoad (data) {
        return this.request('upLoadAPI', {
            data: data
        });
    }

    // 编辑页获取单个活动的数据 /active/get
    getActiveInfo (data) {
        return this.request('getActiveInfo', {
            method: 'get',
            data: data
        });
    }

    // 保存编辑页信息 /active/save
    saveActiveInfo (data) {
        return this.request('saveActiveInfo', {
            data: data,
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        });
    }

    // 新增活动  /active/add_active
    addActive (data) {
        return this.request('addActive', {
            data: data,
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        });
    }
}

export default new Request();
