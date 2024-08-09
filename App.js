import React from "react";
import ReactDOM from "react-dom";

/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
// var a = 5;
// function test(){
//      a = 8;
//     console.log(a);
// }
// test();
// console.log(a);

//JSX
const title = (<h1>Testing title</h1>);
const TitleComponent = () => {
     return <h1>Title Component</h1>
};
const HeadingComponent = () => (
    <div id="container">
        {title}
        <TitleComponent />
      <h1 id="heading" className="test">Namaste React Component</h1>
      </div>
);
  
const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<HeadingComponent />);
   