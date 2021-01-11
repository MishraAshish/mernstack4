import {connect} from "react-redux"; //connect is the named export
import DispProductComponent from "../../Components/Product/DisplayProductComponent"; 

import {fetchProducts} from "../../../State/Actions";

let mapStateToProps = (state)=>{
    return {
        products : state.product.products
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts : ()=>{
            dispatch(fetchProducts())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DispProductComponent);