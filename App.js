
import React from "react";
import ReactDOM from "react-dom/client";
// creating an element using react 
// react element
const heading = React.createElement("h1",{id:"heading"},"Namste React");
// creating an element using jsx
// jsx is html like syntax
// react element
const jsxHeading = <h1 id="headingjsx">Namste React from jsx</h1> 

// react functional component
// react functional component is a JS function which returns a jsx code
const HeadingComponent = ()=>{
return <div id="container"><h1 className="head">one way of creating functional component</h1></div>
}
const HeadingComponent2 =()=> {
return <div>
  {/* with the help of curly braces "{}" fyou can render any js code like react elements */}
  {jsxHeading} 
  <HeadingComponent/>
<h1>another way of creating functional component</h1>
</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// to render an element following syntax is used 
root.render(jsxHeading)
// to render functional component following syntax is used 
root.render(<HeadingComponent2/>)
