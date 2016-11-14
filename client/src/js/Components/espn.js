var React = require('react');
var ReactDOM=require('react-dom');
var ContainerComponent=require('./ContainerComponent.js');
var espn = React.createClass({
  getInitialState : function()
{
  return{
    data : []
};
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
  componentDidMount : function()
  {
    this.Espn();
  },

  render: function(){
    return (
      <div>
     <ContainerComponent newsdata={this.state.data} />

    </div>

    )
  }
});
module.exports = espn;
