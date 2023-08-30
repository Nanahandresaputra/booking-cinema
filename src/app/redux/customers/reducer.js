import { GET_CUSTOMER_LIST } from "./constant";

let initialState = {
  customersData: {},
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_LIST:
      return { ...state, customersData: action.payload };

    default:
      return state;
  }
};

export default customersReducer;
