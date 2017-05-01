var express = require("express");
var router = express.Router();
var userController = require('../controllers/user');
var ajaxController = require('../controllers/ajax');

router
    .get('/home', function(req, res) {
        res.render('index')
    })
    // 当请求路径是login时，处理函数是showLogin
    .get('/', userController.showMain)
    // 公共部分-登录页
    .get('/common/login', userController.showLogin)
    // 公共部分-注册页
    .get('/common/register', userController.showRegister)
    // 公共部分-退出页
    .get('/common/logout', userController.doLogin)
    // 应聘者-简历页
    .get('/applicant/resume', userController.showResume)
    .get('/applicant/personal', userController.showPersonal)
    // 应聘者-详情页
    .get('/applicant/detail', userController.showDetail)
    //公司-详情页
    .get('/company/comDetail', userController.comDetail)
    //公司-首页列表页
    .get('/company/factoryMain', userController.factoryMain)
    //公司-要求页
    .get('/company/require', userController.require)
    //用户管理-应聘者管理-首页
    .get('/userApplicant/admin', userController.showAdmin)
    //用户管理-应聘者管理-添加页
    .get('/userApplicant/add', userController.add)
    // 用户管理-公司管理-首页
    .get('/userCompany/company', userController.company)
    // 用户管理-公司管理-添加页
    .get('/userCompany/company_add', userController.companyAdd)
    .get('/news/news1', userController.news1)
    .get('/news/news2', userController.news2)
    .get('/news/news3', userController.news3)
    //ajax路由
    // 注册验证ajax
    .post('/teacher/register', ajaxController.userRegister)
    // 登录验证ajax
    .post('/teacher/login', ajaxController.userLogin)
    // 应聘者-提交公司具体信息
    .post('/teacher/submitCompanyInfo', ajaxController.submitCompanyInfo)
    .post('/teacher/submitTeacherInfo', ajaxController.submitTeacherInfo)
    //查询老师信息
    .get('/teacher/queryTeacherList', ajaxController.queryTeacherList)
    .get('/company/queryCompanyList', ajaxController.queryCompanyList)
    .post('/company/queryCompanyInfo1', ajaxController.queryCompanyInfo1)
    .post('/teacher/queryTeacherInfo', ajaxController.queryTeacherInfo)
    //老师提交申请
    .post('/teacher/teacherApply', ajaxController.teacherApply)
    //根据公司id查询申请过此公司的老师的详情列表
    .post('/teacher/applicationTeacherList', ajaxController.applicationTeacherList)
    .post('/company/companycheckPhone', ajaxController.companycheckPhone)



// 用户管理-公司管理-首页列表渲染
.get('/administrator/queryCompanyInfo', ajaxController.queryCompanyInfo)
    // 用户管理-公司管理-添加功能实现
    .post('/administrator/queryCompanyAdd', ajaxController.queryCompanyAdd)
    // 用户管理-公司管理-查看功能实现
    .post('/administrator/queryCompanyModel', ajaxController.queryCompanyModel)
    // 用户管理-公司管理-删除功能实心
    .post('/administrator/queryCompanyDelete', ajaxController.queryCompanyDelete)
    // 用户管理-应聘者管理-首页列表渲染
    .get('/administrator/queryApplicantInfo', ajaxController.queryApplicantInfo)
    // 用户管理-应聘者管理-添加功能实现
    .post('/administrator/queryApplicantAdd', ajaxController.queryApplicantAdd)
    // 用户管理-应聘者管理-查看功能实现
    .post('/administrator/queryApplicantModel', ajaxController.queryApplicantModel)
    // 用户管理-应聘者管理-删除功能实心
    .post('/administrator/queryApplicantDelete', ajaxController.queryApplicantDelete)



module.exports = router;