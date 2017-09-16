export function createStore(reducer, state = {}) {
    return {
        getState: () => state,
        dispatch: (currentAction: string) => 
            state = reducer(state, currentAction)
    }
}

export function reducer(prevValue, currAction, value = 0) {
    switch(currAction) {
        case '@@INIT':
            return 0;
        case 'INCREMENT':
            return prevValue+1;
        case 'DECREMENT':
            return prevValue-1;
        case 'ADD':
            return prevValue + value;
    }
    return prevValue;

}