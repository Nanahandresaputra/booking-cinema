import { useNavigate } from "react-router-dom";
import movies from "../../../data-dummy/movies";

const DetailAdmin = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-5 space-y-8 lg:space-y-12 max-w-[1536px] md:w-10/12 lg:w-9/12">
      <div className="flex flex-col items-center justify-around lg:justify-start lg:space-x-12 lg:flex-row">
        <div className="flex flex-col items-center space-y-8 w-full">
          <img
            src={movies[0].image}
            className="w-60 md:w-full mt-10 lg:mt-0 object-cover max-h-80"
          />

          <button
            className="btn btn-success text-white  w-full hidden lg:block"
            onClick={() => navigate("update-data")}>
            Edit Data
          </button>
          <h1 className="text-white font-semibold text-lg md:text-2xl lg:hidden">
            {movies[0].title}
            {/* {movies[3].title} */}
          </h1>
          <div className="text-white text-justify font-normal text-sm md:text-base lg:hidden self-start">
            <p>Director: Robin Nana Van versie</p>
            <p>Genre: Action Adventure</p>
          </div>
        </div>

        <div className="space-y-3 lg:w-7/12 text-white font-semibold text-lg">
          <h1 className="hidden lg:block md:text-2xl">{movies[0].title}</h1>
          {/* <h1 className="hidden lg:block md:text-2xl">{movies[3].title}</h1> */}
          <div className="text-white text-justify font-normal text-sm md:text-base hidden lg:block self-start">
            <p>Director: Robin Nana Van versie</p>
            <p>Genre: Action Adventure</p>
          </div>
          <h2 className="md:text-xl">Sinopsis</h2>
          <p className="text-white text-justify font-normal text-base md:text-lg">
            {movies[0].descipt}
            {/* {movies[3].descipt} */}
          </p>
        </div>
        <button
          className="btn btn-success text-white  w-full mt-10 lg:hidden"
          onClick={() => navigate("update-data")}>
          Edit Data
        </button>
      </div>
    </section>
  );
};

export default DetailAdmin;
