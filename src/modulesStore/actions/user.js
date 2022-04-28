import {httpTest} from '../../axiosService/axios';
import axios from "axios";

export function getUser() {
    axios.get('https://sys.mail.ru/oauth2/authorize/?client_id=bbccb44e9b864ecc997afa141628879f&scope=self_profile&response_type=code&state=random_string').then(res => {
        console.log(res);
    });
}

export function getUserMock(dispatch, data) {
    localStorage.setItem('userCoins', JSON.stringify(data));
    dispatch({type: "ADD_USER", payload: {data}});
}
