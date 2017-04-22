// 封装处理函数
// 登录页面
exports.showLogin = function(req, res) {
        res.render('common/login');
    }
    // 注册页面
exports.showRegister = function(req, res) {
    res.render('common/register');
}

exports.showMain = function(req, res) {
    res.render('applicant/main');
}
exports.showResume = function(req, res) {
    res.render('applicant/resume');
}
exports.doLogin = function(req, res) {
    res.render('common/login');
}
exports.showDetail = function(req, res) {
    res.render('applicant/detail');
}
exports.showAdmin = function(req, res) {
    res.render('administrator/home');
}
exports.factoryMain = function(req, res) {
    res.render('company/factoryMain');
}
exports.require = function(req, res) {
    res.render('company/require');
}
exports.add = function(req, res) {
    res.render('administrator/add.html');
}
exports.company = function(req, res) {
    res.render('administrator/company');
}
exports.companyAdd = function(req, res) {
    res.render('administrator/company_add');
}
exports.comDetail = function(req, res) {
    res.render('company/comDetail');
}