import axios from "axios";
import { apiConfig } from "../../config/config";

export const listMoviesApi = async () => {
  const movies = await axios.get(`${apiConfig.baseUl}/${apiConfig.listMovies}`);
  return movies;
};

export const listStudioApi = async (params) => {
  const studio = await axios.get(
    `${apiConfig.baseUl}/${apiConfig.listStudio}`,
    {
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJuYW5hQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5MjM0OTA5NX0.YvXbiciCYgOT6lh07ZNzWO63UOvedx8z_2ii4-xuuRM",
      },
      params,
    }
  );
  return studio;
};

export const authLoginApi = async () => {
  const auth = await axios.get(`${apiConfig.baseUl}/${apiConfig.authLogin}`);
  return auth;
};
