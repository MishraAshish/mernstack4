import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DisplayProductCompHook from "./DisplayProductCompHook";
// import DisplayProducts from "../../Container/Product/DisplayProductContainer";


import { saveNProduct } from "../../../State/Actions";

//creating functional component using react hooks and react-redux hooks

let ProductComponentHooks = (props) => {

    const [name, setName] = useState("Product Name"); //initializes the name and returns a callback to save name on state change
    const [price, setPrice] = useState(0);
    const [desc, setDescription] = useState("Product Description");
    const [rating, setRating] = useState("Product Rating");

    //using useDispatch to publish data to store
    let dispatchToSave = useDispatch(); //this returns a dispatcher so that ajax call can be made synchronously

    let captureValueFromTextBoxes = (evt)=>{
        let target = evt.target;
        let classlist = target.classList;

        if(classlist.contains("pname")){
            setName(target.value)
        }else if(classlist.contains("price")){
            setPrice(parseInt(target.value))
        }else if(classlist.contains("desc")){
            setDescription(target.value)
        }else{
            setRating(target.value)
        }
    }

    let saveProductClick = ()=>{
         //saving product using server call
         alert(`You've saved a product with these details: Name = ${name}, Price = $${price}, Description = ${desc}, Rating = ${rating}`)
         
         let productToSave = {
             name, 
             price,
             desc,
             rating
         };
         dispatchToSave(saveNProduct(productToSave))
    }

    return(
        <React.Fragment>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 pname" value={name} 
                            placeholder="Product Name"
                            onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6 price" value={price} 
                          placeholder="Product Price"
                          onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6 desc" value={desc} 
                          placeholder="Please Describe the product"
                          onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" value={rating} 
                          placeholder="Ratings"
                          onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <input type="button" className={"btn btn-primary col-md-3"} value={"Save Product"} onClick={saveProductClick}/>
                </div>
                
                <br/>
                {/* <DisplayProducts/> */}
                <DisplayProductCompHook />
            </section>
        </React.Fragment>
    )
}

export default ProductComponentHooks;