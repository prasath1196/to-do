export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_USERS":
      return [
        ...state,
        Object.assign({}, action.response)
      ];
    default:
      return state;
  }
};
