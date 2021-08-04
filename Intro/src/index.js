import React from "react";//logic creation
import ReactDOM from "react-dom";//logic rendering
//Components
import MyComp from "./MyComp";
import App from "./App";

ReactDOM.render(//component inserted at below address
    <div>

    <App />
    <MyComp />
    <MyComp />
    <MyComp />
    <MyComp />
    <MyComp />
    </div>

    ,document.getElementById("root"),
);
// There are two types of components function or class 
// We use JSX i.e. extended java script:-> where we can directly write html in js.
// Functional are ones made from function.
// Where component is sort of create element
// When we write the function App in angular brackets it makes a sort of tag of that component which can be reused as we please
// File name should be capitalised and the name of function should be same as file