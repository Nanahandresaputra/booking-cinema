import { ADD_SEAT, GET_SEAT } from "./constant";

export const addSeat = (seat) => {
  return {
    type: ADD_SEAT,
    payload: seat,
  };
};

export const getSeatAction = (seat) => {
  return {
    type: GET_SEAT,
    payload: seat,
  };
};
