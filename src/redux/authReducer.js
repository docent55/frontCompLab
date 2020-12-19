// import { stopSubmit } from 'redux-form';
import { authAPI } from '../API/API';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    username: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            
            return {...state, ...action.payload}
            
        default:
            return state;
    }
};

export const setAuthUserData = (id, username, isAuth) => ({type: SET_USER_DATA, payload: {id, username, isAuth}})


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    console.log(response)
    if (response.status === 200) {
        let {id, username} = response.data;
        console.log(id);
        dispatch(setAuthUserData(id, username, true));
    }
}

export const login = (password, username) => async (dispatch) => {
    
    let response = await authAPI.login(password, username);
    localStorage.setItem('token', response.data.auth_token);
    
    if (response.data.auth_token) {
        dispatch(getAuthUserData());   
    }
    // return response;
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    localStorage.removeItem('token');
    if (response.status === 204) {
        dispatch(setAuthUserData(null, null, false));
    }
}


