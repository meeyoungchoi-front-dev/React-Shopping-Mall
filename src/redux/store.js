import {createStore , applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import rooReducer from './reducers/index';


let store = createStore(rooReducer, applyMiddleware(thunk));

export default store;