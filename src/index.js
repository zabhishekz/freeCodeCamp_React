import React from "react";
import ReactDOM from "react-dom";

// JSX Rules
// return single element
// div/section/article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

//example -1
// function Greeting() {
//   return (
//     <div>
//       <div>
//         <h3>hello world</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <div></div>
//     </div>
//   );
// }

//example -2: using React.fragment
// function Greeting() {
//   return (
//     <React.Fragment>
//       <div>
//         <h3>hello world</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <div></div>
//     </React.Fragment>
//   );
// }

//example -3: using React.fragment (shortcut)
function Greeting() {
  return (
    <>
      <div>
        <h3>hello world</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <div></div>
    </>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
