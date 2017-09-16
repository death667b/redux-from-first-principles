export function createStore(state = {}) {
    return {
        getState: () => state,
        dispatch: () => {},
    }
}

export function reducer(prevValue, currValue) {
    return prevValue + currValue;
}