var React = require('react');
var NewsBox = require('./NewsBox');
var ContainerComponent = React.createClass({
render: function (){
 var newsarr=this.props.newsdata.map(function(news){
 return(
      <NewsBox
       valuedata={news}
       key={news.title}
       >
       </NewsBox>
     );
   }.bind(this));
    return (
      <div className="newsList">
      {newsarr}
   </div>
 );
}
});
module.exports=ContainerComponent;
