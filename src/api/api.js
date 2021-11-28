import {getMessage} from "./fakeDATA";

export const dialogsAPI = {
    getUserMessages(id) {
        return getMessage();
    }
}