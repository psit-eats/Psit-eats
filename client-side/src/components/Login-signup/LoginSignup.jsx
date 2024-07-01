import React from 'react'
import user_icon from '../assestsLoginSign/person.png'
import email_icon from '../assestsLoginSign/email.png'
import password_icon from '../assestsLoginSign/password.png'
const LoginSignup = () => {
  return (
    <div className="container bg-slate-500 flex flex-col items-center justify-center h-screen">
        <div className="header">
            <div className="text">SignUp</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>
        </div>
        <div className="forgot-password">Lost Password?<span>Click Here</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignup