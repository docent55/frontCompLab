import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from '../redux/authReducer';
import { workReducer } from '../redux/workReducer';


let reducers = combineReducers({
    auth: authReducer,
    work: workReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));    

window.store = store;

export default store;