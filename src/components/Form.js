import React, {useState} from "react";
// import { useEffect } from "react";
import axios from "axios";
import  {useNavigate} from 'react-router-dom';
function Testform(){
  let navigate = useNavigate();
  let[finaldata, setData]=useState([]);
  const  [username,setUsername]=useState('');
  const  [last_login, setLogin]=useState('');
  const  [password,setPassword]=useState('');
  const  [first_name, setFname]=useState('');
  const  [last_name, setLname]=useState('');
  const  [email,setEmail]=useState('');
const handleUser=(e)=>{
    setUsername(e.target.value);
};
const handleLogin=(e)=>{
    setLogin(e.target.value);
};
const handlePassword=(e)=>{
    setPassword(e.target.value);
};
const handleFname=(e)=>{
    setFname(e.target.value);
};
const handleLname=(e)=>{
    setLname(e.target.value);
};
const handleEmail=(e)=>{
    setEmail(e.target.value);
};
// For the post Method Function
const handleSubmit= (e)=>{
    e.preventDefault();
    const token= localStorage.getItem('login')
    console.log(token)
    axios.post("http://127.0.0.1:1243/superadmin/user/",{username,last_login,password,first_name,last_name,email},{
               headers:{
                'Authorization' : `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',  
               }
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
};
// For get method Function
// const handleClick = (e) => {
//     e.preventDefault();
//     const token4=localStorage.getItem('login')
//     axios.get(("http://127.0.0.1:1243/superadmin/user/?username=velu"),{
//       headers:{
//         'Authorization' : `Bearer ${token4}`,
//         'Content-Type' : 'application/json',
//         'Accept' : 'application/json',
//        }
//     }).then(
//     (response)=>{
//     console.log(response.data);
//      setData(response.data);
//      setUsername(response.username);
//      setLogin(response.last_login);
//      setPassword(response.password);
//      setFname(response.first_name);
//      setLname(response.last_name);
//      setEmail(response.email)
//     }).catch(function(error){
//         console.log(error);
//       })}
const handleClick = (e) => {
    e.preventDefault();
    const token4=localStorage.getItem('login')
    axios.get(("http://127.0.0.1:1243/superadmin/UserAdditional/?is_active=False&page=1"),{
      headers:{
        'Authorization' : `Bearer ${token4}`,
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
       }
    }).then(
    (response)=>{
    console.log(response.data);
         setData(response.data);
         setUsername(response[0].username);
         setLogin(response[0].last_login);
         setPassword(response[0].password);
         setFname(response[0].first_name);
         setLname(response[0].last_name);
         setEmail(response[0].email);
    }).catch(function(error){
        console.log(error);
      })}
//For delete method function
const handleDelete = (username) =>{
    const token1= localStorage.getItem('login')
    axios.delete("http://127.0.0.1:1243/superadmin/user/",{
        headers:{
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
          'Authorization' : `Bearer ${token1}`,
         },data:{
          "username":username
         }
        }).then((res)=>{
            setData(finaldata.filter(item=>item.username!==username));
            console.log(res.data);
      });    
} 
// For update handlechanges
   const updateUser=()=>{
    let item={username,last_login,password,first_name,last_name,email}
    console.log(item)
    const token3=localStorage.getItem('login')
    axios.patch("http://127.0.0.1:1243/superadmin/user/",{username,last_login,password,first_name,last_name,email},{
        headers:{
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token3}`
         }
        },).then((res)=>{
            console.log(res.data);
      });    
   }
 // for navigate funtion
  const Login = (e) =>{
    e.preventDefault();
    navigate("/");
}
const Logout=(e)=>{
    e.preventDefault();
    localStorage.removeItem("login")
    navigate("/")
 }

// for handleupdate
const handleUpdate=(id)=>{
}
return(
    // for post method
          <div className="div"  >
          <h1><b>SIGNUP FORM</b></h1>
              <form className="form" onSubmit={handleSubmit}>
                      <label><b>USER NAME:</b></label>
                      <input className="input1"  type="text" placeholder="enter username" name="username"
                      value={username} onChange={handleUser}/><br></br>
                      <br/>
                      <label ><b>LAST LOGIN:</b></label>
                      <input   type="text"  name="login" value={last_login} 
                      onChange={handleLogin}/><br></br>
                      <br/>
                      <label><b>PASSWORD:</b></label>
                      <input  type="password"  placeholder="enter password" name="password" 
                      value={password} 
                      onChange={handlePassword}/><br></br>
                      <br/>
                      <label ><b>FIRST NAME:</b></label>
                      <input  type="text"  placeholder="enter first name" name="fname"
                       value={first_name}
                      onChange={handleFname} /><br></br>
                      <br/>
                      <label><b>LAST NAME:</b></label>
                      <input  type="text"  placeholder="enter last name" name="lname"
                      value={last_name} onChange={handleLname}/><br></br>
                      <br/>
                      <label ><b>EMAIL:</b></label>
                      <input  type="email"  placeholder="enter email" name="email"
                      value={email} onChange={handleEmail}/><br></br>
                      <br/>
                      <input className="input1" type="submit"/><br/>
                      <br/>   
                      <button className="button" onClick={handleClick}>Get</button>         
            </form>
   {/* For get method */}
              {/* <input type="text" className="input2"></input> */}
               {/* <button className="button" onClick={handleClick}>Get</button> */}
               <a href="/" className="login" onClick={ Login }>Create a new account?login</a>
               <div className="fortable">
               <table className="table">
                   <thead>
                <tr>
                    <th>NAME</th>
                    <th>LOGIN</th>
                    <th>PASSWORD</th>
                    <th>FNAME</th>
                    <th>LNAME</th>
                    <th>EMAIL</th>
                </tr>
                   </thead>
                        <tbody className="tablebody">
                            {finaldata.map((item) =>{
                            return(
                                <tr key={item.username}>
                                    <td className="tabledata">{item.username}</td>
                                    <td className="tabledata">{item.last_login}</td>
                                    <td className="tabledata">{item.password}</td>
                                    <td className="tabledata">{item.first_name}</td>
                                    <td className="tabledata">{item.last_name}</td>
                                    <td className="tabledata">{item.email}</td>
                                    <button className="delete" onClick={()=>{handleDelete(item.username)}}>Delete</button>
                                    <button className="delete" onClick={()=>{handleUpdate(item.username)}}>Update</button>
                                </tr>
                           ) })} 
                        </tbody>
                    </table>
                </div>
                <div className="update">
                <h2>Update User:</h2>
                <label><b>USERNAME:</b></label>
                <input type="text" name="username" value={username} /><br/>
                <br/>
                <label><b>LOGIN:</b></label>
                <input type="text" name="login" value={last_login}/><br/>
                <br/>
                <label><b>PASSWORD:</b></label>
                <input type="password" name="password"  value={password}/><br/>
                <br/>
                <label><b>FNAME:</b></label>
                <input type="text"  name="fname" value={first_name}/><br/>
                <br/>
                <label><b>LNAME:</b></label>
                <input type="text" name="lname" value={last_name}/><br/>
                <br/>
                <label><b>EMAIL</b></label>
                <input type="email" name="email" value={email}/><br/>
                <br/>
                <button onClick={updateUser}>updateuser</button>
              </div>     
              <div className="Logout">
              <a href="/" className="login" onClick={ Logout }>Logout</a>
              </div>
  </div>
);
}
export default Testform;