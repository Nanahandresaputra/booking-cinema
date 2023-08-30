import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { allSeat } from "../../data-dummy/seat";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartCustomer = ({ result }) => {
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

  ChartJS.defaults.color = "white";
  ChartJS.defaults.borderColor = "white";

  var res = result?.reduce((r, i) => {
    r[i.date] = r[i.date] || [];
    r[i.date].push(i);
    return r;
  }, Object.create(null));

  // allSeat?.map((index) => console.log(res));

  // setTimeout(() => {
  //   let date = Object.keys(res);
  //   let arr = date?.map((index) => res[index]);
  //   // arr?.map((index) => console.log(index));

  //   console.log(arr);
  // }, 1000);

  //   setTimeout(() => {

  // }, 1500)

  let ar = result?.map((index) => index.date);

  setTimeout(() => {
    let test = result?.map((index) => {
      const seatTotal = 200;
      result[index].seatTotal = seatTotal;
    });

    console.log(test);
  }, 1000);

  let unik = ar?.filter(function (item, pos) {
    return ar?.indexOf(item) == pos;
  });

  // let k = result?.map((index) => index);

  // setTimeout(() => {
  //   let getData = unik?.map((index) => res[index]);
  //   console.log(getData);
  // }, 1000);

  // console.log(unik.map((index) => res[index].length));

  const data = {
    // labels: unik?.map((index) => index),
    datasets: [
      {
        label: "Dataset 1",
        data: Data.map((index) => index.userGain),
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(20, 72, 122, 8)"],
        color: "white",
      },
    ],
  };

  return (
    <section className="w-[1200px] h-80 text-white">
      <Bar data={data} options={{ maintainAspectRatio: false }} />
    </section>

    // <section className="overflow-x-auto w-full">
    //   <table className="table text-white text-sm md:text-base lg:text-lg">
    //     <thead>
    //       <tr className="bg-gray-900 text-white text-sm md:text-base lg:text-lg">
    //         <th>Judul Film</th>
    //         <th>Studio</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {listMovies?.map((index, i) => (
    //         <tr key={i}>
    //           <td className=" flex items-center space-x-3 ">
    //             <img
    //               src={`data:image/jpeg;base64,${index.image}`}
    //               alt={index.title}
    //               className="w-10 h-16 md:w-14 md:h-20 lg:w-24 lg:h-32 object-cover"
    //             />
    //             <span className="truncate w-20 md:w-auto">{index.title}</span>
    //           </td>
    //           <td>Studio {index.StudioId}</td>
    //           <td>
    //             <button
    //               className="btn btn-info  btn-xs md:btn-sm text-white"
    //               onClick={() => navigate(`detail-film/${index.id}`)}>
    //               Detail
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </section>
  );
};

export default ChartCustomer;
