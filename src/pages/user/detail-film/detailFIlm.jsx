import moment from "moment/moment";
import Accordion from "../../../components/detail-film/accordion";
import movies from "../../../data-dummy/movies";
import popcorn from "../../../assets/popcorn.svg";

const DetailFIlm = () => {
  let dateNow = moment().format("MMM Do YY");
  return (
    <section className="mx-5 space-y-8 lg:space-y-12 max-w-[1536px] md:w-10/12 lg:w-9/12">
      <div className="flex flex-col items-center justify-around lg:justify-start lg:space-x-12 md:flex-row">
        <div className="flex flex-col items-center space-y-8">
          <img src={movies[1].image} className="w-40 md:w-60 lg:w-72 mt-10 lg:mt-0" />
          <h1 className="text-white font-semibold text-lg md:hidden">{movies[1].title}</h1>
        </div>

        <div className="space-y-3 md:w-7/12 text-white font-semibold text-lg">
          <h1 className="hidden md:block md:text-2xl">{movies[1].title}</h1>
          <h2 className="md:text-xl">Sinopsis</h2>
          <p className="text-white text-justify font-normal text-base md:text-lg">{movies[1].descipt}</p>
        </div>
      </div>

      <div className="space-y-5 lg:space-y-8">
        <div className=" border-b flex items-center p-3 space-x-5">
          <img src={popcorn} alt="popcorn" className="h-8 md:h-9" />
          <h1 className="text-white font-semibold text-lg md:text-xl">Tiket Available, {dateNow}</h1>
        </div>
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </section>
  );
};

export default DetailFIlm;
