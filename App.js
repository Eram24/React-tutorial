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
//     [React.createElement("h1",{},"This is heading one"),
//     React.createElement("h2",{},"This is heading two")]
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


const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"chil1"},
    [React.createElement("h1",{},"This is heading one"),
    React.createElement("h2",{},"This is heading two")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"This is heading one"),
        React.createElement("h2",{},"This is heading two")]
        )]
)

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)

root.render(parent)