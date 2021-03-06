import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";//another set of hooks to read directly from store and publish
import { fetchNProducts } from "../../../State/Actions";

//import DisplayDetailedProduct from "./DisplayDetailedProductComponent";
import DisplayDetailedProduct from "./DisplayDetProdCompHook";


let DisplayProductCompHook = ()=>{
    //below code makes our component a subscriber and state is the data avaible from store eventually reducers
    let products = useSelector((state)=> state.product.nproducts); // connects mapStateToProps
    let getProductUsingDispatch = useDispatch();

    useEffect(()=>{ //triggered after first render and then subsequent render
        console.log("Use Effect Gets Called a replacement of componentdidmount and componentdidupdate");
        products.length < 1 ? getProductUsingDispatch(fetchNProducts()) : "";
    }, [])

    return(
        <React.Fragment>
            {
                products.length >= 1 ?
                products.map((product)=>{
                    return <DisplayDetailedProduct product={product} key={product._id}/>;
                })
                :
                <p>No Products to display</p>    
            }
        </React.Fragment>
    )
}

export default DisplayProductCompHook;