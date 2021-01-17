import { EmployeeAPI } from '../API/API';

const SET_EMPLOYEE_FORM_DATA = 'SET_EMPLOYEE_FORM_DATA';

let initialState = {
    employees: [],
    
};

export const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMPLOYEE_FORM_DATA:
            
            return {...state, employees: [...action.employees] }
            
        default:
            return state;
    }
};

export const setEmployeeData = (employees) => ({type: SET_EMPLOYEE_FORM_DATA, employees });

export const getEmployeeData = () => async (dispatch) => {
    let response = await EmployeeAPI.getEmployeesData();
    if (response.status === 200) {
        let employees = response.data;
        dispatch(setEmployeeData(employees));
}
}

