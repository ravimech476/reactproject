import React, { useState } from "react";
import axios from "axios";
import  { useNavigate } from 'react-router-dom';
  function Login(){
    let navigate = useNavigate();
    const[data,setData]=useState('');

    const[username,setUsername]=useState('');
    const[password,setPaaword]=useState('');
    const Signin = (e) =>{
        e.preventDefault();
        navigate("/Signup");
    }
  const handleUser=(e)=>{
    setUsername(e.target.value);
  }
  const handlePassword=(e)=>{
    setPaaword(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
        axios.post('http://127.0.0.1:1243/auth_token',{username,password})
        .then((response)=>{
            console.log(response);
            setData(response.data);
            localStorage.setItem("login",data.token);
        });
    }
  return(
    <div className="div2">
     <h1 className="h1">LOGIN FORM</h1> 
    <form className="Signin" onSubmit={handleSubmit}>
        <label><b>USERNAME</b></label>
            <input  className="login1" name="username" type="text" value={username} onChange={handleUser} placeholder="enter your name"/><br/>
            <br/>
        <label><b>PASSWORD</b></label>
            <input className="login2" name="password"  type="password" value={password} onChange={handlePassword} placeholder="enter your Password"/>
        <br/>
        <br/>
        <input type="submit" onclik={Signin} />
    </form>
    <a href="/" className="signin" onClick={Signin}>Already have an account? SignIn</a>
    </div>
  );
  }
  export default Login;