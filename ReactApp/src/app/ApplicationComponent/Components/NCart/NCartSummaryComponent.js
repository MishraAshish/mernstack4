import React from "react";

export default function NCartSummaryComponent(props) {
    let {
        count,
        amount
    } = props.summData; //destructuring //{...result} == {amount , count}

    console.log()
    //count = props.count , amount = props.amount
    return (
        <div> 
            <h2>Cart Summary</h2>
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
        </div>
    )     
}