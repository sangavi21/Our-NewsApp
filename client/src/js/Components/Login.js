var React = require('react');

    <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />

var Login = React.createClass({
check:function()
{
  console.log("login clicked")

  $.ajax({
  url:"http://localhost:8080/users/add",
  type: 'POST',
 //dataType: 'JSON',
  data : movieInfo,
  success: function(data)
  {
    console.log("inside success");
  alert(data);

  }.bind(this),
  error: function(err)
  {

    console.log(err);
  }.bind(this)
});
},

render : function(){
    return (


      <div className="login-card">
         <div>
         <h1>Log-in</h1><br />
         </div>
      <form>
        <input type="text" name="user" placeholder="Username" />
        <input type="password" name="pass" placeholder="Password" />
        <input type="submit" name="login" className="login login-submit" value="Submit" onClick={this.check} />
      </form>

    </div>


    )
  }
});
module.exports = Login;
