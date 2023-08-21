import { useSelector } from "react-redux";
import SeatComp from "../../../components/seat-component/seatComp";
import {
  seatA,
  seatB,
  seatC,
  seatD,
  seatE,
  seatF,
  seatG,
  seatH,
  seatI,
  seatJ,
} from "../../../data-dummy/seat";
const Seat = () => {
  const { seatsData } = useSelector((state) => state.seat);

  let seatStudio = [
    {
      label: "A",
      seat: seatA,
    },
    {
      label: "B",
      seat: seatB,
    },
    {
      label: "C",
      seat: seatC,
    },
    {
      label: "D",
      seat: seatD,
    },
    {
      label: "E",
      seat: seatE,
    },
    {
      label: "F",
      seat: seatF,
    },
    {
      label: "G",
      seat: seatG,
    },
    {
      label: "H",
      seat: seatH,
    },
    {
      label: "I",
      seat: seatI,
    },
    {
      label: "J",
      seat: seatJ,
    },
  ];

  return (
    <section className="flex flex-col space-y-10">
      <h1 className="text-white font-semibold text-2xl text-center">
        Available Seat
      </h1>

      <div className="flex justify-center w-full">
        <div className="flex justify-around items-center border bg-gray-900 rounded-lg py-3 w-9/12">
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-green-400 rounded-lg" />
            <p className="text-white text-lg">Available</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-gray-400 rounded-lg" />
            <p className="text-white text-lg">Booked</p>
          </div>
        </div>
      </div>

      {seatStudio?.map((index, i) => (
        <SeatComp
          key={i}
          seat={index.seat}
          seatsData={seatsData}
          label={index.label}
        />
      ))}

      <div className="flex justify-center w-full">
        <div className="flex justify-between items-center border px-3 bg-gray-900 rounded-lg py-3 w-9/12 text-white text-sm md:text-lg">
          <p>Jumlah: {seatsData.length}</p>
          <p>Harga: Rp. {parseInt(seatsData.length) * 20000}</p>
        </div>
      </div>
    </section>
  );
};

export default Seat;
