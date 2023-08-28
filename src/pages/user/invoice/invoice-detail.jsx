import { useDispatch, useSelector } from "react-redux";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { getListBookingsAction } from "../../../app/redux/seat/action";

const InvoiceDetail = () => {
  const { invoiceCode } = useSelector((state) => state.invoice);
  const { listBooking } = useSelector((state) => state.seat);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBookingsAction());
  }, [dispatch]);

  let listInvoice = listBooking?.bookings;

  let res = listInvoice?.reduce((r, i) => {
    r[i.bookingCode] = r[i.bookingCode] || [];
    r[i.bookingCode].push(i);
    return r;
  }, Object.create(null));

  let code = invoiceCode || localStorage.getItem("bookings");

  let find = loading === true ? {} : res[code];

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <section className="flex justify-center items-center">
      {loading === true ? (
        <div className="w-screen h-96 flex items-center justify-center">
          <span className="loading loading-bars loading-lg text-white"></span>
        </div>
      ) : (
        <div className="border space-y-5 p-8 rounded-lg">
          <div className="space-y-2">
            <QRCode value={find[0]?.bookingCode} />
            <p className="text-white text-center">{find[0]?.bookingCode}</p>
          </div>
          <div className="text-white text-lg space-y-3">
            <p className="space-x-5">
              <span>Title:</span> <span>{find[0]?.title}</span>
            </p>
            <p className="space-x-5">
              <span>Seat:</span>
              {find?.map((index, i) => (
                <span key={i}>{index.seat}</span>
              ))}
            </p>
            <p className="space-x-3">
              <span>Studio:</span> <span>{find[0]?.studio}</span>
            </p>

            <p className="space-x-5">
              <span>Date: </span>
              <span>{find[0]?.date}</span>
            </p>
            <p className="space-x-5">
              <span>Time: </span>
              <span> {find[0]?.showTime}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default InvoiceDetail;
