let express = require('express');

let router = express.Router();

let mongoose = require('mongoose');

let Active = require('../models/active');

let fs = require('fs');
let path = require('path');

//
function toDouble (num) {
    return ('' + num).length < 2 ? ('0' + num) : num;
}

// mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/active');
mongoose.connect('mongodb://127.0.0.1:27017/active');

mongoose.connection.on('connected', () => {
    console.log('------数据库连接成功！------');
});

mongoose.connection.on('error', () => {
    console.log('------数据库连接失败！------');
});

mongoose.connection.on('disconnected', () => {
    console.log('------数据库连接断开了！------');
});

// 获取所有列表
router.get('/list', (req, res, next) => {
    Active.find((err, doc) => {
        if (err) {
            res.json({
                result: 9999,
                msg: err.message
            });
        } else {
            res.json({
                result: 0,
                msg: '',
                result_row: {
                    count: doc.length,
                    list: doc
                }
            });
        }
    });
});

// 获取所有列表
router.get('/list2', (req, res, next) => {
    Active.find((err, doc) => {
        if (err) {
            res.json({
                result: 9999,
                msg: err.message
            });
        } else {
            res.json({
                result: 0,
                msg: '',
                result_row: doc
            });
        }
    });
});

router.get('/get', (req, res, next) => {
    let activeEvent = req.query.id;
    if (activeEvent) {
        let eveId = activeEvent.toString();
        Active.find({ eveId: eveId }, (err, doc) => {
            if (err) {
                res.json({
                    result: 9999,
                    msg: err.message
                });
            } else {
                if (doc.length > 0) {
                    res.json({
                        result: 0,
                        msg: '',
                        result_row: {
                            count: doc.length,
                            list: doc
                        }
                    });
                } else {
                    res.json({
                        result: 1,
                        msg: '没有数据'
                    });
                }
            }
        });
    } else {
        res.json({
            result: 1,
            msg: '没有数据'
        });
    }
});

router.post('/update/', (req, res, next) => {
    let data = req.body;
    let editorList = data.params.editorList.toString();

    let wherestr = { 'eveId': '100000' };
    let updatestr = { 'editorList': editorList };

    Active.update(wherestr, updatestr, (err, doc) => {
        if (err) {
            res.json({
                result: 9999,
                msg: err.message
            });
        } else {
            res.json({
                result: 0,
                msg: '',
                result_row: {
                    status: 10
                }
            });
        }
    });
});

router.post('/save/', (req, res, next) => {
    let activeDate = req.body;
    console.log(req.body);
    Active.findOne({ 'eveId': activeDate.eveId }, (err, doc) => {
        console.log('doc.length', doc.eveId);
        if (err) {
            res.json({
                result: 6666,
                msg: '数据查询失败'
            });
        }
        if (doc.eveId) {
            // 如果有数据，那么就直接更新数据
            let wherestr = { 'eveId': activeDate.eveId };
            let updatestr = { 'editorList': activeDate.editorList };

            Active.updateOne(wherestr, updatestr, (err, doc) => {
                if (err) {
                    res.json({
                        result: 9999,
                        msg: err.message
                    });
                } else {
                    res.json({
                        result: 0,
                        msg: '',
                        result_row: {
                            status: 10
                        }
                    });
                }
            });
        } else {
            let newActive = new Active(activeDate);

            newActive.save((err, pro) => {
                if (err) {
                    res.json({
                        result: 7777,
                        msg: err.message
                    });
                } else {
                    res.json({
                        result: 0,
                        msg: '',
                        result_row: {
                            status: 10
                        }
                    });
                }
            });
        }
    });
});

