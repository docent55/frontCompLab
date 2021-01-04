import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from '../redux/authReducer';
import { workReducer } from '../redux/workReducer';
import { rankReducer } from '../redux/rankReducer';
import { positionReducer } from './positionReducer';
import { subdivisionReducer } from './subdivisionReducer';
import { initiatorReducer } from './initiatorReducer';
import { appReducer } from './appReducer';

let reducers = combineReducers({
    auth: authReducer,
    work: workReducer,
    ranks: rankReducer,
    positions: positionReducer,
    subdivisions: subdivisionReducer,
    initiators: initiatorReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));    

window.store = store;

export default store;