var React = require('react');
var FNewsBox = require('./FNewsBox');
var ContainerComponent = React.createClass({

render: function (){
  var  updateDetails=this.props.onupdateUp;
  var  deleteDetails=this.props.ondeleteDel;
 var newsarr=this.props.newsdata.map(function(news){
 return(
      <FNewsBox
       valuedata={news}
       key={news.title}
       ondelete={deleteDetails}
       onupdate={updateDetails}
       >
       </FNewsBox>
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
