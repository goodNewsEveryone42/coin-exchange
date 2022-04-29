import {httpTest} from '../../axiosService/axios';
import axios from "axios";

export function getUser(data) {
    return (dispatch) => {
        dispatch({type: "ADD_USER", payload: {data}});
        localStorage.setItem("user", JSON.stringify(data));
    }
}

export function getUserMock(dispatch, data) {
    localStorage.setItem('userCoins', JSON.stringify(data));
    dispatch({type: "ADD_USER", payload: {data}});
}
