import React from "react";
import ReactDOM from "react-dom/client";


// ----------------for single tag----------------


// const heading=React.createElement("h1",{id:"head",xyz:"abc"},"hello world from React")
// const root=ReactDOM.createRoot(document.querySelector("#root"))
// root.render(heading)


// ------------------for nested tag--------------------
/* <div id="parent">
    <div id="child">
        <h1>This is heading one</h1>
        <h2>This is heading two</h2>
    </div>
</div> */


// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//     [React.createElement("h1",{key: "1"},"This is heading one"),
//     React.createElement("h2",{key: "2"},"This is heading two")]
//     )
// )

// const root=ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent)

// root.render(parent)


// -------------for more nested structure------------
/* <div id="parent">
    <div id="child1">
        <h1>This is heading one</h1>
        <h2>This is heading two</h2>
    </div>
    <div id="child2">
        <h1>This is heading one</h1>
        <h2>This is heading two</h2>
    </div>
</div> */


// const parent=React.createElement("div",{id:" parent "},
//     [React.createElement("div",{key:" chil1 "},
//     [React.createElement("h1",{key :"1"},"This is heading one"),
//     React.createElement("h2",{key :"2"},"This is heading two")]
//     ),
//     React.createElement("div",{key:" "},
//         [React.createElement("h1",{key:"1"},"This is heading one"),
//         React.createElement("h2",{key:"2"},"This is heading two")]
//         )]
// )

// const root=ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent)

// root.render(parent)

const jsxheading=<h1>Hello World!  from React</h1>;   //single line jsx
const content=(<p> this is paragraph.                 
    this is paragraph.
</p>);                                                //multiple line jsx

console.log(jsxheading);

// const root=ReactDOM.createRoot(document.querySelector("#root"));
const para=ReactDOM.createRoot(document.querySelector("#content"));

// root.render(jsxheading);
// para.render(content);

//JSX(transpiled by Bable (package)) => React.createElement()=>js object(display on browser by ReactDOM through root.render(react element)) =>HTML element

//React Component
// 1. class based component(old way)
// 2. functional based Component(new way)

//React functional component(should start with capital letter)
//  is a js function that returns jsx

const HeadComponent1=()=>{
return <h1 > React Functional Component</h1>
}

const HeadComponent2=()=> <h1 className="head">React f.component</h1>

;

//both are same
const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<HeadComponent2/>)


//component composition
const Title1=()=>{
    return <h1>Hello React 1</h1>
};

const Title2=()=>{
    return (
        <div>
            <Title1/>
            <h1>Hello React 2</h1>
        </div>
    )
};
root.render(<Title2/>)


// react element inside react component
// react element inside react element
// react component inside react element
// react component inside react component

