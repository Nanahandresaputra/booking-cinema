import { customersListApi } from "../../api/api";
import { GET_CUSTOMER_LIST } from "./constant";

export const customersListAction = () => {
  return (dispatch) => {
    customersListApi().then((res) =>
      dispatch({
        type: GET_CUSTOMER_LIST,
        payload: res.data,
      })
    );
  };
};
