var React = require('react');
var ReactDOM=require('react-dom');
var ContainerComponent=require('./ContainerComponent.js');
var ViewNewsProvider = React.createClass({
  getInitialState : function()
{
  return{
    data : []
};
},

  BbcNews :function()
  {

       console.log("inside data method");
       $.ajax({
       url:"https://newsapi.org/v1/articles?apiKey=f39060f94afe4e489b2b3390997ffa48&source=bbc-news",
       type: 'GET',
       dataType: 'JSON',

       success: function(data)
       { console.log("inside success");
         this.setState({data:data.articles});
         console.log(data.articles);
          console.log(JSON.stringify(data.articles));
       }.bind(this),
       error: function(err)
       {

         console.log(err);
       }.bind(this)
     });

  },
  FinancialNews: function()
    {

         console.log("inside data method");
         $.ajax({
         url:"https://newsapi.org/v1/articles?apiKey=f39060f94afe4e489b2b3390997ffa48&source=financial-times",
         type: 'GET',
         dataType: 'JSON',

         success: function(data)
         { console.log("inside success");
           this.setState({data:data.articles});
           console.log(data.articles);
            console.log(JSON.stringify(data.articles));
         }.bind(this),
         error: function(err)
         {

           console.log(err);
         }.bind(this)
       });


    },
    Espn: function()
      {
           console.log("inside data method");
           $.ajax({
           url:"https://newsapi.org/v1/articles?apiKey=f39060f94afe4e489b2b3390997ffa48&source=espn",
           type: 'GET',
           dataType: 'JSON',

           success: function(data)
           { console.log("inside success");
             this.setState({data:data.articles});
             console.log(data.articles);
              console.log(JSON.stringify(data.articles));
           }.bind(this),
           error: function(err)
           {

             console.log(err);
           }.bind(this)
         });


      },
      FavouriteNews : function()
      {
        $.ajax({
      url:"http://localhost:8080/news/",
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

  render: function(){
    return (
      <div>
     <ContainerComponent newsdata={this.state.data} />

    </div>

    )
  }
});
module.exports = ViewNewsProvider;
