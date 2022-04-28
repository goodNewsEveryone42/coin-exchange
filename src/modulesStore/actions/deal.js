export function setDeal(data) {
    return (dispatch) => {
        dispatch({type: "SET_DEAL", payload: {data}});
        localStorage.setItem("deal", JSON.stringify(data));
    }
}

export function clearDeal() {
    return (dispatch) => {
        dispatch({type: "CLEAR_DEAL", payload: {}});
    }
}

export function startDeal(data) {
    return (dispatch) => {
        dispatch({type: "START_DEAL", payload: {data}});
    }
}