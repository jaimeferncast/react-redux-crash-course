// list of actions
export const depositMoney = (amount) => { // pass the payload as argument
    return (dispatch) => { // return a callback with the dispatch parameter that dispatches the action
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}