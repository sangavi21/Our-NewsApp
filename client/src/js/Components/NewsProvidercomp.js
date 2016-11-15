var React=require('react');
var ReactDOM=require('react-dom');
var NewsProviderData = require('./NewsProviderData');
var NewsProviderscomp=React.createClass({
  getnewsproviders:function(){
    $.ajax({
      url:" https://newsapi.org/v1/sources?language=en",
      type: 'GET',
      dataType:'JSON',

      success: function(data1)
      {

        console.log(data1);
        this.setState({data:data1.sources});
        console.log(this.state.data.id);

      }.bind(this),
      error:function(err)
      {
        console.log(err);
      }.bind(this)
    });

  },
  getInitialState: function()
  {
    return{
      data:[]

    };
  },


  componentWillMount:function(){

    this.getnewsproviders();
  },
    render: function(){
      var newsproviderdata=this.state.data.map(function(newsprovider){
              console.log("yes");
        return(
          <NewsProviderData data={newsprovider}  ></NewsProviderData>
        )
      })
    return (
      <div >
            <h1>News providers{this.state.booleandata}</h1>
              <div className = "container">
                    {newsproviderdata}

              </div>
      </div>
    )
  }
})
module.exports=NewsProviderscomp;
