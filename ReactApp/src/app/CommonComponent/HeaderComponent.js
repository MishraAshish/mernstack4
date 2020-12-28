import React from "react";

let Header = ()=>{
    return(
        <React.Fragment>
            <h1>
                This is going to be header component
            </h1>
        </React.Fragment>
    )
}

export default Header; //default export so needs to be imported default (without curly brackets)

export let newvar = "something"; // creating and exporting varible

export function Header2(params) { //named export (normal export, not a default export)
    return(
        <React.Fragment>
            <h1>
                This is going to be header2 component
            </h1>
        </React.Fragment>
    )
}


