import { useDispatch, useSelector } from "react-redux";
import SeatComp from "../../../components/seat-component/seatComp";
import {
  seatA,
  seatB,
  seatC,
  seatD,
  seatE,
  seatF,
  seatG,
  seatH,
  seatI,
  seatJ,
} from "../../../data-dummy/seat";
import { useEffect } from "react";
import { addBookingMovie } from "../../../app/redux/movies/action";
import { addBookingAction } from "../../../app/redux/seat/action";
import { useNavigate } from "react-router-dom";
const Seat = () => {
  let seatStudio1 = [
    {
      label: "A",
      seat: seatA,
    },
    {
      label: "B",
      seat: seatB,
    },
    {
      label: "C",
      seat: seatC,
    },
    {
      label: "D",
      seat: seatD,
    },
    {
      label: "E",
      seat: seatE,
    },
  ];

  let seatStudio2 = [
    {
      label: "F",
      seat: seatF,
    },
    {
      label: "G",
      seat: seatG,
    },
    {
      label: "H",
      seat: seatH,
    },
    {
      label: "I",
      seat: seatI,
    },
    {
      label: "J",
      seat: seatJ,
    },
  ];

  const { seatsData } = useSelector((state) => state.seat);
  const { timeInfo, dateMovie, listStudio, getStudioId } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addBookingMovie());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleBookings = () => {
    dispatch(
      addBookingAction({
        movie: listStudio?.result?.Movies[0].title,
        showTime: timeInfo,
        date: dateMovie,
        studio: getStudioId,
        seat: seatsData.toString(),
      })
    );
    navigate("/");
    window.location.reload(true);
  };

  return (
    <section className="flex flex-col space-y-10 w-full max-w-[1563px]">
      <h1 className="text-white font-semibold text-2xl text-center">
        Available Seat
      </h1>

      <div className="flex justify-center w-full">
        <div className="flex justify-around items-center border bg-gray-900 rounded-lg py-3 w-9/12">
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-green-400 rounded-lg" />
            <p className="text-white text-lg">Available</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-gray-400 rounded-lg" />
            <p className="text-white text-lg">Booked</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="bg-white border rounded-lg w-52 h-20 flex justify-center items-center">
          <p className="font-semibold text-lg">Stage</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full space-y-12">
        <div className="w-10/12">
          {seatStudio1?.map((index, i) => (
            <SeatComp
              key={i}
              seat={index.seat}
              seatsData={seatsData}
              label={index.label}
            />
          ))}
        </div>
        <div className="w-10/12">
          {seatStudio2?.map((index, i) => (
            <SeatComp
              key={i}
              seat={index.seat}
              seatsData={seatsData}
              label={index.label}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-full space-y-7">
        <div className="flex justify-between items-center border px-3 bg-gray-900 rounded-lg py-3 w-9/12 text-white text-sm md:text-lg">
          <p>Maximal Booking: 5</p>
          <p>Jumlah: {seatsData.length}</p>
        </div>
        <button
          type="button"
          className="btn btn-success text-white w-9/12"
          onClick={handleBookings}>
          Booking Tiket
        </button>
      </div>
    </section>
  );
};

export default Seat;
