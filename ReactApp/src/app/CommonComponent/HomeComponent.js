import React, { Component } from "react";

export default class HomeComponent extends Component { //class component

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

    updateAge = ()=>{
        setInterval(() => {
            //this.state.age++;
            this.setState({ // set state is the react api which we must use to update the state
                age : this.state.age+1
            })

            console.log("Age "+ this.state.age);

            //force update - discuss later
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
            state = {};
        // } catch (error) {
        //     console.log("error" + error)
        // }
    }

    render(){
        alert("State "+ JSON.stringify(this.state))
        return(
            <React.Fragment>
                <h1>Home Component</h1>
                <b>{this.state.name}</b>
                <input type="text" value={this.state.name} onChange={this.onTextChange}/>
                <input type="text" value={this.state.age}/>

                {/* controlled Component implementation using ref keyword */}
                 <form onSubmit={this.handleSubmit}>
                     <label>
                     Name:
                         <input type="text" ref={this.input} placeholder="Please enter name"/>
                     </label>
                    
                     <label>
                     Age:
                         <input type="text" ref={this.inputAge} placeholder="Please enter age"/>
                     </label>

                     <input type="submit" value="Submit" />
                 </form>
            </React.Fragment>
        )
    }
}