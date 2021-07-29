// combine all the reducers into the reducers object
import { combineReducers } from "redux";
import bankReducer from "./bankReducer"

const reducers = combineReducers({ // takes the state object as argument
    bank: bankReducer
})

export default reducers
