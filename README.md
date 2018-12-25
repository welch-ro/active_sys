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

![](https://github.com/welch-ro/active_sys/blob/master/view/GIF22.gif)

安装所需要的包后，需要配置一下mongodb

建议在 d 盘 创建一个 MongoDB文件夹，然后在MongoDB文件夹创建三个文件夹分别为 data,etc,logs
打开etc文件夹，在里面创建 mongodb.conf，然后输入以下内容并保存


dbpath=D:\MongoDB\data\

logpath=D:\MongoDB\logs\mongodb.log

logappend=true

journal=true

quiet=false

port=27017

httpinterface=true

然后进入c盘找到mongodb的安装目录，打开窗口命令，输入 C:\Program Files\MongoDB\Server\3.4\bin --config D:\MongoDB\etc\mongodb.conf 启动mongoe服务












