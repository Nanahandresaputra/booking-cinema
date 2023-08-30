import { useDispatch, useSelector } from "react-redux";
import ChartCustomer from "../../../components/chart/chart-customer";
import { useEffect } from "react";
import { customersListAction } from "../../../app/redux/customers/action";

const CustomersList = () => {
  const { customersData } = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customersListAction());
  }, [dispatch]);

  // let arr = [];

  // customersData.result?.map((index) => console.log(index.Movie.title));

  return (
    <div>
      <ChartCustomer result={customersData.result} />
    </div>
  );
};

export default CustomersList;
