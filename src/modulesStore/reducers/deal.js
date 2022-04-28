const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DEAL":
            return {
                ...action.payload.data
            }
        default:
            return state;
    }
}
