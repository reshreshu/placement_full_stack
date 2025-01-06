import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(){

var [email,setEmail]=useState("");
var[password,setPassword]=useState("")
var navigate=useNavigate()
var login=async(event)=>{
    event.preventDefault();
var req=await axios.post("http://localhost:3001/login",{
email:email,
password:password
});
console.log(req);
console.log("login successfulll....");
navigate('/');

}
    return(
    <>
    <div className="login-container">
    <h3>Welcome to login page</h3>
    <form onSubmit={login}>
    <label className='login'>
    Email:<input type="text" placeholder="enter your email"  id="email" value={email}onChange={(e)=>setEmail(e.target.value)}required/>
    </label>
    <label className='login'>
    Password:<input type="password" placeholder="enter your password" id="password" value={password}onChange={(e)=>setPassword(e.target.value)} required/>
    </label>
    <button >Submit</button>
    </form>
    </div>
    </>
    );
}
export default Login;

