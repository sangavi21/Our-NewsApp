var React = require ('react');
var Newsdata=React.createClass({
  render:function(){
    console.log("ins");
    return (

      <div className = "jumbotron">
      <div className = "container">
                <div className="row ">
                    <div className="col-xs-4 " >
                      <a id="datazoom" href={this.props.news.url} > <img className="thumbnail"  id="poster"src={this.props.news.urlToImage} /></a>

                    </div>
                    <div className="col-xs-8 ">
                    <a id="datazoom" href={this.props.news.url} ><h4>Title:{this.props.news.title}</h4></a>
                      <ul className='list-group'>
                          <li className='list-group-item'>Description : {this.props.news.description}</li>
                      </ul>
                    </div>
                </div>
 </div>


</div>
    )
}
});
module.exports=Newsdata;
