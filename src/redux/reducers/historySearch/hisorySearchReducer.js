import { ADD_HISTORY_SEARCH } from "../../type";

const INITIAL_STATE = {
  historyItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_HISTORY_SEARCH:
      const item = action.data;
      const existItem =
        state?.historyItems?.length &&
        state.historyItems.find((x) => x.key === item?.key);
      if (existItem) {
        return {
          ...state,
          historyItems: state.historyItems.map((x) =>
            x.key === existItem?.key ? item : x
          ),
        };
      } else {
        return {
          ...state,
          historyItems: [item, ...state.historyItems],
        };
      }

    default:
      return { ...state };
  }
};
