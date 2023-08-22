import { ADD_SEAT } from "./constant";

let initialState = {
  seatsData: [],
};

export const seatReducer = (state = initialState, action) => {
  let index = state.seatsData.indexOf(action.payload);
  switch (action.type) {
    case ADD_SEAT:
      return {
        ...state,
        seatsData:
          index > -1 ? state.seatsData : [...state.seatsData, action.payload],
      };

    default:
      return state;
  }
};
