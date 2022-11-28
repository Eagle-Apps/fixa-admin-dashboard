const initState = {
  staffs: [],
  isLoading: true,
};
const staffReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_STAFFS":
      return {
        ...state,
        staffs: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default staffReducer;
