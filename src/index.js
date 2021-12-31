import React from "react";
import ReactDOM from "react-dom";

//stateless functional component
//always return JSX

// function Greeting() {
//   return <h4>hello world</h4>;
// }

const Greeting = () => {
  return React.createElement("h1", {}, "hello world");
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
