# sale_editor

> editor for acitve

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 本系统基于vue2.0开发

安装所需要的包后，需要配置一下mongodb 或者直接体验(保存不了数据) http://localhost:8081/editor 

建议在 d 盘 创建一个 MongoDB文件夹，然后在MongoDB文件夹创建三个文件夹分别为 data,etc,logs
打开etc文件夹，在里面创建 mongodb.conf，然后输入以下内容并保存


dbpath=D:\MongoDB\data\

logpath=D:\MongoDB\logs\mongodb.log

logappend=true

journal=true

quiet=false

port=27017

httpinterface=true


现在组件还比较少，正在不断更新中，欢迎来issue~







