import { useNavigate } from "react-router-dom";
import Table from "../../../components/table/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListMovies } from "../../../app/redux/movies/action";

const Dashboard = () => {
  const { listMovies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovies());
  }, [dispatch]);

  // console.log(listMovies);
  const navigate = useNavigate();
  return (
    <section className="max-w-[1536px] mt-10 lg:mt-auto w-full md:md:w-10/12 flex flex-col items-center space-y-10">
      <div className="flex justify-around w-full">
        <h1 className="text-white font-semibold text-xl">Dashboard</h1>
        <button
          className="btn btn-success btn-sm lg:btn-md text-white"
          onClick={() => navigate("add-data")}>
          Add Data +
        </button>
      </div>
      <Table listMovies={listMovies} />
    </section>
  );
};

export default Dashboard;
