export function createStore(reducer, state = {}) {
    return {
        getState: () => state,
        dispatch: (currentAction: string) => 
            state = reducer(state, currentAction)
    }
}

export function reducer(prevValue, currAction) {
    switch(currAction) {
        case '@@INIT':
            return 0;
        case 'INCREMENT':
            return prevValue+1;
        case 'DECREMENT':
            return prevValue-1;
    }
    return prevValue;

}