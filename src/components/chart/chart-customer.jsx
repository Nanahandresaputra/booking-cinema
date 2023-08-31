// import { allSeat } from "../../data-dummy/seat";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartCustomer = ({ result }) => {
  let res = result?.reduce((r, i) => {
    r[i.date] = r[i.date] || [];
    r[i.date].push(i);
    return r;
  }, Object.create(null));

  let date = result?.map((datas) => datas.date);
  let dateUniq = date?.filter(function (item, pos) {
    return date?.indexOf(item) == pos;
  });
  let group = dateUniq?.map((datas) => res[datas]);

  let val = group?.map((datas) =>
    datas
      ?.map((dat) => Object.values(dat)?.filter((items) => items === 1).length)
      ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );

  let dailyData = dateUniq?.map((date, i) => ({
    date,
    "Penonton/Hari": val[i],
  }));

  // let map = group?.map((datas) => Object.values(datas));

  // let arr2 = group?.map((index) => index?.map((el) => el.Movie.title));
  // let title = [].concat(...arr2);
  // let fill = title?.filter(function (item, pos) {
  //   return title?.indexOf(item) == pos;
  // });

  // console.log(fill);
  // let unniik = arr2?.map((datas) =>
  //   datas?.filter(function (item, pos) {
  //     return datas?.indexOf(item) == pos;
  //   })
  // );

  // array.map((nested) => nested.map((element) => element * 2));

  // let concat = unniik?.map((index) => index?.map((dat) => dat));

  // let movies = concat?.filter(function (item, pos) {
  //   return concat?.indexOf(item) == pos;
  // });
  // console.log(concat);
  return (
    // <section className="w-[1200px] text-white h-full">
    <ResponsiveContainer width={1200} height={600}>
      <BarChart
        width={500}
        height={300}
        data={dailyData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Penonton/Hari" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
    // </section>
  );
};

export default ChartCustomer;
