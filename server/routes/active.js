let express = require('express');

let router = express.Router();

let mongoose = require('mongoose');

let Active = require('../models/active');

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

// 获取得有列表
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

router.get('/get', (req, res, next) => {
    let activeEvent = req.query.id.toString();
    Active.find({ eveId: activeEvent }, (err, doc) => {
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
    let activeDate = req.body.params;
    console.log(activeDate);
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
                Active.update(wherestr, updatestr, (errUp, proUp) => {
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

module.exports = router;
