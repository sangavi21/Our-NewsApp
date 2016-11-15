var React = require('react');
var {Link} = require('react-router');
var NavibarChild = React.createClass({
 render: function(){
   return (
<div>
<div className="container" id="main">
<div className="navbar navbar-fixed-top" >
            <div className="container">
     <div className="nav-collapse collapse navbar-responsive-collapse">
     <ul className ="nav navbar-nav pull-left" >
     <li>
     <h3><b>T0D@Y$ W0R!D NEWS</b></h3>
     </li>
     </ul>
     <ul className ="nav navbar-nav pull-right" >
     <li><Link to ="/home">HOME</Link></li>
     <li><Link to ="/bbc">BBC NEWS</Link></li>
     <li><Link to ="/financial">FINANCIAL NEWS</Link></li>
     <li><Link to ="/espn">ESPN NEWS</Link></li>
     <li><Link to ="/Login">Login</Link></li>
     <li>
     <a href="/favouritenews" className="dropdown-toggle" data-toggle="dropdown">FAVOURITE NEWS<strong className="caret"></strong></a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to ="/FavBBC">BBC NEWS</Link>
                                    </li>

                                    <li>
                                    <Link to ="/FavFinancial">FINANCIAL NEWS</Link>
                                    </li>

                                    <li>
                                    <Link to ="/FavESPN">ESPN-SPORTS</Link>
                                    </li>
                                </ul>
           </li>
           <li>
           <a href="/favouritenews" className="dropdown-toggle" data-toggle="dropdown">MY ACCOUNT<strong className="caret"></strong></a>
                     <ul className="dropdown-menu">
                       <li>
                         <Link to ="#">SETTINGS</Link>
                       </li>

                       <li>
                       <Link to ="#">UPDATE PROFILE</Link>
                       </li>

                       <li>
                       <Link to ="/Login">SIGN OUT</Link>
                       </li>
                     </ul>
               </li>
           </ul>
       </div>
         </div>
             </div>
                 </div>
                 </div>
   )
 }
});
module.exports = NavibarChild;
