import React, {  useState } from "react";
// import { useEffect } from "react";
import axios from "axios";
import  { useNavigate } from 'react-router-dom';
function Signup(){
    let navigate = useNavigate();
    const[data,setData]=useState([]);
    const[values,setValues]=useState(
    {   
        username:'',
        login:'',
        password:'',
        fname:'',
        lname:'',
        email:'',
    }
    )
// for navigate funtion

    const Login = (e) =>{
      e.preventDefault();
      navigate("/");
  }
// for values change funtion

        const handleChange=(e)=>{
            setValues({
              ...values,[e.target.name]:e.target.value
            });
        }
// For post method function
        const handleSubmit= (e)=>{
          e.preventDefault();
          const token=  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjYzODQ0NzQzLCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjYzODQxMTQzfQ.ZsNtKwHqrckKCdhBngLkKzuY67NDaLFjvev98TYQpAM"
          axios.post("http://127.0.0.1:8000/homepage/",JSON.stringify({...values,[e.target.name]:e.target.value}),{
                     headers:{
                      'Content-Type' : 'application/json',
                      'Accept' : 'application/json',
                      'Authorization' : `Bearer ${token}`
                     }
            })
            .then(function(response){
              console.log(response);
            })
            .catch(function(error){
              console.log(error);
            });
      };
// for Get method function

        // useEffect((e) => {
        //       e.preventDefault();
        //       handleClick();
        //       }, [])


      const handleClick = (e) => {
        e.preventDefault();
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjYzODM1ODg4LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjYzODMyMjg4fQ.IQp9O3d1pbA18zA85OE5fkmWWQI-uXU4E9mSfGrWfJo"
        axios.get(("http://127.0.0.1:8000/homepage/?id=8"),{
          headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${token}`
           }
        })
        .then((res) =>{
          setData(res.data)
        })};
    // const handleClick = (e) =>{
    //     const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjYzODQ0NzQzLCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjYzODQxMTQzfQ.ZsNtKwHqrckKCdhBngLkKzuY67NDaLFjvev98TYQpAM"
    //       axios.get("http://localhost:3003/user",{
    //           headers:{
    //             'Content-Type' : 'application/json',
    //             'Accept' : 'application/json',
    //             'Authorization' : `Bearer ${token}`
    //            },
    //         }).then((res)=>{
    //               setData(res.data);
    //               console.log(res.data);
    //         });     
    // } 
    const handleDelete = () =>{
        axios.delete("http://localhost:3003/user",{
            headers:{
              'Content-Type' : 'application/json',
              'Accept' : 'application/json',
             },
          }).then((res)=>{
                setData(res.data);
                console.log(res.data);
          });    
  } 

const handleUpdate=(id)=>{
  console.log('function called',[id-1])
  console.log()
}
const updateUser=(e)=>{

  axios.patch("http://127.0.0.1:8000/homepage/?id=8",JSON.stringify({...values,[e.target.name]:e.target.value}),{
            headers:{
              'Content-Type' : 'application/json',
              'Accept' : 'application/json',
             },
          }).then((res)=>{
                console.log(res.data);
          });    
}
const handleChange1=(e)=>{
  setValues({
   ...values,[e.target.name]:e.target.value
  });
}
return(
  // for post method
        <div class="div">
        <h1><b>SIGNUP FORM</b></h1>
            <form class="form" onSubmit={handleSubmit}  >
                    <label><b>USER NAME:</b></label>
                    <input className="input1"  type="text" placeholder="enter username" name="username"
                    value={values.username} onChange={handleChange}/><br></br>
                    <br/>
                    <label ><b>LAST_LOGIN:</b></label>
                    <input   type="text"  name="login" value={values.login} 
                    onChange={handleChange}/><br></br>
                    <br/>
                    <label><b>PASSWORD:</b></label>
                    <input  type="password"  placeholder="enter password" name="password" 
                    value={values.password} 
                    onChange={handleChange}/><br></br>
                    <br/>
                    <label ><b>FIRST NAME:</b></label>
                    <input  type="text"  placeholder="enter first name" name="fname"
                     value={values.fname}
                    onChange={handleChange} /><br></br>
                    <br/>
                    <label><b>LAST NAME:</b></label>
                    <input  type="text"  placeholder="enter last name" name="lname"
                    value={values.lname} onChange={handleChange}/><br></br>
                    <br/>
                    <label ><b>EMAIL:</b></label>
                    <input  type="email"  placeholder="enter email" name="email"
                    value={values.email} onChange={handleChange}/><br></br>
                    <br/>
                    <input className="input1" type="submit"   /><br/>
                    <br/>   
                    <button className="button" onClick={handleClick}>Get</button>
          </form>
 {/* For get method */}
            {/* <input type="text" className="input2"></input> */}
            
             {/* <button className="button" onClick={handleClick}>Get</button> */}

             <a href="/" className="login" onClick={ Login }>Create a new account?login</a>

{/* for grt method table */}
             <table className="table">
                        <tbody className="tablebody">
                            {data.map((item) =>{
                            return(
                                <tr key={item.username}>
                                    <td className="tabledata">{item.username}</td>
                                    <td className="tabledata">{item.login}</td>
                                    <td className="tabledata">{item.password}</td>
                                    <td className="tabledata">{item.fname}</td>
                                    <td className="tabledata">{item.lastname}</td>
                                    <td className="tabledata">{item.email}</td>
                                    <button className="delete" onClick={()=>{handleDelete()}}>Delete</button>
                                    <button className="delete" onClick={()=>{handleUpdate()}}>Update</button>
                                </tr>
                            )})} 
                        </tbody>
                    </table>
              <div className="update">
                <h2>Update User:</h2>
                <label><b>USERNAME:</b></label>
                <input type="text" name="username" value={values.username} onChange={handleChange1}/><br/>
                <br/>
                <label><b>LOGIN:</b></label>
                <input type="text" name="login" value={values.login} onChange={handleChange1}/><br/>
                <br/>
                <label><b>PASSWORD:</b></label>
                <input type="password" name="password"  value={values.password} onChange={handleChange1}/><br/>
                <br/>
                <label><b>FNAME:</b></label>
                <input type="text"  name="fname" value={values.fname}  onChange={handleChange1} /><br/>
                <br/>
                <label><b>LNAME:</b></label>
                <input type="text" name="lname" value={values.lname} onChange={handleChange1} /><br/>
                <br/>
                <label><b>EMAIL</b></label>
                <input type="email" name="email" value={values.email} onChange={handleChange1}/><br/>
                <br/>
                <button onClick={updateUser}>updateuser</button>
              </div>                
    </div>
      );
}
export default Signup;