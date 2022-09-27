import React from "react";

class Userform extends React.Component {
  constructor(props){
  super(props);
  this.state={
    userName:" ",
    userLogin:" ",
    superUser:" ",
    password:" ",
    fname:'',
    lname:'',
    email:'',
    staffuser:'',
    active:"",
  };
  }
  handleChange=(event)=>{
    this.setState({userName:event.target.value});
    console.log(event.target.value);
  };
  handleLogin=(event)=>{
    this.setState({userLogin:event.target.value});
    console.log(event.target.value);
  }
  handleSuperuser=(event)=>{
      this.setState({superUser:event.target.value});
      console.log(event.target.value);
  };
  handlePassword=(event)=>{
    this.setState({password:event.target.value});
    console.log(event.target.value);
};
handleFname=(event)=>{
  this.setState({fname:event.target.value});
  console.log(event.target.value);
};
handleLname=(event)=>{
  this.setState({lname:event.target.value});
  console.log(event.target.value);
};
handleEmail=(event)=>{
  this.setState({email:event.target.value});
  console.log(event.target.value);
};
handleStaff=(event)=>{
  this.setState({email:event.target.value});
  console.log(event.target.value);
};
handleActive=(event)=>{
  this.setState({email:event.target.value});
  console.log(event.target.value);
};
handleSubmit=(event)=>{
    event.preventDefault();
    alert("username"+this.setState.userName+"\nlogin"+this.setState.userLogin
    +"superUSer"+this.setState.superUser
    +"firstname"+this.setState.fname
    +"Lastname"+this.setState.lname
    +"Email"+this.setState.email
    +"password"+this.setState.password
    );
  };
   render()
   {

       return(
      <div class="div">
      <h1><b>Login Form</b></h1>
          <form class="form" onSubmit={this.handleSubmit}>
                  
                  <label><b>USER NAME</b></label>
                  <input class Name="input1"  type="text" placeholder="enter username" name="userName"
                  value={this.state.userName} onChange={this.handleChange}/><br></br>
                  <br/>
                  <label ><b>LAST_LOGIN:</b></label>
                  <input   type="text"  name="login" value={this.state.login} 
                  onChange={this.handleLogin}/><br></br>
                  <br/>
                  <label ><b>IS_SUPERUSER:</b></label>
                  <input  type="checkbox"  name="superuser" value={this.state.superUser} 
                  onChange={this.handleSuperuser}/><br></br>
                  <br/>
                  <label><b>PASSWORD:</b></label>
                  <input  type="password"  placeholder="enter password" name="password" 
                  value={this.state.password} 
                  onChange={this.handlePassword}/><br></br>
                  <br/>
                  <label ><b>FIRST NAME:</b></label>
                  <input  type="text"  placeholder="enter first name" name="fname"
                   value={this.state.fname}
                  onChange={this.handleFname} /><br></br>
                  <br/>
                  <label><b>LAST NAME:</b></label>
                  <input  type="text"  placeholder="enter last name" name="lname"
                  value={this.state.lname} onChange={this.handleLname}/><br></br>
                  <br/>
                  <label ><b>EMAIL:</b></label>
                  <input  type="email"  placeholder="enter email" name="email"
                  value={this.state.email} onChange={this.handleEmail}/><br></br>
                  <br/>
                  <label><b>IS_STAFF_USER</b></label>
                  <input  type="checkbox"  name="is_staff"
                   value={this.state.staffuser} onChange={this.handleStaff}/><br></br>
                  <br/>
                  <label><b>IS_ACTIVE_USER</b></label>
                  <input type="checkbox"  name="is_active"
                   value={this.state.activeuser} onChange={this.handleActive}/><br></br>
                  <br/>
                  <input   type="submit"/>

        </form>
  </div>
    );
   }
  }
export default Userform;