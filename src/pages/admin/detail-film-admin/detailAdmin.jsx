import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getListMovies } from "../../../app/redux/movies/action";

const DetailAdmin = () => {
  let { listMovies } = useSelector((state) => state.movies);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovies());
  }, [dispatch]);

  let getDetail = listMovies?.find((data) => data.id === parseInt(id));

  const navigate = useNavigate();
  return (
    <section className="mx-5 space-y-8 lg:space-y-12 max-w-[1536px] md:w-10/12 lg:w-9/12">
      <div className="flex flex-col items-center justify-around lg:justify-start lg:space-x-12 lg:flex-row">
        <div className="flex flex-col items-center space-y-8 w-full">
          <img
            src={`data:image/jpeg;base64,${getDetail?.image}`}
            className="w-60 md:w-full mt-10 lg:mt-0 max-h-96"
          />

          <button
            className="btn btn-success text-white  w-full hidden lg:block"
            onClick={() => navigate(`update-data/${id}`)}>
            Edit Data
          </button>
          <h1 className="text-white font-semibold text-lg md:text-2xl lg:hidden">
            {getDetail?.title}
          </h1>
          <div className="text-white text-justify font-normal text-sm md:text-base lg:hidden self-start">
            <p>Director: {getDetail?.director}</p>
            <p>Genre: {getDetail?.genre}</p>
            <p>Status: {getDetail?.Studio.status}</p>
          </div>
        </div>

        <div className="space-y-3 lg:w-7/12 text-white font-semibold text-lg">
          <h1 className="hidden lg:block md:text-2xl">{getDetail?.title}</h1>
          <div className="text-white text-justify font-normal text-sm md:text-base hidden lg:block self-start">
            <p>Director: {getDetail?.director}</p>
            <p>Genre: {getDetail?.genre}</p>
            <p>Status: {getDetail?.Studio.status}</p>
          </div>
          <h2 className="md:text-xl">Sinopsis</h2>
          <p className="text-white text-justify font-normal text-base md:text-lg">
            {getDetail?.description}
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
