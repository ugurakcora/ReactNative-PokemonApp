import axios from "axios";
import { GET_CONTENT } from "../../api/content/contentAPI";
export const getContentCall = async (params) => {
  try {
    const response = await axios({
      method: "GET",
      url: GET_CONTENT,
      headers: {
        "Content-Type": "application/json",
      },
      params,
    });
    const responseData = response?.data;
    return responseData;
  } catch (error) {
    console.log("Products Api Error: ", error);
  }
};
