var express = require("express");
var router = express.Router();
var userController = require('../controllers/user');
var ajaxController = require('../controllers/ajax');

router
// 当请求路径是login时，处理函数是showLogin
    .get('/common/login', userController.showLogin)
    .get('/common/register', userController.showRegister)
    .get('/', userController.showMain)
    .get('/applicant/resume', userController.showResume)
    .get('/common/logout', userController.doLogin)
    .get('/applicant/detail', userController.showDetail)
    .get('/userApplicant/admin', userController.showAdmin)
    .get('/company/factoryMain', userController.factoryMain)
    .get('/company/require', userController.require)
    .get('/userApplicant/add', userController.add)
    .get('/userCompany/company', userController.company)
    .get('/userCompany/company_add', userController.companyAdd)
    .get('/company/comDetail', userController.comDetail)
    //ajax路由
    .post('/teacher/register', ajaxController.userRegister)
    .post('/teacher/login', ajaxController.userLogin)
    .post('/teacher/submitCompanyInfo', ajaxController.submitCompanyInfo)
    .post('/teacher/submitTeacherInfo', ajaxController.submitTeacherInfo)
    .get('/administrator/queryCompanyInfo', ajaxController.queryCompanyInfo)

module.exports = router;