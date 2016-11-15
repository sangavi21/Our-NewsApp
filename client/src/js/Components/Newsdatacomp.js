var React = require ('react');
var Newsdata = require ('./Newsdata');
var Newsdatacomp=React.createClass({


  render:function(){
    var newsproviderdata=this.props.providerdata.map(function(newspro){

      return(
        <Newsdata news={newspro}/>

      )
    })

    return (


        <div className = "container">
          {newsproviderdata}


</div>
    )
  }
})
module.exports=Newsdatacomp;
