import { positionAPI, rankAPI, subdivisionAPI, initiatorAPI } from '../API/API';
import { setPositionData} from './positionReducer'
import { getRankData } from './rankReducer';
import { getSubdivisionData } from './subdivisionReducer';

const SET_INITIATOR_FORM_DATA = 'SET_INITIATOR_FORM_DATA';

let initialState = {
    initializedSuccessIniciator: false,
    initiatorsData: []
        // {id: null,
        //     family_name: null,
        //     first_name: null,
        //     second_name: null,
        //     rank: null,
        //     position: null,
        //     subdivision: null
        //     }

};

export const initiatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIATOR_FORM_DATA:
            
            return {...state, initializedSuccessIniciator: true}
            
        default:
            return state;
    }
};

export const setInitiatorData = () => ({type: SET_INITIATOR_FORM_DATA});

export const getInitiatorData = () => async (dispatch) => {
    let responseRank = await rankAPI.getRanks();
    let responsePosition = await positionAPI.getPositions();
    let responseSubdivision = await subdivisionAPI.getSubdivision();
    console.log(responseRank)
    // if (responseRank.status === 200) {
    //     let ranks = responseRank.data;
    //     console.log(ranks);
    await dispatch(setPositionData(responsePosition.data));
    await dispatch(getRankData(responseRank.data));
    await dispatch(getSubdivisionData(responseSubdivision.data));
    dispatch(setInitiatorData());
    }

export const addInitiatorData = (family_name, first_name, second_name, rank, position, subdivision) => async (dispatch) => {
    let response = await initiatorAPI.addInitiator(family_name, first_name, second_name, rank, position, subdivision);
}



// export const login = (password, username) => async (dispatch) => {
    
//     let response = await authAPI.login(password, username);
//     localStorage.setItem('token', response.data.auth_token);
    
//     if (response.data.auth_token) {
//         dispatch(getAuthUserData());   
//     }
    // return response;
// }
// export const initializInitiators = () => async (dispatch) => {
//     let responseGetIniciators = await dispatch(getInitiatorData());
    
//     dispatch(initializedSuccess());
    
//   }
