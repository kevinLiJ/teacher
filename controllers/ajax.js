var query = require('../models/query.js');
// 封装ajax处理函数
// teacher注册
exports.userRegister = function(req, res) {
    var data = [];
    for (var key in req.body) {
        data.push(req.body[key])
    }
    var errCode;
    var reqemail = req.body.email;
    query('SELECT * FROM user', function(error, result) {
        if (error) {
            res.json({ success: false });
            return;
        }
        for (var i = 0; i < result.length; i++) {
            if (result[i].email == reqemail) {
                return res.json({
                    err_code: 1001,
                    success: true
                });

            } else if (result[i].email != reqemail) {
                errCode = 200;

            }

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
                var tableName = result[0].type === '2' ? 'company_info' : 'teacher_info';
                query('INSERT INTO ' + tableName + '(id) VALUES(?)', result[0].id, function(error, result) {
                    if (error) {
                        res.json({ success: false })
                        return;
                    }
                    res.json({ success: true, err_code: errCode })
                })
            })

        })


    })



}

// user登录
exports.userLogin = function(req, res) {
    var reqEmail = req.body.email;
    var reqPassword = req.body.password;
    query('SELECT * FROM user where email=?', [reqEmail], function(error, result) {
        var resData = { success: false };
        if (reqPassword == result[0].password) {
            var resData = { success: true, type: result[0].type, id: result[0].id };
        }
        //req.session是根据客户端的session-id拿到服务器的数据
        req.session.isLogin = true;
        res.json(resData)
    })
}

//公司详细信息提交
exports.submitCompanyInfo = function(req, res) {
    var id = parseInt(req.body.id);
    console.log(id)
    delete req.body.id;
    query('UPDATE company_info SET ? WHERE id=?', [req.body, id], function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json({ success: true })
    })
}

//老师详细信息提交
exports.submitTeacherInfo = function(req, res) {
    var id = parseInt(req.body.id);
    delete req.body.id;
    query('UPDATE teacher_info SET ? WHERE id=?', [req.body, id], function(error, result) {
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
    console.log(req.body.id)
    query('SELECT * FROM teacher_info where id=?', req.body.id, function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        console.log(result)
        res.json(result[0])
    })
}

//查询某个公司的列表
exports.queryCompanyList = function(req, res) {
    query('SELECT * FROM company_info', function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json(result)
    })
}

//查询某个公司的详细数据
exports.queryCompanyInfo1 = function(req, res) {
    console.log(req.body.id)
    query('SELECT * FROM company_info where id = ?', req.body.id, function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json(result[0])
    })
}

// 公司管理 列表渲染
exports.queryCompanyInfo = function(req, res) {
        query('SELECT * FROM user where type=2', function(error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ success: false })
            }
            res.json(results);
        })
    }
    // 公司管理添加信息
exports.queryCompanyAdd = function(req, res) {
        query('INSERT INTO user set ?', req.body, function(error, result) {
            if (error) {
                console.log(error)
                res.json({ success: false })
            }
            res.json({ success: true })
        })
    }
    // 公司管理查看部分，模态框
exports.queryCompanyModel = function(req, res) {
        var reqId = req.body.id
        query('SELECT * FROM user where id=?', reqId, function(error, result) {
            if (error) {
                console.log(error)
                res.json({ success: false })
            }
            res.json(result)
        })
    }
    // 公司管理删除部分
exports.queryCompanyDelete = function(req, res) {
        var reqId = req.body.id
        query('DELETE FROM user where id=?', reqId, function(error, result) {
            if (error) {
                console.log(error)
                res.json({ success: false })
            }
            res.json({ success: true })
        })

    }
    // 应聘者管理列表渲染
exports.queryApplicantInfo = function(req, res) {
        query('SELECT * FROM user where type=1', function(error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ success: false })
            }
            res.json(results);
        })
    }
    // 公司管理添加信息
exports.queryApplicantAdd = function(req, res) {
        query('INSERT INTO user set ?', req.body, function(error, result) {
            if (error) {
                console.log(error)
                res.json({ success: false })
            }
            res.json({ success: true })
        })
    }
    // 公司管理查看部分，模态框
exports.queryApplicantModel = function(req, res) {
        var reqId = req.body.id
        query('SELECT * FROM user where id=?', reqId, function(error, result) {
            if (error) {
                console.log(error)
                res.json({ success: false })
            }
            res.json(result)
        })
    }
    // 公司管理删除部分
exports.queryApplicantDelete = function(req, res) {
    var reqId = req.body.id
    query('DELETE FROM user where id=?', reqId, function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json({ success: true })
    })

}

//老师提交申请
exports.teacherApply = function(req, res) {
    var teacherId = parseInt(req.body.teacherId);
    var companyId = parseInt(req.body.companyId);
    // 判断这个老师是否申请过这个公司
    query('SELECT * FROM companyTeacher where applicationTeacherId = ? AND companyId = ?', [teacherId, companyId], function(error, result) {
        if (error) {
            console.log(error);
            res.json({ success: false })
            return;
        }
        // 没有申请过则加入数据库
        if (result.length === 0) {
            query('INSERT INTO companyTeacher(applicationTeacherId,companyId,isResponse) VALUES(?,?,0)', [teacherId, companyId], function(error, result) {
                if (error) {
                    res.json({ success: false })
                    return;
                }
                res.json({ success: true })
            })
        } else {
            res.json({ success: false, errMsg: '已申请过' })
        }
    })

}

// 查询申请过此公司的老师
// 用于渲染公司首页
exports.applicationTeacherList = function(req, res) {
    var companyId = req.body.companyId;
    var applicationTeacherList = []
    query('SELECT * FROM companyTeacher where companyId = ?', companyId, function(error, result) {
        if (error) {
            console.log(error);
            res.json({ success: false })
            return;
        }
        for (var i = 0; i < result.length; i++) {
            applicationTeacherList.push(result[i].applicationTeacherId);
        }
        // 拼接成  (2,4,7)  这种形式去查询
        var queryIdListStr = '(' + applicationTeacherList.join(',') + ')';
        // res.json({ success: true, teacherList: applicationTeacherList });
        query('SELECT * FROM teacher_info where id in ' + queryIdListStr, function(error, result) {
            if (error) {
                console.log(error);
                res.json({ success: false })
                return;
            }
            console.log(result)
            res.json({ success: true, data: result })
        })
    })

}

//公司查看申请老师的联系方式
exports.companycheckPhone = function(req, res) {
    var teacherId = req.body.teacherId;
    var companyId = req.body.companyId;
    query('UPDATE companyTeacher SET isResponse = 1 WHERE teacherId = ? and companyId = ?', [teacherId, companyId], function(error, result) {
        if (error) {
            console.log(error)
            res.json({ success: false })
        }
        res.json({ success: true })
    })
}

// //根据老师的id，查询老师申请的公司中，做回复的公司列表
// exports.applicationTeacherList = function(req, res) {
//     var companyId = req.body.companyId;
//     query('SELECT * FROM companyTeacher where companyId = ? and isResponse = 1', companyId, function(error, result) {
//         if (error) {
//             console.log(error);
//             res.json({ success: false })
//             return;
//         }
//     })
// }