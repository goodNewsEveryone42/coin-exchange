const initialState = {"name": "Name"};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state, ...action.payload.data
            }
        default:
            return state;
    }
}
