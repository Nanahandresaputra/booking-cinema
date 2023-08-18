const SeatComp = ({ seat }) => {
  const btnStyles = {
    available: "btn btn-success",
    selected: "btn btn-info",
    booked: "px-8 py-3 text-white bg-gray-300 rounded focus:outline-none",
  };

  return (
    <button className={`text-white ${btnStyles.booked}`} disabled={false}>
      {seat}
    </button>
  );
};

export default SeatComp;
