const authReducer = (
  state = { authData: null, isLoading: true, success: {}, errors: {} },
  action
) => {
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, isLoading: true };
    case "STOP_FETCHING":
      return { ...state, isLoading: false };
    case "AUTH":
      sessionStorage.setItem(
        "fixa::token",
        JSON.stringify({ ...action?.data })
      );

      return {
        ...state,
        authData: action.data.data,
        loading: false,
        errors: null,
      };

    case "RESET_SUCCESS":
      return { ...state, success: action.payload };
    case "RESET_ERROR":
      return { ...state, errors: action.payload };

    case "LOGOUT":
      sessionStorage.removeItem("fixa::token");

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;