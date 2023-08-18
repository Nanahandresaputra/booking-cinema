import { GET_MOVIES } from "./constant";

let initialState = {
  listMovies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        listMovies: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
