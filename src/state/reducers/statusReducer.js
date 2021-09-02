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

// // const exampleReducer = (state = 0, action) => {
// //     switch (action.type) {
// //         case "increment":
// //             return state + 1;
// //         case "decrement":
//             return state - 1;
//         case "increment by":
//             return state + action.payload;
//         case "decrement by":
//             return state - action.payload;
//         default:
//             return state
//     }
// };

// export default exampleReducer;