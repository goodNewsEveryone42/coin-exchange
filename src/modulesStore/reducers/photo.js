const initialState = {
    listPhoto: []
};

export default function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case "GET_PHOTO":
            return {
                ...state, listPhoto: action.payload
            }
        default:
            return state;
    }
}
