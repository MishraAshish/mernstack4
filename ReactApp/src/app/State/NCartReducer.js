import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = []; //instead of objet in array we are directly putting array

export default function NCartReducer(state = INITIAL_STATE, action) {
    console.log("ncart Reducer", state, action);
    switch(action.type) {
        case ActionTypes.ADD_ITEM_N:
            //debugger
            let newState = state.filter(item => item._id != action.payload.item._id);
            return [...newState, action.payload.item];
        
        //empty cart
        case ActionTypes.EMPTY_CART_N:
            return [];

        //update the cart item
        case ActionTypes.UPDATE_ITEM_N:
            return state.map(item => { //here state is cart items array
                    if (item.id != action.payload.id){
                        return item;
                    }else{
                        return {...item, qty: action.payload.qty}
                }
        })

        //delete cart item which needs to be removed
        case ActionTypes.REMOVE_ITEM_N: 
            return state.filter(item => item.id != action.payload.id)

        //return basic intial state
        default:
            return state;
    }
}