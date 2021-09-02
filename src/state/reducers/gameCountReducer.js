const initialState = {
    value: 0
}

const gameCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "incrementGameCounter":
            return {
                ...state,
                value: state.value + 1
            }
        case "resetGameCounter":
            return initialState;
        default:
            return state
    }
};

export default gameCountReducer;