import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { removeItemN } from "../../../State/Actions";

export default function NCartComponent(props) {
    //debugger;
    let cart = useSelector((state)=>state.ncart);
    let removeDispatch = useDispatch();

    let removeItemFromCart = (itemid) => {
        removeDispatch(removeItemN(itemid))
    }

    console.log(cart);

    return(
        <React.Fragment>
            {cart && cart.length ? 
            <React.Fragment>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Camera</th>
                    <th>Ram</th>
                    <th>Color</th>
                    <th>Display</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(item=>{
                       return <tr id={item._id}>
                                <td>{item.name}</td>                    
                                <td>{item.price}</td>
                                <td>{item.camera}</td>
                                <td>{item.ram}</td>
                                <td>{item.color}</td>
                                <td>{item.display}</td>
                                <td>
                                    <button onClick={()=>removeItemFromCart(item._id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                    })
                } 
            </tbody>
            </table>
            </React.Fragment>
            :             
            "No Items Added"}
        </React.Fragment>
    )
}