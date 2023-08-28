import { useState } from "react";
import studio from "../../assets/studio.png";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getShowTime } from "../../app/redux/movies/action";
import moment from "moment";

const Accordion = ({ studioName, movieId, time, movieDate }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  const dispatch = useDispatch();

  const handleTime = (timeMovie) => {
    localStorage.setItem("getTime", timeMovie);
    dispatch(getShowTime(timeMovie));
    navigate(`seat/${movieId}`);
  };

  let btnStyles = {
    active: "btn rounded-full btn-error text-white btn-sm md:btn-md",
    disabled:
      "px-4 h-12 text-white bg-gray-300 rounded-full focus:outline-none inline-flex flex-wrap items-center justify-center gap-2 font-semibold text-sm",
  };

  let session1 =
    moment().format("HH") >= moment("10", "hh").hours() &&
    moment(movieDate).format("YYYY/MM/DD") <
      moment().add(1, "days").format("YYYY/MM/DD");
  let session2 =
    moment().format("HH") >= moment("13", "HH").hours() &&
    moment(movieDate).format("YYYY/MM/DD") <
      moment().add(1, "days").format("YYYY/MM/DD");
  let session3 =
    moment().format("HH") >= moment("16", "HH").hours() &&
    moment(movieDate).format("YYYY/MM/DD") <
      moment().add(1, "days").format("YYYY/MM/DD");

  let validateTime = {
    "10.00-12.00": session1,
    "13.00-15.00": session2,
    "16.00-18.00": session3,
  };

  // console.log(moment().format("HH") >== moment("13", "HH").hours());

  return (
    <section className="border bg-gray-900 rounded-xl">
      <div
        className="flex items-center justify-between border-b rounded-xl cursor-pointer"
        onClick={handleOpen}>
        <div className="flex space-x-6 items-center">
          <img src={studio} alt="logo studio" className="h-20 md:h-24" />
          <p className="text-white font-semibold text-lg md:text-xl">
            {studioName}
          </p>
        </div>
        {isOpen === false ? (
          <SlArrowDown className="text-white text-xl me-5" />
        ) : (
          <SlArrowUp className="text-white text-xl me-5" />
        )}
      </div>
      {isOpen === false ? null : (
        <div className="flex space-x-5 ps-5 flex-wrap py-10">
          {time?.map((index, i) => (
            <button
              key={i}
              className={
                validateTime[index] === true
                  ? btnStyles.disabled
                  : btnStyles.active
              }
              onClick={() => handleTime(index)}
              disabled={validateTime[index] === true ? true : false}>
              {index}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Accordion;
