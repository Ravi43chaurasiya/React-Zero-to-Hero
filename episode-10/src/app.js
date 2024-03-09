import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";


const AppLayout=()=>
{
  
  // console.log(params);
  return(
    <div className="app">
      <Header/>
      <Outlet></Outlet>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    
    path:"/",
    element:<AppLayout></AppLayout>,
    children:[ 
      {
        path:"/",
        element:<Body></Body>
      },
      {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/contact",
      element:<Contact></Contact>
    }],
    errorElement:<Error></Error>

  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu></RestaurantMenu>
  }
 
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
