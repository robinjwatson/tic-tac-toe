const initialState = {
    value: 0,
    isXnext: true
}

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case "xIsNext":
            return {
                ...state,
                value: state.value + 1,
                isXnext: true
            };
        case "oIsNext":
            return {
                ...state,
                value: state.value + 1,
                isXnext: false
            };
        default:
            return state
    }
};

export default statusReducer;