import Accordion from "../../../components/detail-film/accordion";
import popcorn from "../../../assets/popcorn.svg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getStudioDetail } from "../../../app/redux/movies/action";
import movies from "../../../data-dummy/movies";
import moment from "moment";

const DetailFIlm = () => {
  // const { listStudio } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getStudioDetail(id));
  }, [dispatch, id]);

  // let listStudio = listMovies?.find(
  //   (movie) => movie.StudioId === parseInt(id)
  // );

  // let listStudio = listStudio.result.name === `Studio ${id}`;

  let date = moment().format("MMM Do YY");
  let moviesIndex = parseInt(id) - 1;

  return (
    <section className="mx-5 space-y-8 lg:space-y-12 max-w-[1536px] md:w-10/12 lg:w-9/12">
      <div className="flex flex-col items-center justify-around lg:justify-start lg:space-x-12 lg:flex-row">
        <div className="flex flex-col items-center space-y-8 w-full">
          <img
            // src={`data:image/jpeg;base64,${listStudio?.result?.Movies[0].image}`}
            src={movies[moviesIndex].image}
            // className="w-60 md:w-96 lg:w-[400px] 2xl:w-[600px] mt-10 lg:mt-0 object-cover max-h-60"
            className="w-60 md:w-full mt-10 lg:mt-0 object-cover max-h-80"
          />
          <h1 className="text-white font-semibold text-lg md:text-2xl lg:hidden">
            {/* {listStudio?.result?.Movies[0].title} */}
            {movies[moviesIndex].title}
          </h1>
          <div className="text-white text-justify font-normal text-sm md:text-base lg:hidden self-start">
            {/* <p>Director: {listStudio?.result?.Movies[0].director}</p>
            <p>Genre: {listStudio?.result?.Movies[0].genre}</p> */}
            <p>Director: Nana</p>
            <p>Genre: Action Adventure</p>
          </div>
        </div>

        <div className="space-y-3 lg:w-7/12 text-white font-semibold text-lg">
          {/* <h1 className="hidden lg:block md:text-2xl">
            {listStudio?.result?.Movies[0].title}
          </h1> */}
          <h1 className="hidden lg:block md:text-2xl">
            {movies[moviesIndex].title}
          </h1>
          <div className="text-white text-justify font-normal text-sm md:text-base hidden lg:block self-start">
            {/* <p>Director: {listStudio?.result?.Movies[0].director}</p>
            <p>Genre: {listStudio?.result?.Movies[0].genre}</p> */}
            <p>Director: Nana</p>
            <p>Genre: Action Adventure</p>
          </div>
          <h2 className="md:text-xl">Sinopsis</h2>
          <p className="text-white text-justify font-normal text-base md:text-lg">
            {/* {listStudio?.result?.Movies[0].description} */}
            {movies[moviesIndex].descipt}
          </p>
        </div>
      </div>

      <div className="space-y-5 lg:space-y-8">
        <div className=" border-b flex items-center p-3 space-x-5">
          <img src={popcorn} alt="popcorn" className="h-8 md:h-9" />
          <h1 className="text-white font-semibold text-lg md:text-xl">
            {/* Tiket Available, {listStudio?.date} */}
            Tiket Available, {date}
          </h1>
        </div>
        <Accordion
          // studioName={listStudio?.result?.name}
          // time={listStudio?.showTime}
          // movieId={id}
          studioName="Studio XXI"
          time="10.00-12.00"
          movieId={id}
        />
      </div>
    </section>
  );
};

export default DetailFIlm;
