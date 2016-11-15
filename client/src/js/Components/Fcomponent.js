var React = require('react');
var FNewsBox = require('./FNewsBox');
var FComponent = React.createClass({

render: function (){
  var  updateDetails=this.props.onupdateUp;
  var  deleteDetails=this.props.ondeleteDel;
  console.log(this.props.newsdata);
 var newsarr=this.props.newsdata.map(function(newscontent){
 return(
      <FNewsBox
       valuedata={newscontent}    
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
module.exports=FComponent;
