import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListBookingsAction } from "../../../app/redux/seat/action";

const Invoice = () => {
  const { listBooking } = useSelector((state) => state.seat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBookingsAction());
  }, [dispatch]);

  let listInvoice = listBooking.bookings?.toReversed();
  return (
    <section
      className="w-full max-w-[1536px] space-y-12 md:space-y-20 flex flex-col items-center justify-center
       ">
      <p className="text-white text-xl font-semibold">
        Username: {listBooking.username}
      </p>
      {listInvoice?.map((index, i) => (
        <div
          className="border w-9/12 space-y-5 flex flex-col justify-center p-5"
          key={i}>
          <p className="text-white">Title: {index.title}</p>
          <p className="text-white">Studio: {index.studio}</p>
          <p className="text-white">Seat: {index.seat} </p>
          <p className="text-white">Date: {index.date}</p>
          <p className="text-white">Show Time: {index.showTime}</p>
          <p className="text-white">Booking Code: {index.bookingCode}</p>
        </div>
      ))}
    </section>
  );
};

export default Invoice;
