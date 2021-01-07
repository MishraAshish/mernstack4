//this contains logic to generate new state, everytime when we dispatch user actions
// this will also contain initial state of User
import * as ActionTypes from "./ActionTypes";

let INITIAL_STATE = {
    user : {
        userName : "test user",
        password : "asdasdasd",
        street : "capitol hill",
        mobile : "8989898989898989",
        _id: ""
    }
}

let UserReducer = (previousState = INITIAL_STATE, action) => {
        
    switch (action.type) {        
        case ActionTypes.AddUserToStore:
            console.log("Adduser To Store Reducer", action)
            //we will create a new state using payload passed from user component and container
            //for every action dispatch reducer generates a new state
            // let newState = Object.assign(previousState);
            // newState.user = action.payload.user;

            return {...previousState, user:action.payload.user}; //returns a new state
    
        default:
            return previousState;
    }
}

export default UserReducer;