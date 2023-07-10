import React from 'react'
import './Register.css'
export default function register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social</h3>
                <span className="logonDecs">Connect with friends and the worlds around you on Social. </span>
            </div>
            <div className="loginRight">
            <div className="loginBox">
              
            <input type="username"  placeholder='Enter Your Name' className="loginInput" />
                <input type="Email"  placeholder='Enter Your email' className="loginInput" />
                <input type="password" placeholder='Password'  className="loginInput" />
                <input type="password" placeholder='Password Again'  className="loginInput" />
                <button className="loginButton">Sign up</button>
             
                <button className="loginRegisterButton">Log into Account</button>
            </div>
            </div>
        </div>
       
    </div>
  )
}
