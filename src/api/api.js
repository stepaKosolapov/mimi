import {getMessage} from "./fakeDATA";

export const dialogsAPI = {
    async getUserMessages(id) {
        return await getMessage(id);
    }
}