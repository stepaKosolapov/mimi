import axios from "axios";


const instance = axios
    .create({
        baseURL: 'http://127.0.0.1:8000/api/'
    });

export const dialogsAPI = {
    async getUserMessages(id) {
        try {
            return await instance.get(`messages/${id}/`).then(response => response.data);
        } catch (e) {
            console.log(e);
        }
    },
    async getDialogs() {
        try {
            return await instance.get(`dialogs/`).then(response => response.data);
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
    
    
}