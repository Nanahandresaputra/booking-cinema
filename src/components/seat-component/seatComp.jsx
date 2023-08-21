// import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSeat } from "../../app/redux/seat/action";

const SeatComp = ({ seat, seatsData, label }) => {
  const dispatch = useDispatch();

  const handleBooking = (idx) => {
    dispatch(addSeat(idx));
  };

  const btnStyles = {
    available: "btn btn-success btn-sm md:btn-md lg:btn-lg",
    booked:
      "px-3 h-8 md:px-4 md:h-12 lg:px-6 lg:h-16  text-white bg-gray-300 rounded-lg focus:outline-none inline-flex flex-wrap items-center justify-center gap-2 font-semibold text-sm lg:text-lg",
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-5">
      <p className="text-white lg:text-xl font-semibold">{label}</p>
      <div className="grid grid-cols-10 gap-1 lg:gap-4 w-full">
        {seat?.map((index, i) => (
          <button
            type="button"
            className={`text-white ${
              seatsData.find((data) => data === index)
                ? btnStyles.booked
                : btnStyles.available
            } w-7 md:w-auto`}
            key={i}
            onClick={() => handleBooking(index)}
            disabled={seatsData.find((data) => data === index) ? true : false}>
            {index}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatComp;
