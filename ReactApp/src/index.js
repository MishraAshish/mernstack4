console.log("This is the very first react code setup")
import React from "react";
import {render} from "react-dom";

import App from "./app/app";

render(
    <App />, //injecting the react application to any container is known as bootstrapping
    document.getElementById("root") //providing the html element in which we need to inject react application
)