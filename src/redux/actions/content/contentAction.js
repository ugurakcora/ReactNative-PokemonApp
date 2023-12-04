import { getContentCall } from "../../api/content/contentAPICall";
import { GET_CONTENT_DATA } from "../../type";

export const getContentAction = (params) => {
  return async (dispatch) => {
    try {
      const response = await getContentCall(params);
      dispatch({ type: GET_CONTENT_DATA, data: response });
    } catch (error) {
      console.log("error: action:", error);
    }
  };
};
