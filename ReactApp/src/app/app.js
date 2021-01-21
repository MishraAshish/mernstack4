import React from "react";
import "../app.css";
//import Header, {Header2, newvar} from "../app/CommonComponent/HeaderComponent";
//import * as Header from "../app/CommonComponent/HeaderComponent"; //wild card import
//import Footer from "../app/CommonComponent/FooterComponent";
//import Home from "../app/CommonComponent/HomeComponent";
//import About from "../app/CommonComponent/AboutComponent";
//import NotFound from  "../app/CommonComponent/PageNotFound";
//import User from "./ApplicationComponent/Components/User/UserComponent";
//import User from "./ApplicationComponent/Container/User/UserContainer";
//import UserHook from "./ApplicationComponent/Components/User/UserCompHooks";
//import Product from "./ApplicationComponent/Container/Product/ProductContainer";
//import DisplayProduct from "./ApplicationComponent/Container/Product/DisplayProductContainer";
//import ProdHook from "./ApplicationComponent/Components/Product/ProductComponentHooks";
//import Cart from "./ApplicationComponent/Container/Cart/CartContainer";
//import Checkout from "./ApplicationComponent/Container/Checkout/CheckoutContainer";
//import Coupon from "./ApplicationComponent/Components/Coupon/CouponComponent";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Loadable from "react-loadable"; // Importing Loadable to be used for lazy loading

// functional component, used as placeholder
//when lazy loaded modules delayed
function Loading() {
    return (
        <div>
            Loading Project...
        </div>
    )
}

const Home = Loadable({
    loader: () => import("./CommonComponent/HomeComponent"),
    loading: Loading,
});

const Header = Loadable({
    loader: () => import("./CommonComponent/HeaderComponent"),
    loading: Loading,
});

const Footer = Loadable({
    loader: () => import("./CommonComponent/FooterComponent"),
    loading: Loading,
});

const About = Loadable({
    loader: () => import("./CommonComponent/AboutComponent"),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import("./CommonComponent/PageNotFound"),
    loading: Loading,
});

const UserHook = Loadable({
    loader: () => import("./ApplicationComponent/Components/User/UserCompHooks"),
    loading: Loading,
});

const User = Loadable({
    loader: () => import("./ApplicationComponent/Container/User/UserContainer"),
    loading: Loading,
});

const DisplayProduct = Loadable({
    loader: () => import("./ApplicationComponent/Container/Product/DisplayProductContainer"),
    loading: Loading,
});

const ProdHook = Loadable({
    loader: () => import("./ApplicationComponent/Components/Product/ProductComponentHooks"),
    loading: Loading,
});

const Cart = Loadable({
    loader: () => import("./ApplicationComponent/Container/Cart/CartContainer"),
    loading: Loading,
});

const Checkout = Loadable({
    loader: () => import("./ApplicationComponent/Container/Checkout/CheckoutContainer"),
    loading: Loading,
});

const Coupon = Loadable({
    loader: () => import("./ApplicationComponent/Components/Coupon/CouponComponent"),
    loading: Loading,
});

const NCart = Loadable({
    loader: () => import("./ApplicationComponent/Components/NCart/NCartComponent"),
    loading: Loading,
});

class App extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Router>
                    <Header />
                        <Switch>
                            <Route path="/home" exact component={Home} />
                            <Route path="/user" exact component={User} />
                            <Route path="/userhook" exact component={UserHook} />
                            {/* <Route path="/product" exact component={Product} /> */}
                            <Route path="/product" exact component={ProdHook} />
                            {/* <Route path="/cart" exact component={Cart} /> */}
                            <Route path="/cart" exact component={NCart} />
                            <Route path="/display" exact component={DisplayProduct} />
                            <Route path="/checkout" exact component={Checkout} />
                            <Route path="/coupon" exact component={Coupon} />
                            <Route path="/about" exact component={About} />
                            <Route path="/about/:id" exact component={About} />
                            {/* <Route path="/" component={Home} /> */}
                            <Route path="*" component={NotFound} />
                        </Switch>
                    <Footer />
                </Router>
            </React.Fragment>
        )
    }


}


//class component
// class App extends React.Component{ //name of the component must start with a capital case
//     constructor(props, context){
//         super(props);
//         this.state = {
//             childValue : "No child data sent"
//         }
//     }

//     getDataFromChild = (data)=>{ //call back function to be executed in child component to read data
//         //alert("data from child = "+ data);
//         this.setState({ //firstName, lastName
//             childValue : data
//         })
//     }

//     render(){
//         let user = {
//             name : "username",
//             pwd : "welcome"
//         }
//         let a = 10, b = 15;
//         return( //the jsx returned must have one top parent  //react uses diff algorithm to compare
//             <React.Fragment> 
//                 {/* <h1>This is react code from react js page MERN</h1> */}
//                 {a+b}
//                 {a*b}
//                 <b>{this.state.childValue}</b>
//                 <Header/>
//                 <Home funcAsProp={this.getDataFromChild}/>
//                 <About />
//                 <Footer name="test name" address="test address" user={user}>
//                     <b>This is bold html passed</b>
//                     <i>This is italic html passed</i>
//                 </Footer>
//             </React.Fragment>
//         )
//     }
// }

//functional component
// let App = () => {
//     let variable = "Asdasd";
//     return( //jsx : javascript like xml structure
//         <div>
//             <h1>This is react code from react js page</h1>
//             {newvar}
//             <Header/>
//             <Header2/>
//         </div>
//     )
// }

export default App;