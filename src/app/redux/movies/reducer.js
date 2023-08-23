import {
  GET_BOOKING,
  GET_DATE,
  GET_MOVIES,
  GET_SHOWTIME,
  GET_STUDIO_ID,
  GET_STUIDO,
} from "./constant";
import moment from "moment";

let initialState = {
  listMovies: [],
  listStudio: {},
  timeInfo: "",
  dateMovie: moment().format("YYYY/MM/DD"),
  getBooking: {},
  getStudioId: 0,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        listMovies: action.payload,
      };

    case GET_STUIDO:
      return { ...state, listStudio: action.payload };

    case GET_SHOWTIME:
      return { ...state, timeInfo: action.payload };

    case GET_DATE:
      return { ...state, dateMovie: action.payload };

    case GET_BOOKING:
      return { ...state, getBooking: action.payload };

    case GET_STUDIO_ID:
      return { ...state, getStudioId: action.payload };

    default:
      return state;
  }
};

export default moviesReducer;
