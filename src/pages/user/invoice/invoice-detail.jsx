import { useDispatch, useSelector } from "react-redux";
import QRCode from "react-qr-code";
import { useEffect } from "react";
import { getListBookingsAction } from "../../../app/redux/seat/action";

const InvoiceDetail = () => {
  const { invoiceCode, invoiceSeat } = useSelector((state) => state.invoice);
  const { listBooking } = useSelector((state) => state.seat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBookingsAction());
  }, [dispatch]);

  let detailBooking = listBooking?.bookings?.find(
    (booking) =>
      booking.bookingCode === invoiceCode && booking.seat === invoiceSeat
  );

  console.log(detailBooking?.title);

  return (
    <section className="flex justify-center items-center">
      <div className="border space-y-5 p-8 rounded-lg">
        <div className="space-y-2">
          <QRCode value={detailBooking?.bookingCode} />
          <p className="text-white text-center">{detailBooking?.bookingCode}</p>
        </div>
        <div className="text-white text-lg space-y-3">
          <p className="space-x-5">
            <span>Title:</span> <span>{detailBooking?.title}</span>
          </p>
          <p className="space-x-3">
            <span>Studio:</span> <span>{detailBooking?.studio}</span>
          </p>

          <p className="space-x-5">
            <span>Date: </span>
            <span>{detailBooking?.date}</span>
          </p>
          <p className="space-x-5">
            <span>Time: </span>
            <span> {detailBooking?.showTime}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvoiceDetail;
