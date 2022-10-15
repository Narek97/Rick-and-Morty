export const debounce = (fn: any, wait: number) => {
    let timeoutID: any;
    return (...arg: any) => {
        if (timeoutID) clearTimeout(timeoutID);
        timeoutID = setTimeout(() => fn(...arg), wait);
    };
};

export const debeounced400 = debounce((fn: any) => fn(), 400);

