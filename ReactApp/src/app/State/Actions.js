//this will contain all the actions that are going to be raised by action creators
//action is an object that contains - type (action type) and payload (the data to be passed to store)
import * as ActionTypes from "./ActionTypes";

//action that would be dispatched to the store (eventually to reducer)
export const addUserToStore = (user) => ({        
    type: ActionTypes.AddUserToStore,
    payload: {user}
})
