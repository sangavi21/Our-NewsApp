var React = require ('react');
var Newsdatacomp = require ('./Newsdatacomp');
var NewsProviderData=React.createClass({
  getInitialState: function()
  {
    return{
      prodata:[],
      showdata: false

    };
  },
  handleNewsProviderdatahide:function(){
      this.setState({ showdata: false });
      console.log("seting false")
  },
  handleNewsProviderdata:function(){

    console.log("Inside"+this.props.data.id);
    this.setState({ showdata: true });
    console.log("seting true");
    $.ajax({
      url:"https://newsapi.org/v1/articles?source="+this.props.data.id+"&apiKey=1f61ef6cd8e840a598117f89237d56ca",
      type: 'GET',
      dataType:'JSON',

      success: function(data1)
      {

        console.log(data1.articles);
        this.setState({prodata:data1.articles});

        //console.log(prodata.title);

      }.bind(this),
      error:function(err)
      {
        console.log(err);
      }.bind(this)
    });

  },

  render:function(){


    return (

      <div className = "jumbotron">

        <div className = "container">
                  <div className="row ">
                      <div className="col-xs-4 " >
                          <a id="providersimg" href={this.props.data.url} > <img className="thumbnail"  id="poster"src={this.props.data.urlsToLogos.small} /></a>

                      </div>
                      <div className="col-xs-8 ">
                      <h2>{this.props.data.name}</h2>
                      <button className="btn btn-default" onClick={this.handleNewsProviderdata}>Show</button>
                        <button className="btn btn-success" onClick={this.handleNewsProviderdatahide} >Hide</button>
                      </div>

                  </div>
   </div>
   <div >
   { this.state.showdata ? <Newsdatacomp providerdata={this.state.prodata}/> : null }
   </div>

</div>
    )
  }
})
module.exports=NewsProviderData;
