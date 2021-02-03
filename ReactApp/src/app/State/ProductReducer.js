import * as ActionTypes from "./ActionTypes";

let INITIAL_STATE = {
    defaultProduct : {
        name : "",
        price : 0,
        camera : "",
        ram : "",
        display : "",
        color : ""
     },

     products:[],
     nproducts:[],
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
            return {...state, products:action.payload};

        case ActionTypes.FETCH_NPRODUCTS_FULFILLED:            
            return {...state, nproducts:action.payload};

        default:
            return state;
    }
}