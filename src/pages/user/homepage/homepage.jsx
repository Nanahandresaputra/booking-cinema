/** @format */

import CardFilm from "../../../components/card-film/cardFilm";
import { Banner } from "../../../components/homepage/homepage_index";
import InputSearch from "../../../components/input-form/inputSearch";
import movies from "../../../data-dummy/movies";

const Homepage = () => {
  return (
    <section className="pt-20 lg:pt-32 pb-10 w-screen flex flex-col justify-center items-center">
      <div
        className="w-full max-w-[1536px] space-y-12 md:space-y-20
      ">
        <Banner />
        <form>
          <InputSearch />
        </form>
        <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-8 lg:gap-y-20 lg:mx-10 xl:mx-0  justify-center">
          {movies.map((index, i) => (
            <CardFilm key={i} movies={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
