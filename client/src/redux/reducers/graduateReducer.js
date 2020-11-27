import { GRADUATES_LOADING, GRADUATES_LOADED } from "../actions/actionTypes";

const initialState = {
  graduates: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GRADUATES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GRADUATES_LOADED:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    default:
      return state;
  }
}
