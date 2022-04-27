import { httpTest } from '../../axiosService/axios';

export function fetchPhoto() {
    return (dispatch) => {
        httpTest.get().then(({ data }) => {
            dispatch({ type: "GET_PHOTO", payload: data });
            console.log(data);
        });
    };
}