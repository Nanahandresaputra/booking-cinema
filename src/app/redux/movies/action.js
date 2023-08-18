import { listMoviesApi } from "../../api/api";
import { GET_MOVIES } from "./constant";

export const getListMovies = () => {
  return (dispatch) =>
    listMoviesApi().then((res) =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data.movies,
      })
    );
};
