import { useNavigate } from "react-router-dom";
import movies from "../../data-dummy/movies";

const Table = () => {
  const navigate = useNavigate();

  return (
    <section className="overflow-x-auto w-full">
      <table className="table text-white text-sm md:text-base lg:text-lg">
        {/* head */}
        <thead>
          <tr className="bg-gray-900 text-white text-sm md:text-base lg:text-lg">
            <th>Judul Film</th>
            <th>Studio</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {movies?.map((index, i) => (
            <tr key={i}>
              {/* <td>
               
              </td> */}
              <td className=" flex items-center space-x-3 ">
                <img src={index.image} alt={index.title} className="h-16 md:h-20 lg:h-32" />
                <span className="truncate w-20 md:w-auto">{index.title}</span>
              </td>
              <td>Studio XXI</td>
              <td>
                <button className="btn btn-info  btn-xs md:btn-sm text-white" onClick={() => navigate("detail-film")}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
