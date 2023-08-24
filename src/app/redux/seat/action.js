import { addBookingApi, bookingListApi } from "../../api/api";
import { ADD_BOOKING, ADD_SEAT, GET_LIST_BOOKING, GET_SEAT } from "./constant";

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

export const addBookingAction = ({ movie, seat, date, studio, showTime }) => {
  return (dispatch) => {
    addBookingApi({ movie, seat, date, studio, showTime }).then((res) =>
      dispatch({
        type: ADD_BOOKING,
        payload: res.data,
      })
    );
  };
};

export const getListBookingsAction = () => {
  return (dispatch) => {
    bookingListApi().then((res) =>
      dispatch({
        type: GET_LIST_BOOKING,
        payload: res.data,
      })
    );
  };
};
