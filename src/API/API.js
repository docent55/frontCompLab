import * as axios from 'axios';
import { getInitiators } from '../redux/initiatorReducer';

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/'
    // headers: {
    //     'API-KEY': '76c97205-dd20-4d24-950c-5255d1976d6c'
    // }
}); 

export const authAPI = {
    me() {
        return instance.get(`auth/users/me`, 
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },

    login(username, password) {
        return instance.post(`auth/token/login`, {username, password})
    },
    logout() {
        return instance.post(`auth/token/logout`,
        null,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
}

export const workAPI = {
    getWork() {
        return instance.get(`api/work/`,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },
    addWork(subdivisions, employees, typeWork, initiators, number, serial_number, receipt_date) {
        debugger
        return instance.post(`api/work/add/`,
        {subdivision: subdivisions, employee: employees, type_work: typeWork, initiator: initiators, number, serial_number, receipt_date},
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },
    deleteWork(id) {
        return instance.delete(`api/work/${id}`, {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
}

export const rankAPI = {
    getRanks() {
        return instance.get(`api/rank/`,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },
    
    addRank(name) {
        
        return instance.post(`api/rank/`, {name}, {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },

    deleteRank(id) {
        return instance.delete(`api/rank/${id}`, {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
}

export const positionAPI = {
    getPositions() {
        return instance.get(`api/positions/`,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },

    addPosition(name) {return instance.post(`api/positions/`, {name}, 
    {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
},
    deletePosition(id) {
        return instance.delete(`api/positions/${id}`, {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
}

export const subdivisionAPI = {
    getSubdivision() {
        return instance.get(`api/subdivision/`,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },

    addSubdivision(name) {return instance.post(`api/subdivision/`, {name}, 
    {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
},
    deleteSubdivision(id) {
        return instance.delete(`api/subdivision/${id}`, {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
}

export const initiatorAPI = {
    addInitiator(family_name, first_name, second_name, rank, position, subdivision) { 
        return instance.post(`api/initiator/`, {family_name, first_name, second_name, rank, position, subdivision},
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },
    getInitiators() {
        return instance.get(`api/initiator/`,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
}

export const EmployeeAPI = {
    getEmployeesData() {
        return instance.get(`api/employee/`,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
}

export const typeWorkAPI = {
    getTypeWorks() {
        return instance.get(`api/typework/`,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
}