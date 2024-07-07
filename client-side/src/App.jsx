// import React from 'react'
// import LoginSignup from './components/Login-signup/LoginSignup'

// function App() {
//   return (
//       <div>
//         <LoginSignup></LoginSignup>
//       </div>
        
//   )
// }

// export default App

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Cart from "./components/Cart.jsx"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Login from "./components/Login.jsx";
import LoginSignup from "./components/LoginSignup.jsx"
// import RestroMenu from "./components/RestroMenu.jsx";

const AppLayout =()=>{
         return (
            <div className="app">
            <Header/>
{/* This outlet(given by react router dom) 
will be replaced by the component whose path is being called */}
            <Outlet/>
            </div>
         )
}

function App() {

   const appRouter= createBrowserRouter([
      {
         path: "/",
         element: <AppLayout/>,
         children:[
            {
               path:"/",
               element: <Body/>,
            },
            {
               path:"/about",
               element: <About/>,
            },
            {
               path:"/contact",
               element:<Contact/>
            },
            {
              path:"/cart",
              element:<Cart/>
            },
            {
              path:"/login",
              element:<Login/>
            },
            {
              path:"/signup",
              element:<LoginSignup/>
            },
            // {
            //    path:"/restaurant/:resId",
            //    element:<RestroMenu/>
            // },
         ],
         errorElement:<Error/>,
      },
   ])

   return (<RouterProvider router={appRouter}/>)
}

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter}/>);

export default App