import { Link, useNavigate } from "react-router-dom";

const CardFilm = ({ movies }) => {
  const navigate = useNavigate();

  const toDetail = (movieId) => {
    navigate(`detail-film/${movieId}`);
    window.scroll({ top: 0 });
  };

  return (
    <section className="relative card z-10 w-44 md:w-52 lg:w-60 2xl:w-72 shadow-xl cursor-pointer group">
      {/* <Link to={`detail-film/${movies.StudioId}`}> */}
      <Link to={`detail-film/${movies.id}`}>
        <figure className="rounded-xl ">
          <img
            src={`data:image/jpeg;base64,${movies.image}`}
            // src={movies.image}
            alt="Shoes"
            className="w-full h-64 lg:h-80 2xl:h-96 object-cover"
          />
        </figure>
        <div className="lg:hidden flex justify-center">
          <h2 className="card-title text-base md:text-lg lg:text-xl h-14 md:h-16 text-center text-white">
            {movies.title}
          </h2>
        </div>
      </Link>
      <div className="absolute hidden lg:flex flex-col items-center justify-center rounded-xl opacity-0 w-full bottom-0 h-1 group-hover:h-full group-hover:opacity-100 transition-all bg-black bg-opacity-60 space-y-6">
        <h1 className="text-white text-xl mx-5 text-center font-semibold">
          {movies.title}
        </h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => toDetail(movies.StudioId)}>
          {/* // onClick={() => toDetail(movies.id)}> */}
          Beli Tiket
        </button>
      </div>
    </section>
  );
};

export default CardFilm;
