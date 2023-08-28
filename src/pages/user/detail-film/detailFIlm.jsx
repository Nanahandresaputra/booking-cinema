import Accordion from "../../../components/detail-film/accordion";
import popcorn from "../../../assets/popcorn.svg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getDate,
  getListMovies,
  getStudioDetail,
  getStudiooId,
} from "../../../app/redux/movies/action";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DetailFIlm = () => {
  const { listStudio, listMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getStudioDetail({ id }));
    dispatch(getListMovies());
    dispatch(getStudiooId(id));
  }, [dispatch, id]);

  let dataId = listMovies?.find(
    (data) => data?.title === listStudio.result?.Movies[0].title
  );

  // const { dateMovie } = useSelector((state) => state.movies);

  const [movieDate, setMovieDate] = useState(new Date());

  const handleClick = (idx) => {
    let date = moment(idx).format("YYYY/MM/DD");
    dispatch(getDate(date));
    setMovieDate(idx);
  };

  localStorage.setItem("getDate", moment(movieDate).format("YYYY/MM/DD"));
  localStorage.setItem("getMovieTitle", listStudio?.result?.Movies[0].title);
  localStorage.setItem("getStudio", id);

  return (
    <section className="mx-5 space-y-8 lg:space-y-12 max-w-[1536px] md:w-10/12 lg:w-9/12">
      <div className="flex flex-col items-center justify-around lg:justify-start lg:space-x-12 lg:flex-row">
        <div className="flex flex-col items-center space-y-8 w-full">
          <img
            src={`data:image/jpeg;base64,${dataId?.image}`}
            className="w-60 md:w-full mt-10 lg:mt-0 xl:w-9/12 max-h-80"
          />
          <h1 className="text-white font-semibold text-lg md:text-2xl lg:hidden">
            {listStudio?.result?.Movies[0].title}
          </h1>
          <div className="text-white text-justify font-normal text-sm md:text-base lg:hidden self-start">
            <p>Director: {listStudio?.result?.Movies[0].director}</p>
            <p>Genre: {listStudio?.result?.Movies[0].genre}</p>
          </div>
        </div>

        <div className="space-y-3 lg:w-7/12 text-white font-semibold text-lg">
          <h1 className="hidden lg:block md:text-2xl">
            {listStudio?.result?.Movies[0].title}
          </h1>
          <div className="text-white text-justify font-normal text-sm md:text-base hidden lg:block self-start">
            <p>Director: {listStudio?.result?.Movies[0].director}</p>
            <p>Genre: {listStudio?.result?.Movies[0].genre}</p>
          </div>
          <h2 className="md:text-xl">Sinopsis</h2>
          <p className="text-white text-justify font-normal text-base md:text-lg">
            {listStudio?.result?.Movies[0].description}
          </p>
        </div>
      </div>

      <div className="space-y-5 lg:space-y-8">
        <div className=" border-b flex items-center p-3 space-x-5">
          <img src={popcorn} alt="popcorn" className="h-8 md:h-9" />
          <div className="flex space-x-2 items-center">
            <h1 className="text-white font-semibold text-lg md:text-xl">
              Tiket Available,
            </h1>

            <DatePicker
              selected={movieDate}
              minDate={new Date()}
              maxDate={new Date("08-31-2023")}
              onChange={(date) => handleClick(date)}
              className="input input-bordered 
          border border-white bg-transparent text-white w-full cursor-pointer"
            />

            {/* {listStudio.date?.map((index, i) => (
              <p
                key={i}
                className={`text-white font-semibold text-lg p-2 rounded-lg cursor-pointer  md:text-xl ${
                  dateMovie === index ? "bg-red-400" : "bg-transparent"
                }`}
                onClick={() => handleClick(index)}>
                {index === moment().format("YYYY/MM/DD") ? "today" : index}
              </p>
            ))} */}
          </div>
        </div>
        <Accordion
          studioName={listStudio?.result?.name}
          movieDate={movieDate}
          time={listStudio?.showTime}
          movieId={id}
        />
      </div>
    </section>
  );
};

export default DetailFIlm;
