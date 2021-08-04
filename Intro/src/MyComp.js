// let MyComp=()=>{
//     return (
//         <div>
//         <h1>This is My First Component.</h1>
//         <p>I am inevitable</p>
//         <img width="250" height="200"   src="https://i.kym-cdn.com/photos/images/newsfeed/001/535/089/5e9.jpg "alt="Broken"/>
//         <ul>
//             <li>And</li>
//             <li>I</li>
//             <li>Am</li>
//             <li>Iron Man</li>
//             <li>
//                 <img width="250" height="200"   src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/Iron-Man-Snapping-Infinity-Gauntlet.jpg "alt="Broken"/>
//             </li>
//         </ul>
//         </div>
//       );
// }

import React from "react";
class MyComp extends React.Component { //my components inherit react.components 
    state = {
        someNumber: 0,
        someOtherNumber: 100
    }
    render = () => {// if we want to use js in html then use {} and this
        return (
            <div>
                <br></br>
                <h1>This is class-based  Component. {this.state.someNumber + "*" + this.state.someOtherNumber + "=" + this.state.someNumber * this.state.someOtherNumber} </h1>
                <div>

                    <button onClick={() => {
                        console.log('button was clicked');
                        this.setState({ someNumber: this.state.someNumber + 1 });
                        this.setState({ someOtherNumber: this.state.someOtherNumber + 100 });
                        console.log(this.state.someNumber, this.state.someOtherNumber);
                    }
                    }>
                        Increment values</button>
                    <button onClick={() => {
                        console.log('button was clicked');
                        this.setState({ someNumber: this.state.someNumber - 1 });
                        this.setState({ someOtherNumber: this.state.someOtherNumber - 100 });
                        console.log(this.state.someNumber, this.state.someOtherNumber);
                    }
                    }>
                        Decremet values</button>

                </div>

            </div>
        );
    };
}

export default MyComp;

// Main advantage of class based components is that it enables STATE-> ie some peice of data stored in our component.
// As we make our class in java and create its object here the components usage are like objects of that class based components.
// Therefore we can have different values of STATE like object attribute.  
//Whenever state changes the component will re-render that is the render will execute again