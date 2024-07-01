import React ,{useState} from 'react'
import user_icon from '../assestsLoginSign/person.png'
import email_icon from '../assestsLoginSign/email.png'
import password_icon from '../assestsLoginSign/password.png'
import student_Id from '../assestsLoginSign/studentId.png'
import courseId from '../assestsLoginSign/Course.png'
import cant_Logo from '../assestsLoginSign/canteenLogo.jpg'
import cant_addr from '../assestsLoginSign/canteenLocation.png'
const LoginSignup = () => {
const [userType, setUserType] = useState('student');

return (
    <div className="container bg-slate-500 flex flex-col items-center justify-center h-screen p-4">
    <div className="header mb-6 text-center">
      <div className="text-4xl font-bold text-white mb-2">Sign Up</div>
      <div className="underline w-20 h-1 bg-white mx-auto"></div>
    </div>
    <div className="inputs w-full max-w-md">
      <div className="input flex items-center bg-white p-2 rounded mb-4 shadow-md">
        <select 
          className="flex-1 p-2 outline-none"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="canteenadmin">Canteen Admin</option>
        </select>
      </div>
      <div className="input flex items-center bg-white p-2 rounded mb-4 shadow-md">
        <img src={user_icon} alt="User Icon" className="w-6 h-6 mr-2" />
        <input type="text" placeholder="Username" className="flex-1 p-2 outline-none" />
      </div>
      <div className="input flex items-center bg-white p-2 rounded mb-4 shadow-md">
        <img src={email_icon} alt="Email Icon" className="w-6 h-6 mr-2" />
        <input type="email" placeholder="Email" className="flex-1 p-2 outline-none" />
      </div>
      <div className="input flex items-center bg-white p-2 rounded mb-4 shadow-md">
        <img src={password_icon} alt="Password Icon" className="w-6 h-6 mr-2" />
        <input type="password" placeholder="Password" className="flex-1 p-2 outline-none" />
      </div>
      {userType === 'student' && (
        <div className="additional-student-inputs">
          <div className="input flex items-center bg-white p-2 rounded mb-4 shadow-md">
          <img src={student_Id} alt="Password Icon" className="w-6 h-6 mr-2" />
            <input type="text" placeholder="Student ID" className="flex-1 p-2 outline-none" />
          </div>
          <div className="input flex items-center bg-white p-2 rounded mb-4 shadow-md">
          <img src={courseId} alt="Password Icon" className="w-6 h-6 mr-2" />
            <input type="text" placeholder="Course" className="flex-1 p-2 outline-none" />
          </div>
        </div>
      )}
      {userType === 'canteenadmin' && (
        <div className="additional-canteenadmin-inputs">
          <div className="input flex items-center bg-white p-2 rounded mb-4 shadow-md">
          <img src={cant_Logo} alt="Password Icon" className="w-6 h-6 mr-2" />
            <input type="text" placeholder="Canteen Name" className="flex-1 p-2 outline-none" />
          </div>
          <div className="input flex items-center bg-white p-2 rounded mb-4 shadow-md">
          <img src={cant_addr} alt="Password Icon" className="w-6 h-6 mr-2" />
            <input type="text" placeholder="Canteen Location" className="flex-1 p-2 outline-none" />
          </div>
        </div>
      )}
    </div>
    <div className="forgot-password text-white mb-6">
      Lost Password? <span className="underline cursor-pointer">Click Here</span>
    </div>
    <div className="submit-container w-full max-w-md flex justify-between">
      <div className="submit bg-blue-500 text-white text-center py-2 px-4 rounded cursor-pointer shadow-md hover:bg-blue-700 transition">
        Sign Up
      </div>
      <div className="submit bg-green-500 text-white text-center py-2 px-4 rounded cursor-pointer shadow-md hover:bg-green-700 transition">
        Login
      </div>
    </div>
  </div>
)
  
}

export default LoginSignup