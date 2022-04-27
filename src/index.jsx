import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import {Provider} from "react-redux";


const AppWrapper = () => {
    return <React.StrictMode>
        <Provider store={store}>
        <App
            store={store}
        />
        </Provider>
    </React.StrictMode>
}

const root = ReactDOM.render(<AppWrapper/>, document.getElementById('root'));

reportWebVitals();
