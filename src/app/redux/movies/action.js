import moment from "moment";
import { listMoviesApi, listStudioApi } from "../../api/api";
import { GET_MOVIES, GET_STUIDO } from "./constant";

export const getListMovies = () => {
  return (dispatch) =>
    listMoviesApi().then((res) =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data.movies,
      })
    );
};

// export const getStudio = () => {
//   return (dispatch) => {
//     listStudioApi().then((res) =>
//       dispatch({
//         type: GET_STUIDO,
//         payload: res.data.result,
//       })
//     );
//   };
// };

export const getStudioDetail = (studioId) => {
  return (dispatch) => {
    let params = {
      studio: studioId,
      showTime: "10.00-12.00",
      // date: "2023/08/20",
      date: moment().format("YYYY/MM/DD"),
    };
    listStudioApi(params).then((res) =>
      dispatch({
        type: GET_STUIDO,
        payload: res.data,
      })
    );
  };
};
