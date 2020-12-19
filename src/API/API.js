import * as axios from 'axios';

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

    login(password, username) {
        return instance.post(`auth/token/login`, {password, username})
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
}

