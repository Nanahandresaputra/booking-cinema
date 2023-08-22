/** @format */

import { useDispatch, useSelector } from "react-redux";
import CardFilm from "../../../components/card-film/cardFilm";
import { Banner } from "../../../components/homepage/homepage_index";
import InputSearch from "../../../components/input-form/inputSearch";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getListMovies } from "../../../app/redux/movies/action";
// import movies from "../../../data-dummy/movies";

const Homepage = () => {
  const { listMovies } = useSelector((state) => state.movies);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovies());
  }, [dispatch]);

  return (
    <div
      className="w-full max-w-[1536px] space-y-12 md:space-y-20
      ">
      <Banner />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputSearch register={register} />
      </form>
      <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-8 lg:gap-y-20 lg:mx-10 xl:mx-0  justify-center">
        {listMovies.map((index, i) => (
          <CardFilm key={i} movies={index} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
