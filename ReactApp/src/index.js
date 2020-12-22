console.log("This is the very first react code setup")
import React from "react";
import {render} from "react-dom";

import App from "./app/app";

render(
    <App />,
    document.getElementById("root") //providing the html element in which we need to inject react application
)