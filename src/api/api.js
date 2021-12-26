import axios from "axios";
import AuthContext from "../context/AuthContext";


const instance = axios
    .create({
        baseURL: 'http://127.0.0.1:8000/api/',
    });
instance.interceptors.request.use(function (config) {
    let tokens = localStorage.getItem("authTokens");
    if (tokens) {
        config.headers.Authorization = "Bearer " + String(JSON.parse(tokens).access);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


export const dialogsAPI = {
    async getUserMessages(id) {
        try {
            return await instance
                .get(`messages/${id}/`)
                .then(response => response.data);
        } catch (e) {
            console.log(e);
        }
    },
    async getDialogs() {
        try {
            return await instance
                .get(`dialogs/`)
                .then(response => response.data);
        } catch (e) {
            console.log(e);
        }
    },
    async sendMessage(id, messageBody) {
        try {
            return await instance.post(`messages/${id}/`, {body: messageBody});
        } catch (e) {
            console.log(e);
        }
    }
}

export const authAPI = {
    async loginUser(username, password) {
        try {
            return await instance
                .post(`token/`, {username, password});
        } catch (e) {
            console.log(e);
        }
    },
    async refreshToken(refresh) {
        try {
            return await instance
                .post(`token/refresh/`, {refresh});
        } catch (e) {
            console.log(e);
        }
    }
    
}