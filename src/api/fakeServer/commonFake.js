export const hardProcessing = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay);
    })
}
export const makeResponse = (data, error = null, resultCode = 0) => {
    return {
        "data": data,
        "error": error,
        "resultCode": resultCode,
    };
}


export class DataMap extends Map {
    get(a, b) {
        a = +a;
        b = +b;
        let left = Math.min(a, b);
        let right = Math.max(a, b);
        return super.get(`${left}:${right}`);
    }
    
    set(a, b, value) {
        a = +a;
        b = +b;
        let left = Math.min(a, b);
        let right = Math.max(a, b);
        super.set(`${left}:${right}`, value);
    }
}