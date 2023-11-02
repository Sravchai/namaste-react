import React from "react";
import ReactDOM from "react-dom/client";


// React Element

const jsxheading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);


// React Component 
// Class-based Component - It is old way to create a component 
// Functional-based Component - new way 


// React Functional Compoent  - function that peice of JSX 

const number = 10;

const Title = () =>{
    return (
        <h1 className="head" tabIndex="5">
            Namaste React using JSX
        </h1>
    );
}

const HeadingComponent  = () => {
     
    return (
        <div id = "container">
            {/* {number}
            <Title/> */}
            {jsxheading}
            <h1 className="heading">Namaste React Functional Component</h1>
        </div>
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);