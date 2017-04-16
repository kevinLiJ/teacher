// 封装处理函数
// 登录页面
exports.showLogin = function(req, res) {
        res.render('login');
    }
    // 注册页面
exports.showRegister = function(req, res) {
    res.render('register');
}

exports.showMain = function(req, res) {
    res.render('main');
}
exports.showResume = function(req, res) {
    res.render('resume');
}
exports.doLogin = function(req, res) {
    res.render('login');
}
exports.showDetail = function(req, res) {
    res.render('detail');
}
exports.showAdmin = function(req, res) {
    res.render('administrator/home');
}
exports.factoryMain = function(req, res) {
    res.render('factoryMain');
}
exports.require = function(req, res) {
    res.render('require');
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