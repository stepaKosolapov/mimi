import {dialogsAPI} from "api/api";

const initialState = {
    currentDialog: {
        messages: null,
        dialogInfo: null,
    },
    dialogs: []
    
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MESSAGES: {
            return {
                ...state,
                currentDialog: {
                    ...state.currentDialog,
                    messages: action.messages,
                }
            }
        }
        case SET_CURRENT_DIALOG_INFO: {
            console.log(state.dialogs.filter(dialog => +dialog.person.id === +action.personId).pop())
            return {
                ...state,
                currentDialog: {
                    ...state.currentDialog,
                    dialogInfo: state.dialogs.filter(dialog => +dialog.person.id === +action.personId).pop()
                }
            }
        }
        case SET_DIALOGS: {
            return {
                ...state,
                dialogs: action.dialogs
            }
        }
        default:
            return state;
    }
}

const SET_CURRENT_MESSAGES = 'mimi/dialogs/setCurrentMessages';
const SET_CURRENT_DIALOG_INFO = 'mimi/dialogs/setCurrentDialogInfo';
const SET_DIALOGS = 'mimi/dialogs/setDialogs';

// actions
const setCurrentMessages = (messages) => ({type: SET_CURRENT_MESSAGES, messages});
const setCurrentDialogInfo = (personId) => ({type: SET_CURRENT_DIALOG_INFO, personId});
const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});

// thunks
const getMessages = (personId) => async (dispatch) => {
    const data = await dialogsAPI.getUserMessages(personId);
    if (data) {
        dispatch(setCurrentMessages(data));
    }
}
export const sendMessage = (id, messageBody) => async (dispatch) => {
    let response = await dialogsAPI.sendMessage(id, messageBody);
    console.log(response);
    dispatch(getMessages(id));
}
export const getDialogs = () => async (dispatch) => {
    const data = await dialogsAPI.getDialogs();
    if (data) {
        dispatch(setDialogs(data));
    }
}
export const getCurrentDialog = (personId) => async (dispatch) => {
    await dispatch(getDialogs())
    await dispatch(getMessages(personId));
    await dispatch(setCurrentDialogInfo(personId))
}


export default dialogsReducer;