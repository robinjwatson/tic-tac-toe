const reducer = (state = 0, action) => {
    console.log(action)
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "increment by":
            return state + action.payload;
        case "decrement by":
            return state - action.payload;
        default:
            return state
    }
};

export default reducer;