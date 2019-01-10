// 以下是所有用户的异步接口列表，方便管理

const AJAX_URL = {
    baseUrl: '',
    // 获取所有列表
    getListUsl: '/active/list',
    // 上传图片地址
    upLoadAPI: '/active/upload_img',
    // 获取编辑页中单个活动信息
    getActiveInfo: '/active/get',
    // 保存编辑信息
    saveActiveInfo: '/active/save',
    // 添加活动
    addActive: '/active/add_active'
};

export default AJAX_URL;
