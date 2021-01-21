import React from "react";
import CartListComponent from "../../Container/Cart/CartListContainer";
import CartSummaryComponent from "../../Container/Cart/CartSummaryContainer";

let CartComponent = (props) => {
    return(
        <div className="cartComponent">
                <h2>SynergisticIT Shopping Cart To Add Items</h2>
                { props.loading ?
                    <React.Fragment>
                        ...Saving Cart Items
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <p><b>Cart Length : {props.cart.length}</b></p>

                        <button onClick={props.addItemToCart} >
                            Add Item
                        </button>

                        <button onClick={props.emptyCart} >
                            Empty
                        </button>

                        <CartListComponent/>            
                        <CartSummaryComponent/>
                        
                        <button onClick={() => props.saveItemsForCheckout(props.cart, props.user._id)} >
                            Save For Checkout
                        </button> 
                        <button onClick={() => props.history.push("/checkout")} >
                            Go To Checkout
                        </button>
                    </React.Fragment>
                }
            </div>
    )
}

export default CartComponent;