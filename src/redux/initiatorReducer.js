import { positionAPI, rankAPI, subdivisionAPI, initiatorAPI } from '../API/API';
import { setPositionData} from './positionReducer'
import { getRankData } from './rankReducer';
import { getSubdivisionData } from './subdivisionReducer';

const SET_INITIATOR_FORM_DATA = 'SET_INITIATOR_FORM_DATA';
const SET_INITIATOR_DATA = 'SET_INITIATOR_DATA';

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

        case SET_INITIATOR_DATA:
            return {...state, initiatorsData: [...action.initiators]}
            
        default:
            return state;
    }
};

export const setInitiatorData = () => ({type: SET_INITIATOR_FORM_DATA});
export const setInitiators = (initiators) => ({type: SET_INITIATOR_DATA, initiators})

export const getInitiatorData = () => async (dispatch) => {
    let responseRank = await rankAPI.getRanks();
    let responsePosition = await positionAPI.getPositions();
    let responseSubdivision = await subdivisionAPI.getSubdivision();
    // if (responseRank.status === 200) {
    //     let ranks = responseRank.data;
    //     console.log(ranks);
    await dispatch(setPositionData(responsePosition.data));
    await dispatch(getRankData(responseRank.data));
    await dispatch(getSubdivisionData(responseSubdivision.data));
    dispatch(setInitiatorData());
    }

export const getInitiatorsData = () => async (dispatch) => {
    let response = await initiatorAPI.getInitiators();
    console.log(response.data);
    dispatch(setInitiators(response.data));
}

export const addInitiatorData = (family_name, first_name, second_name, rank, position, subdivision) => async (dispatch) => {
    let response = await initiatorAPI.addInitiator(family_name, first_name, second_name, rank, position, subdivision);
}