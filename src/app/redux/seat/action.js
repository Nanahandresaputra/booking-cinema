import { ADD_SEAT } from "./constant";

export const addSeat = (seat) => {
  return {
    type: ADD_SEAT,
    payload: seat,
  };
};
