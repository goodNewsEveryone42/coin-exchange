import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import PrivateRoute from "./components/PrivateRoute";
import {useSelector, useDispatch} from "react-redux";
import { fetchPhoto } from './modulesStore/actions/getPgoto';
import React,  { useState, useEffect } from 'react';
import "@vkontakte/vkui/dist/vkui.css";

import Main from "./pages/Main/Main.container";
import RouteTabs from "./components/RouteTabs";

function App(props) {
    // const {store} = props;

    const dispatch = useDispatch();
    const user = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPhoto());
      }, [dispatch]);

    return (
            <div className="App">
                <Router>
                    {!user?.name ? <RouteTabs/> : null}
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                    </Routes>
                </Router>
            </div>
    );
}

export default App;
