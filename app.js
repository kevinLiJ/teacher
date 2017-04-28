var express = require("express");
var path = require("path");
var ejs = require("ejs");
var session = require('express-session');
var bodyParser = require("body-parser");
var userRouter = require("./routes/user");
var app = express();
// 开放静态资源
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')));
app.use('/public/', express.static(path.join(__dirname, './public/')));
// 将ejs模板引擎找的文件后缀名改为html
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//配置session中间件
app.use(session({
        secret: 'Keyboard cat',
        resave: false,
        saveUninitialized: true
    }))
    // 配置解析表单Post请求体数据中间件
app.use(bodyParser.urlencoded({ extended: false }));
// express中间件
app.use(userRouter);
// 监听3000端口，启动服务
app.listen(3000, function() {
    console.log("running...")
})