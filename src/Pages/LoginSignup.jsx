import react, { useState } from "react";
import './styles/LoginSignup.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../Components/Assets/ChatGPT Image Jun 14, 2025, 02_55_48 PM.png';

const SignUp = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('');
     const navigate = useNavigate();

    const handleLogin = () =>{
  fetch('https://dummyjson.com/user/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: username,
    password: password,
    expiresInMins: 30,
  }),
})
.then(res => res.json())
.then(data =>localStorage.setItem('userId',data.id))
if(localStorage.getItem('userId')){
    navigate('/')
}
}
    return (
        <div className="login-signup">
             <div className="login-signup-container">
                <img src={logo} /><h1>Login</h1>
                <div className="login-signup-fields">
                <input type="email" onChange={(e)=> setUsername(e.target.value)} placeholder="Email Address"/>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                </div>
               
                {/* <p className="login">Already have an account? <span>Login Here</span></p> */}
                <div className="agree">
                    <input type="checkbox"/>
                <p>Get our latest updates on your mail</p>
                </div>
                 <button onClick={handleLogin}>Login</button>
             </div>
            
        </div>
    )
};

export default SignUp;