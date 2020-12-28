import React from "react";

import Header, {Header2, newvar} from "../app/CommonComponent/HeaderComponent";
//import * as Header from "../app/CommonComponent/HeaderComponent"; //wild card import

//class component

class App extends React.Component{ //name of the component must start with a capital case
    constructor(props, context){
        super(props);
    }

    render(){
        return( //the jsx returned must have one top parent
            <React.Fragment> 
                <h1>This is react code from react js page</h1>
                {newvar}
                <Header/>
                <Header2/>
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