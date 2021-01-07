//this file will use connect method of react-redux library to give access of store and also allow us to dispatch action
import {connect} from "react-redux";
import UserComponent from "../../Components/User/UserComponent";

import {addUserToStore, signInUpUser} from "../../../State/Actions";

//we have been given with two methods
//1. mapStateToProps - allows us to access everything from store in component props (subscriber)

let mapStateToProps = (state)=>{ //state <=> store
    return {
        user : state.user.user  //state(store.js).user(user in store.js).user(user in userReducer.js)
    }
}

//2. mapDispatchToProps - allows us to dispatch action to store/ reducers (publisher)
let mapDispatchToProps = (dispatch) => {
    return {
        // loginUser : (user)=>{ //this will take action to be dispatched
        //     dispatch(addUserToStore(user))
        // }
        loginUser : (user)=>{ //this will invoke signin method in action.js file  and then addusertostore action to be dispatched
            dispatch(signInUpUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);