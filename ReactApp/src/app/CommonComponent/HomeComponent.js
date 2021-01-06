import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

//export default class HomeComponent extends Component { //class component

//this component contains inbuilt shouldComponent update to check each and every 
//state and props so we need not to implment it while using PureComponent class
export default class HomeComponent extends PureComponent { 

    //creation life cycle methods
    constructor(props, context){
        super();
        this.state = { // state is mutable object which user can update
            name : props.name,
            age : 18
        }
        //this.updateAge();
        this.input = React.createRef(); //as we dont have any html selectors available in react so this provides a reference to html
        this.inputAge = React.createRef();
    }

    componentDidMount(){
        //this gets called immediately after first render and your view is ready
        //change the state using - setState and can access the html/view and can make ajax to server
        console.log("componentDidMount");
        //debugger;
        setTimeout(() => {
            this.input.current.focus();
            //this.input.current.value = "Added Value in Did Mount";   
            this.inputAge.current.value = "Trump";
            this.updateAge();
        }, 3000);
    }

    //destruction life cycle methods
    componentWillUnmount(){
        console.log("componentWillUnmount");
        //previous component needs to clear all subscriptions and any pending calls while navigating to other component
    }

    //update life cycle methods
    // shouldComponentUpdate(nextState, nextProps) {
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);
    //     if (nextProps.age == this.state.age || nextProps.age < 30) {
    //         return false;
    //     } else {
    //         return true;    
    //     }
    // }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }


    updateAge = ()=>{
        setInterval(() => {
            //this.state.age++;
            this.setState({ // set state is the react api which we must use to update the state
                //age : this.state.age+1
                age : 20,
                name: "Ashish"
            })

            //console.log("Age "+ this.state.age);

            console.log("Name Updates "+ this.state.name);

            //this.state.age++;
            //this.forceUpdate(); //updating state with forceUpdate will skip shouldComponentUpdate thus making logics fail

        }, 1000);
    }

    onTextChange = (e)=>{
        console.log("Typed Value - " + e.target.value)
        let userVal = e.target.value;
        this.setState({
            name:userVal
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        //try {
            this.setState({
                name: this.input.current.value, //reading directly values from html elements which are created by ref 
                age: this.inputAge.current.value
            })
//            state = {};
        // } catch (error) {
        //     console.log("error" + error)
        // }
    }

    render(){
        return(
            <div className={"loadimage"} style={{backgroundImage: "url(./images/hm_pic4.jpg)"}}>
                    {/* <img src={"./images/hm_pic4.jpg"} /> */}
                    {this.state.Title}
                    <br/>
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to user's cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                    </ul>

                    {/* <label>
                    Address:
                         <input type="text" ref={this.inputAddress} placeholder="Please enter age"/>
                     </label> */}
                    <button onClick={()=> this.props.history.push("/about/2500")}>GoTo About Page</button>
                    <br/>
                    <button onClick={()=> this.props.history.push("/hook")}>GoTo React Hooks</button>
                </div>
        )
    }

    // render(){
    //     //alert("State "+ JSON.stringify(this.state))
    //     console.log("Render Method " +this.state.age)
    //     return(
    //         <React.Fragment>
    //             <h1>Home Component</h1>
    //             <b>{this.state.name}</b>
    //             <input type="text" value={this.state.name} onChange={this.onTextChange}/>
    //             <input type="text" value={this.state.age} />

    //             {/* <input type="button" className="button" onClick={()=>this.props.funcAsProp("Joe Biden")} value="Call Back To Parent"></input> */}
    //             <input type="button" className="button" onClick={()=>this.props.funcAsProp(this.state.age)} value="Call Back To Parent"></input>

    //             {/* controlled Component implementation using ref keyword */}
    //              <form onSubmit={this.handleSubmit}>
    //                  <label>
    //                  Name:
    //                      <input type="text" ref={this.input} placeholder="Please enter name"/>
    //                  </label>
                    
    //                  <label>
    //                  Age:
    //                      <input type="text" ref={this.inputAge} placeholder="Please enter age"/>
    //                  </label>

    //                  <input type="submit" value="Submit" />
    //              </form>
    //         </React.Fragment>
    //     )
    // }
}

// HomeComponent.defaultProps = {
//     name : "Default Name When not supplied"
// }

HomeComponent.propTypes = {
    name: PropTypes.string.isRequired
}