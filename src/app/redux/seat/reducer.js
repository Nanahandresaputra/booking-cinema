import { ADD_SEAT } from "./constant";

let initialState = {
  seatsData: [],
};

export const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEAT:
      return { ...state, seatsData: [...state.seatsData, action.payload] };

    default:
      return state;
  }
};
