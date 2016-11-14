var express = require('express');
var router = express.Router();

var news=require('../models/news');
router.route("/add")
.post(function(req,res) {
  if(req.body) {
  var newsvar=new news();
  newsvar.author=req.body.author;
  newsvar.title=req.body.title;
  newsvar.description=req.body.description;
  newsvar.url=req.body.url;
  newsvar.urlToImage=req.body.urlToImage;
  newsvar.publishedAt=req.body.publishedAt;
  newsvar.save(function(err){
  if(err) {
    res.send(err);
    console.log("error occured");
  }
  else  {
  res.send("News added successfully");
  console.log("News added");

  }
    });
  }
  });


  router.route("/delete/:title")
  .delete(isLoggedIn,function(req,res) {
    var request=req.params.title;
    console.log(request);
    console.log("hello");
    if(request)
    {
      news.remove({title:request},function(err){
        if(err) {
          res.send(err);
        }
        else  {
        res.send("news deleted");
        }
      });
    }
  });
  router.route("/update")
  .put(isLoggedIn,function(req,res) {

    console.log(req.body);
    if(req.body)
    {
    news.update({title:req.body.title},{$set:{comments:req.body.comments}},function(err){

    console.log(req.body.title);
    console.log(req.body.comments);
        if(err) {
          res.send(err);
        }
        else  {
        res.send("news updated");
        }
      });
    }
  });

  router.route("/bbc")
  .get(isLoggedIn,function(req,res){
    news.find({url : /bbc/},function(err,newsall){
      if(err) {
        res.send(err);
        console.log('error ocuured');
      }
      else {

console.log("bbc news get displayed");
console.log(newsall);
        var news={};
        newsall.forEach(function(newss){
          news[newss._id]=newss;
        });
        res.send(news);
      }
    });
});
router.route("/financial")
.get(isLoggedIn,function(req,res){
  news.find({url : /ft/},function(err,newsall){
    if(err) {
      res.send(err);
      console.log('error ocuured');
    }
    else {

console.log("financial news get displayed");
console.log(newsall);
      var news={};
      newsall.forEach(function(newss){
        news[newss._id]=newss;
      });
      res.send(news);
    }
  });
});
router.route("/espn")
.get(isLoggedIn,function(req,res){
  news.find({url : /espn/},function(err,newsall){
    if(err) {
      res.send(err);
      console.log('error ocuured');
    }
    else {

console.log("espn news get displayed");
console.log(newsall);
      var news={};
      newsall.forEach(function(newss){
        news[newss._id]=newss;
      });
      res.send(news);
    }
  });
});
function isLoggedIn (req, res, next) {
 if(req.isAuthenticated()){
 return next();}
 else {
   res.json('not authenticated');
 }
};
module.exports = router;
