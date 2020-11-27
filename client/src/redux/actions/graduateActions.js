import axios from "axios";
import { GRADUATES_LOADED, GRADUATES_LOADING } from "./actionTypes";
import { returnErrors } from "./errorActions";

// Load our graduates
export const loadGraduates = () => (dispatch) => {
  // graduates loading
  dispatch({ type: GRADUATES_LOADING });

  // fetch the graduates
  axios
    .get("/api/graduates")
    .then((res) =>
      dispatch({
        type: GRADUATES_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
