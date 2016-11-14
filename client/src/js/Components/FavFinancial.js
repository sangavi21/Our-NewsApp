var React=require('react');
var ReactDOM=require('react-dom');

var Fcomponent=require('./Fcomponent.js');

var FavFinancial=React.createClass({

  getInitialState : function()
  {
    return{
      mongodata : []
  };
},
financialdata:function(allContent){
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
financialUpdate:function(publish,comments){
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
   url:"http://localhost:8080/news/financial/",
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
     <Fcomponent newsdata={this.state.mongodata} ondeleteDel={this.financialdata} onupdateUp={this.financialUpdate} />
    </div>
   )
 }
})

module.exports=FavFinancial;
