const initialState = 0

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "incrementGameCounter":
            return state + 1;
        case "resetGameCounter":
            return initialState;
        default:
            return state
    }
};

export default counterReducer;