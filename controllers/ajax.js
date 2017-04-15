var query = require('../models/query.js');
// 封装ajax处理函数
// teacher注册
exports.teacherRegister = function(req, res) {
        var data = [];
        for (var key in req.body) {
            data.push(req.body[key])
        }
        query('INSERT INTO teacher(email,password,username) VALUES(?,?,?)', data, function(error, result) {
            if (error) {
                res.json({ success: false })
            }
            res.json({ success: true })
        })
    }
    // teacher注册
exports.teacherLogin = function(req, res) {
    var reqEmail = req.body.email
    var reqPassword = req.body.password
    query('SELECT * FROM teacher where email=?', [reqEmail], function(error, result) {
        var resData = { success: false };
        if (reqPassword == result[0].password) {
            var resData = { success: true };
        }
        res.json(resData)

    })
}