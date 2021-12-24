import {DataMap} from "./commonFake";

export class MessagesData {
    constructor() {
        this.messages = new DataMap();
        this.messages.set(0,1, [
            {
                messageId: 0,
                senderId: 1,
                messageBody: 'Hello here! I\'m Shrэk! And I have a lot of words in my message, could you display it correctly?'
            },
            {messageId: 1, senderId: 1, messageBody: 'How are you?'},
            {messageId: 2, senderId: 0, messageBody: 'I\'m ok and you?'},
            {messageId: 3, senderId: 1, messageBody: 'Me too!'},
            {messageId: 4, senderId: 1, messageBody: 'Spamming'},
            {messageId: 5, senderId: 1, messageBody: 'Spamming'},
            {messageId: 6, senderId: 1, messageBody: 'Spamming'},
            {messageId: 7, senderId: 1, messageBody: 'Spamming'},
            {messageId: 8, senderId: 1, messageBody: 'Spamming'},
            {messageId: 9, senderId: 1, messageBody: 'Spamming'},
            {messageId: 10, senderId: 1, messageBody: 'Spamming'},
            {messageId: 11, senderId: 1, messageBody: 'Spamming'},
            {messageId: 12, senderId: 1, messageBody: 'Spamming'},
            {messageId: 13, senderId: 1, messageBody: 'Spamming'},
            {messageId: 14, senderId: 1, messageBody: 'Spamming'},
        ]);
        this.messages.set(0,2, [
            {messageId: 0, senderId: 2, messageBody: 'Hello here I\'m 2!'},
            {messageId: 1, senderId: 2, messageBody: 'How are you?'},
            {messageId: 2, senderId: 0, messageBody: 'I\'m ok and you?'},
            {messageId: 3, senderId: 2, messageBody: 'Me too!'}
        ]);
        this.messages.set(0,3, [
            {messageId: 0, senderId: 2, messageBody: 'Hello here I\'m 3!'},
            {messageId: 1, senderId: 2, messageBody: 'How are you?'},
            {messageId: 2, senderId: 0, messageBody: 'I\'m ok and you?'},
            {messageId: 3, senderId: 2, messageBody: 'Me too!'}
        ]);
        this.messages.set(0,4, [
            {messageId: 0, senderId: 2, messageBody: 'Hello here I\'m 4!'},
            {messageId: 1, senderId: 2, messageBody: 'How are you?'},
            {messageId: 2, senderId: 0, messageBody: 'I\'m ok and you?'},
            {messageId: 3, senderId: 2, messageBody: 'Me too!'}
        ]);
        this.messages.set(0,5, [
            {messageId: 0, senderId: 2, messageBody: 'Hello here I\'m 5!'},
            {messageId: 1, senderId: 2, messageBody: 'How are you?'},
            {messageId: 2, senderId: 0, messageBody: 'I\'m ok and you?'},
            {messageId: 3, senderId: 2, messageBody: 'Me too!'}
        ]);
    }
    
    getMessages(id1, id2) {
        return this.messages.get(id1, id2);
    }
    addMessages(sender, receiver, messageBody) {
        let mesArray = this.messages.get(sender, receiver);
        if (!mesArray) {
            this.messages.set(sender, receiver, [makeMessage(0, sender, messageBody)]);
        } else {
            this.messages.set(sender, receiver, [...mesArray, makeMessage(mesArray.size - 1, sender, messageBody)]);
        }
    }
}

const makeMessage = (messageId, senderId, messageBody) => {
    return {messageId, senderId, messageBody}
}

