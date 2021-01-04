import React from "react";
import "../app.css";
import Header, {Header2, newvar} from "../app/CommonComponent/HeaderComponent";
//import * as Header from "../app/CommonComponent/HeaderComponent"; //wild card import
import Footer from "../app/CommonComponent/FooterComponent";
import Home from "../app/CommonComponent/HomeComponent";

//class component

class App extends React.Component{ //name of the component must start with a capital case
    constructor(props, context){
        super(props);
    }

    render(){
        let user = {
            name : "username",
            pwd : "welcome"
        }
        let a = 10, b = 15;
        return( //the jsx returned must have one top parent  //react uses diff algorithm to compare
            <React.Fragment> 
                {/* <h1>This is react code from react js page MERN</h1> */}
                {a+b}
                {a*b}
                <Header/>
                <Home name="Parents Name" />
                <Footer name="test name" address="test address" user={user}>
                    <b>This is bold html passed</b>
                    <i>This is italic html passed</i>
                </Footer>
            </React.Fragment>
        )
    }
}

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