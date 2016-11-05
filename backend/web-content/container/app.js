var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('login',{pageTitle:'Login'});
})

router.get('/home',function(req,res,next){
    res.render('index',{pageTitle:'Dashboard'});
})


module.exports = router;