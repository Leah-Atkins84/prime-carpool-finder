const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'SAVE_USER':
      console.log('SAVE USER ACTION');
      return action.payload;
    case 'DELETE_USER':
      console.log('action.payload is:', action.payload);
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
