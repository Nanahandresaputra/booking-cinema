import axios from "axios";
import { apiConfig } from "../../config/config";

export const listMoviesApi = async () => {
  let token = sessionStorage.getItem("auth");
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
  let token = sessionStorage.getItem("auth");
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
  return axios
    .post(`${apiConfig.baseUl}/${apiConfig.login}`, {
      email,
      password,
    })
    .then((res) => res)
    .catch((err) => err);
};

export const registerApi = async ({ email, password, username }) => {
  return axios
    .post(`${apiConfig.baseUl}/${apiConfig.register}`, {
      username,
      email,
      password,
    })
    .then((res) => res)
    .catch((err) => err);
  // return register;
};

export const addBookingApi = async ({
  movie,
  seat,
  date,
  studio,
  showTime,
}) => {
  let token = sessionStorage.getItem("auth");
  const booking = await axios.post(
    `${apiConfig.baseUl}/${apiConfig.booking}`,
    { movie, seat, date, studio, showTime },
    {
      headers: {
        access_token: token,
      },
    }
  );
  return booking;
};

export const bookingListApi = async () => {
  let token = sessionStorage.getItem("auth");
  const listBoking = await axios.get(
    `${apiConfig.baseUl}/${apiConfig.invoice}`,
    {
      headers: {
        access_token: token,
      },
    }
  );
  return listBoking;
};

export const addMoviesApi = async ({
  id,
  title,
  description,
  director,
  genre,
  image,
}) => {
  let token = sessionStorage.getItem("auth");
  const movies = await axios.post(
    `${apiConfig.baseUl}/${apiConfig.addMovie}`,
    { title, description, director, genre, image, id },
    {
      headers: {
        access_token: token,
      },
    }
  );
  return movies;
};

export const summaryApi = async () => {
  let token = sessionStorage.getItem("auth");
  const summary = await axios.get(`${apiConfig.baseUl}/${apiConfig.summary}`, {
    headers: {
      access_token: token,
    },
  });
  return summary;
};

export const customersListApi = async () => {
  let token = sessionStorage.getItem("auth");
  const customers = await axios.get(
    `${apiConfig.baseUl}/${apiConfig.customersList}`,
    {
      headers: {
        access_token: token,
      },
    }
  );
  return customers;
};
