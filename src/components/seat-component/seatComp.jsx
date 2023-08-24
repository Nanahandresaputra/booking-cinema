import { useDispatch, useSelector } from "react-redux";
import { addSeat } from "../../app/redux/seat/action";

const SeatComp = ({ seat, seatsData, label }) => {
  const dispatch = useDispatch();
  const { getBooking } = useSelector((state) => state.movies);

  let bookedSeat = getBooking?.result?.Seats[0] || {};
  const handleBooking = (idx) => {
    dispatch(addSeat(idx));
  };

  const btnStyles = {
    available: "btn btn-success btn-sm",
    selected: "btn btn-info btn-sm",
    booked:
      "px-3 h-8 text-white bg-gray-300 rounded-lg focus:outline-none inline-flex flex-wrap items-center justify-center gap-2 font-semibold text-sm",
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-5 ">
      <p className="text-white lg:text-xl font-semibold w-7">{label}</p>
      <div className="w-11/12">
        <div className="grid grid-cols-20 mb-3 gap-3">
          {seat?.map((index, i) => (
            <button
              type="button"
              className={`text-white ${
                seatsData?.find((data) => data === index)
                  ? btnStyles.selected
                  : bookedSeat[index] === 1
                  ? btnStyles.booked
                  : btnStyles.available
              } w-7 md:w-full`}
              key={i}
              onClick={() => handleBooking(index)}
              disabled={bookedSeat[index] === 1 ? true : false}>
              {index}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatComp;
