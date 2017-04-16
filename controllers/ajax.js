var query = require('../models/query.js');
// 封装ajax处理函数
// teacher注册
exports.userRegister = function(req, res) {
    var data = [];
    for (var key in req.body) {
        data.push(req.body[key])
    }
    query('INSERT INTO user(email,password,username,type) VALUES(?,?,?,?)', data, function(error, result) {
        if (error) {
            res.json({ success: false })
        }
        res.json({ success: true })
    })
}

// teacher登录
exports.userLogin = function(req, res) {
    var reqEmail = req.body.email
    var reqPassword = req.body.password
    query('SELECT * FROM user where email=?', [reqEmail], function(error, result) {
        var resData = { success: false };
        if (reqPassword == result[0].password) {
            var resData = { success: true, type: result[0].type };
        }
        res.json(resData)
    })
}

//teacher详细信息提交
//todo 插入数据是否有简便的方法
exports.submitTeacherInfo = function(req, res) {
    // var data = [];
    // for (var key in req.body) {
    //     data.push(req.body[key])
    // }
    //query('INSERT INTO company_info(username,release_date,education,salary,phone,position_info,company_info) VALUES(?,?,?,?,?,?,?)', data, function(error, result) {
    query('INSERT INTO company_info set ?', req.body, function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json({ success: true })
    })
}