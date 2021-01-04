import { positionAPI } from '../API/API';

const SET_POSITION_DATA = 'SET_POSITION_DATA';

let initialState = {
    positions: []
};

export const positionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POSITION_DATA:
            
            return {...state, positions: [...action.positions]}
            
        default:
            return state;
    }
};

export const setPositionData = (positions) => ({type: SET_POSITION_DATA, positions});

export const getPositionData = () => async (dispatch) => {
    let response = await positionAPI.getPositions();
    console.log(response)
    if (response.status === 200) {
        let positions = response.data;
        
        dispatch(setPositionData(positions));
        console.log(positions);
    }
}

export const addPositionData = (position) => async (dispatch) => {
    
    let response = await positionAPI.addPosition(position);
    console.log(response)
    
    if (response.status === 201) {
        dispatch(getPositionData());
    }
}

export const deletePositionData = (id) => async (dispatch) => {

    let response = await positionAPI.deletePosition(id);

    if (response.status === 204) {
        dispatch(getPositionData());
    }
}