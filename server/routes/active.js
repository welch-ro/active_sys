let express = require('express');

let router = express.Router();

let mongoose = require('mongoose');

let Active = require('../models/active');

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

router.get('/', (req, res, next) => {

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

router.get('/', (req, res) => {
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

module.exports = router;
