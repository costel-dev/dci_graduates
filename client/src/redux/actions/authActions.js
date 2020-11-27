import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGOUT_SUCCES,
  LOGIN_FAIL,
  LOGIN_SUCCES,
  REGISTER_FAIL,
  REGISTER_SUCCES,
  UPDATE_FAIL,
  UPDATE_SUCCES,
} from "../actions/actionTypes";

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: USER_LOADING });

  // fetch the user
  axios
    .get(`/api/graduate/profile`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// ### UPDATE USER ###
export const update = ({
  first_name,
  last_name,
  class_name,
  profile_picture,
  address,
  city,
  country,
  zip,
  about_me,
  quote,
  field_interest,
  tech_skills,
  seeking,
  personal_website,
  github,
  linkedin,
  xing,
  userID,
  image,
  image_name,
}) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "multipart/form-data",
    },
  };

  let data = new FormData();
  data.append("image", image);
  data.append("image_name", image_name);
  data.append("first_name", first_name);
  data.append("last_name", last_name);
  data.append("class_name", class_name);
  data.append("profile_picture", profile_picture);
  data.append("address", address);
  data.append("city", city);
  data.append("country", country);
  data.append("zip", zip);
  data.append("about_me", about_me);
  data.append("quote", quote);
  data.append("field_interest", field_interest);
  data.append("tech_skills", tech_skills);
  data.append("seeking", seeking);
  data.append("personal_website", personal_website);
  data.append("github", github);
  data.append("linkedin", linkedin);
  data.append("xing", xing);

  // send updated data to the  DB
  axios
    .put(`/api/graduate/update-profile/${userID}`, data, config)
    .then((res) =>
      dispatch({
        type: UPDATE_SUCCES,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "UPDATE_FAIL")
      );
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

// ### REGISTER USER ###
export const register = ({
  first_name,
  last_name,
  class_name,
  graduate_id,
  email,
  password,
}) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  // Request Body
  const body = JSON.stringify({
    first_name,
    last_name,
    class_name,
    graduate_id,
    email,
    password,
  });

  // send data to the  DB
  axios
    .post("/api/auth/register", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCES,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// ### LOGIN USER ###
export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  // Request Body
  const body = JSON.stringify({ email, password });

  // send data to the  DB
  axios
    .post("/api/auth/login", body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCES,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// ### LOGOUT ###
export const logout = () => {
  return {
    type: LOGOUT_SUCCES,
  };
};

// ### HELPER FUNCTION ###   to get the token
// Setup config/headers and token
export const tokenConfig = (getState) => {
  // get token from localStorage
  const token = getState().token;

  // headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
