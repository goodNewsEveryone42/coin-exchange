import {httpTest} from '../../axiosService/axios';

export function getUser() {
    return (dispatch) => {
        httpTest.get().then(({data}) => {
            localStorage.setItem('userCoins', JSON.stringify(data));
            dispatch({type: "ADD_USER", payload: data});
        });
    };
}

export function getUserMock(dispatch, data) {
    localStorage.setItem('userCoins', JSON.stringify(data));
    dispatch({type: "ADD_USER", payload: {data}});
}
