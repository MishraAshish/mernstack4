import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DisplayProductCompHook from "./DisplayProductCompHook";
// import DisplayProducts from "../../Container/Product/DisplayProductContainer";


import { saveProduct } from "../../../State/Actions";

//creating functional component using react hooks and react-redux hooks

let ProductComponentHooks = (props) => {

    const [name, setName] = useState("Initial Name"); //initializes the name and returns a callback to save name on state change
    const [price, setPrice] = useState(0);
    const [camera, setCamera] = useState("Initial Camera");
    const [color, setColor] = useState("Initial Color");
    const [display, setDisplay] = useState("Initial Display");
    const [ram, setRam] = useState("Initial RAM");

    //using useDispatch to publish data to store
    let dispatchToSave = useDispatch(); //this returns a dispatcher so that ajax call can be made synchronously

    let captureValueFromTextBoxes = (evt)=>{
        let target = evt.target;
        let classlist = target.classList;

        if(classlist.contains("pname")){
            setName(target.value)
        }else if(classlist.contains("price")){
            setPrice(parseInt(target.value))
        }else if(classlist.contains("camera")){
            setCamera(target.value)
        }else if(classlist.contains("color")){
             setColor(target.value)
        }
        else if(classlist.contains("display")){
            setDisplay(target.value)
        }
        else{
            setRam(target.value)    
        }
    }

    let saveProductClick = ()=>{
         //saving product using server call
         alert(`You've saved a product with these details: Name = ${name}, Price = $${price}, Camera = ${camera}, Color = ${color},  Display = ${display}, RAM = ${ram}`)
         
         let productToSave = {
             name, 
             price,
             camera,
             color, 
             display,
             ram
         };
         dispatchToSave(saveProduct(productToSave))
         //this.props.saveProduct(this.state);
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
                        <b>Camera </b>
                    <input type="text" className="form-control col-md-6 camera" value={camera} 
                          placeholder="Camera"
                          onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>RAM </b>
                    <input type="text" className="form-control col-md-6 ram" value={ram} 
                          placeholder="ram"
                          onChange={captureValueFromTextBoxes} />
                    </div>

                    <div className="col-md-12">
                        <b>Display </b>
                    <input type="text" className="form-control col-md-6 display" value={display} 
                          placeholder="Display"
                          onChange={captureValueFromTextBoxes} />
                    </div>

                    <div className="col-md-12">
                        <b>Color </b>
                    <input type="text" className="form-control col-md-6 color" value={color} 
                          placeholder="Color"
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