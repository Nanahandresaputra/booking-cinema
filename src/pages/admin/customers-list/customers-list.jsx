import { useDispatch, useSelector } from "react-redux";
import BarChartData from "../../../components/chart/barChart";
import { useEffect } from "react";
import { customersListAction } from "../../../app/redux/customers/action";
import LineChartData from "../../../components/chart/lineChart";

const CustomersList = () => {
  const { customersData } = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customersListAction());
  }, [dispatch]);

  //==========================================================================
  // ================== get alanitic perDate =================================

  let groupingPerDate = customersData.result?.reduce((r, i) => {
    r[i.date] = r[i.date] || [];
    r[i.date].push(i);
    return r;
  }, Object.create(null));

  let date = customersData.result?.map((datas) => datas.date);
  let dateFiltered = date?.filter(function (item, pos) {
    return date?.indexOf(item) == pos;
  });
  let group = dateFiltered?.map((datas) => groupingPerDate[datas]);

  let val = group?.map((datas) =>
    datas
      ?.map((dat) => Object.values(dat)?.filter((items) => items === 1).length)
      ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );

  let dailyData = dateFiltered?.map((date, i) => ({
    date,
    "Penonton/Hari": val[i],
  }));

  //==========================================================================
  // =========================================================================

  //==========================================================================
  // ================== get alanitic movie month =============================

  let getTitle = group?.map((index) => index?.map((el) => el.Movie.title));
  let title = [].concat(...(getTitle || []));
  let titleMovies = title?.filter(function (item, pos) {
    return title?.indexOf(item) == pos;
  });

  let getDataMovie = titleMovies?.map((title) =>
    group?.map((index) =>
      index
        ?.filter((data) => data.Movie.title === title)
        ?.map((idx) => Object.values(idx)?.filter((fil) => fil === 1).length)
    )
  );

  let dataPerMovies = getDataMovie?.map((data) =>
    data
      ?.map((index) =>
        index?.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        )
      )
      ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );

  let dataMoviesMonth = titleMovies?.map((title, index) => ({
    title,
    "Penonton/Bulan": dataPerMovies[index],
  }));

  //==========================================================================
  // =========================================================================

  //==========================================================================
  // ================== get alanitic movie perTime ===========================

  // let groupingPerMovie = customersData.result?.reduce((r, i) => {
  //   r[i.Movie.title] = r[i.Movie.title] || [];
  //   r[i.Movie.title].push(i);
  //   return r;
  // }, Object.create(null));

  // const [listTitle, setListTitle] = useState("Insidious: The Red Door");

  // let time1 = customersData.result
  //   ?.filter(
  //     (title) =>
  //       title.Movie.title === listTitle && title.showTime === "10.00-12.00"
  //   )
  //   ?.map((index) => Object.values(index)?.filter((data) => data === 1).length);

  // let time2 = customersData.result
  //   ?.filter(
  //     (title) =>
  //       title.Movie.title === listTitle && title.showTime === "13.00-15.00"
  //   )
  //   ?.map((index) => Object.values(index)?.filter((data) => data === 1).length);
  // let time3 = customersData.result
  //   ?.filter(
  //     (title) =>
  //       title.Movie.title === listTitle && title.showTime === "16.00-18.00"
  //   )
  //   ?.map((index) => Object.values(index)?.filter((data) => data === 1).length);

  // let dataPerTime = titleMovies?.map((date, i) => ({
  //   "10.00-12.00": time1,
  //   "13.00-15.00": time2,
  //   "16.00-18.00": time3,
  // }));

  // console.log(dataPerTime);

  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="space-y-12">
        <h1 className="text-3xl text-white font-semibold text-center">
          Jumlah Penonton Keseluruhan Perhari
        </h1>
        <BarChartData
          dailyData={dailyData}
          title="Penonton/Hari"
          dataKey="date"
        />
      </div>
      <div className="space-y-12">
        <h1 className="text-3xl text-white font-semibold text-center">
          Jumlah Penonton Film Per Satu Bulan
        </h1>
        <LineChartData
          dailyData={dataMoviesMonth}
          title="Penonton/Bulan"
          dataKey="title"
        />
      </div>
      {/* <div className="space-y-12">
        <form>
          <select
            className="select select-bordered select-primary w-full bg-transparent text-white"
            onChange={(e) => setListTitle(e.target.value)}>
            <option
              className="text-black"
              disabled="disabled"
              selected="selected">
              Choose your superpower
            </option>
            {titleMovies?.map((title, index) => (
              <option className="text-black" key={index}>
                {title}
              </option>
            ))}
          </select>
        </form> */}
      {/* <BarChartData
          dailyData={dataPerTime}
          title="10.00-12.00"
          title2="13.00-15.00"
          title3="16.00-18.00"
          dataKey="date"
        /> */}
      {/* </div> */}
    </div>
  );
};

export default CustomersList;
