import react, { useState } from "react";
import './styles/LoginSignup.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/LoginSignup.css';
import logo from '../Components/Assets/ChatGPT Image Jun 14, 2025, 02_55_48 PM.png';

const SignUp = () => {
    const [username,setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
     const navigate = useNavigate();


  const createUser = () =>{
  fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: username,
    email: email,
    password: password,
    /* other user data */
  })
})
.then(res => res.json())
.then(data =>localStorage.setItem('accessToken',data.accessToken))
if(localStorage.getItem('accessToken')){
    navigate('/login')
}
}
    return (
        <div className="login-signup">
             <div className="login-signup-container">
                <img src={logo} /><h1>SignUp</h1>
                <div className="login-signup-fields">
              <input type="email" onChange={(e)=> setUsername(e.target.value)} placeholder="Username"/>
                <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Email Address"/>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <button onClick={createUser}>Create User</button>
                {/* <p className="login">Already have an account? <span>Login Here</span></p> */}
               
             </div>
            
        </div>
    )
};

export default SignUp;