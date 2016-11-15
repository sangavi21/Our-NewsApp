var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route ,Router,IndexRoute} = require('react-router');
var NavibarChild = require('./Components/NavibarChild.js');
var ViewNewsProvider= require('./Components/ViewNewsProvider.js');
var bbc= require('./Components/bbc.js');
var financial = require('./Components/financial.js');
var espn= require('./Components/espn.js');
var favouritenews= require('./Components/favouritenews.js');
var FavBBC= require('./Components/FavBBC.js');
var FavFinancial = require('./Components/FavFinancial.js');
var FavESPN= require('./Components/FavESPN.js');
var Login=require('./Components/Login.js');
var NewsProvidercomp=require('./Components/NewsProvidercomp.js')

var MainComponent = React.createClass({

  render: function(){
    return (
      <div>
      <NavibarChild />
          {this.props.children}

      </div>
    )
  }
});

ReactDOM.render(
  <Router history ={browserHistory}>

     <Route path = "/" component={MainComponent} >
    <IndexRoute component={NewsProvidercomp} />
     <Route path = "/ViewNewsProvider" component={ViewNewsProvider} />
      <Route path = "/home" component={NewsProvidercomp} />
       <Route path = "/bbc" component={bbc} />
        <Route path = "/financial" component={financial} />
         <Route path = "/espn" component={espn} />
          <Route path = "/favouritenews" component={favouritenews} />
          <Route path = "/FavBBC" component={FavBBC} />
           <Route path = "/FavFinancial" component={FavFinancial} />
            <Route path = "/FavESPN" component={FavESPN} />
            <Route path = "/Login" component={Login} />
      </Route>
  </Router>,document.getElementById('app'));
