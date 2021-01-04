// import { stopSubmit } from 'redux-form';
import { workAPI } from '../API/API';

const SET_WORK_DATA = 'SET_WORK_DATA';
const ADD_MATERIAL = 'ADD_MATERIAL';

let initialState = {materials: []
}

export const workReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WORK_DATA: 
            
            return {...state, materials: [...action.materials]}

        case ADD_MATERIAL: 
            return {}
            
        default:
            return state;
    }

};

export const setWorkData = (materials) => ({type: SET_WORK_DATA, materials})


export const getWorkData = () => async (dispatch) => {
    let response = await workAPI.getWork();
    if (response.status === 200) {
        let materials = response.data;
        dispatch(setWorkData(materials));
    }
}

// export const addMaterial = (type_work, number, serial_number, receipt_date, initiator, employee, subdivisi, researched_objects, additional_information, renewal_date) => {
//     let response = await 
// }

