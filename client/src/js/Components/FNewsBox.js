var React = require('react');

var Fmoviebox = React.createClass({

UpdateComments: function(t)
  {
    console.log('typing...');
    this.setState({Comment: t.target.value});
    console.log(Comment);
  },
  handleUpdate: function()
  {
    console.log(Comment);
      var newsObject = {};
      newsObject.comments = this.state.Comment;
      newsObject.publishedAt=this.props.valuedata.publishedAt;
      console.log(newsObject);
      $.ajax({
       url:"http://localhost:8080/news/update",
       type: 'PUT',
       data: newsObject,
       success: function(message)
             {
                console.log(newsObject);
               alert("Movie updated");
               this.props.onupdate(newsObject.publishedAt, newsObject.comments);

             }.bind(this),
             error: function(err)
             {
               console.log(err);
             }.bind(this)
           });
        },

handleDelete: function()
{
  console.log("Delete clicked");
  var title=this.props.valuedata.title;
  console.log(title);
  $.ajax({
  url:"http://localhost:8080/news/delete/"+title,
  type: 'DELETE',

  success: function(data)
  {
    console.log("inside success");
    this.props.ondelete(this.props.valuedata.title);
   }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
});
},


render : function()
{
  var str=this.props.valuedata.publishedAt;
   var ID='';
   for(var i=0;i<str.length;++i){
     if(str.charAt(i)==='-'||str.charAt(i)===':'){
       continue;
     }
     else{
       ID+=str.charAt(i);
     }
   }
   console.log(ID);
  var id="#"+ID;
return (
   <div className="movie">
           <h2 className="movieName"> </h2>
           <div className="well">
               <div className="row">

                <h2><b>     <a  className="linkdesign" href={this.props.valuedata.url}>{this.props.valuedata.title}</a> </b></h2>
                       <img className="thumbnail" src={this.props.valuedata.urlToImage}/>

                     <div className="col-sm-6">

                         <ul className='list-group'>

                            <li className='list-group-item'>PublishedAt : {this.props.valuedata.publishedAt}</li>
                                <li className='list-group-item'>Comments : {this.props.valuedata.comments}</li>
                         </ul>



                         <a href={id}  role="button" className="btn btn-warning" data-toggle="modal"> Click for Updation</a>

                           <div className="modal fade" id={ID}>
                           <div className="modal-dialog">
                                 <div className="modal-content">
                                     <div className="modal-header">
                                         <button className="close" data-dismiss="modal">&times;</button>

                                         <h4 className="modal-title">Update the Comments</h4>
                                     </div>
                                     <div className="modal-body">
                                         <form className="form-horizontal">
                 													<div className="form-group">
                 														<label className="col-lg-2 control-label" for="inputName">Comments</label>
                 														<div className="col-lg-10">
                 															<input className="form-control" id="inputName" placeholder="Enter Comments to update..." onChange={this.UpdateComments} type="text"/>
                 														</div>
                 													</div>
                 												</form>
                                     </div>
                                     <div className="modal-footer">
                                         <button className="btn btn-info" data-dismiss="modal" type="button">Close</button>
                                         <button className="btn btn-success" type="button" onClick={this.handleUpdate}>Save changes</button>
                                     </div>
                                 </div>
                             </div>
                         </div>




                      <button className="btn btn-success" onClick={this.handleDelete}>Delete</button>
                     </div>
               </div>
           </div>
       </div>
);
}

});

module.exports=Fmoviebox;
