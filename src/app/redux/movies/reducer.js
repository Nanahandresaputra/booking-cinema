import { GET_MOVIES, GET_STUIDO } from "./constant";

let initialState = {
  listMovies: [],
  listStudio: {},
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

    default:
      return state;
  }
};

export default moviesReducer;
