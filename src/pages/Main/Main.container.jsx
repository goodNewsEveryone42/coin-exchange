import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import AuthContainer from "../Auth/Auth.container";
import RenderComponent from "./components/Render.component";
import {getUserMock} from "../../modulesStore/actions/user";

const Main = (props) => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('userCoins')) {
            getUserMock(dispatch, JSON.parse(localStorage.getItem('userCoins')));
        }
    }, []);

    if (!user?.id) {
        return <AuthContainer/>
    }

    return <RenderComponent/>
}

export default Main;
