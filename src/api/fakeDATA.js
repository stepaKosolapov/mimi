const HardProcessing = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(null, delay);
    })
}

const makeResponse = (data, error, resultCode) => {
    return {
        "data": [...data],
        "error": error,
        "resultCode": resultCode,
    };
}

export const getMessage = async (id) => {
    await HardProcessing(100);
    let data = messages[id];
    let error = null;
    let resultCode = 0;
    if (!data) {
        error = "Messages not found!";
        resultCode = 1;
    }
    return makeResponse(data, error, resultCode);
}

const messages = {
    1: [
        {messageId: 0, senderId: 1, messageBody:'Hello here! I\'m Shrэk!'},
        {messageId: 1, senderId: 1, messageBody:'How are you?'},
        {messageId: 2, senderId: 0, messageBody:'I\'m ok and you?'},
        {messageId: 3, senderId: 1, messageBody:'Me too!'}
    ],
    2: [
        {messageId: 0, senderId: 2, messageBody:'Hello here I\'m Fiona!'},
        {messageId: 1, senderId: 2, messageBody:'How are you?'},
        {messageId: 2, senderId: 0, messageBody:'I\'m ok and you?'},
        {messageId: 3, senderId: 2, messageBody:'Me too!'}
    ],
    3: [
        {messageId: 0, senderId: 3, messageBody:'Hello here! I\'m Sulley!'},
        {messageId: 1, senderId: 3, messageBody:'How are you?'},
        {messageId: 2, senderId: 0, messageBody:'I\'m ok and you?'},
        {messageId: 3, senderId: 3, messageBody:'Me too!'}
    ],
    4: [
        {messageId: 0, senderId: 4, messageBody:'Hello here! I\'m Donkey!'},
        {messageId: 1, senderId: 4, messageBody:'How are you?'},
        {messageId: 2, senderId: 0, messageBody:'I\'m ok and you?'},
        {messageId: 3, senderId: 4, messageBody:'Me too!'}
    ],
   5: [
        {messageId: 0, senderId: 5, messageBody:'Hello here! I\'m Mike!'},
        {messageId: 1, senderId: 5, messageBody:'How are you?'},
        {messageId: 2, senderId: 0, messageBody:'I\'m ok and you?'},
        {messageId: 3, senderId: 5, messageBody:'Me too!'}
    ],
}