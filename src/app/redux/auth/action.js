import { registerApi } from "../../api/api";
import { AUTH_LOGIN, AUTH_REGISTER } from "./constant";

export const authAction = (data) => {
  return {
    type: AUTH_LOGIN,
    payload: data,
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
