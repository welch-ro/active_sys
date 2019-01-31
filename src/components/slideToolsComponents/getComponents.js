/*
*
*
*  所有在slideToolsComponents里的组件都会统一引入，showComponent， showConfig文件不用再每新增一个组件的时候还要import组件进来
*
*
* */
// 只匹配到一级子目录 目录名称只能是 [A-Za-z0-9_]
let componentsFile = require.context('./', true, /^\.\/(\w+)?\/(\w+)?\.vue$/);

// 输出所有组件，类似 const a = () => import('xxx.vue'); 这里合并成一个对象 {a : () => import('xxx.vue')}，对应vue 的 components
let componentsList = {};

// 输入所有异步的组件的配置，类似 const a = () => import('xxxConfig.vue'); 这里配置必需是组件名后面加上Config
let componentsConfigList = {};

// 重新映射组件  'image': { component: 'vueImage', configName: 'vueImageConfig' },
let componentsMap = {};

componentsFile.keys().forEach(e => {
    let regDirName = /\/\w+\//;

    // 获取得到/text/
    let dirName = regDirName.exec(e)[0];

    // 去掉 / 得到text
    dirName = dirName.replace(/\//g, '');

    // 首字母大写
    let dirNameFormat = dirName.split('').map((e, i) => i === 0 ? e.toUpperCase() : e).join('');

    // 如果带Config的字符串，表示是配置文件，否则就是显示用到layout里的组件
    if (e.includes('Config')) {
        componentsConfigList['vue' + dirNameFormat + 'Config'] = () => import(/* webpackChunkName: "toolsComponents" */ `@/components/slideToolsComponents/${e.replace('./', '')}`);
    } else {
        componentsMap[dirName] = {};
        componentsMap[dirName]['component'] = 'vue' + dirNameFormat;
        componentsMap[dirName]['configName'] = 'vue' + dirNameFormat + 'Config';
        componentsList['vue' + dirNameFormat] = () => import(/* webpackChunkName: "toolsComponents" */ `@/components/slideToolsComponents/${e.replace('./', '')}`);
    }
});

export { componentsConfigList, componentsList, componentsMap };
