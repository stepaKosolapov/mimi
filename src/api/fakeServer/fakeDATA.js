import {hardProcessing, makeResponse} from "./commonFake";
import {MessagesData} from "./messagesFake";

const host = 0;
class SessionHandler {
    constructor(host) {
        this.host = host;
        this.messagesHandler = new MessagesData();
    }
    
    handleRequest(request) {
        switch (request) {
            case 'GET': {
                break;
            }
            default: {
                return
            }
            
        }
    }
}
export const getDialogInfo = async (id) => {
    await hardProcessing(10);
    let data = dialogsInfo.filter(di => +di.dialogId === +id)[0];
    let error = null;
    let resultCode = 0;
    if (!data) {
        error = "Dialog not found!";
        resultCode = 1;
    }
    return makeResponse(data, error, resultCode);
}
export const getMessages = async (id) => {
    await hardProcessing(10);
    let data = messages.get(host, id);
    let error = null;
    let resultCode = 0;
    if (!data) {
        error = "Messages not found!";
        resultCode = 1;
    }
    return makeResponse(data, error, resultCode);
}
export const sendMessage = async (id, messageBody) => {
    await hardProcessing(10);
    addNewMessage(host, id, messageBody);
    return makeResponse();
}

// const getDialogInfo = () => {
//
// }
const dialogsInfo = [
    {
        dialogId: 1,
        unreadMessagesCount: 0
    },
    {
        dialogId: 2,
        unreadMessagesCount: 1
    },
    {
        dialogId: 3,
        unreadMessagesCount: 0
    },
    {
        dialogId: 4,
        unreadMessagesCount: 10
    },
    {
        dialogId: 5,
        unreadMessagesCount: 1
    },
]

const profilesInfo = {
    0: {
        userId: 0,
        name: 'Stepa Kosolapov',
        avatarSrc: 'https://sun9-71.userapi.com/impg/hRYW3eWYqAwcJtD4FRpVApdyFDTDxCyxCxraqA/CULJ64NrCtQ.jpg?size=200x200&quality=96&sign=87198263ba459805e0c0c4afa0bfa97d&type=album',
        isOnline: true,
    },
    1: {
        userId: 1,
        name: 'Shrэk',
        avatarSrc: 'http://pngimg.com/uploads/shrek/shrek_PNG6.png',
        isOnline: true,
    },
    2: {
        userId: 2,
        name: 'Princess Fiona',
        avatarSrc: 'https://pngimg.com/uploads/shrek/shrek_PNG42.png',
        isOnline: true,
    },
    3: {
        userId: 3,
        name: 'James P. Sullivan',
        avatarSrc: 'https://sun1-85.userapi.com/impg/qbwckFMjH4dYRKcr08cIGo6BK-STM-kIBgLC1g/-S_FyDrELLg.jpg?size=1175x1175&quality=96&sign=2a392844ae2b860318b8760ab32ecae7&type=album',
        isOnline: true,
    },
    4: {
        userId: 4,
        name: 'Donkey',
        avatarSrc: 'https://sun9-75.userapi.com/impg/WYmQl8lJAEy9Pc_8MTKECho0VuilK3tfLTW39A/QGvOxCw4xIU.jpg?size=610x613&quality=96&sign=0958c5f88287845f4383b5ae15eba2c4&type=album',
        isOnline: true,
    },
    5: {
        userId: 5,
        name: 'Mike Wazowski',
        avatarSrc: 'https://sun9-37.userapi.com/impg/XkFi8AueSP4BnYJ4oif12_YrFrZ4dhkR-XM27A/_Kr4izrxsaE.jpg?size=213x220&quality=96&sign=b61006c8073fb65bd899eb33bb183749&type=album',
        isOnline: true,
    }
}