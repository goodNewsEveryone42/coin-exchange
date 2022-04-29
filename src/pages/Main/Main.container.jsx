import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import AuthContainer from "../Auth/Auth.container";
import RenderComponent from "./components/Render.component";
import {getUserMock} from "../../modulesStore/actions/user";
import axios from "axios";
import {getUser} from "../../modulesStore/actions/user";
import RouteTabs from "../../components/RouteTabs";

const Main = (props) => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const token = document.cookie.match(/access_token=(.+?)(;|$)/);

    useEffect(() => {
        if (token && token[1]) {
            axios.get(`http://172.27.73.179/users/${token[1]}`).then(res => {
                dispatch(getUser(res?.data));
            })
        }
        if (localStorage.getItem('userCoins')) {
            getUserMock(dispatch, JSON.parse(localStorage.getItem('userCoins')));
        }
    }, []);

    if (!user?.id) {
        return <AuthContainer/>
    }

    return <>
        <RouteTabs/>
        <RenderComponent type={props.type}/>
    </>
}

export default Main;
