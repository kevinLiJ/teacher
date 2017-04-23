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
            return;
        }
        //在user中插入数据的同时，也要在对应的详细信息中添加一条数据，id相对应，其余数据为空
        query('SELECT * FROM user ORDER BY id DESC LIMIT 0,1', function(error, result) {
            if (error) {
                res.json({ success: false })
                return;
            }
            var tableName = result[0].type === '1' ? 'company_info' : 'teacher_info';
            query('INSERT INTO ' + tableName + '(id) VALUES(?)', result[0].id, function(error, result) {
                if (error) {
                    res.json({ success: false })
                    return;
                }
                res.json({ success: true })
            })
        })

    })

}

// teacher登录
exports.userLogin = function(req, res) {
    var reqEmail = req.body.email;
    var reqPassword = req.body.password;
    query('SELECT * FROM user where email=?', [reqEmail], function(error, result) {
        var resData = { success: false };
        if (reqPassword == result[0].password) {
            var resData = { success: true, type: result[0].type };
        }
        res.json(resData)
    })
}

//公司详细信息提交
exports.submitCompanyInfo = function(req, res) {
    query('INSERT INTO company_info set ?', req.body, function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json({ success: true })
    })
}

//公司详细信息提交
exports.submitTeacherInfo = function(req, res) {
    query('INSERT INTO teacher_info set ?', req.body, function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json({ success: true })
    })
}

//查询老师所有数据
exports.queryTeacherList = function(req, res) {
    query('SELECT * FROM teacher_info', function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json(result)
    })
}

//查询某个老师的详细数据
exports.queryTeacherInfo = function(req, res) {
    query('SELECT * FROM teacher_info where id=?', req.body.id, function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json(result[0])
    })
}
exports.queryCompanyInfo = function(req, res) {
    query('SELECT * FROM user', function(error, results, fields) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json(results);
    })
}