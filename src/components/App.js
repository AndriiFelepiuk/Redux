import Counter from "./Counter";
import React from "react";
import {bindActionCreators, createStore} from "redux";
import * as actions from "../actions";
import reducer from "../reducer";
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
const store = createStore(reducer)
const {dispatch, subscribe, getState} = store
const App = () =>{
    return(
        <Counter />
        // <Counter
        //     counter={getState().value}
        //     inc={inc}
        //     dec={dec}
        //     rnd={()=>{
        //         const value = Math.floor(Math.random() * 10);
        //         rnd(value);
        //     }}/>
    )
}
export default App;