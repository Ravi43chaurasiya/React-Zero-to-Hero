import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

  const [status,setStatus]=useState("Login")
  console.log("header loaded")

  useEffect(()=>{
    console.log("useEffect called")
  },["status1"])

  return(
    <div className="header flex justify-between bg-purple-300 items-center sticky top-0 h-[90px]">
      <div className="logo-container  ">
      <img className="logo h-[90px] bg-transparent opacity-50" src={LOGO_URL}></img>
      </div>
      <div className="nav-items  ">
        <ul type="none" className="flex items-center">
        <li className=" m-2 font-bold"><Link to="/">Home</Link></li>
          <li className=" m-2 font-bold"><Link to="/about"> About us</Link></li>
          <li className=" m-2 font-bold"><Link to="/contact">Contact us</Link></li>
          <li className=" m-2 font-bold">Cart</li>
          <button className="login-button mx-4 font-bold " onClick={()=>{
            if(status==="Login")
            {
              setStatus("Logout")
              
            }
            else{
              setStatus("Login")
             
            }
          }} >
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">{status}</span>
</button>

        </ul>

      </div>

    </div>
  )
}
export default Header;