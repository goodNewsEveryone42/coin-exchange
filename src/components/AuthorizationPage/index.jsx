import React from 'react';
import {BrowserRouter as Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = (props) => {
    const auth = useSelector((state) => state.auth);

    if (auth?.login) {
        return <Route {...props} />
    }
    return <Redirect to='/'/>
}

export default PrivateRoute;