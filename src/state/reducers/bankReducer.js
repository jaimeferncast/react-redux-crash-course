const initialState = 0;

// reducer is a function that receives initial state and action, and returns a state
const reducer = (
    state = initialState,
    action
) => {
    // action has type and payload keys
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload
        default:
            return state
    }
}

export default reducer;