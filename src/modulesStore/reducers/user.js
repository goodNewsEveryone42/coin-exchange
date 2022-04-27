const initialState = {"name": "Name"};

export default  function reducer(state = initialState, action){
    switch(action.type) {
        case "CHANGE_NAME":
            return {
                ...state, name: action.payload.data
            }
        default:
            return state;
    }
}