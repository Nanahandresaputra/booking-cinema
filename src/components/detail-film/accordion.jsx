import { useState } from "react";
import studio from "../../assets/studio.png";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getShowTime } from "../../app/redux/movies/action";

const Accordion = ({ studioName, movieId, time }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  const dispatch = useDispatch();

  const handleTime = (timeMovie) => {
    dispatch(getShowTime(timeMovie));
    navigate(`seat/${movieId}`);
  };

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
              className="btn rounded-full btn-error text-white btn-sm md:btn-md"
              onClick={() => handleTime(index)}>
              {index}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Accordion;
