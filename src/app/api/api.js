import axios from "axios";
import { apiConfig } from "../../config/config";

export const listMoviesApi = async () => {
  const movies = await axios.get(`${apiConfig.baseUl}/${apiConfig.listMovies}`);
  return movies;
};
