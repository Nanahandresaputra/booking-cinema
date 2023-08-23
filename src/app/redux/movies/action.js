import moment from "moment";
import { listMoviesApi, listStudioApi } from "../../api/api";
import {
  GET_BOOKING,
  GET_DATE,
  GET_MOVIES,
  GET_SHOWTIME,
  GET_STUDIO_ID,
  GET_STUIDO,
} from "./constant";

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

export const getStudioDetail = ({ id }) => {
  return (dispatch) => {
    let params = {
      studio: id,
      showTime: ["10.00-12.00", "13.00-15.00", "16.00-18.00"],
      // date: "2023/08/20",
      date: [
        moment().format("YYYY/MM/DD"),
        moment().add(1, "days").format("YYYY/MM/DD"),
        moment().add(2, "days").format("YYYY/MM/DD"),
      ],
    };
    listStudioApi(params).then((res) =>
      dispatch({
        type: GET_STUIDO,
        payload: res.data,
      })
    );
  };
};

export const getStudiooId = (id) => {
  return {
    type: GET_STUDIO_ID,
    payload: id,
  };
};

export const getShowTime = (time) => {
  return {
    type: GET_SHOWTIME,
    payload: time,
  };
};

export const getDate = (date) => {
  return {
    type: GET_DATE,
    payload: date,
  };
};

export const addBookingMovie = () => {
  return (dispatch, getState) => {
    let params = {
      studio: getState().movies.getStudioId,
      date: getState().movies.dateMovie,
      showTime: getState().movies.timeInfo,
    };
    listStudioApi(params).then((res) =>
      dispatch({
        type: GET_BOOKING,
        payload: res.data,
      })
    );
  };
};
