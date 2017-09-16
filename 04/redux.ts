export function createStore(reducer, state = {}) {
    return {
        getState: () => state,
        dispatch: currentAction => state = reducer(state, currentAction)
    }
}

export function reducer(prevValue, currValue) {
    return prevValue + currValue;
}