import { httpServer } from '../../axiosService/axios';

export function getUser() {
    return (dispatch) => {
        httpServer.get().then(({data}) => {
            localStorage.setItem('userCoins', JSON.stringify(data));
            dispatch({type: "ADD_USER", payload: data});
        });
    };
}

export function getUserMock(dispatch, data) {
    localStorage.setItem('userCoins', JSON.stringify(data));
    dispatch({type: "ADD_USER", payload: {data}});
}
