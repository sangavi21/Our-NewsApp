  var express = require('express');
  var router = express.Router();
  var user=require('../models/users');
  router.route("/add")
  .post(function(req,res) {
    if(req.body) {
    var uservar=new user();
    uservar.username=req.body.username;
    uservar.password=req.body.password;
    uservar.save(function(err){
    if(err) {
      res.send(err);
    }
    else  {
    res.send("inserted");
    }
      });
    }
    });


  /* GET users listing. */
  router.get('/', function(req, res, next) {
    user.find({},function(err,alluser){
      if(err) {
        res.send(err);
        console.log('error ocuured');
      }
      else {

console.log("all user get displayed");
console.log(alluser);
        var user={};
        alluser.forEach(function(users){
          user[user._id]=users;
        });
        res.send(user);
      }
    });
  });
  router.post('/msg', function(req, res, next) {
    res.send('hello');
  });

  module.exports = router;
