import { typeWorkAPI } from '../API/API';

const SET_TYPE_WORK_DATA = 'SET_TYPE_WORK_DATA';

let initialState = {
    typeWork: []
};

export const typeWorkReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TYPE_WORK_DATA:   
            return {...state, typeWork: [...action.typeWork]}
        default:
            return state;
    }
};

export const setTypeWorkData = (typeWork) => ({type: SET_TYPE_WORK_DATA, typeWork});

export const getTypeWorkData = () => async (dispatch) => {
    let response = await typeWorkAPI.getTypeWorks();
    if (response.status === 200) {
        let typeWork = response.data;
        console.log(typeWork);
        dispatch(setTypeWorkData(typeWork));
    }
}