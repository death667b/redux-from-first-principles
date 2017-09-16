export function createStore(state) {
    return {
        getState: () => state,
        dispatch: () => {},
    }
}