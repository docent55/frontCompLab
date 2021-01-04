import { stopSubmit } from 'redux-form';
import {authAPI} from '../API/API';
import { getAuthUserData } from './authReducer';
import { getInitiatorData } from './initiatorReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {         
    initialized: false
};

 export const appReducer = (state = initialState, action) => {

    switch(action.type) {
      case INITIALIZED_SUCCESS: 
        return {...state, 
          initialized: true}
         
        default:
            return state;
    }        
 };

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializHeader = () => async (dispatch) => {
  let responseAuthUserData = await dispatch(getAuthUserData());
  
  dispatch(initializedSuccess());
      }


    

export default appReducer;