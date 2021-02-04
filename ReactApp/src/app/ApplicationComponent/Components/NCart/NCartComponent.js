import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import NCartItemComponent from "./NCartItemComponent";
import NCartSummaryComponent from "./NCartSummaryComponent";
import {nSaveItemsForCheckout} from "../../../State/Actions";

export default function NCartComponent(props) {
    //debugger;
    let cart = useSelector((state)=>state.ncart);
    let user = useSelector((state)=> state.user.user);
    let loading = useSelector((state)=>state.loading.loading);
    let dispatchItemToSave = useDispatch();

    let recalculate = (cartItems) => {
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    return(
        <React.Fragment>
            <h2>Cart Component</h2>
            {loading ? 
            <p>Saving Items for Checkout...</p>:
            <React.Fragment>
            {cart && cart.length ? 
            <React.Fragment>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(item=>{
                        return <NCartItemComponent 
                                        item={item}
                                        key={item.id}
                                        donotMakeEditable = {false}
                            />
                    })
                } 
            </tbody>
            </table>

            <NCartSummaryComponent summData={recalculate(cart)}/>

            <button onClick={() => dispatchItemToSave(nSaveItemsForCheckout(cart, user._id))} >
                    Save For Checkout
            </button> 
            <button onClick={() => props.history.push("/checkout")} >
                Go To Checkout
            </button>
            </React.Fragment>
            :             
            <div>
                {"No Items Added, Please add products from Product Component"}
            </div>
            }
            </React.Fragment>
            }
        </React.Fragment>
    )
}