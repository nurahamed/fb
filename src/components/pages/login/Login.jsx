import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social</h3>
                <span className="logonDecs">Connect with friends and the worlds around you on Social. </span>
            </div>
            <div className="loginRight">
            <div className="loginBox">
                <input type="Email"  placeholder='Enter Your email' className="loginInput" />
                <input type="password"  placeholder='Passwod' className="loginInput" />

                <button className="loginButton">Sign Up</button>
                <span className="loginForgot">Forgot Password ?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
            </div>
        </div>
       
    </div>
  )
}
