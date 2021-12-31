import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div className="">
      <h3>hello world</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
        <img src="" alt="" />
      </ul>
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
