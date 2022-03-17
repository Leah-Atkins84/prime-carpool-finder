const carpoolReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CARPOOL':
            return action.payload;
        default:
            return state;
    }
};
// carpools will be on the redux state at : state.carpool
export default carpoolReducer;
