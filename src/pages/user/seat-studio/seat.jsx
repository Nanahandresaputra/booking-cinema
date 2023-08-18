import SeatComp from "../../../components/seat-component/seatComp";
import { seatA, seatB, seatC, seatD } from "../../../data-dummy/seat";

const Seat = () => {
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
            <div className="h-5 w-5 bg-sky-400 rounded-lg" />
            <p className="text-white text-lg">Selected</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-gray-400 rounded-lg" />
            <p className="text-white text-lg">Booked</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <p className="text-white text-xl font-semibold">A</p>
        <div className="grid grid-cols-10 gap-4 w-full">
          {seatA?.map((index, i) => (
            <SeatComp key={i} seat={index} />
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <p className="text-white text-xl font-semibold">B</p>
        <div className="grid grid-cols-10 gap-4 w-full">
          {seatB?.map((index, i) => (
            <SeatComp key={i} seat={index} />
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <p className="text-white text-xl font-semibold">C</p>
        <div className="grid grid-cols-10 gap-4 w-full">
          {seatC?.map((index, i) => (
            <SeatComp key={i} seat={index} />
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <p className="text-white text-xl font-semibold">D</p>
        <div className="grid grid-cols-10 gap-4 w-full">
          {seatD?.map((index, i) => (
            <SeatComp key={i} seat={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seat;
