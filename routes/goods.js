var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    //req 请求的数据 request 
    //res 响应的数据  response 
    //next  调用：next()  作用：只要当前功能没被结束，跳转到下一个相同路由的内部
    res.send('我是商品列表')
})

module.exports = router;
