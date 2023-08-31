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

  return (
    <div className="space-y-12">
      <h1 className="text-3xl text-white font-semibold text-center">
        Jumlah Penonton Keseluruhan Perhari
      </h1>
      <ChartCustomer result={customersData.result} />
    </div>
  );
};

export default CustomersList;
