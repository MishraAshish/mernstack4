import React from "react";
import {NavLink} from "react-router-dom";

let Header = (props)=>{
    let userName = "";//props.user.userName;
    return(
        <React.Fragment>
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
                {userName == "" ?<b> Please Login to see other features</b>:""}
            <hr/>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
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


