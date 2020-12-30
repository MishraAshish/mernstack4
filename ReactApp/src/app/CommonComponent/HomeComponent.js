import React, { Component } from "react";

export default class HomeComponent extends Component { //class component

    constructor(props, context){
        super();
        this.state = { // state is mutable object which user can update
            name : props.name,
            age : 18
        }
        //this.updateAge();
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

    render(){
        return(
            <React.Fragment>
                <h1>Home Component</h1>
                <b>{this.state.name}</b>
                <input type="text" value={this.state.name} onChange={this.onTextChange}/>
                <input type="text" value={this.state.age}/>
            </React.Fragment>
        )
    }
}