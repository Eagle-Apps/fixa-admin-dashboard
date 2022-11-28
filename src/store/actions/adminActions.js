import * as api from "../api/index.js";
import jsonData from "../../data/data.json";

export const fetchStaffs = (page) => async (dispatch) => {
  console.log(page);
  const dummy = { data: jsonData.Staff, currentPage: 0, numberOfPages: 3 };
  try {
    dispatch({ type: "START_LOADING" });
    //   const {
    //     data: { data, currentPage, numberOfPages },
    //   } = await api.fetchstaffs();

    dispatch({
      type: "GET_STAFFS",
      payload: {
        data: dummy.data,
        currentPage: dummy.currentPage,
        numberOfPages: dummy.numberOfPages,
      },
    });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};
