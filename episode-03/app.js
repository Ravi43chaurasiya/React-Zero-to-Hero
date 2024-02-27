import React from "react";
import  ReactDOM  from "react-dom/client";

const heading=React.createElement("h1",{id:"heading"},"Hello React");
const title=<h1 id="head">Hello raect element</h1>
//fuctional component
const Title=()=>(<h1 id="heading">Hello raect using jsx</h1>)
//functional component
//functional compositions
const HeadingComponent=()=>(
  <div id="container">
    {title}
    <Title></Title>
<h1>hello React Functinal component</h1>
</div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent></HeadingComponent>);
// it will render the heading element inside the having id root and replace whatever there in index.html file for that div having id as root.