var React=require('react');
var ReactDOM=require('react-dom');

var Fcomponent=require('./Fcomponent.js');

var FavESPN=React.createClass({

  getInitialState : function()
  {
    return{
      mongodata : []
  };
},
espndata:function(allContent){
  console.log(allContent);
  var movieData=this.state.mongodata;
  var index=movieData.findIndex(function(element){
    return element.title===allContent;
  });
  console.log(index);
  if(index!==-1){
    movieData.splice(index,1);
    this.setState({mongodata:movieData});
  }
  console.log(movieData);
},
espnUpdate:function(publish,comments){
  console.log(publish+" "+comments);
  var movieData=this.state.mongodata;
  var index=movieData.findIndex(function(element){
    return element.publishedAt===publish;
  });
  console.log(index);
  if(index!==-1){
    movieData[index].comments=comments;
    this.setState({data:movieData});
  }
},
retriveData  : function() {

   $.ajax({
   url:"http://localhost:8080/news/espn/",
   type: 'GET',
   dataType:'JSON',

   success: function(data1)
   {
     this.setState({mongodata:Object.values(data1)});
     console.log("inside success");

    //  console.log(JSON.stringify(data1));
   }.bind(this),
   error: function(err)
   {

     console.log(err);
   }.bind(this)
 });

 },
 componentDidMount : function()
 {
   this.retriveData();
 },
render: function(){
   return (
     <div>
     <Fcomponent newsdata={this.state.mongodata} ondeleteDel={this.espndata} onupdateUp={this.espnUpdate}/>
    </div>
   )
 }
})

module.exports=FavESPN;
