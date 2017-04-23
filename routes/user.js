var express = require("express");
var router = express.Router();
var userController = require('../controllers/user');
var ajaxController = require('../controllers/ajax');

router
// 当请求路径是login时，处理函数是showLogin
    .get('/', userController.showMain)
    .get('/common/login', userController.showLogin)
    .get('/common/register', userController.showRegister)
    .get('/common/logout', userController.doLogin)
    .get('/applicant/resume', userController.showResume)
    .get('/applicant/detail', userController.showDetail)
    .get('/company/comDetail', userController.comDetail)
    .get('/company/factoryMain', userController.factoryMain)
    .get('/company/require', userController.require)
    .get('/userApplicant/admin', userController.showAdmin)
    .get('/userApplicant/add', userController.add)
    .get('/userCompany/company', userController.company)
    .get('/userCompany/company_add', userController.companyAdd)
    //ajax路由
    .post('/teacher/register', ajaxController.userRegister)
    .post('/teacher/login', ajaxController.userLogin)
    .post('/teacher/submitCompanyInfo', ajaxController.submitCompanyInfo)
    .post('/teacher/submitTeacherInfo', ajaxController.submitTeacherInfo)
    .post('/teacher/queryTeacherInfo', ajaxController.queryTeacherInfo)
    .get('/administrator/queryCompanyInfo', ajaxController.queryCompanyInfo)
    .post('/administrator/queryCompanyAdd', ajaxController.queryCompanyAdd)
    .get('/administrator/queryCompanyModel', ajaxController.queryCompanyModel)

module.exports = router;