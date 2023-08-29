import { useDispatch, useSelector } from "react-redux";
import { addSeat } from "../../app/redux/seat/action";
import Swal from "sweetalert2";
import { useState } from "react";

const SeatComp = ({ seat, seatsData, label }) => {
  const dispatch = useDispatch();
  const { getBooking } = useSelector((state) => state.movies);

  let bookedSeat = getBooking?.result?.Seats[0] || {};

  // const obj = seat.reduce((a, v) => ({ ...a, [v]: v }), {});

  const [idxPlus, setIdxPlus] = useState("");
  const [idxMin, setIdxMin] = useState("");
  // const [test, setTest] = useState("");
  // const [test, setTest] = useState("");

  const handleBooking = ({ index, i }) => {
    let indexMin = i - 2;
    let indexPlus = i + 2;

    setIdxPlus(i + 2);
    setIdxMin(i - 2);

    if (seatsData.length > 4) {
      Swal.fire({
        icon: "error",
        title: "Maximal 5",
        text: "Maximal boking kursi tidak boleh lebih dari 5!",
      });
    } else {
      dispatch(addSeat(index));
    }
  };

  console.log(seat);

  const btnStyles = {
    available: "btn btn-success btn-sm",
    selected: "btn btn-info btn-sm",
    booked:
      "px-3 h-8 text-white bg-gray-300 rounded-lg focus:outline-none inline-flex flex-wrap items-center justify-center gap-2 font-semibold text-sm",
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-5 w-full ">
      <p className="text-white lg:text-xl font-semibold w-7">{label}</p>
      <div className=" w-full md:w-11/12">
        <div className="grid grid-cols-20 mb-3 gap-x-12 md:gap-3">
          {seat?.map((index, i) => (
            <button
              type="button"
              className={`text-white ${
                seatsData?.find((data) => data === index)
                  ? btnStyles.selected
                  : bookedSeat[index] === 1 ||
                    seat[idxPlus] === index ||
                    seat[idxMin] === index
                  ? btnStyles.booked
                  : btnStyles.available
              } w-7 md:w-full`}
              key={i}
              onClick={() => handleBooking({ index, i })}
              disabled={
                bookedSeat[index] === 1 ||
                seat[idxPlus] === index ||
                seat[idxMin] === index
                  ? true
                  : false
              }>
              {index}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatComp;
