import { subdivisionAPI } from '../API/API';

const SET_SUBDIVISION_DATA = 'SET_SUBDIVISION_DATA';

let initialState = {
    subdivisions: []
};

export const subdivisionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SUBDIVISION_DATA:
            
            return {...state, subdivisions: [...action.subdivisions]}
            
        default:
            return state;
    }
};

export const setSubdivisionData = (subdivisions) => ({type: SET_SUBDIVISION_DATA, subdivisions});

export const getSubdivisionData = () => async (dispatch) => {
    let response = await subdivisionAPI.getSubdivision();
    console.log(response)
    
    if (response.status === 200) {
        let subdivisions = response.data;
        console.log(subdivisions);
        dispatch(setSubdivisionData(subdivisions));
    }
}

export const addSubdivisionData = (subdivision) => async (dispatch) => {
    
    let response = await subdivisionAPI.addSubdivision(subdivision);
    console.log(response)
    
    if (response.status === 201) {
        dispatch(getSubdivisionData());
    }
}

export const deleteSubdivisionData = (id) => async (dispatch) => {

    let response = await subdivisionAPI.deleteSubdivision(id);

    if (response.status === 204) {
        dispatch(getSubdivisionData());
    }
}