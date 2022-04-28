const initialState = {
    login: true
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_COIN_VALUE":
            return {
                ...state, value: action.payload.data
            }
        default:
            return state;
    }
}