// 生成新的活动id
router.post('/add_active', (req, res, next) => {
    let postParams = req.body.params;
    // 新增 else 为保存
    if (!postParams.activeId) {
        let now = new Date();
        let Y = now.getFullYear();
        let M = now.getMonth() + 1;
        let d = now.getDate();
        let H = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();

        let newActiveId = '' + Y + toDouble(M) + toDouble(d) + toDouble(H) + toDouble(min) + toDouble(sec);
        let params = {};
        params['eveId'] = newActiveId;
        params['editorList'] = '';
        params['title'] = postParams['title'];
        params['startTime'] = postParams['startTime'];
        params['endTime'] = postParams['endTime'];

        let newActive = new Active(params);

        newActive.save((err, pro) => {
            if (err) {
                res.json({
                    result: 8888,
                    msg: '生成数据失败'
                });
            } else {
                res.json({
                    result: 0,
                    msg: 'ok',
                    result_rows: {
                        status: 10,
                        eveId: params['eveId']
                    }
                });
            }
        });
    } else {
        // 修改
        Active.findOne({ eveId: postParams.activeId }, (err, doc) => {
            if (err) {
                res.json({
                    result: 7777,
                    msg: '活动不存在'
                });
            } else {
                let wherestr = { 'eveId': postParams.activeId };
                let updatestr = { 'title': postParams.title, 'startTime': postParams.startTime, 'endTime': postParams.endTime };
                Active.updateOne(wherestr, updatestr, (errUp, proUp) => {
                    if (errUp) {
                        res.json({
                            result: 6666,
                            msg: '保存失败'
                        });
                    } else {
                        res.json({
                            result: 0,
                            msg: 'ok',
                            result_rows: {
                                status: 10,
                                eveId: postParams.activeId
                            }
                        });
                    }
                });
            }
        });
    }
});

// 生成页面html
let cp = require('child_process');

router.post('/add_view', (req, res, next) => {
    let reqHTML = req.body.params.mainHTML;
    let eveId = req.body.params.id;

    let rootDir = path.resolve(__dirname, '../../');
    let indexHTML = fs.readFileSync(rootDir + '/mod/index.html', 'utf-8');
    let newHTML = indexHTML.replace('<mainHTML>', reqHTML);

    fs.access(rootDir + '/view/' + eveId, fs.constants.F_OK | fs.constants.W_OK, (exists) => {
        fs.mkdir(rootDir + '/view/' + eveId, function () {
            console.log('文件已经生成');
            fs.writeFile(rootDir + '/view/' + eveId + '/index.html', newHTML, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Export Account Success!');
                    // 通过chrome打开页面
                    cp.exec('start chrome ' + rootDir + '/view/' + eveId + '/index.html');
                }
            });
        });
    });
});

// 上传图片
router.post('/upload_img', (req, res, next) => {
    let rootDir = path.resolve(__dirname, '../../');
    console.log(req.body);
    let imgParams = req.body;
    let imgData = imgParams.imgSrc;

    /*
    * 如果 Content-Type 为 application/x-www-form-urlencoded:charset=utf-8 这里前端没有用到qs的情况下 如果有用到qs，那么跟application/json一样处理，直接req.body就可拿到参数
    *
    *  let imgParams = '';
     for (let i in req.body) {
     imgParams = JSON.parse(i);
     }

     let imgData = imgParams.imgSrc;
    *
    * */

    let base64Data = imgData.replace(/^data:image\/(\w+);base64,/, '');
    let dataBuffer = Buffer.from(base64Data, 'base64');

    let now = new Date();
    let Y = now.getFullYear();
    let M = now.getMonth() + 1;
    let d = now.getDate();
    let H = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let newActiveId = '' + Y + toDouble(M) + toDouble(d) + toDouble(H) + toDouble(min) + toDouble(sec) + parseInt(Math.random() * 10000, 10);

    fs.writeFile(rootDir + '/server/public/images/' + newActiveId + '.' + imgParams.imgType, dataBuffer, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                result: 0,
                msg: '',
                result_row: {
                    imgSrc: 'http://localhost:3000/images/' + newActiveId + '.' + imgParams.imgType
                }
            });
        }
    });

    /*
    fs.rename(req.body.params.imgSrc, rootDir + '/upload/img1.jpg', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('done!');
        }
    });
    */
});

module.exports = router;
