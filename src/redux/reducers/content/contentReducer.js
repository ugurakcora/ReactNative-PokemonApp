import { GET_CONTENT_DATA } from "../../type";

const INITIAL_STATE = {
  contentData: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTENT_DATA:
      return {
        ...state,
        contentData: action.data,
      };

    default:
      return { ...state };
  }
};
