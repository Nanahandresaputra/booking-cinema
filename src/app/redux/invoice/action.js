import { GET_INVOICE_CODE, GET_INVOICE_SEAT } from "./constant";

export const getInvoiCode = (data) => {
  return {
    type: GET_INVOICE_CODE,
    payload: data,
  };
};

export const getInvoiCeSeat = (data) => {
  return {
    type: GET_INVOICE_SEAT,
    payload: data,
  };
};
