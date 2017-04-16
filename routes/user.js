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
    .get('/detail', userController.showDetail)
    .get('/admin', userController.showAdmin)
    .get('/factory', userController.factoryMain)
    .get('/require', userController.require)
    .get('/add', userController.add)
    .get('/company', userController.company)
    .get('/company_add', userController.companyAdd)

//ajax路由
.post('/teacher/register', ajaxController.teacherRegister)
    //ajax路由

.post('/teacher/login', ajaxController.teacherLogin)

module.exports = router;