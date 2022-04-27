import {createStore, compose, applyMiddleware} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../modulesStore/reducers";

const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

export default function configureStore(initialState){
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}