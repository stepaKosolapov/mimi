const SET_CURRENT_MESSAGES = 'mimi/dialogs/setCurrentMessages';

const setCurrentMessages = (messages) => ({type: SET_CURRENT_MESSAGES, messages});

const initialState = {
    currentMessages: [],
    dialogsInfo: [
        {
            avatarSrc: 'http://pngimg.com/uploads/shrek/shrek_PNG6.png',
            name: 'Shrэk',
            dialogId: 1,
            lastMessageText: 'Hello, shrek!)',
            lastMessageTime: '9:10',
            unreadMessagesCount: 0
        },
        {
            avatarSrc: 'https://pngimg.com/uploads/shrek/shrek_PNG42.png',
            name: 'Princess Fiona',
            dialogId: 2,
            lastMessageText: 'I\'m fiona.',
            lastMessageTime: '10:10',
            unreadMessagesCount: 1
        },
        {
            avatarSrc: 'https://sun1-85.userapi.com/impg/qbwckFMjH4dYRKcr08cIGo6BK-STM-kIBgLC1g/-S_FyDrELLg.jpg?size=1175x1175&quality=96&sign=2a392844ae2b860318b8760ab32ecae7&type=album',
            name: 'James P. Sullivan',
            dialogId: 3,
            lastMessageText: `Mike, you're not scary, not even a little, but you are fearless!`,
            lastMessageTime: '11:11',
            unreadMessagesCount: 0
        },
        {
            avatarSrc: 'https://sun9-75.userapi.com/impg/WYmQl8lJAEy9Pc_8MTKECho0VuilK3tfLTW39A/QGvOxCw4xIU.jpg?size=610x613&quality=96&sign=0958c5f88287845f4383b5ae15eba2c4&type=album',
            name: 'Donkey',
            dialogId: 4,
            lastMessageText: 'Hee-haw! Hee-haw!',
            lastMessageTime: '12:05',
            unreadMessagesCount: 10
        },
        {
            avatarSrc: 'https://sun9-37.userapi.com/impg/XkFi8AueSP4BnYJ4oif12_YrFrZ4dhkR-XM27A/_Kr4izrxsaE.jpg?size=213x220&quality=96&sign=b61006c8073fb65bd899eb33bb183749&type=album',
            name: 'Mike Wazowski',
            dialogId: 5,
            lastMessageText: `You were right. They weren't scared of me. I did everything right. I wanted it more than anyone. And I thought... I thought if I wanted it enough, I could show everybody that... That Mike Wazowski is something special. And I'm just not.`,
            lastMessageTime: '12:55',
            unreadMessagesCount: 1
        },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MESSAGES: {
            return {
                ...state,
                currentMessages: [...action.messages]
            }
        }
        default:
            return state;
    }
}

export default dialogsReducer;