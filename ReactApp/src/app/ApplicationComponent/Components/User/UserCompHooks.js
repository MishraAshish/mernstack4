//hooks are basically providing in built implementation of various features 
// : like state, subsrcibing/publishing from/to store within functional component

import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {signInUpUser} from "../../../State/Actions"; // add action - fetchHobbies

let UserCompHooks = (props)=>{
    
    //make our component publisher / action dispatcher instead of mapDispatchToProps
    let dispatchToSignInUp = useDispatch(); //initializing dispatcher to dispatch action to store 
    let getHobyListDispatch = useDispatch();


    //below code makes our component a subscriber and state is the data avaible from store eventually reducers
    let user = useSelector((state)=> state.user.user); // connects mapStateToProps
    //let hobyList = useSelector((state)=>state.hobby.hobbies)

    //useState : is the react hook which allows us to create a state like object individually
    let [userName, updateUserName] = new useState("Brian");
    let [password, setPassword] = new useState("");
    let [street, setStreet] = new useState("");
    let [mobile, setMobile] = new useState("");

    // useEffect(()=>{ //triggered after first render and then subsequent render
    //     console.log("Use Effect Gets Called a replacement of componentdidmount and componentdidupdate");
    //     hobyList.length < 1 ? getHobyListDispatch(fetchHobbies()) : "";
    // }, [])


    let onChangeText = (evt)=>{
        let target = evt.target; //core js way of reading the target we are typing in
        let classList = target.classList;
        let typedValue = target.value;
        
        //debugger;
        if (classList.contains("username")) {
            updateUserName(typedValue)
        } else if(classList.contains("pass")) {
            setPassword(typedValue)
        } else if(classList.contains("street")){
            setStreet(typedValue)
        } else if (target.value && target.value.length <= 11) {
            setMobile(typedValue)
        }
    }
    
    let loginUser = ()=>
    {
        let user = {userName, password, street, mobile};
        //alert(JSON.stringify(user));
        dispatchToSignInUp(signInUpUser(user));
    }

    return(
        <section className={"componentClass"}>
                {/* <b>{userName}</b> */}
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" value={userName||user.userName} 
                            placeholder="User Name" onChange={onChangeText} />
                    </div>
                    <div className="col-md-12">
                        <b>Password</b>
                        <input type="password" className="form-control col-md-6 pass" value={password||user.password} 
                            placeholder="Password"
                            onChange={onChangeText} />
                    </div>

                    <div className="col-md-12">
                        <b>Street </b>
                    <input type="text" className="form-control col-md-6 street" value={street||user.street} 
                          placeholder="Street Name"
                          onChange={onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={mobile||user.mobile} 
                            placeholder="Mobile" maxLength="11"
                            onChange={onChangeText} />
                    </div>
                    {/* {this.props.user._id} */}
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} value={"SignIn-Up"} onClick={loginUser}/>
                </div>
            </section>
    )
}

export default UserCompHooks;