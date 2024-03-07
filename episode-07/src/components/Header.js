import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

  const [status,setStatus]=useState("Login")
  console.log("header loaded")
//1.no dependancy array
//2.[]i.e=>empty dependancy array
//3.[value]
  useEffect(()=>{
    console.log("useEffect called")
  },["status1"])

  return(
    <div className="header">
      <div className="logo-container">
      <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul type="none">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li>Cart</li>
          <button className="login-button" onClick={()=>{
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