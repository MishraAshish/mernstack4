//this file is going to read data from store->productReducer and then publish the same to product component

import {connect} from "react-redux"; //connect is the named export
import ProductComponent from "../../Components/Product/ProductComponent"; 

import { saveProduct } from "../../../State/Actions";

let mapStateToProps = (state)=>{
    return {
        defaultProd : state.product.defaultProduct
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        saveProduct : ( product )=>{
            dispatch(saveProduct(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);