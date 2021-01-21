import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

export default function NCartComponent(props) {
    //debugger;
    let cart = useSelector((state)=>state.ncart);

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
                    <th>Remove/Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(item=>{
                       return <tr id={item.__id}>
                                <td>{item.name}</td>                    
                                <td>{item.price}</td>
                                <td>{item.camera}</td>
                                <td>{item.ram}</td>
                                <td>{item.color}</td>
                                <td>{item.display}</td>
                                <td>
                                    <button>
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