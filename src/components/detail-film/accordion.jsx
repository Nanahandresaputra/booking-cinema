import { useState } from "react";
import studio from "../../assets/studio.png";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };
  console.log(isOpen);
  return (
    <section className="border bg-gray-900 rounded-xl">
      <div className="flex items-center justify-between border-b rounded-xl cursor-pointer" onClick={handleOpen}>
        <div className="flex space-x-6 items-center">
          <img src={studio} alt="logo studio" className="h-20 md:h-24" />
          <p className="text-white font-semibold text-lg md:text-xl">Studio XXI</p>
        </div>
        {isOpen === false ? <SlArrowDown className="text-white text-xl me-5" /> : <SlArrowUp className="text-white text-xl me-5" />}
      </div>
      {isOpen === false ? null : (
        <div className="flex space-x-5 ps-5 flex-wrap py-10">
          <button className="btn rounded-full btn-error text-white btn-sm md:btn-md">19.20</button>
          <button className="btn rounded-full btn-error text-white btn-sm md:btn-md">19.20</button>
          <button className="btn rounded-full btn-error text-white btn-sm md:btn-md">19.20</button>
        </div>
      )}
    </section>
  );
};

export default Accordion;
