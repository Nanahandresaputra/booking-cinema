import moment from "moment/moment";
import Accordion from "../../../components/detail-film/accordion";
import popcorn from "../../../assets/popcorn.svg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getListMovies } from "../../../app/redux/movies/action";
import movies from "../../../data-dummy/movies";

const DetailFIlm = () => {
  const { listMovies } = useSelector((state) => state.movies);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMovies());
  }, [dispatch]);

  let movieDetail = listMovies?.find((movie) => movie.StudioId === parseInt(id));

  let dateNow = moment().format("MMM Do YY");
  return (
    <section className="mx-5 space-y-8 lg:space-y-12 max-w-[1536px] md:w-10/12 lg:w-9/12">
      <div className="flex flex-col items-center justify-around lg:justify-start lg:space-x-12 lg:flex-row">
        <div className="flex flex-col items-center space-y-8 w-full">
          <img
            // src={`data:image/jpeg;base64,${movieDetail?.image}`}
            src={movies[3].image}
            // className="w-40 md:w-60 lg:w-72 mt-10 lg:mt-0"
            className="w-60 md:w-96 lg:w-[400px] 2xl:w-[600px] mt-10 lg:mt-0 object-cover max-h-60"
          />
          <h1 className="text-white font-semibold text-lg md:text-2xl lg:hidden">
            {/* {movieDetail?.title} */}
            {movies[3].title}
          </h1>
          <div className="text-white text-justify font-normal text-sm md:text-base lg:hidden self-start">
            <p>Director: Nana</p>
            <p>Genre: Action Adventure</p>
          </div>
        </div>

        <div className="space-y-3 lg:w-7/12 text-white font-semibold text-lg">
          {/* <h1 className="hidden lg:block md:text-2xl">{movieDetail?.title}</h1> */}
          <h1 className="hidden lg:block md:text-2xl">{movies[3].title}</h1>
          <div className="text-white text-justify font-normal text-sm md:text-base hidden lg:block self-start">
            <p>Director: Nana</p>
            <p>Genre: Action Adventure</p>
          </div>
          <h2 className="md:text-xl">Sinopsis</h2>
          <p className="text-white text-justify font-normal text-base md:text-lg">
            {/* {movieDetail?.description} */}
            {movies[3].descipt}
          </p>
        </div>
      </div>

      <div className="space-y-5 lg:space-y-8">
        <div className=" border-b flex items-center p-3 space-x-5">
          <img src={popcorn} alt="popcorn" className="h-8 md:h-9" />
          <h1 className="text-white font-semibold text-lg md:text-xl">Tiket Available, {dateNow}</h1>
        </div>
        <Accordion movieId={id} />
      </div>
    </section>
  );
};

export default DetailFIlm;
