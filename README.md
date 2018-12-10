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


###//vue 基础方法
mustache语法：{{message}};
Html赋值(也就是输出html结构，不是文本):v-html="";
绑定属性：v-bind:id="" 或者 :id=""
使用表达式： {{ok?'yes':'no'}}
文件赋值：v-text="a"
指令：v-if=""
过滤器：{{ a | formatA }}

###class和style绑定
:class="{'open':isTrue}" 如果isTrue为真，那么class就添加类名open，否则不加
:style="{fontSize: fontSize + 'px'}"

###事件处理
v-on:click="g"或者 @click="g"
事件修饰符
@click.stop="g"         阻止冒泡 
@click.stop.prevent="g" 阻止冒泡和默认事件
@click.self             给元素自己绑定事件，如果有子元素，点击子元素是没有作用的

//vue-router
<router-link></router-link>或者this.$router.push({path:'a.vue'})
<router-view></router-view>

###//动态路由
/user/:username/post/:post_id 匹配url路径 /user/evan/post/123
可以通过 this.$router.params得到对应的值，this.$router.params.username = evan; this.$router.params.post_id = 123
获取参数，可以用this.$router.params.query.XX 结构上直接显示可以用{{$route.query.XX}}

//node创建http，服务器
let http = require('http'); 
let server = http.createServer( (req, res) =>{
})

server.listen(3000, '127.0.0.1', () => {
    
})

express启动
E:\dev\sale_editor\sale_editor\server>node bin/www

//安装mongoDB
安装好后弄配置，
完了启动，进入安装目录，找到server\3.4\bin\,打开doc命令窗口，输入
mongod --config D:MongoDB\etc\mongodb.conf 启动 在浏览器输入http://localhost:28017/即可访问

//给数据库加安装认证
mongod --config D:MongoDB\etc\mongodb.conf --auth

进入某个数据库，
use admin
db.createUser({user:"admin", pwd:"admin": roles:["root"]})
这里roles是角色,root表示是管理员角色，可以访问到根目录下的库
然后要对账号进行认证
db.auth("admin","admin")
返回1表示认证成功

给某个用户指定只能访问一个库
db.createUser({user:"roluo",pwd:"roluo",roles:[{role:"dbOwner",db:"active"}})
db.auth("roluo","roluo")

###//mongo基本语法
查看当前的数据库列表
show dbs 

创建数据库
use demo(库名)

创建一张表(注意，表名后面一定要带s,查询的时候会自动带上s，如果不带会查不到)
db.createCollection("users")
或者用
db.user.insert({id:1})

查看当前库里的collection
show collections

删除数据库
use demo进入哪个库先
然后删除用
db.dropDatabase()

删除collection
use demo
show collection(看看有哪些表)
db.表名.drop()



插入文档：
db.user.insert({userName:"jack",age:28,id:100,class:{name:"lexin",num:30}})
db.user.insert({userName:"roluo",age:33,id:101,class:{name:"baidu",num:40}})

查看数据：
db.user.find() 格式化的时候，后面加 .pretty()
db.user.find({userName:"jack"})
db.user.find({'class.name':"baidu",age:10})
db.user.find().limit(1) 规定limit数
db.user.find({age:{$gt: 40}}) 查询age大于40的
db.user.find({age:{$lt: 40}}) 查询age小于40的
db.user.find({age:{$eq: 40}}) 查询age等于40的
db.user.find({age:{$gte: 40}}) 查询age大于等于40的
db.user.find({age:{$lte: 40}}) 查询age小于等于40的

更新数据
db.user.update({userName:"jack"}, {$set:{userAge:30}})

删除
db.user.remove({id:100})

导入表
(-d后面拉数据库名， -c后面拉表名 --file后面拉导入的文件)
mongoimport -d db_demo -c user --file /user/sdfl/.sflll...


//安装mongoose,用于链接mongodb

//axios
axios， this.axios.get('url', {param : { data }}).then(function(ret){console.log(ret.data)})
后台，通过req.query来获取get的参数











