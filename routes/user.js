var express = require("express");
var router = express.Router();
var userController = require('../controllers/user');
var ajaxController = require('../controllers/ajax');

router
// 当请求路径是login时，处理函数是showLogin
    .get('/login', userController.showLogin)
    .get('/register', userController.showRegister)
    .get('/', userController.showMain)
    .get('/resume', userController.showResume)
    .get('/logout', userController.doLogin)


//ajax路由
.post('/teacher/register', ajaxController.teacherRegister)
    // 导出路由
module.exports = router;