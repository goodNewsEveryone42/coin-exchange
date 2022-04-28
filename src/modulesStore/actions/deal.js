export function setDeal(data) {
    return (dispatch) => {
        dispatch({type: "SET_DEAL", payload: data});
    }
}