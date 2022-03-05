import React, { useState } from 'react'
import './Login.css'
//if you use (useHistory) the ERRORRRR will pop up {export 'useHistory' (imported as 'useHistory') was not found in 'react-router-dom'} 
//so use (useNavigate) in place of useHistory
import { Link, useNavigate } from "react-router-dom"
import { auth } from './firebase'


function Login() {
  
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
            e.preventDefault();
            //some fancy firebase login  .............
            auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
            if(auth){
                navigate('/');
            }

        })
        .catch(error => alert(error.message))

        //some fancy firebase register  .............
    }


  return (
    <div className='login'> 
        <Link to="/">
            <img className='login__logo' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="" />
        </Link>
        <div className="login__container">
            <h1>Sign In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                                                        {/* e is the event */}
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <br />
                <button type="submit" className='login__signInButton' onClick={signIn}>Sign In</button>
            </form>
            <p>By signing in you agree to AMAZON CLONE Conditions of use & Sale. Please see our Privacy Notice , our cookies Notice and our Interest-Based Ads Notice.</p>
            <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  );
}

export default Login;
