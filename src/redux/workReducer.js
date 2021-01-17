// import { stopSubmit } from 'redux-form';
import { workAPI, subdivisionAPI, EmployeeAPI, initiatorAPI, typeWorkAPI } from '../API/API';


import { setSubdivisionData } from './subdivisionReducer';
import { setEmployeeData } from './employeeReducer';
import { setInitiators } from './initiatorReducer';
import { setTypeWorkData } from './typeWorkReducer';


const SET_WORK_DATA = 'SET_WORK_DATA';
const ADD_MATERIAL = 'ADD_MATERIAL';
const SET_ADD_WORK_FORM_DATA = 'SET_ADD_WORK_FORM_DATA';

let initialState = {materials: [],
    addWorkSuccessIniciator: false,
}

export const workReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WORK_DATA: 
            
            return {...state, materials: [...action.materials]}

        case ADD_MATERIAL: 
            return {}

        case SET_ADD_WORK_FORM_DATA:
            
            return {...state, addWorkSuccessIniciator: true}
            
        default:
            return state;
    }

};

export const setWorkData = (materials) => ({type: SET_WORK_DATA, materials})
export const setAddWorkData = () => ({type: SET_ADD_WORK_FORM_DATA});

export const getWorkData = () => async (dispatch) => {
    let response = await workAPI.getWork();
    if (response.status === 200) {
        let materials = response.data;
        dispatch(setWorkData(materials));
    }
}

export const getAddWorkData = () => async (dispatch) => {  
    let responseSubdivision = await subdivisionAPI.getSubdivision();
    let responseEmployee = await EmployeeAPI.getEmployeesData();
    let responseIniciator = await initiatorAPI.getInitiators();
    let responseTypeWork = await typeWorkAPI.getTypeWorks();
    
    await dispatch(setSubdivisionData(responseSubdivision.data));
    await dispatch(setEmployeeData(responseEmployee.data));
    await dispatch(setInitiators(responseIniciator.data));
    await dispatch(setTypeWorkData(responseTypeWork.data));
    dispatch(setAddWorkData());
}

export const AddMaterialData = (subdivisions, employees, typeWork, initiators, number, serial_number, receipt_date) => async (dispatch) => {
    
    let response = workAPI.addWork(subdivisions, employees, typeWork, initiators, number, serial_number, receipt_date)  
}

export const deleteWorkData = (id) => async (dispatch) => {

    let response = await workAPI.deleteWork(id);

    if (response.status === 204) {
        dispatch(getWorkData());
    }
}

// export const addWorkData = () => ()

// export const addMaterial = (type_work, number, serial_number, receipt_date, initiator, employee, subdivisi, researched_objects, additional_information, renewal_date) => {
//     let response = await 
// }

