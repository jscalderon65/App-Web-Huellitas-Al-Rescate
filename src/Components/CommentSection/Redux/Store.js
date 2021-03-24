import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {
  CollectionName: "",
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COLLECTION":
      return {
        ...state,
        CollectionName: action.name
      };
    default:
      return state;
  }
};
export default createStore(Reducer, composeWithDevTools());
