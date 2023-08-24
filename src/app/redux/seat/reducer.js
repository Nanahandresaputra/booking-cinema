import { ADD_BOOKING, ADD_SEAT, GET_LIST_BOOKING, GET_SEAT } from "./constant";

let initialState = {
  seatsData: [],
  getSeatData: "",
  sendDataBooking: {},
  listBooking: {},
};

export const seatReducer = (state = initialState, action) => {
  let index = state.seatsData.indexOf(action.payload);
  switch (action.type) {
    case ADD_SEAT:
      return {
        // ...state,
        // seatsData: action.payload,
        ...state,
        seatsData:
          index > -1
            ? state.seatsData.filter((item) => item !== action.payload)
            : state.seatsData.length > 4
            ? state.seatsData
            : [...state.seatsData, action.payload],
      };

    case GET_SEAT:
      return { ...state, getSeatData: action.payload };

    case ADD_BOOKING:
      return { ...state, sendDataBooking: action.payload };

    case GET_LIST_BOOKING:
      return { ...state, listBooking: action.payload };

    default:
      return state;
  }
};
