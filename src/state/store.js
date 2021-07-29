// the store contains the reducers and the state
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers"

export const store = createStore(
    reducers, // reducers
    {}, // initial state
    applyMiddleware(thunk) // 
)