import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{

  const [status,setStatus]=useState("Login")
  return(
    <div className="header">
      <div className="logo-container">
      <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul type="none">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login-button" onClick={()=>{
            if(status==="Login")
            {
              setStatus("Logout")
              console.log(status);
            }
            else{
              setStatus("Login")
              console.log(status);
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