import { ADD_HISTORY_SEARCH } from "../../type";

export const historyAddAction = (data) => {
  return (dispatch) => {
    try {
      dispatch({
        type: ADD_HISTORY_SEARCH,
        data: data,
      });
    } catch (error) {
      console.log("error: action:", error);
    }
  };
};
