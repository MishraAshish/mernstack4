import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
// import ReactNotification from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';


let Header = (props)=>{
    let userName = props.user.userName; //reading from userReducer
    return(
        <React.Fragment>
            {/* <ReactNotification /> */}
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
                {userName == "" ?<b> Please Login to see other features</b>:""}
            <hr/>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
            {userName &&
            <React.Fragment> 
                <NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink> 
                <NavLink to="/product" className="button" activeClassName="success" >Product </NavLink> 
                <NavLink to="/coupon" className="button" activeClassName="success" >Coupon </NavLink> 
            </React.Fragment>
            }
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
        </React.Fragment>
    )
}

let mapStateToProps = (state) => {
    return {
        user : state.user.user
    }
}

export default connect(mapStateToProps, null)(Header); //default export so needs to be imported default (without curly brackets)

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


