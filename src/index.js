import React from "react";
import ReactDOM from "react-dom";

//In order for react to know it is going to be a component, function should be setup with Capital initial letter
function Greeting() {
  return <h4>This is Abhishek and this is my first component</h4>;
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
