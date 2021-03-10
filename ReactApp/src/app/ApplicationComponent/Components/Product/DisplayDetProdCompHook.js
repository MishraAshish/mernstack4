import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addItemToNCart} from "../../../State/Actions"

export default function DisplayDetProdCompHook(props) {
    let product = props.product;
    let [showDetails, setShowDetails] = useState(false);
    let dispatchToNCart = useDispatch();

    let showHideDetails = (evt)=>{
        //debugger;
        evt.target.classList.contains("product") ? setShowDetails(!showDetails) : "";
    }

    let addToNCart = (product)=>{
        dispatchToNCart(addItemToNCart(product));
        setShowDetails(!showDetails);
    }
    
    return(
        <React.Fragment>
            <ul className={"product"} onClick={showHideDetails}>
                <li className={"product"}>
                    {product.name}                    
                    {showDetails ?
                        <ul className={"productDetails"}>
                            <li>{product.price}</li>
                            <li>{product.desc}</li>
                            <li>{product.rating}</li>
                            
                            <button onClick={()=>addToNCart(product)}>Add To Cart</button>
                        </ul>                        
                    :
                    ""}
                </li>
            </ul>
        </React.Fragment>
    )
}