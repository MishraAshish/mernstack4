import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addItemToNCart} from "../../../State/Actions"

export default function DisplayDetProdCompHook(props) {
    let product = props.product;
    let [showDetails, setShowDetails] = useState(false);
    let dispatchToNCart = useDispatch();

    let showHideDetails = (evt)=>{
        evt.target.classList.contains("product") ? setShowDetails(!showDetails) : "";
    }

    let addToNCart = (product)=>{
        dispatchToNCart(addItemToNCart(product));
    }
    
    return(
        <React.Fragment>
            <ul className={"product"} onClick={showHideDetails}>
                <li className={"product"}>
                    {product.name}                    
                    {showDetails ?
                        <ul className={"productDetails"}>
                            <li>{product.price}</li>
                            <li>{product.camera}</li>
                            <li>{product.ram}</li>
                            <li>{product.display}</li>
                            <li>{product.color}</li>
                            
                            <button onClick={()=>addToNCart(product)}>Add To Cart</button>
                        </ul>                        
                    :
                    ""}
                </li>
            </ul>
        </React.Fragment>
    )
}