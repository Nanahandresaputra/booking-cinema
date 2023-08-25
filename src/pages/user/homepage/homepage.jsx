/** @format */

import { useDispatch, useSelector } from "react-redux";
import CardFilm from "../../../components/card-film/cardFilm";
import { Banner } from "../../../components/homepage/homepage_index";
// import InputSearch from "../../../components/input-form/inputSearch";
// import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getListMovies } from "../../../app/redux/movies/action";

const Homepage = () => {
  const { listMovies } = useSelector((state) => state.movies);
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovies());
  }, [dispatch]);

  let moviesActive = listMovies.filter(
    (movies) => movies.Studio.status === "active"
  );
  let moviesSoon = listMovies.filter(
    (movies) => movies.Studio.status === "non-active"
  );

  return (
    <div
      className="w-full max-w-[1536px] space-y-12 md:space-y-32
      ">
      <Banner />
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <InputSearch register={register} />
      </form> */}

      <div className="flex flex-col items-center w-full space-y-8 lg:space-y-14">
        <h1 className="text-white text-2xl font-semibold">Tayang Hari ini</h1>
        <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-y-20 md:w-11/12 xl:w-full xl:ps-10 2xl:ps-0 justify-center md:justify-start">
          {moviesActive.map((index, i) => (
            <CardFilm key={i} movies={index} status="active" />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-full space-y-8 lg:space-y-14">
        <h1 className="text-white text-2xl font-semibold">Coming Soon</h1>
        <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-y-20 md:w-11/12 xl:w-full  xl:ps-10 2xl:ps-0 justify-center md:justify-star">
          {moviesSoon.map((index, i) => (
            <CardFilm key={i} movies={index} status="active" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
