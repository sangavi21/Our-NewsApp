var React=require('react');
var ReactDOM=require('react-dom');

var Fcomponent=require('./Fcomponent.js');

var FavouriteNews=React.createClass({

  getInitialState : function()
  {
    return{
      mongodata : []
  };
},

retriveData  : function() {

   $.ajax({
   url:"http://localhost:8080/news/bbc/",
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
     <Fcomponent newsdata={this.state.mongodata}  />
    </div>
   )
 }
})

module.exports=FavouriteNews;
