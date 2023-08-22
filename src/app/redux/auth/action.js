import { authLoginApi, registerApi } from "../../api/api";
import { AUTH_LOGIN, AUTH_REGISTER } from "./constant";

export const authAction = ({ email, password }) => {
  return (dispatch) => {
    authLoginApi({ email, password }).then((res) =>
      dispatch({
        type: AUTH_LOGIN,
        payload: res.data,
      })
    );
  };
};

export const registerAction = ({ email, password, username }) => {
  return (dispatch) => {
    registerApi({ email, password, username }).then((res) =>
      dispatch({
        type: AUTH_REGISTER,
        payload: res.data,
      })
    );
  };
};
