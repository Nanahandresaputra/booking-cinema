const CardFilm = ({ movies }) => {
  return (
    <section className="relative z-10 card w-44 md:w-52 lg:w-72 bg-black shadow-xl hover:scale-125 transition cursor-pointer">
      <figure>
        <img src={movies.image} alt="Shoes" className="w-full" />
      </figure>
      <div className="flex justify-center">
        <h2 className="card-title text-base md:text-lg lg:text-xl h-14 md:h-16 text-center text-white">
          {movies.title}
        </h2>
      </div>
    </section>
  );
};

export default CardFilm;
