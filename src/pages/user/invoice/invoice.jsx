import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListBookingsAction } from "../../../app/redux/seat/action";
import {
  getInvoiCeSeat,
  getInvoiCode,
} from "../../../app/redux/invoice/action";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const { listBooking } = useSelector((state) => state.seat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBookingsAction());
  }, [dispatch]);

  let listInvoice = listBooking.bookings?.toReversed();
  const navigate = useNavigate();

  const getInvoieDetail = ({ code, seat, url }) => {
    dispatch(getInvoiCode(code));
    dispatch(getInvoiCeSeat(seat));
    navigate(`detail-invoice/${url}`);
  };

  // console.log({ invoiceCode, invoiceSeat });
  return (
    <section
      className="w-full max-w-[1536px] space-y-12 md:space-y-20 flex flex-col items-center justify-center
       ">
      <p className="text-white text-xl font-semibold">
        Username: {listBooking.username}
      </p>
      {listInvoice?.map((index, i) => (
        <div key={i} className="border w-9/12  p-5 flex justify-between">
          <div className=" space-y-5 flex flex-col">
            <p className="text-white">Title: {index.title}</p>
            <p className="text-white">Date: {index.date}</p>
          </div>
          {/* <QRCode value={index.bookingCode} /> */}
          <button
            type="button"
            className="btn btn-info text-white"
            onClick={() =>
              getInvoieDetail({
                code: index.bookingCode,
                seat: index.seat,
                url: `${index.seat}${index.title}`,
              })
            }>
            Detail
          </button>
        </div>
      ))}
    </section>
  );
};

export default Invoice;
