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
    res.render('applicant/main', {
        isLogin: req.session.isLogin
    });
}
exports.showResume = function(req, res) {
    res.render('applicant/resume', {
        isLogin: req.session.isLogin
    });
}
exports.doLogin = function(req, res) {
    res.render('common/login');
}
exports.showDetail = function(req, res) {
    res.render('applicant/detail', {
        isLogin: req.session.isLogin
    });
}
exports.showAdmin = function(req, res) {
    res.render('administrator/home');
}
exports.factoryMain = function(req, res) {
    res.render('company/factoryMain', {
        isLogin: req.session.isLogin
    });
}
exports.require = function(req, res) {
    res.render('company/require', {
        isLogin: req.session.isLogin
    });
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
    res.render('company/comDetail', {
        isLogin: req.session.isLogin
    });
}
exports.news1 = function(req, res) {
    res.render('news/news1', {
        isLogin: req.session.isLogin
    });
}
exports.news2 = function(req, res) {
    res.render('news/news2', {
        isLogin: req.session.isLogin
    });
}
exports.news3 = function(req, res) {
    res.render('news/news3', {
        isLogin: req.session.isLogin
    });
}