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
<<<<<<< HEAD
exports.showAdmin = function(req, res) {
    res.render('administrator/home');
=======
exports.factoryMain = function(req, res) {
    res.render('factoryMain');
}
exports.require = function(req, res) {
    res.render('require');
>>>>>>> af4dc545284caafe7fa2d25994a0f1e3bd220f87
}