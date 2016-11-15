var should = require("chai").should(),

supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing get route", function(err){
  it("Retrive the data", function(done){
    url
        .get("/news/bbc")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);

          console.log(res.text);
       var myObj = JSON.parse(res.text);
        var result=0;

       var result=Object.keys(myObj).map(function(key)
     {
       return myObj[key];
     });
    result[0].title.should.be.equal("Remembrance Sunday: Services honour war dead");
    done();
        });
        });
});
describe("Testing post route", function(err){
  it("Post the data", function(done){
    url
        .post("/news/add")
        .send({"author":null,"title":"Durant: Oden calling himself a bust is 'nonsense'","description":"Kevin Durant, who was drafted second behind Greg Oden, thinks it's \"nonsense\" that the former Blazers pick thinks of himself as \"the biggest bust in NBA history.\"","url":"http://www.espn.com/nba/story/_/id/18044283","urlToImage":"http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F0410%2Fnba_g_durant_oden_800x450.jpg","publishedAt":"2016-11-14T05:11:30Z"})
        .expect(200)

        .end(function(err,res){

       res.text.should.equal("News added successfully");
done();
        });

  });
});
describe("Testing delete route", function(err){
  it("delete the data", function(done){
    url
        .del("/news/delete/Australia refugee transfer poses test for Trump")

       .expect(200)

      .end(function(err,res){

       res.text.should.equal("news deleted");
       done();
        });

  });
});
describe("Testing update route", function(err){
  it("update the data", function(done){
    url
        .put("/news/update")
        .send({"title":"Remembrance Sunday: Services honour war dead","comments":""})
       .expect(200)

      .end(function(err,res){

       res.text.should.equal("news updated");
       done();
        });

  });
});
