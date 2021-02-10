import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { removeItemN, updateItemN } from "../../../State/Actions";

export default function NCartItemComponent(props){

    let [qty, setQuantity] = new useState(props.item.qty);
    let removeDispatch = useDispatch();
    let updateDispatch = useDispatch();

    let removeItemFromCart = (itemid) => {
        removeDispatch(removeItemN(itemid))
    }
    
    let updateItemFromCart = (itemid, qty) => {
        updateDispatch(updateItemN(itemid, qty))
    }

    //es next
    let onChangeQuantity = (e) => {
        // target is input element, real dom element
        let target = e.target;
        setQuantity(target.value);
    }


    console.log("CartItem render", props.item.id);         
    let {item} = props;
        return(
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.rating}</td>
                <td>
                    {props.readOnly ?
                        qty
                        :
                        <input value={qty} 
                            type="number"
                            onChange={onChangeQuantity}                        
                        />                
                    }
                </td> 
                
                <td> {item.price * item.qty} </td>
                {props.readOnly ?" ":<td>
                        <button onClick={()=>removeItemFromCart(item._id)}>
                            Remove
                        </button>
                    </td>
                }
                {props.readOnly ? " ":
                    <td>
                        <button onClick={() => updateItemFromCart(item._id, qty)}>
                            Update
                        </button>
                    </td>
                }
            </tr>
        )
    }
