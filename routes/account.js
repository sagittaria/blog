// file: routes/account.js
var express = require('express');
var router = express.Router();
router.get('/login', function(req, res){
    return res.send('这里将会是登陆页面');
});

router.route('/register')
    // 返回注册页面
    .get(function (req, res) {
        res.render('account/register', {title: '注册'});
    })
    // 接受用户表单
    .post(function (req, res, next) {
        var username = req.body.username,
            password = req.body.password;

        console.log('Register post received!');
        console.log('username:', username, ' password:', password);
		res.setHeader('content-type','text/html; charset=UTF-8');//不写的话下句“成功收到POST请求为乱码”
        res.end('成功收到POST请求');
    });

module.exports = router;