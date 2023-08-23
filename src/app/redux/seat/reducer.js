import { ADD_SEAT, GET_SEAT } from "./constant";

let initialState = {
  seatsData: "",
  getSeatData: "",
};

export const seatReducer = (state = initialState, action) => {
  // let index = state.seatsData.indexOf(action.payload);
  switch (action.type) {
    case ADD_SEAT:
      return {
        ...state,
        seatsData: action.payload,
        // ...state,
        // seatsData:
        //   index > -1
        //     ? state.seatsData.filter((item) => item !== action.payload)
        //     : [...state.seatsData, action.payload],
      };

    case GET_SEAT:
      return { ...state, getSeatData: action.payload };

    default:
      return state;
  }
};
