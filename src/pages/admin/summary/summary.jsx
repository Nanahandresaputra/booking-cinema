import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summaryAction } from "../../../app/redux/movies/action";
import TableSummary from "../../../components/table/tableSummary";

const Summary = () => {
  const { getSummary } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(summaryAction());
  }, [dispatch]);
  return (
    <section className="flex flex-col w-9/12 items-center justify-center max-w-[1536px] space-y-10">
      <h1 className="text-white text-2xl font-semibold">Summary List</h1>
      <TableSummary summary={getSummary.summary} />
    </section>
  );
};

export default Summary;
