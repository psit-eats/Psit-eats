import React from 'react'
import email_icon from './assestsLoginSign/email.png'
import password_icon from './assestsLoginSign/password.png'
// import {link } from  "react-router-dom";
// import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
  <div className="bg-gray-300 p-8 rounded shadow-md w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
    <div className="input flex items-center bg-gray-100 p-2 rounded mb-4 shadow-md">
      <img src={email_icon} alt="Email Icon" className="w-6 h-6 mr-2" />
      <input type="email" placeholder="Email" className="flex-1 p-2 outline-none" />
    </div>
    <div className="input flex items-center bg-gray-100 p-2 rounded mb-4 shadow-md">
      <img src={password_icon} alt="Password Icon" className="w-6 h-6 mr-2" />
      <input type="password" placeholder="Password" className="flex-1 p-2 outline-none" />
    </div>
    <button className="bg-blue-500 text-gray-100 p-2 rounded w-full mb-4">Login</button>
    <div className="text-center">
      <p className="text-gray-600">Don't have an account?</p>
      <button className="text-blue-500 underline">Sign Up</button>
    </div>
  </div>
</div>

  )
}

export default Login