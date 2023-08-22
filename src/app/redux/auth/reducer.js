import { AUTH_LOGIN, AUTH_REGISTER } from "./constant";

let initialState = {
  login: sessionStorage.getItem("auth") || "",
  registerAuth: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, login: action.payload };
    case AUTH_REGISTER:
      return { ...state, registerAuth: action.payload };

    default:
      return state;
  }
};

export default authReducer;
