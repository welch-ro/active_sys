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

进入sale/sale_editor目录，
打开cmd doc窗口

输入 vue init webpack deitor命令，
进入配置页，根据自己的要求选择，可以一路回车；
然后系统会自动安装你的node_module依赖；


进入package.json所在目录，输入npm run dev即可开启vue-cli之旅

~开启了ESlint校验；

目录我已经改过

现在安装一下less编译器：分别输入命令
npm install vue-style-loader --save;
npm install css-loader --save;
npm install less less-loader --save

接下来就可以编写了，

后面在开发过程中，要用到vuedraggable，要以要安装一下
npm install vuedraggable --save

//给组件添加事件，要用到native,比如直接在组件上添加@click，点击是无效的，改成@click.native=""就可以了
