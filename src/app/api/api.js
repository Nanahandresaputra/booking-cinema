import axios from "axios";
import { apiConfig } from "../../config/config";

let token = sessionStorage.getItem("auth");

export const listMoviesApi = async () => {
  const movies = await axios.get(
    `${apiConfig.baseUl}/${apiConfig.listMovies}`,
    {
      headers: {
        access_token: token,
      },
    }
  );
  return movies;
};

export const listStudioApi = async (params) => {
  const studio = await axios.get(
    `${apiConfig.baseUl}/${apiConfig.listStudio}`,
    {
      headers: {
        access_token: token,
      },
      params,
    }
  );
  return studio;
};

export const authLoginApi = async ({ email, password }) => {
  const auth = await axios.post(`${apiConfig.baseUl}/${apiConfig.login}`, {
    email,
    password,
  });
  return auth;
};

export const registerApi = async ({ email, password, username }) => {
  const register = await axios.post(
    `${apiConfig.baseUl}/${apiConfig.register}`,
    { username, email, password }
  );
  return register;
};
