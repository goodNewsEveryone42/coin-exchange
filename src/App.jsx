import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import PrivateRoute from "./components/PrivateRoute";
import {useSelector, useDispatch} from "react-redux";
import {fetchPhoto} from './modulesStore/actions/getPgoto';
import React, {useState, useEffect} from 'react';
import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth,
    PanelHeader,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Main from "./pages/Main/Main.container";

function App(props) {
    // const {store} = props;

    const {viewWidth} = useAdaptivity();

    const dispatch = useDispatch();
    const user = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPhoto());
    }, [dispatch]);

    return (
        <AppRoot>
            <SplitLayout header={<PanelHeader separator={false}/>}>
                <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
                    <Router>
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                        </Routes>
                    </Router>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
}

export default App;
