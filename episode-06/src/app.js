import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";






const AppLayout=()=>
{
  return(
    <div className="app">
      <Header/>
      <Body></Body>
    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout></AppLayout>);
// it will render the heading element inside the having id root and replace whatever there in index.html file for that div having id as root.