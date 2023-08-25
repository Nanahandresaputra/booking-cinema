import { GET_INVOICE_CODE, GET_INVOICE_SEAT } from "./constant";

let initialState = {
  invoiceCode: "",
  invoiceSeat: "",
};

export const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INVOICE_CODE:
      return { ...state, invoiceCode: action.payload };

    case GET_INVOICE_SEAT:
      return { ...state, invoiceSeat: action.payload };

    default:
      return state;
  }
};
