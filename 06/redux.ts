export function createStore(reducer, state = {}) {
    let subscribers = new Set();

    return {
        getState: () => state,
        dispatch: (currentAction: string, value?) => {
            let newState = reducer(state, currentAction, value);
            if (newState != state)  {
                if (subscribers) {
                    subscribers.forEach(fn => fn(newState))
                }
            }
        },
        subscribe: fn => subscribers.add(fn)
    }
}

export function reducer(prevValue, currAction, value = 0) {
    let newState;

    switch(currAction) {
        case '@@INIT':
            newState = 0;
            break;
        case 'INCREMENT':
            newState = prevValue+1;
            break;
        case 'DECREMENT':
            newState = prevValue-1;
            break;
        case 'ADD':
            newState = prevValue + value;
            break;
        default:
            newState = prevValue;
    }
    return newState;
}

