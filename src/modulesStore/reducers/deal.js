const initialState = localStorage.getItem("deal")?{...JSON.parse(localStorage.getItem("deal"))}:{};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DEAL":
            return {
                ...action.payload.data
            }
        case "CLEAR_DEAL":
            localStorage.removeItem("deal");
            return {};
        case "START_DEAL":
            localStorage.setItem("deal", JSON.stringify({...state, start: action.payload.data}))
            return {...state, start: action.payload.data};
        default:
            return state;
    }
}
