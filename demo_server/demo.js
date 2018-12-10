/**
 * Created by roluo on 2018/12/6.
 */
let user = require('./user.js');
user.sayHello();

let http = require('http'); // 加载http模块
let url = require('url');
let util = require('util');

let server = http.createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain', 'charset=utf-8');
    let nowUrl = url.parse(req.url);
    let nowUrlString = util.inspect(nowUrl);

    res.end(nowUrlString);
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server start, http://127.0.0.1:3000');
})
